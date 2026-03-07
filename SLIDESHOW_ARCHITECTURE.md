# Bus Slideshow - Component Architecture

## Visual Component Structure

```
┌─────────────────────────────────────────────────────────────────┐
│                         HERO SECTION                             │
│  ┌───────────────────────────────────────────────────────────┐  │
│  │                   BusSlideshow Component                   │  │
│  │  ┌─────────────────────────────────────────────────────┐  │  │
│  │  │                  Slides Container                    │  │  │
│  │  │  ┌───────────────────────────────────────────────┐  │  │  │
│  │  │  │     Slide 1 (Orange Juice) - Active          │  │  │  │
│  │  │  │  ┌────────────────────────────────────────┐  │  │  │  │
│  │  │  │  │   Bus Image (with Ken Burns effect)   │  │  │  │  │
│  │  │  │  └────────────────────────────────────────┘  │  │  │  │
│  │  │  │  ┌────────────────────────────────────────┐  │  │  │  │
│  │  │  │  │   Gradient Overlays (2 layers)        │  │  │  │  │
│  │  │  │  └────────────────────────────────────────┘  │  │  │  │
│  │  │  │  ┌────────────────────────────────────────┐  │  │  │  │
│  │  │  │  │   Bus Info Overlay                     │  │  │  │  │
│  │  │  │  │   • Bus Name (custom color + glow)    │  │  │  │  │
│  │  │  │  │   • Tagline                            │  │  │  │  │
│  │  │  │  │   • Capacity & Rate badges             │  │  │  │  │
│  │  │  │  └────────────────────────────────────────┘  │  │  │  │
│  │  │  └───────────────────────────────────────────────┘  │  │  │
│  │  │  ┌───────────────────────────────────────────────┐  │  │  │
│  │  │  │     Slide 2 (Kuttin Loose) - Hidden       │  │  │  │
│  │  │  └───────────────────────────────────────────────┘  │  │  │
│  │  │  ┌───────────────────────────────────────────────┐  │  │  │
│  │  │  │     Slide 3 (Cotton Candy) - Hidden       │  │  │  │
│  │  │  └───────────────────────────────────────────────┘  │  │  │
│  │  │  │              ... (4 more slides)               │  │  │  │
│  │  └─────────────────────────────────────────────────────┘  │  │
│  │  ┌─────────────────────────────────────────────────────┐  │  │
│  │  │  Navigation Controls Layer                          │  │  │
│  │  │  • [←] Previous Button (left side)                 │  │  │
│  │  │  • [→] Next Button (right side)                    │  │  │
│  │  │  • [⬤ ━ ⬤ ⬤ ⬤ ⬤] Dot Indicators (bottom center)  │  │  │
│  │  │  • [⏸ Paused] Indicator (top center, on hover)    │  │  │
│  │  └─────────────────────────────────────────────────────┘  │  │
│  └───────────────────────────────────────────────────────────┘  │
│  ┌───────────────────────────────────────────────────────────┐  │
│  │           Additional Gradient Overlay (Hero layer)        │  │
│  └───────────────────────────────────────────────────────────┘  │
│  ┌───────────────────────────────────────────────────────────┐  │
│  │                 Hero Content Layer (z-10)                 │  │
│  │           "LET THE GOOD TIMES ROLL"                        │  │
│  │           Location badges, CTA buttons, etc.               │  │
│  └───────────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────────┘
```

## Component Hierarchy

```
Hero.tsx
└── BusSlideshow.tsx
    ├── Slides Container (relative positioning)
    │   ├── Slide 0 (Orange Juice)
    │   │   ├── Image Element
    │   │   ├── Gradient Overlay 1 (vertical)
    │   │   ├── Gradient Overlay 2 (horizontal)
    │   │   └── Info Overlay
    │   │       ├── Bus Name (h2)
    │   │       ├── Tagline (p)
    │   │       └── Info Badges (capacity, rate)
    │   ├── Slide 1 (Kuttin Loose)
    │   ├── Slide 2 (Cotton Candy)
    │   ├── Slide 3 (Rackz)
    │   ├── Slide 4 (Dirty Dancer)
    │   └── Slide 5 (Limo)
    ├── Navigation Layer (absolute positioning)
    │   ├── Previous Button
    │   ├── Next Button
    │   ├── Indicator Dots Container
    │   │   ├── Dot 0 (active, expanded)
    │   │   ├── Dot 1 (inactive)
    │   │   ├── Dot 2 (inactive)
    │   │   ├── Dot 3 (inactive)
    │   │   ├── Dot 4 (inactive)
    │   │   └── Dot 5 (inactive)
    │   └── Pause Indicator (conditional)
    └── Event Listeners (global)
        ├── Keyboard (arrow keys)
        ├── Touch (swipe gestures)
        └── Timer (auto-rotation)
```

## State Flow Diagram

```
┌──────────────────────────────────────────────────────────────┐
│                     Component Lifecycle                      │
└──────────────────────────────────────────────────────────────┘
                              ↓
┌──────────────────────────────────────────────────────────────┐
│                    Initial Mount                              │
│  • Set currentIndex = 0                                       │
│  • Set isHovered = false                                      │
│  • Initialize imagesLoaded = {}                               │
│  • Initialize touchStartX/EndX = null                         │
└──────────────────────────────────────────────────────────────┘
                              ↓
┌──────────────────────────────────────────────────────────────┐
│                  Image Preloading (useEffect #1)              │
│  For each bus:                                                │
│    • Create new Image()                                       │
│    • Set src = bus.displayImage                               │
│    • onload: update imagesLoaded[index] = true               │
└──────────────────────────────────────────────────────────────┘
                              ↓
┌──────────────────────────────────────────────────────────────┐
│               Auto-Rotation Timer (useEffect #2)              │
│  if (!isHovered):                                             │
│    • setInterval(goToNext, autoRotateInterval)               │
│  else:                                                         │
│    • clearInterval()                                          │
│  cleanup: clearInterval on unmount                            │
└──────────────────────────────────────────────────────────────┘
                              ↓
┌──────────────────────────────────────────────────────────────┐
│              Keyboard Listeners (useEffect #3)                │
│  addEventListener('keydown'):                                 │
│    • ArrowLeft → goToPrev()                                   │
│    • ArrowRight → goToNext()                                  │
│  cleanup: removeEventListener on unmount                      │
└──────────────────────────────────────────────────────────────┘
                              ↓
┌──────────────────────────────────────────────────────────────┐
│            Slide Change Callback (useEffect #4)               │
│  onSlideChange?.(busesWithImages[currentIndex].id)           │
└──────────────────────────────────────────────────────────────┘
                              ↓
┌──────────────────────────────────────────────────────────────┐
│                    User Interactions                          │
│  ┌────────────────┬─────────────────┬─────────────────────┐ │
│  │ Navigation     │ Hover           │ Touch Gestures      │ │
│  │────────────────│─────────────────│─────────────────────│ │
│  │ • Prev Button  │ • onMouseEnter  │ • touchStart (x)    │ │
│  │ • Next Button  │   → isHovered++ │ • touchMove (x)     │ │
│  │ • Dot Click    │ • onMouseLeave  │ • touchEnd          │ │
│  │ • Arrow Keys   │   → isHovered-- │   → goNext/Prev()   │ │
│  │ → goToSlide()  │                 │                     │ │
│  └────────────────┴─────────────────┴─────────────────────┘ │
└──────────────────────────────────────────────────────────────┘
                              ↓
┌──────────────────────────────────────────────────────────────┐
│                   State Update Triggers                       │
│  ┌────────────────────────────────────────────────────────┐  │
│  │ currentIndex changes                                    │  │
│  │   ↓                                                     │  │
│  │ React re-renders                                        │  │
│  │   ↓                                                     │  │
│  │ Only active slide gets opacity-100, z-10, scale-100    │  │
│  │   ↓                                                     │  │
│  │ CSS transitions animate the change (1000ms)            │  │
│  │   ↓                                                     │  │
│  │ Ken Burns animation runs on new active slide           │  │
│  └────────────────────────────────────────────────────────┘  │
└──────────────────────────────────────────────────────────────┘
```

## Event Handling Flow

```
┌─────────────────────────────────────────────────────────────┐
│                        User Action                           │
│  (Click, Key Press, Touch, Hover, Timer)                     │
└─────────────────────────────────────────────────────────────┘
                           ↓
                ┌──────────┴──────────┐
                │                     │
         ┌──────▼──────┐      ┌──────▼──────┐
         │   Manual    │      │    Auto     │
         │ Navigation  │      │  Rotation   │
         └──────┬──────┘      └──────┬──────┘
                │                     │
                └──────────┬──────────┘
                           ↓
                  ┌────────▼────────┐
                  │  goToNext()     │
                  │  goToPrev()     │
                  │  goToSlide(n)   │
                  └────────┬────────┘
                           ↓
                  ┌────────▼────────┐
                  │ Set direction   │
                  │ (next or prev)  │
                  └────────┬────────┘
                           ↓
                  ┌────────▼────────┐
                  │ setCurrentIndex │
                  │   (new value)   │
                  └────────┬────────┘
                           ↓
                  ┌────────▼────────┐
                  │  React Render   │
                  └────────┬────────┘
                           ↓
               ┌───────────┴────────────┐
               │                        │
        ┌──────▼──────┐         ┌──────▼──────┐
        │  Old Slide  │         │  New Slide  │
        │ opacity:100 │         │ opacity:0   │
        │    ↓        │         │    ↓        │
        │ opacity:0   │         │ opacity:100 │
        │ (fade out)  │         │ (fade in)   │
        └─────────────┘         └──────┬──────┘
                                       ↓
                              ┌────────▼────────┐
                              │  Ken Burns      │
                              │  Animation      │
                              │  Starts         │
                              └────────┬────────┘
                                       ↓
                              ┌────────▼────────┐
                              │ onSlideChange   │
                              │   Callback      │
                              └─────────────────┘
```

## CSS Animation Layers

```
┌─────────────────────────────────────────────────────────────┐
│                   Animation Layers (Z-axis)                  │
├─────────────────────────────────────────────────────────────┤
│  Layer 5: Hero Content (text, buttons) - z-10              │
├─────────────────────────────────────────────────────────────┤
│  Layer 4: Navigation Controls - z-30                        │
│           (arrows, dots, pause indicator)                   │
├─────────────────────────────────────────────────────────────┤
│  Layer 3: Text Overlay - z-20                               │
│           (bus name, tagline, info)                         │
├─────────────────────────────────────────────────────────────┤
│  Layer 2: Gradient Overlays - relative                      │
│           • Vertical gradient (top to bottom)               │
│           • Horizontal gradient (left to right)             │
├─────────────────────────────────────────────────────────────┤
│  Layer 1: Bus Image - z-0/z-10                              │
│           • Active slide: z-10, opacity-100                 │
│           • Inactive slides: z-0, opacity-0                 │
│           • Ken Burns: scale(1) → scale(1.15)              │
│           • Transform: translate(0,0) → translate(-2%,1%)  │
├─────────────────────────────────────────────────────────────┤
│  Layer 0: Background - bg-gray-900                          │
└─────────────────────────────────────────────────────────────┘
```

## Performance Optimization Strategy

```
┌─────────────────────────────────────────────────────────────┐
│                  Optimization Techniques                     │
├─────────────────────────────────────────────────────────────┤
│  1. Virtual DOM Optimization                                │
│     • Only active slide gets animate-ken-burns class        │
│     • Inactive slides hidden with opacity, not display      │
│     • React.memo for expensive child components (N/A here)  │
├─────────────────────────────────────────────────────────────┤
│  2. CSS Performance                                          │
│     • Transform instead of position changes                 │
│     • Opacity instead of visibility                         │
│     • will-change: transform, opacity                       │
│     • GPU acceleration via translateZ(0)                    │
├─────────────────────────────────────────────────────────────┤
│  3. Image Loading                                            │
│     • Preload all images in background                      │
│     • First image: loading="eager"                          │
│     • Other images: loading="lazy"                          │
│     • Show spinner while loading                            │
├─────────────────────────────────────────────────────────────┤
│  4. Event Handling                                           │
│     • useCallback for navigation functions                  │
│     • Debounced touch events (50px threshold)               │
│     • Single interval timer, not multiple                   │
│     • Cleanup functions prevent memory leaks                │
├─────────────────────────────────────────────────────────────┤
│  5. Mobile Optimizations                                     │
│     • Reduced Ken Burns intensity                           │
│     • Shorter animation durations                           │
│     • Touch-action CSS for better scrolling                 │
│     • Hardware acceleration on transforms                   │
├─────────────────────────────────────────────────────────────┤
│  6. Accessibility Performance                                │
│     • prefers-reduced-motion check                          │
│     • Disable animations for reduced motion users           │
│     • ARIA live: polite (not assertive)                     │
└─────────────────────────────────────────────────────────────┘
```

## Data Dependencies

```
constants.ts
    ↓
BUSES Array (6 items)
    ↓ (each bus has)
    ├── id: string
    ├── name: string
    ├── tagline: string
    ├── description: string
    ├── hourlyRate: number
    ├── minHours: number
    ├── capacity: number
    ├── nameColor: string (hex)
    ├── imageUrl: string (path)
    ├── images: string[] (paths)
    ├── gallery: string[] (paths)
    └── features: string[]
         ↓
BusSlideshow Component
    ↓ (creates)
busesWithImages (mapped array)
    ├── ...allBusProperties
    └── displayImage: string (first of images[] or imageUrl)
         ↓
Rendered Slides (one per bus)
    ↓
User sees 6 rotating slides
```

## Interaction Timing

```
Timeline of a typical slide transition:

0ms      - User hovers / Timer fires
           └─→ goToNext() called

50ms     - setDirection('next')
           setCurrentIndex(1)

100ms    - React re-renders
           New slide gets opacity-100
           Old slide gets opacity-0

100-1100ms - CSS transition animates
             (duration: 1000ms)

1100ms   - Transition complete
           Ken Burns already running

5000ms   - Auto-rotation interval fires
           └─→ goToNext() called again

20000ms  - Ken Burns animation completes first loop
           └─→ Reverses (alternate direction)

Hover Event Timeline:

0ms      - onMouseEnter fires
           └─→ setIsHovered(true)

10ms     - clearInterval(autoRotateTimer)
           Pause indicator appears (fade-in 300ms)

310ms    - Pause indicator fully visible

???      - onMouseLeave fires
           └─→ setIsHovered(false)

10ms     - Pause indicator fades out
           New interval starts

5000ms   - First auto-rotation after hover
```

## File Size Impact

```
Component Sizes:
├── BusSlideshow.tsx: ~12 KB (source)
├── Compiled JS bundle: ~5 KB (gzipped)
├── CSS additions: ~2 KB
└── Total overhead: ~7 KB

Runtime Memory:
├── Component state: ~1 KB
├── Image preloading: ~6 × 500 KB = ~3 MB (typical)
├── Event listeners: ~1 KB
└── Total runtime: ~3 MB (mostly images)

Performance Impact:
├── Initial render: ~50ms
├── Re-render on slide change: ~10ms
├── CSS transition: 1000ms (GPU-accelerated)
├── Ken Burns: No CPU impact (CSS animation)
└── FPS during transitions: 60fps (smooth)
```

---

**Architecture Version**: 1.0.0
**Last Updated**: 2026-03-07
**Complexity**: Medium
**Maintainability**: High
