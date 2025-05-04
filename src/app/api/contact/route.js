import { Resend } from 'resend';
import { NextResponse } from 'next/server';

// Initialize Resend with API key from environment variables
// IMPORTANT: Create a .env.local file in your project root and add: 
// RESEND_API_KEY=your_actual_resend_api_key
const resend = new Resend(process.env.RESEND_API_KEY);

// Your target email address
const targetEmail = 'rapsodi@rapsodidekor.com';
// The 'from' address needs to be a verified domain in Resend 
// or use 'onboarding@resend.dev' for testing/initial setup.
const fromEmail = 'Contact Form <onboarding@resend.dev>'; // CHANGE THIS if you verify a domain

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Basic validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: fromEmail, 
      to: [targetEmail], 
      subject: `Contact Form: ${subject}`, 
      reply_to: email, // Set reply-to as the user's email
      html: `
        <h1>New Contact Form Submission</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p> 
      `,
      // Alternatively, use text format:
      // text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}`,
    });

    // Handle Resend errors
    if (error) {
      console.error('Resend Error:', error);
      return NextResponse.json({ error: 'Failed to send email', details: error.message }, { status: 500 });
    }

    // Success
    console.log('Email sent successfully:', data);
    return NextResponse.json({ message: 'Email sent successfully!', dataId: data?.id }, { status: 200 });

  } catch (err) {
    console.error('API Route Error:', err);
    // Handle potential JSON parsing errors or other unexpected errors
    let errorMessage = 'An unexpected error occurred.';
    if (err instanceof Error) {
        errorMessage = err.message;
    }
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
