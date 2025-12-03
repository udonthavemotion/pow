---
title: Design Token Generator
description: Generates a set of design tokens for colors, typography, and spacing.
tags: [design-tokens, theming, css, design-system, visual-identity]
use_cases:
  - Establishing a consistent visual identity for a new project.
  - Creating a theme file for a component library.
  - Generating a set of CSS variables for a new website.
---

# Design Token Generator

## Description
This prompt generates a set of design tokens for colors, typography, and spacing. It helps you establish a consistent and scalable design system from the very beginning of a project. The output can be used as a theme file, a set of CSS variables, or a foundation for a component library.

## Quick Version
```
Generate a set of design tokens for a new project. I need colors, fonts, and spacing.

The primary color should be [COLOR, e.g., "blue"].
```

## Max Power Version
```
You are a senior UI/UX designer. Your task is to generate a comprehensive set of design tokens for a new web application. The brand identity is [BRAND_IDENTITY, e.g., "modern and minimalist", "playful and vibrant"].

Generate the tokens in [FORMAT, e.g., "CSS variables", "JSON", "JavaScript object"] with the following structure:

**1. Colors:**
   - **Primary:** A primary color based on [PRIMARY_COLOR, e.g., "#3B82F6"] and 5-7 shades (e.g., `primary-100` to `primary-900`).
   - **Neutral:** A neutral gray color and 5-7 shades (e.g., `neutral-100` to `neutral-900`).
   - **Feedback:** Colors for success, error, and warning states.

**2. Typography:**
   - **Font Family:** A `sans-serif` font family and a `monospace` font family.
   - **Font Sizes:** A modular scale of at least 6 font sizes (e.g., `text-xs`, `text-sm`, `text-base`, `text-lg`, `text-xl`, `text-2xl`).
   - **Font Weights:** At least three font weights (e.g., `light`, `normal`, `bold`).

**3. Spacing:**
   - A modular scale of at least 8 spacing units (e.g., `space-1`, `space-2`, `space-4`, `space-8`, `space-12`, `space-16`, `space-24`, `space-32`).

Provide the complete, copy-paste-ready code block. After the code, briefly explain the logic behind your choices for the modular scales.
```

## Example Usage

**To generate a set of CSS variables for a modern, minimalist web app:**

"You are a senior UI/UX designer... The brand identity is `modern and minimalist`.

Generate the tokens in `CSS variables` with the following structure...

**1. Colors:**
   - **Primary:** A primary color based on `blue` and 5-7 shades...

## Tips
- **Be Specific with Color:** Instead of just "blue", provide a specific hex code or a more descriptive color like "sky blue" to get better results.
- **Specify the Format:** Clearly define the output format you need (CSS, JSON, JS object) to ensure the output is immediately usable.
- **Iterate on the Output:** Use the generated tokens as a starting point and fine-tune them to perfectly match your brand's visual identity.
