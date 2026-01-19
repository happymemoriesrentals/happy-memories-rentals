# 🚀 Quick Start Guide - Happy Memories Rentals Website

## Immediate Steps to Get Your Website Running

### Step 1: View Your Website Now! ✅

Your website is ready to view! Simply open `index.html` in any web browser:

1. Navigate to the project folder
2. Double-click `index.html`
3. Your website will open in your default browser

**All 5 pages are functional:**
- ✅ Home page (index.html)
- ✅ Rentals & Booking page (rentals.html)
- ✅ Gallery page (gallery.html)
- ✅ About Us page (about.html)
- ✅ Contact page (contact.html)

---

## Step 2: Activate Email Forms (5 minutes) 📧

Your booking and contact forms need Formspree to work. Here's how:

### A. Sign up for Formspree (Free)
1. Go to: https://formspree.io/
2. Click "Get Started"
3. Sign up with your email

### B. Create Forms
1. Create TWO forms in Formspree:
   - **Form 1:** "Booking Form" (for rentals.html)
   - **Form 2:** "Contact Form" (for contact.html)
2. Copy each form's endpoint URL (looks like: `https://formspree.io/f/xyzabc123`)

### C. Update Your Code
1. Open `assets/js/main.js` in any text editor
2. Find line **~145** - Replace `YOUR_FORM_ID` with your **booking form** ID
3. Find line **~151** - Replace `YOUR_FORM_ID` with your **contact form** ID
4. Save the file

**Example:**
```javascript
// BEFORE:
const formspreeUrl = 'https://formspree.io/f/YOUR_FORM_ID';

// AFTER:
const formspreeUrl = 'https://formspree.io/f/xyzabc123';
```

✅ **Done!** Your forms will now send emails!

---

## Step 3: Customize Your Information (10 minutes) ✏️

### Update Contact Details
Open `contact.html` and update:
- **Line 38:** Your email address
- **Line 39:** Your phone number
- **Line 40:** Your service area/city
- **Line 41:** Your business hours

### Add Social Media Links
Replace placeholder social links in **ALL 5 HTML files**:
- Find: `https://www.instagram.com`
- Replace with: Your actual Instagram URL
- Find: `https://www.facebook.com`
- Replace with: Your actual Facebook URL

---

## Step 4: Add Your Photos (Optional) 📸

### For Gallery Page:
1. Add your party photos to `assets/images/` folder
2. Open `gallery.html`
3. Replace emoji placeholders with:
```html
<img src="assets/images/your-photo.jpg" alt="Party description">
```

### For Rental Items:
Add actual product photos to `assets/images/` and update `rentals.html` image sections.

---

## Step 5: Test Everything ✅

### Test Locally:
- [ ] Navigate through all 5 pages
- [ ] Test mobile menu (resize browser window)
- [ ] Fill out and submit booking form
- [ ] Fill out and submit contact form
- [ ] Check quantity selectors calculate total price

### Check Email:
- [ ] Verify you receive booking form submissions
- [ ] Verify you receive contact form submissions

---

## 🌐 Ready to Go Live?

### Option 1: GitHub Pages (Recommended - Free & Easy)
1. Create GitHub account (if you don't have one)
2. Create new repository: "happy-memories-rentals"
3. Upload all your files
4. Go to Settings → Pages
5. Select "main" branch, click Save
6. Your site will be live at: `https://[your-username].github.io/happy-memories-rentals`

### Option 2: Netlify (Easiest - Free)
1. Sign up at: https://netlify.com
2. Drag & drop your entire project folder
3. Site goes live instantly with free URL
4. Optional: Connect custom domain

### Option 3: Buy a Domain & Hosting
Popular options:
- **Namecheap** - Domain + hosting
- **Bluehost** - WordPress alternative
- **GoDaddy** - Traditional hosting

Upload all files via FTP using FileZilla or hosting control panel.

---

## 📋 Customization Checklist

Before launching, make sure you've:

- [ ] Set up Formspree forms
- [ ] Updated contact information
- [ ] Added social media links
- [ ] Tested all forms
- [ ] Checked mobile responsiveness
- [ ] Added real photos (optional but recommended)
- [ ] Updated business hours and service area
- [ ] Tested on multiple devices

---

## 🎨 Want to Change Colors?

Open `assets/css/style.css` and edit lines 6-10:

```css
:root {
    --primary-color: #ff6b9d;      /* Main pink - change to any color! */
    --secondary-color: #ffd93d;    /* Yellow accent */
    --accent-color: #6bcf7f;       /* Green accent */
}
```

Try these color schemes:
- **Blue & Gold:** `#4a90e2` and `#f5a623`
- **Purple & Pink:** `#9b59b6` and `#e91e63`
- **Teal & Orange:** `#1abc9c` and `#e67e22`

---

## 💡 Quick Tips

1. **Mobile Testing:** Resize your browser or use Chrome DevTools (F12 → Toggle Device Toolbar)
2. **Forms Not Working?** Check browser console (F12) for error messages
3. **Need Help?** Check `README-SETUP.md` for detailed troubleshooting
4. **Keep it Simple:** Don't overcomplicate - the site is designed to be easy to maintain!

---

## 🎉 You're All Set!

Your professional party rental website is ready to start bringing in bookings!

**Next Steps:**
1. Test locally ✅
2. Activate forms ✅
3. Customize content ✅
4. Deploy online ✅
5. Share with customers! 🎈

---

**Questions?** Review the full `README-SETUP.md` for detailed information.

**Happy Memories Rentals** - Where Every Celebration Becomes a Happy Memory! 🎈
