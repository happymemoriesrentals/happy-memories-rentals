# Happy Memories Rentals Website

A professional multi-page website for Happy Memories Rentals - a party rental business specializing in chairs, tables, and themed decorations for family events and children's parties.

## 🎉 Features

- **Multi-page website** with clean navigation
- **Responsive design** - works on desktop, tablet, and mobile
- **Online booking system** with quantity selectors and form submission
- **Gallery page** for showcasing past events
- **Contact forms** with email submission via Formspree
- **Family-friendly design** with celebratory color palette
- **Easy to maintain** - simple HTML, CSS, and JavaScript

## 📁 Project Structure

```
/
├── index.html              # Home page
├── rentals.html            # Rentals & booking page (most important)
├── gallery.html            # Photo gallery
├── about.html              # About us page
├── contact.html            # Contact page with form
├── assets/
│   ├── css/
│   │   └── style.css      # Main stylesheet
│   ├── js/
│   │   └── main.js        # JavaScript for forms and interactivity
│   └── images/            # Placeholder for your images
└── README.md              # This file
```

## 🚀 Getting Started

### 1. View the Website Locally

Simply open `index.html` in your web browser. You can:
- Double-click `index.html` in your file explorer
- Or right-click and choose "Open with" → your preferred browser

### 2. Set Up Form Submissions (Important!)

The booking and contact forms use **Formspree** to send emails. To activate them:

1. Go to [https://formspree.io/](https://formspree.io/)
2. Sign up for a free account
3. Create a new form and get your form endpoint URL (looks like: `https://formspree.io/f/YOUR_FORM_ID`)
4. Open `assets/js/main.js`
5. Replace `YOUR_FORM_ID` with your actual Formspree form ID in two places:
   - Line ~145: for the booking form on `rentals.html`
   - Line ~151: for the contact form on `contact.html`

### 3. Customize Your Content

#### Update Contact Information
In `contact.html`, update:
- Email address
- Phone number
- Service area/location
- Business hours

#### Add Your Social Media Links
Replace placeholder links in all pages:
- Instagram URL
- Facebook URL

#### Add Real Photos
Replace emoji placeholders in `gallery.html` with actual photos:
1. Add your images to `assets/images/`
2. Update the gallery items in `gallery.html`
3. Replace `<div class="gallery-placeholder">🎂</div>` with `<img src="assets/images/your-photo.jpg" alt="Description">`

#### Customize Colors
Open `assets/css/style.css` and modify the CSS variables at the top:
```css
:root {
    --primary-color: #ff6b9d;      /* Main pink color */
    --secondary-color: #ffd93d;    /* Yellow accent */
    --accent-color: #6bcf7f;       /* Green accent */
}
```

## 📋 Pages Overview

### Home Page (`index.html`)
- Hero section with main slogan
- Services overview
- Call-to-action buttons
- Social media links

### Rentals & Booking (`rentals.html`) ⭐ Most Important
- Display of rental items with prices:
  - White plastic chairs - $1.50 each
  - Plastic tables (adult size) - $10 each
  - Kids pink Chiavari chairs - $3 each
  - Kids sized tables - $10 each
  - Backdrops & themed decorations - custom pricing
- Quantity selectors for each item
- Automatic price calculation
- Booking request form with:
  - Customer information
  - Event date
  - Theme/décor requests
  - Additional notes

### Gallery (`gallery.html`)
- Grid layout showcasing themed party setups
- Currently uses emoji placeholders
- Ready for real photos

### About Us (`about.html`)
- Business story and values
- Family-friendly focus
- Trust-building content

### Contact (`contact.html`)
- Contact information
- Message submission form
- FAQ section
- Social media links

## 🛠️ Customization Tips

### Add More Rental Items
1. Open `rentals.html`
2. Copy an existing `.rental-item` div
3. Update the item name, price, and ID
4. Add the pricing logic in `assets/js/main.js` in the `calculateTotal()` function

### Change the Theme/Colors
All colors are defined in `assets/css/style.css` using CSS variables. Modify the `:root` section to change the entire site's color scheme.

### Add More Pages
1. Create a new HTML file (e.g., `testimonials.html`)
2. Copy the navigation and footer from any existing page
3. Add the page to all navigation menus

## 🌐 Deploying Online

To make your website live on the internet:

### Option 1: GitHub Pages (Free)
1. Create a GitHub account
2. Create a new repository
3. Upload all your files
4. Enable GitHub Pages in repository settings
5. Your site will be live at `https://yourusername.github.io/repository-name`

### Option 2: Netlify (Free)
1. Sign up at [netlify.com](https://www.netlify.com/)
2. Drag and drop your project folder
3. Your site goes live instantly with a custom URL

### Option 3: Traditional Web Hosting
Upload all files to your web hosting provider via FTP using tools like FileZilla.

## ✅ Before Going Live Checklist

- [ ] Replace Formspree form IDs in `main.js`
- [ ] Update contact information in `contact.html`
- [ ] Add real social media links
- [ ] Test all forms (booking and contact)
- [ ] Add actual photos to the gallery
- [ ] Update business information (service area, hours)
- [ ] Test on mobile devices
- [ ] Check all navigation links work

## 📱 Browser Compatibility

This website works on:
- Chrome, Firefox, Safari, Edge (latest versions)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Tablets and desktop computers

## 🆘 Support & Troubleshooting

### Forms Not Sending Emails?
- Verify your Formspree form ID is correct in `main.js`
- Check browser console for errors (F12 → Console tab)
- Ensure you're using the correct Formspree URL format

### Mobile Menu Not Working?
- Clear browser cache
- Ensure `main.js` is loading properly

### Styling Issues?
- Check that `style.css` path is correct
- Clear browser cache
- Verify CSS file exists in `assets/css/`

## 📝 License

This website template is provided for Happy Memories Rentals. Feel free to customize it for your business needs.

## 🎨 Technologies Used

- **HTML5** - Structure and content
- **CSS3** - Styling and responsive design
- **JavaScript (ES6)** - Form handling and interactivity
- **Formspree** - Email form submissions

---

**Happy Memories Rentals** - Where Every Celebration Becomes a Happy Memory 🎈
