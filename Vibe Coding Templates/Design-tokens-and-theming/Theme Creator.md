---
title: Theme Creator
description: Creates a complete theme with light and dark mode variants.
tags: [theming, dark-mode, light-mode, css-variables, design-tokens]
use_cases:
  - Adding dark mode support to your application.
  - Creating multiple theme options for users.
  - Building a theme switcher feature.
---

# Theme Creator

## Description
This prompt generates a complete theme system with light and dark mode variants. It creates the necessary CSS variables or theme objects to support theme switching in your application.

## Quick Version
```
Create light and dark themes using CSS variables. Primary color is [COLOR].
```

## Max Power Version
```
You are a UI/UX designer specializing in theming. Create a complete theme system with light and dark mode variants.

**Primary Brand Color:** [HEX CODE]
**Format:** [CSS variables / JavaScript object / Tailwind config]

Generate themes with:
1. **Colors:** Background, foreground, primary, secondary, accent, muted, and border colors for both light and dark modes.
2. **Semantic Colors:** Success, warning, error, and info colors that work in both modes.
3. **Contrast:** Ensure all color combinations meet WCAG AA accessibility standards.
4. **Implementation:** Provide the complete theme code and a brief example of how to toggle between themes.

The dark mode should be easy on the eyes (not pure black) and the light mode should be comfortable for extended reading.
```

## Tips
- Test your themes with actual content to ensure readability.
- Consider user preference and system settings for default theme.
- Provide a smooth transition animation when switching themes.
