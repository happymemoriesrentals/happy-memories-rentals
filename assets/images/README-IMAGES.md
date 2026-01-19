# Image Guidelines for Happy Memories Rentals Website

## 📸 Recommended Image Sizes

### Gallery Images (gallery.html)
- **Dimensions:** 800x600px (landscape) or 600x800px (portrait)
- **Format:** JPG or PNG
- **File size:** Keep under 500KB each for fast loading
- **Naming:** Use descriptive names (e.g., `princess-party-setup.jpg`)

### Rental Item Photos (rentals.html)
- **Dimensions:** 600x600px (square works best)
- **Format:** JPG or PNG with transparent background
- **File size:** Keep under 300KB each
- **Naming:** Match item name (e.g., `white-chairs.jpg`, `kids-pink-chairs.jpg`)

### General Guidelines
- Use high-quality, well-lit photos
- Show items in use at actual parties when possible
- Keep image file sizes optimized for web
- Use consistent styling across photos

## 🎨 Where to Get Free Stock Photos (If Needed)

While actual photos of your rentals are best, here are free stock photo sites:

1. **Unsplash** - https://unsplash.com/
   - Search: "party decorations", "birthday party", "kids party"

2. **Pexels** - https://pexels.com/
   - Search: "celebration", "event setup", "party rental"

3. **Pixabay** - https://pixabay.com/
   - Free for commercial use

## 🖼️ Current Placeholders

The website currently uses emoji placeholders:
- 🪑 White plastic chairs
- 🪑 Adult tables
- 💗 Kids pink chairs
- 🎨 Kids tables
- 🎭 Backdrops & decorations
- 🎂 Princess party (gallery)
- 🦸 Superhero party (gallery)
- 🌸 Floral garden (gallery)
- And more in the gallery...

## 📝 How to Replace Placeholders

### In gallery.html:
Replace:
```html
<div class="gallery-placeholder">🎂</div>
```

With:
```html
<img src="assets/images/princess-party.jpg" alt="Princess themed birthday party setup">
```

### In rentals.html:
Replace:
```html
<div class="rental-image">🪑</div>
```

With:
```html
<div class="rental-image">
    <img src="assets/images/white-chairs.jpg" alt="White plastic chairs" style="width:100%; height:100%; object-fit:cover;">
</div>
```

## ✅ Image Checklist Before Adding

- [ ] Photo is clear and high-quality
- [ ] File size is optimized (compressed)
- [ ] Filename is descriptive (no spaces, use hyphens)
- [ ] Image shows the product/setup clearly
- [ ] Lighting is good
- [ ] Background is clean or appropriate

---

**Pro Tip:** Take photos of your actual rentals at real events. Customer testimonials and real setups build trust much better than stock photos!
