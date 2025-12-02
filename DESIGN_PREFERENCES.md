# Design Preferences - Universal Rules

## 🚫 NO TRANSPARENT BOXED CARDS

### Core Principle
**Avoid creating transparent, boxed card components with glassmorphism effects.** Instead, use flat, integrated designs where content sits directly on the background.

### What to Avoid ❌

**DO NOT create components with:**
- Transparent backgrounds with backdrop blur (`bg-white/10 backdrop-blur-sm`, `bg-black/20 backdrop-blur-md`)
- Rounded containers with borders (`rounded-xl`, `rounded-2xl` with `border border-white/20`)
- Glassmorphism effects that create "floating card" appearance
- Boxed containers that encapsulate content in transparent squares/rectangles

**Examples of what NOT to do:**
```tsx
// ❌ BAD - Transparent boxed card
<div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
  <h3>Title</h3>
  <p>Content</p>
</div>

// ❌ BAD - Glassmorphism card
<div className="bg-black/40 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
  <div>Stats</div>
</div>
```

### What to Do Instead ✅

**DO create flat, integrated designs:**
- Content sits directly on the background
- Use drop shadows (`drop-shadow-lg`, `drop-shadow-2xl`) for text visibility
- Use spacing and typography hierarchy instead of containers
- Let background gradients/patterns show through naturally

**Examples of what TO do:**
```tsx
// ✅ GOOD - Flat, integrated design
<div className="text-center">
  <div className="text-5xl mb-4 drop-shadow-lg">🎉</div>
  <div className="text-6xl font-black text-white drop-shadow-2xl mb-3">
    1000+
  </div>
  <div className="text-white/90 text-sm font-bold uppercase tracking-wider drop-shadow-lg">
    Parties Hosted
  </div>
</div>

// ✅ GOOD - Content on background with shadows
<div className="pt-8">
  <p className="text-white/90 text-sm mb-6 uppercase tracking-wider font-bold drop-shadow-lg">
    Share The Vibe
  </p>
  <div className="flex items-center justify-center gap-6">
    {/* Buttons/icons */}
  </div>
</div>
```

### When Transparency IS Acceptable

**Transparency is OK for:**
- Overlays on images/videos (gradient overlays)
- Modal backdrops (`bg-black/95` for modals)
- Navigation bars with backdrop blur (when appropriate)
- Background decorative elements (blurred orbs, gradients)

**Transparency is NOT OK for:**
- Content containers/cards
- Stats displays
- Feature boxes
- Testimonial cards
- Any component that creates a "floating box" appearance

### Design Philosophy

**Preference:** Flat, integrated, modern design where content blends with the background rather than being contained in boxes.

**Visual Style:**
- Content flows naturally on the background
- Use shadows, gradients, and typography for hierarchy
- Avoid creating visual "containers" unless absolutely necessary
- Prefer spacing and layout over background containers

### Implementation Guidelines

1. **Stats/Counters:** Display directly on background with drop shadows
2. **Text Sections:** Use text shadows and spacing, not containers
3. **Feature Lists:** Use typography hierarchy, not card containers
4. **Badges/Labels:** Inline elements with shadows, not boxed containers
5. **Social Proof:** Flat text/icons, not card-based layouts

### Exception Cases

If a transparent container is absolutely necessary for functionality (e.g., modal content, dropdown menus), use solid backgrounds with minimal transparency, or ensure it's clearly a functional overlay, not a decorative card component.

---

**Last Updated:** 2025-01-XX
**Applies To:** All projects, all components, all design systems

