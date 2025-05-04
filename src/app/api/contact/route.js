import { NextResponse } from 'next/server';

// Your target email address
// const targetEmail = 'rapsodi@rapsodidekor.com'; 
// The 'from' address needs to be a verified domain in Resend 
// or use 'onboarding@resend.dev' for testing/initial setup.
// const fromEmail = 'Contact Form <onboarding@resend.dev>'; 

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Basic validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // --- Simulate Success --- 
    console.log('Contact form submitted (Email sending disabled):', body);
    // Return a success response even though no email was sent
    return NextResponse.json({ message: 'Form submitted successfully (email sending disabled)' }, { status: 200 });

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
