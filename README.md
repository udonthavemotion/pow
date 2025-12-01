# Party on Wheels - Party Bus Booking Website

A modern, one-page website for Party on Wheels party bus rentals in Houma, Louisiana. Features GoHighLevel calendar integration for seamless booking.

## 🚀 Quick Start

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to `http://localhost:3000`

---

## 🎨 Adding Your Branding & Media

### Quick Start (3 Steps)

See **`QUICK_START.md`** for the fastest way to add your images and logos.

### Detailed Guide

See **`ASSETS_GUIDE.md`** for comprehensive instructions on:
- Where to place images
- How to update file paths
- Image size recommendations
- Video background setup
- Troubleshooting

### Folder Structure

```
public/
├── images/
│   ├── logo/          ← Your logo
│   ├── buses/         ← Bus photos
│   ├── hero/          ← Hero background
│   ├── events/        ← Event images
│   └── about/         ← Owner photo
└── videos/            ← Optional video backgrounds
```

---

## 📅 GoHighLevel Integration

See **`GOHIGHLEVEL_INTEGRATION.md`** for:
- Calendar setup instructions
- Embed code integration
- Pipeline configuration
- Workflow automation
- Testing checklist

---

## 📁 Project Structure

```
├── components/        ← React components
├── constants.ts       ← Branding & bus data (UPDATE HERE)
├── public/images/     ← Your images go here
├── ASSETS_GUIDE.md    ← Image/media guide
├── QUICK_START.md     ← Quick branding guide
└── GOHIGHLEVEL_INTEGRATION.md ← Booking integration guide
```

---

## 🛠️ Development

**Prerequisites:** Node.js 18+

**Commands:**
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

---

## 📝 Key Files to Customize

1. **`constants.ts`** - Bus data, images, logo, events
2. **`components/Hero.tsx`** - Hero section background
3. **`components/About.tsx`** - Owner photo
4. **`components/Navbar.tsx`** - Logo display

---

## ✅ Before Launch Checklist

- [ ] All images added to `public/images/` folders
- [ ] Logo enabled in Navbar (uncomment in `Navbar.tsx`)
- [ ] GoHighLevel calendar embed codes added to `constants.ts`
- [ ] Test all 4 bus booking modals
- [ ] Verify mobile responsiveness
- [ ] Test booking flow end-to-end

---

## 📚 Documentation

- **`QUICK_START.md`** - Fast 3-step branding guide
- **`ASSETS_GUIDE.md`** - Complete image/media guide
- **`GOHIGHLEVEL_INTEGRATION.md`** - Booking system integration

---

**Need Help?** Check the guides above or review the code comments in `constants.ts` and component files.
