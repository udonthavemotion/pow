# Universal Design Rules

> **Note:** This file can be copied to any project's `.cursor/` directory or root directory to ensure consistent design preferences across all projects.

## Core Design Principle

**Avoid transparent boxed card components.** Use flat, integrated designs where content sits directly on backgrounds.

## Quick Reference

### ❌ Don't Create:
- `bg-white/10 backdrop-blur-sm rounded-xl` (transparent cards)
- `bg-black/20 backdrop-blur-md rounded-2xl border` (glassmorphism boxes)
- Any container that creates a "floating card" appearance

### ✅ Do Create:
- Flat content with `drop-shadow-lg` or `drop-shadow-2xl`
- Direct background integration
- Typography-based hierarchy
- Spacing-based layouts

### Exception:
Transparency is OK for modal backdrops, image overlays, and navigation bars - but NOT for content containers.

---

**Full Documentation:** See `DESIGN_PREFERENCES.md` in project root.

