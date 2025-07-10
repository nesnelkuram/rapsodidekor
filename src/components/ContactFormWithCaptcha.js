'use client';

import { useState, useRef } from 'react';
import { useLanguage } from '@/i18n/LanguageContext';
import Script from 'next/script';

export default function ContactFormWithCaptcha() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [status, setStatus] = useState('');
  const [responseMessage, setResponseMessage] = useState('');
  const [captchaToken, setCaptchaToken] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCaptchaChange = (token) => {
    setCaptchaToken(token);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!captchaToken) {
      setStatus('error');
      setResponseMessage('Please complete the CAPTCHA');
      return;
    }

    setStatus('loading');
    setResponseMessage('');

    try {
      const response = await fetch('https://formspree.io/f/mrbkwnpy', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          _replyto: formData.email,
          _subject: `New contact from ${formData.name}`,
          'g-recaptcha-response': captchaToken,
        }),
      });

      if (response.ok) {
        setStatus('success');
        setResponseMessage('Message sent successfully!');
        setFormData({ name: '', email: '', phone: '', message: '' });
        setCaptchaToken('');
        // Reset reCAPTCHA
        if (window.grecaptcha) {
          window.grecaptcha.reset();
        }
      } else {
        setStatus('error');
        setResponseMessage('Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setStatus('error');
      setResponseMessage('An error occurred. Please try again later.');
    }
  };

  return (
    <>
      <Script
        src="https://www.google.com/recaptcha/api.js"
        strategy="lazyOnload"
      />
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block text-xs font-semibold text-gray-700 uppercase mb-2">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Enter your name*"
              className="block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#E9C883] focus:border-[#E9C883] placeholder-gray-400"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-xs font-semibold text-gray-700 uppercase mb-2">Phone Number</label>
            <input
              type="tel"
              name="phone"
              id="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number*"
              className="block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#E9C883] focus:border-[#E9C883] placeholder-gray-400"
            />
          </div>
        </div>
        <div>
          <label htmlFor="email" className="block text-xs font-semibold text-gray-700 uppercase mb-2">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Enter your email*"
            className="block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#E9C883] focus:border-[#E9C883] placeholder-gray-400"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-xs font-semibold text-gray-700 uppercase mb-2">Your Message</label>
          <textarea
            name="message"
            id="message"
            rows={6}
            value={formData.message}
            onChange={handleChange}
            required
            placeholder="Enter your message here..."
            className="block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#E9C883] focus:border-[#E9C883] placeholder-gray-400"
          ></textarea>
        </div>
        <div>
          {/* Google reCAPTCHA */}
          <div
            className="g-recaptcha mb-4"
            data-sitekey="YOUR_RECAPTCHA_SITE_KEY"
            data-callback={handleCaptchaChange}
          ></div>
          <button
            type="submit"
            disabled={status === 'loading' || !captchaToken}
            className={`w-full inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-sm font-bold rounded uppercase text-white ${
              status === 'loading' || !captchaToken ? 'bg-gray-400' : 'bg-[#E9C883] hover:bg-[#d4b571]'
            } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#E9C883] disabled:opacity-50 transition-colors`}
          >
            {status === 'loading' ? 'SENDING...' : 'SEND MESSAGE'}
          </button>
        </div>
        {responseMessage && (
          <p className={`mt-2 text-sm ${status === 'success' ? 'text-green-600' : 'text-red-600'}`}>
            {responseMessage}
          </p>
        )}
      </form>
    </>
  );
}