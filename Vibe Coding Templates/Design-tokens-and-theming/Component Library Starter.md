---
title: Component Library Starter
description: Creates a starter component library with common UI components.
tags: [component-library, ui-components, design-system, reusable, storybook]
use_cases:
  - Starting a new component library project.
  - Creating a shared component library for multiple projects.
  - Building a design system from scratch.
---

# Component Library Starter

## Description
This prompt generates a starter component library with common UI components, proper file structure, and documentation. It's perfect for teams that want to maintain consistent UI across multiple projects.

## Quick Version
```
Create a component library starter with [FRAMEWORK] and [STYLING_APPROACH].
```

## Max Power Version
```
You are a senior frontend architect. Create a starter component library using [FRAMEWORK] and [STYLING_APPROACH].

**Requirements:**
- Components should be reusable and composable.
- Include TypeScript types for all props.
- Follow accessibility best practices.
- Include proper documentation for each component.

**Components to include:**
1. Button (with variants: primary, secondary, danger)
2. Input (text, email, password)
3. Card
4. Modal
5. Dropdown

For each component, provide:
1. The component code.
2. TypeScript prop types.
3. Usage examples.
4. A brief description of when to use it.

Also provide:
- File structure for the library.
- Package.json with necessary dependencies.
- Instructions for local development and building.
```

## Tips
- Use Storybook for component documentation and development.
- Version your component library and publish to npm for easy sharing.
- Create a changelog to track component updates.
