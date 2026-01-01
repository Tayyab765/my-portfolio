# EmailJS Setup Instructions

## Step 1: Create EmailJS Account
1. Go to https://www.emailjs.com/
2. Sign up for a free account (200 emails/month)

## Step 2: Add Email Service
1. Go to Email Services: https://dashboard.emailjs.com/admin
2. Click "Add New Service"
3. Choose your email provider (Gmail recommended)
4. Follow the connection steps
5. Copy your **Service ID**

## Step 3: Create Email Template
1. Go to Email Templates: https://dashboard.emailjs.com/admin/templates
2. Click "Create New Template"
3. Use this template content:

**Template Name:** Portfolio Contact Form

**Subject:** {{subject}}

**Content:**
```
New message from your portfolio website!

From: {{from_name}}
Email: {{from_email}}

Subject: {{subject}}

Message:
{{message}}

---
This message was sent via your portfolio contact form.
```

4. Copy your **Template ID**

## Step 4: Get Public Key
1. Go to Account: https://dashboard.emailjs.com/admin/account
2. Copy your **Public Key** (formerly called User ID)

## Step 5: Configure Environment Variables
Open `.env.local` and replace the placeholder values:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
```

## Step 6: Restart Development Server
```bash
npm run dev
```

## Testing
1. Fill out the contact form on your website
2. Click "Send Message"
3. Check your email inbox (attiqtayyab543@gmail.com)

## Important Notes
- Emails will be sent TO: attiqtayyab543@gmail.com
- Free tier: 200 emails/month
- Don't commit `.env.local` to git (already in .gitignore)
- For production (Vercel), add these environment variables in your project settings

## Troubleshooting
If emails aren't sending:
1. Check browser console for errors
2. Verify all 3 environment variables are set correctly
3. Ensure EmailJS service is connected properly
4. Check EmailJS dashboard for delivery logs
