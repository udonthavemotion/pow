# CRITICAL PRE-LAUNCH FIXES - Party on Wheels

## 🚨 TOP PRIORITY (Must fix before launch)

### 1. IMAGE OPTIMIZATION (Estimated time: 1-2 hours)
**PROBLEM**: Images are 4-9MB each, causing 20-30 second load times on mobile

**IMMEDIATE FIX**:
```bash
# Install sharp-cli globally
npm install -g sharp-cli

# Batch optimize all images (run from project root)
# This will reduce file sizes by 80-90%
for img in public/images/**/*.{jpg,jpeg,png}; do
  sharp "$img" -o "$img" --quality 85 --resize 1920 1920 --withoutEnlargement
done
```

**OR USE ONLINE TOOLS**:
- https://squoosh.app/ - Drag and drop all images
- Target: < 200KB per image
- Settings: Quality 85%, Max width 1920px

### 2. LAZY LOAD IMAGES (15 minutes)
Add loading="lazy" to all img tags in BusFleet.tsx:

```tsx
<img
  src={imageUrl}
  alt={bus.name}
  loading="lazy"  // ADD THIS
  className="..."
/>
```

### 3. FIX IFRAME PERFORMANCE (30 minutes)

#### In BookingModal.tsx, update iframe to be responsive:
```tsx
// Replace fixed height with responsive container
<div style={{
  position: 'relative',
  paddingBottom: '120%',  // Aspect ratio
  height: 0,
  overflow: 'hidden'
}}>
  <iframe
    src={embedUrl}
    style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      border: 'none'
    }}
    loading="lazy"  // ADD THIS for lazy loading
    title={`Booking for ${bus.name}`}
  />
</div>
```

### 4. ADD VERCEL OPTIMIZATION (5 minutes)

Create `vercel.json` in project root:
```json
{
  "functions": {
    "app/api/hello/route.ts": {
      "maxDuration": 10
    }
  },
  "headers": [
    {
      "source": "/images/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    }
  ]
}
```

### 5. FIX BOOKING MODAL IMPORT (5 minutes)

In App.tsx, remove the duplicate import:
- Keep ONLY the lazy import
- Remove the static import at the top

```tsx
// Remove this line if it exists at top:
// import BookingModal from './components/BookingModal';

// Keep only this:
const BookingModal = lazy(() => import('./components/BookingModal'));
```

### 6. MOBILE VIEWPORT META (2 minutes)

In index.html, ensure you have:
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5">
```

## 📊 PERFORMANCE TARGETS

After these fixes, you should achieve:
- **Mobile Load Time**: < 3 seconds (from 20-30 seconds)
- **Lighthouse Score**: 85+ (from ~40)
- **First Contentful Paint**: < 1.5s
- **Time to Interactive**: < 3.5s

## 🚀 DEPLOYMENT CHECKLIST

1. [ ] Optimize all images to < 200KB
2. [ ] Add lazy loading to images
3. [ ] Fix iframe responsiveness
4. [ ] Add vercel.json for caching
5. [ ] Fix BookingModal import
6. [ ] Test on real mobile device
7. [ ] Run `npm run build` - ensure no errors
8. [ ] Deploy to Vercel

## TESTING COMMANDS

```bash
# Build for production
npm run build

# Test production build locally
npm run preview

# Check bundle size
npx vite-bundle-visualizer
```

## MOBILE TESTING URLS
- PageSpeed Insights: https://pagespeed.web.dev/
- Mobile-Friendly Test: https://search.google.com/test/mobile-friendly

---

**CRITICAL**: The image optimization alone will improve your load time by 80%. This is the #1 priority before launch!