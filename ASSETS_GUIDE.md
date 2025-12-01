# Assets Guide - Party on Wheels Website
## Quick Reference for Adding Your Branding & Media

This guide shows you exactly where to place your images, logos, and videos, and how to update them in the code.

---

## 📁 Folder Structure

Create these folders in your project root:

```
public/
  ├── images/
  │   ├── logo/
  │   │   └── pow-logo.png (or .svg, .jpg)
  │   ├── buses/
  │   │   ├── orange-juice-main.jpg
  │   │   ├── orange-juice-gallery-1.jpg
  │   │   ├── orange-juice-gallery-2.jpg
  │   │   ├── green-light-main.jpg
  │   │   ├── green-light-gallery-1.jpg
  │   │   ├── white-knight-main.jpg
  │   │   ├── big-blue-main.jpg
  │   │   └── (add more gallery images as needed)
  │   ├── hero/
  │   │   └── hero-background.jpg (or .mp4 for video)
  │   ├── events/
  │   │   ├── wedding.jpg
  │   │   ├── mardi-gras.jpg
  │   │   └── nights-out.jpg
  │   ├── about/
  │   │   └── owner-photo.jpg
  │   └── misc/
  │       └── (any other images you need)
  └── videos/
      └── hero-video.mp4 (optional - for hero background video)
```

---

## 🎨 Where to Update Assets

### 1. Logo (Navbar & Footer)

**File to edit:** `constants.ts`

**Find this line:**
```typescript
export const LOGO_URL = '/images/logo/pow-logo.png';
```

**What to do:**
- Place your logo file in `public/images/logo/`
- Update the filename if different (e.g., `pow-logo.svg` or `logo.png`)
- Supported formats: `.png`, `.svg`, `.jpg`, `.webp`

**Also update:** `components/Navbar.tsx` - Uncomment the logo image tag around line 57

---

### 2. Bus Images

**File to edit:** `constants.ts`

**For each bus, find the `imageUrl` property:**

#### Orange Juice Bus:
```typescript
imageUrl: '/images/buses/orange-juice-main.jpg',
```

#### Green Light Bus:
```typescript
imageUrl: '/images/buses/green-light-main.jpg',
```

#### The White Knight Bus:
```typescript
imageUrl: '/images/buses/white-knight-main.jpg',
```

#### Big Blue Bus:
```typescript
imageUrl: '/images/buses/big-blue-main.jpg',
```

**What to do:**
- Place your bus photos in `public/images/buses/`
- Use descriptive filenames matching the bus names
- Recommended size: 1200x800px or larger (will auto-resize)
- Supported formats: `.jpg`, `.png`, `.webp`

**Gallery Images:**
Each bus can have multiple gallery images. Update the `gallery` array:
```typescript
gallery: [
  '/images/buses/orange-juice-gallery-1.jpg',
  '/images/buses/orange-juice-gallery-2.jpg',
  '/images/buses/orange-juice-gallery-3.jpg',
]
```

---

### 3. Hero Section Background

**File to edit:** `components/Hero.tsx`

**Find this line (around line 32):**
```typescript
src="/images/hero/hero-background.jpg"
```

**What to do:**
- Place your hero image in `public/images/hero/`
- Use a wide, high-quality image (1920x1080px or larger)
- Or use a video (see Video section below)

**For video background:**
Replace the `<img>` tag with a `<video>` tag (see Video section)

---

### 4. Event Section Images

**File to edit:** `constants.ts`

**Find the `EVENTS` array and update each `image` property:**

```typescript
{
  id: 1,
  title: "Weddings",
  image: "/images/events/wedding.jpg"
},
{
  id: 2,
  title: "Mardi Gras",
  image: "/images/events/mardi-gras.jpg"
},
{
  id: 3,
  title: "Nights Out",
  image: "/images/events/nights-out.jpg"
}
```

**What to do:**
- Place event images in `public/images/events/`
- Recommended size: 800x600px or larger
- Match the image to the event type

---

### 5. About Section - Owner Photo

**File to edit:** `components/About.tsx`

**Find this line (around line 24):**
```typescript
src="/images/about/owner-photo.jpg"
```

**What to do:**
- Place owner/team photo in `public/images/about/`
- Recommended size: 600x800px (portrait orientation)
- Can be a professional headshot or action photo

---

## 🎥 Adding Videos

### Hero Background Video (Optional)

**File to edit:** `components/Hero.tsx`

**Replace the hero image section with:**

```typescript
<video 
  autoPlay 
  loop 
  muted 
  playsInline
  className="w-full h-full object-cover opacity-60"
>
  <source src="/videos/hero-video.mp4" type="video/mp4" />
  {/* Fallback image if video doesn't load */}
  <img 
    src="/images/hero/hero-background.jpg" 
    alt="Party Bus Atmosphere" 
    className="w-full h-full object-cover"
  />
</video>
```

**What to do:**
- Place video file in `public/videos/`
- Recommended format: `.mp4` (H.264 codec)
- Keep file size reasonable (< 10MB for web)
- Video should be 1920x1080px or 16:9 aspect ratio

---

## 📝 Quick Checklist

When adding your branding:

- [ ] Logo placed in `public/images/logo/` and updated in `constants.ts`
- [ ] Navbar logo uncommented in `components/Navbar.tsx`
- [ ] All 4 bus images placed in `public/images/buses/` and updated in `constants.ts`
- [ ] Hero background image placed in `public/images/hero/` and updated in `components/Hero.tsx`
- [ ] Event images (3) placed in `public/images/events/` and updated in `constants.ts`
- [ ] Owner photo placed in `public/images/about/` and updated in `components/About.tsx`
- [ ] All image paths use `/images/...` format (starts with `/`)

---

## 🖼️ Image Requirements

### Recommended Sizes:

| Asset | Size | Format | Notes |
|-------|------|--------|-------|
| Logo | 300x100px | PNG/SVG | Transparent background preferred |
| Bus Images | 1200x800px | JPG/WebP | Landscape orientation |
| Hero Background | 1920x1080px | JPG/MP4 | Wide format |
| Event Images | 800x600px | JPG/WebP | Landscape |
| Owner Photo | 600x800px | JPG | Portrait orientation |

### Optimization Tips:

- **Compress images** before uploading (use tools like TinyPNG or Squoosh)
- **Use WebP format** when possible for better performance
- **Keep file sizes** under 500KB per image when possible
- **Use SVG** for logos when possible (scalable, small file size)

---

## 🔄 After Adding Assets

1. **Save all files** after updating paths
2. **Restart dev server** if running: `npm run dev`
3. **Hard refresh browser** (Ctrl+Shift+R or Cmd+Shift+R) to clear cache
4. **Check console** for any 404 errors (missing images)

---

## 🆘 Troubleshooting

### Image not showing?

1. **Check file path** - Make sure it starts with `/images/...` (not `./images/...`)
2. **Check file location** - File must be in `public/images/...` folder
3. **Check filename** - Match exact case (case-sensitive on some servers)
4. **Check file extension** - Use `.jpg`, `.png`, `.webp`, or `.svg`
5. **Clear browser cache** - Hard refresh (Ctrl+Shift+R)

### Logo not updating?

1. Make sure you **uncommented** the logo `<img>` tag in `Navbar.tsx`
2. Check the path in `constants.ts` matches your file location
3. Restart the dev server

### Video not playing?

1. Check video format (use `.mp4` with H.264 codec)
2. Make sure `autoPlay`, `loop`, and `muted` attributes are set
3. Check browser console for errors
4. Try a different browser

---

## 📞 Need Help?

If you're stuck:
1. Check that all file paths match exactly
2. Verify files are in the `public/` folder (not `src/`)
3. Check browser console (F12) for error messages
4. Make sure dev server is running

---

**Last Updated:** [Current Date]
**Version:** 1.0


