# Contact Form Setup Guide

## Bot Protection Added! 🤖🚫

The contact form now has TWO levels of bot protection:

### 1. Honeypot Field (Already Active)
- Invisible field that only bots will fill
- No setup needed - it's working now!

### 2. Google reCAPTCHA (Optional - Stronger Protection)
If you want even stronger protection:
1. Go to https://www.google.com/recaptcha/admin
2. Register your site (rapsodidekor.com)
3. Get your Site Key
4. Replace YOUR_RECAPTCHA_SITE_KEY in ContactFormWithCaptcha.js
5. Add the Secret Key to Formspree settings

## Quick Setup with Formspree (Recommended - 2 minutes)

1. Go to https://formspree.io/
2. Sign up for free account
3. Click "New Form"
4. Enter your email: rapsodi@rapsodidekor.com
5. Copy your form ID (looks like: f/xyzabc123)
6. Replace YOUR_FORM_ID in the contact form code

That's it! No complex authentication needed.

## Alternative Options

### Web3Forms (5 minutes)
1. Visit https://web3forms.com/
2. Enter rapsodi@rapsodidekor.com
3. Get your access key instantly
4. No signup required

### EmailJS (Complex - Not Recommended)
- Requires Gmail OAuth setup
- Need to enable Gmail API
- Complex authentication process

## Current Setup Status
- ✅ Contact form UI ready
- ✅ Form styled to match your design
- ⏳ Waiting for Formspree form ID
- 📧 Emails will go to: rapsodi@rapsodidekor.com