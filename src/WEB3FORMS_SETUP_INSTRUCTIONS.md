# Web3Forms Setup Instructions for EVOX India

## Overview
Your website now has **3 forms** integrated with Web3Forms, all sending to **17goel@gmail.com**:

1. **Contact Form** (`/pages/ContactPage.tsx`)
2. **Get Quote Form** (`/pages/GetQuotePage.tsx`)
3. **Newsletter Subscription** (`/components/Footer.tsx`)

## Why Web3Forms?
✅ **250 FREE submissions per month** (no credit card required)
✅ No backend code needed  
✅ Spam protection included  
✅ Professional email notifications  
✅ Simple setup (just one access key)

---

## Setup Steps (Takes 5 minutes!)

### Step 1: Create Free Web3Forms Account

1. Go to **[https://web3forms.com](https://web3forms.com)**
2. Click **"Get Started"** or **"Sign Up Free"**
3. Sign up with your email (17goel@gmail.com or any email)
4. Verify your email address

### Step 2: Create Access Key

1. After logging in, you'll see your **Dashboard**
2. Click **"Create New Access Key"** or **"+ New Form"**
3. Give it a name: **"EVOX India Website Forms"**
4. You'll get an **Access Key** that looks like: `a1b2c3d4-e5f6-7g8h-9i0j-k1l2m3n4o5p6`
5. **Copy this key** - you'll need it in the next step

### Step 3: Update Your Code

You need to replace `YOUR_WEB3FORMS_ACCESS_KEY` with your actual access key in **3 files**:

#### File 1: Contact Form
**Location:** `/pages/ContactPage.tsx`  
**Line:** Around line 26

Find this line:
```typescript
access_key: 'YOUR_WEB3FORMS_ACCESS_KEY', // Replace with your Web3Forms access key
```

Replace with:
```typescript
access_key: 'a1b2c3d4-e5f6-7g8h-9i0j-k1l2m3n4o5p6', // Your actual key
```

---

#### File 2: Get Quote Form
**Location:** `/pages/GetQuotePage.tsx`  
**Line:** Around line 59

Find this line:
```typescript
access_key: 'YOUR_WEB3FORMS_ACCESS_KEY', // Replace with your Web3Forms access key
```

Replace with:
```typescript
access_key: 'a1b2c3d4-e5f6-7g8h-9i0j-k1l2m3n4o5p6', // Your actual key
```

---

#### File 3: Newsletter Subscription (Footer)
**Location:** `/components/Footer.tsx`  
**Line:** Around line 20

Find this line:
```typescript
access_key: 'YOUR_WEB3FORMS_ACCESS_KEY', // Replace with your Web3Forms access key
```

Replace with:
```typescript
access_key: 'a1b2c3d4-e5f6-7g8h-9i0j-k1l2m3n4o5p6', // Your actual key
```

---

### Step 4: Test Your Forms!

1. **Test Contact Form:**
   - Navigate to your Contact page
   - Fill out the form with test data
   - Click "Send Message"
   - Check **17goel@gmail.com** for the email

2. **Test Get Quote Form:**
   - Navigate to the Get Quote page
   - Select a product, fill in details
   - Click "Submit Quote Request"
   - Check **17goel@gmail.com** for the email

3. **Test Newsletter Subscription:**
   - Scroll down to the footer on any page
   - Enter an email address
   - Click "Subscribe"
   - Check **17goel@gmail.com** for the subscription email

---

## What Emails Will Look Like

### Contact Form Email
```
Subject: Contact Form: [User's Subject]

From: John Doe
Email: john@example.com
Subject: Product Inquiry

Message:
Hi, I would like to know more about your products...
```

### Quote Request Email
```
Subject: Quote Request from EVOX India Website

Quote Request Details:

Name: John Doe
Email: john@example.com
Phone: +91 98765 43210
Company: ABC Corp
City: Mumbai

Selected Products: EVOX X1 Mini, XC-19 Camera
Quantity: 11-50 units

Additional Requirements:
Need urgent delivery by next week...
```

### Newsletter Subscription Email
```
Subject: Newsletter Subscription - EVOX India

New newsletter subscription from: john@example.com
```

---

## Configuration Tips

### Change Recipient Email
To send emails to a different address (like sales@evoxindia.in):

1. Go to Web3Forms Dashboard
2. Click on your Access Key settings
3. Under **"Email Settings"**, change the recipient email
4. Or keep `to_email: '17goel@gmail.com'` in the code

### Enable Spam Protection
In your Web3Forms dashboard:
1. Go to Access Key settings
2. Enable **"Google reCAPTCHA v3"** (optional but recommended)
3. Add your website domain

### Email Notifications
Web3Forms automatically sends:
- ✅ Email to you (17goel@gmail.com) with form data
- ✅ Optional auto-reply to the user (configure in dashboard)

---

## Form Features Included

✅ **Loading States** - Buttons show "Sending..." during submission  
✅ **Success Notifications** - Toast messages on successful submission  
✅ **Error Handling** - User-friendly error messages  
✅ **Form Reset** - Forms clear after successful submission  
✅ **Validation** - All required fields are validated  
✅ **Disabled State** - Prevents double submissions  

---

## Monitoring & Analytics

### View Submissions in Dashboard
1. Login to [web3forms.com](https://web3forms.com)
2. Click on your Access Key
3. View all form submissions with:
   - Date & time
   - Form data
   - IP address
   - User agent

### Monthly Limits
- **Free Plan:** 250 submissions/month
- If you exceed the limit, consider upgrading or using multiple access keys

---

## Troubleshooting

### ❌ Emails not arriving?
1. **Check spam folder** in 17goel@gmail.com
2. **Verify access key** is correct in all 3 files
3. **Check browser console** for errors (Press F12)
4. **Verify email** in Web3Forms dashboard settings

### ❌ "Failed to send" error?
1. Check your internet connection
2. Verify the access key is valid
3. Check Web3Forms status page: [status.web3forms.com](https://status.web3forms.com)

### ❌ Forms not working?
1. Make sure you saved all 3 files after adding the access key
2. Clear browser cache and try again
3. Check console for JavaScript errors

---

## Upgrade Options (If Needed)

If you need more than 250 submissions/month:

| Plan | Submissions | Price |
|------|-------------|-------|
| Free | 250/month | $0 |
| Starter | 1,000/month | $5/month |
| Pro | 5,000/month | $15/month |
| Business | 25,000/month | $50/month |

Visit: [https://web3forms.com/pricing](https://web3forms.com/pricing)

---

## Security Notes

✅ **Access Key is Safe** - It's designed to be used in frontend code  
✅ **Spam Protection** - Web3Forms has built-in spam filtering  
✅ **Rate Limiting** - Prevents abuse from single IP addresses  
✅ **No PII Storage** - Form data is only emailed, not stored permanently  

---

## Support

- **Web3Forms Documentation:** [https://docs.web3forms.com](https://docs.web3forms.com)
- **Support Email:** support@web3forms.com
- **Status Page:** [https://status.web3forms.com](https://status.web3forms.com)

---

## Quick Checklist

- [ ] Created Web3Forms account
- [ ] Got access key from dashboard
- [ ] Updated ContactPage.tsx with access key
- [ ] Updated GetQuotePage.tsx with access key
- [ ] Updated Footer.tsx with access key
- [ ] Tested Contact form
- [ ] Tested Get Quote form
- [ ] Tested Newsletter subscription
- [ ] Verified emails arrive at 17goel@gmail.com

---

## All Done! 🎉

Your EVOX India website now has fully functional email forms. All submissions will be sent to **17goel@gmail.com**.

Once you're ready for production, you can:
1. Change the recipient email to your official business email
2. Enable reCAPTCHA for extra spam protection
3. Customize email templates in Web3Forms dashboard
