---
title: Pattern Extension
description: Extends existing code patterns to new features while maintaining consistency.
tags: [coding-helper, pattern-matching, consistency, code-style, few-shot]
use_cases:
  - Adding a new API endpoint that matches existing patterns.
  - Creating a new component that follows your design system.
  - Maintaining consistency across a growing codebase.
---

# Pattern Extension

## Description
This prompt teaches the AI your existing code patterns by providing examples, then asks it to extend those patterns to new features. This ensures consistency and reduces stylistic drift in your codebase.

## Quick Version
```
Here's how we structure our [PATTERN TYPE, e.g., "API routes"]:

[PASTE EXAMPLE]

Now create a new one for [NEW FEATURE].
```

## Max Power Version
```
You are my expert AI pair programmer. I want you to learn from our existing code patterns and extend them to a new feature.

**Existing Pattern:**
[PASTE 1-2 EXAMPLES OF YOUR EXISTING CODE]

**New Feature:**
[DESCRIBE WHAT YOU WANT TO BUILD]

Analyze the existing pattern and identify:
1. Naming conventions
2. File structure
3. Code organization
4. Comment style
5. Any other consistent patterns

Then generate the new code following these exact same patterns. The new code should look like it was written by the same person who wrote the examples.
```

## Tips
- Provide 2-3 examples of the pattern for best results.
- Choose your best, most representative code as examples.
- This works great for API routes, React components, database models, and more.
