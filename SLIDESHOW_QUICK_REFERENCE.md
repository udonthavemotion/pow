# Bus Slideshow - Quick Reference Card

## Common Customizations

### Change Rotation Speed
**File**: `components/Hero.tsx` (line ~137)
```tsx
<BusSlideshow autoRotateInterval={7000} />  // 7 seconds instead of 5
```

### Toggle Between Video and Slideshow
**File**: `components/Hero.tsx` (line ~17)
```tsx
const [showSlideshow, setShowSlideshow] = useState(false);  // false = video
```

### Adjust Ken Burns Zoom Intensity
**File**: `index.css` (line ~991)
```css
@keyframes ken-burns {
  0% { transform: scale(1) translate(0, 0); }
  100% { transform: scale(1.2) translate(-2%, 1%); }  /* More zoom */
}
```

### Make Ken Burns Faster
**File**: `index.css` (line ~999)
```css
.animate-ken-burns {
  animation: ken-burns 10s ease-in-out infinite alternate;  /* 10s instead of 20s */
}
```

### Change Transition Duration
**File**: `components/BusSlideshow.tsx` (line ~121)
```tsx
className={`absolute inset-0 transition-all duration-[2000ms] ease-in-out ${
```

### Make Text Overlay Darker
**File**: `components/BusSlideshow.tsx` (line ~142)
```tsx
<div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/60 to-black/95" />
```

### Customize Bus Name Size
**File**: `components/BusSlideshow.tsx` (line ~152)
```tsx
className="text-6xl sm:text-8xl md:text-10xl"  // Larger text
```

### Adjust Glow Effect
**File**: `components/BusSlideshow.tsx` (line ~157)
```tsx
textShadow: `0 0 80px ${bus.nameColor}90, 0 0 120px ${bus.nameColor}60`,  // More glow
```

### Larger Navigation Arrows
**File**: `components/BusSlideshow.tsx` (line ~203)
```tsx
className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-16 h-16"  // 64px instead of 48px
```

### Change Arrow Colors
**File**: `components/BusSlideshow.tsx` (line ~209)
```tsx
className="w-6 h-6 text-[#b9ff66] group-hover:text-white"  // Green arrows
```

### Bigger Indicator Dots
**File**: `components/BusSlideshow.tsx` (line ~243)
```tsx
<div className={`h-5 sm:h-6 rounded-full ${  // Larger dots
```

### Active Dot Color
**File**: `components/BusSlideshow.tsx` (line ~251)
```tsx
backgroundColor: index === currentIndex ? '#FF6B00' : undefined,  // Always orange
```

### Disable Auto-Rotation (Manual Only)
**File**: `components/Hero.tsx` (line ~137)
```tsx
<BusSlideshow autoRotateInterval={999999999} />  // Effectively disabled
```

### Show More Bus Info
**File**: `components/BusSlideshow.tsx` (line ~175)
Add below the capacity/rate info:
```tsx
<p className="text-white/90 mt-4 max-w-2xl mx-auto">
  {bus.description}
</p>
```

## File Locations
- **Main Component**: `components/BusSlideshow.tsx`
- **Hero Integration**: `components/Hero.tsx`
- **Animations CSS**: `index.css` (lines 987-1050)
- **Bus Data**: `constants.ts`

## Quick Diagnostics

### Slideshow Not Showing?
1. Check `Hero.tsx` line 17: `showSlideshow` should be `true`
2. Verify images exist in `/public/images/buses/` folders
3. Check browser console for errors

### Ken Burns Not Working?
1. Verify browser supports CSS animations
2. Check `prefers-reduced-motion` setting
3. Look for `animate-ken-burns` class in DevTools

### Touch Swipe Not Working?
1. Test swipe distance (needs 50px minimum)
2. Check for conflicting touch handlers
3. Verify on actual touch device (not just DevTools simulation)

### Performance Issues?
1. Optimize image sizes (use WebP, compress JPEGs)
2. Reduce Ken Burns duration
3. Increase `autoRotateInterval` to reduce transitions

## Pro Tips

1. **Preload Critical Images**: First bus image should be small and optimized
2. **Use WebP Format**: 30-50% smaller than JPEG with same quality
3. **Consistent Aspect Ratios**: All bus images should have similar dimensions
4. **Test on Real Devices**: Mobile performance varies significantly
5. **Accessibility First**: Always maintain high contrast ratios for text

## Support Quick Links
- Full Guide: `BUS_SLIDESHOW_GUIDE.md`
- Component Code: `components/BusSlideshow.tsx`
- Constants Data: `constants.ts`
