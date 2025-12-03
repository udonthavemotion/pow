---
title: Accessibility Review
description: Reviews code for accessibility issues and suggests improvements.
tags: [accessibility, a11y, wcag, inclusive-design, ux]
use_cases:
  - Ensuring your application is usable by everyone.
  - Meeting WCAG compliance requirements.
  - Improving keyboard navigation and screen reader support.
---

# Accessibility Review

## Description
This prompt reviews your code for accessibility issues, ensuring your application is usable by people with disabilities. It checks for proper semantic HTML, ARIA labels, keyboard navigation, and color contrast.

## Quick Version
```
Review this code for accessibility issues:

[PASTE HTML/JSX]
```

## Max Power Version
```
You are an accessibility specialist with expertise in WCAG 2.1 guidelines. Review the following code for accessibility issues and suggest improvements.

**Code:**
[PASTE HTML/JSX]

**Target Compliance Level:** [AA or AAA]

Review for:
1. **Semantic HTML:** Are the correct HTML elements being used?
2. **ARIA Labels:** Are interactive elements properly labeled for screen readers?
3. **Keyboard Navigation:** Can users navigate and interact using only the keyboard?
4. **Color Contrast:** Do text and background colors meet WCAG contrast requirements?
5. **Focus Indicators:** Are focus states clearly visible?
6. **Alt Text:** Do images have descriptive alt text?
7. **Form Labels:** Are form inputs properly labeled?

For each issue found:
- Explain why it's a problem.
- Provide the corrected code.
- Reference the specific WCAG guideline.
```

## Tips
- Use automated tools (like axe DevTools) alongside AI review.
- Test with actual screen readers (NVDA, JAWS, VoiceOver).
- Accessibility benefits everyone, not just users with disabilities.
