import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Hedef e-posta adresini tanımla
const targetEmail = 'rapsodi@rapsodidekor.com';

export async function POST(request) {
  try {
    // Parse the request body to get form data
    const { name, email, phone, message } = await request.json();

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // API anahtarını kontrol et
    if (!process.env.RESEND_API_KEY) {
      console.error('Resend API anahtarı eksik. Environment değişkenlerini kontrol edin.');
      return NextResponse.json(
        { error: 'E-posta gönderilemedi: Sunucu yapılandırma hatası' },
        { status: 500 }
      );
    }

    // Resend'i sadece API anahtarı olduğunda ve gerçek bir istek sırasında başlat
    const resend = new Resend(process.env.RESEND_API_KEY);
    
    // Send the email using Resend
    const { data, error } = await resend.emails.send({
      from: 'Rapsodi Dekor <onboarding@resend.dev>', // Replace with your verified domain later
      to: [targetEmail], // Send to the specified target email
      reply_to: email, // Set the reply-to address to the sender's email
      subject: `New Contact Form Message from ${name}`,
      html: `
        <h1>New Contact Form Submission</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <hr>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    });

    // Check if there was an error sending the email
    if (error) {
      console.error('Resend API Error:', error);
      return NextResponse.json({ error: 'Failed to send email', details: error.message }, { status: 500 });
    }

    // If email sent successfully
    console.log('Email sent successfully:', data);
    return NextResponse.json({ success: true, message: 'Email sent successfully!' }, { status: 200 });

  } catch (err) {
    // Catch any other errors during processing
    console.error('API Route Error:', err);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
