'use client';

import { useState } from 'react';

export default function ContactFormSimple() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    try {
      // Formspree endpoint - replace with your own
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
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
        }),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
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
            placeholder="Enter your phone number"
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
        <button
          type="submit"
          disabled={status === 'loading'}
          className={`w-full inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-sm font-bold rounded uppercase text-white ${
            status === 'loading' ? 'bg-gray-400' : 'bg-[#E9C883] hover:bg-[#d4b571]'
          } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#E9C883] disabled:opacity-50 transition-colors`}
        >
          {status === 'loading' ? 'SENDING...' : 'SEND MESSAGE'}
        </button>
      </div>
      {status === 'success' && (
        <p className="mt-2 text-sm text-green-600">Message sent successfully!</p>
      )}
      {status === 'error' && (
        <p className="mt-2 text-sm text-red-600">Failed to send message. Please try again.</p>
      )}
    </form>
  );
}