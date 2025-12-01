# Quick Start - Adding Your Branding

## 🚀 3-Step Process

### Step 1: Add Your Images

Create these folders and add your files:

```
public/images/
├── logo/pow-logo.png          ← Your logo
├── buses/
│   ├── orange-juice-main.jpg
│   ├── green-light-main.jpg
│   ├── white-knight-main.jpg
│   └── big-blue-main.jpg
├── hero/hero-background.jpg    ← Hero section background
├── events/
│   ├── wedding.jpg
│   ├── mardi-gras.jpg
│   └── nights-out.jpg
└── about/owner-photo.jpg       ← Owner/team photo
```

### Step 2: Update File Paths (Optional)

If your filenames match the structure above, you're done! The code is already set up.

If your filenames are different, update them in:
- **`constants.ts`** - For bus images, event images, and logo
- **`components/Hero.tsx`** - For hero background
- **`components/About.tsx`** - For owner photo

### Step 3: Enable Logo (Optional)

To show your logo instead of text in the navbar:

1. Open `components/Navbar.tsx`
2. Find line ~57 (the commented logo image)
3. Uncomment it:
   ```tsx
   <img src={LOGO_URL} alt={`${BRAND_NAME} Logo`} className="h-12 md:h-16" />
   ```
4. Comment out or remove the text logo below it

---

## ✅ That's It!

After adding your images:
1. Save all files
2. Restart dev server: `npm run dev`
3. Hard refresh browser (Ctrl+Shift+R)

---

## 📖 Need More Help?

See **`ASSETS_GUIDE.md`** for:
- Detailed instructions
- Image size recommendations
- Video background setup
- Troubleshooting tips

---

## 🎥 Adding Videos

Want a video background in the hero section?

1. Place video in `public/videos/hero-video.mp4`
2. Open `components/Hero.tsx`
3. Replace the `<img>` tag with a `<video>` tag (see `ASSETS_GUIDE.md` for code)

---

**Questions?** Check `ASSETS_GUIDE.md` for comprehensive documentation.


