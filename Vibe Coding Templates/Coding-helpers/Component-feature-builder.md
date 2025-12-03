---
title: Component Feature Builder
description: Guides the AI to build a new feature or component in a structured, step-by-step manner.
tags: [coding-helper, feature-builder, stepwise-prompting, component, new-feature]
use_cases:
  - Building a new UI component from scratch.
  - Adding a new feature to an existing application.
  - Ensuring complex features are built in a logical, manageable way.
---

# Component/Feature Builder

## Description
This prompt uses a stepwise approach to guide the AI in building a new feature or component. By breaking the task into manageable steps and requiring confirmation at each stage, you can ensure the final code is well-structured, context-aware, and free of common AI hallucinations.

## Quick Version
```
I want to build a new [COMPONENT/FEATURE NAME] in [LANGUAGE/FRAMEWORK].

First, create the basic file structure and boilerplate. Wait for my confirmation before adding the core logic.
```

## Max Power Version
```
You are my expert AI pair programmer. We are going to build a new feature: [FEATURE DESCRIPTION].

Let's do this step-by-step to ensure quality. Do not move to the next step until I confirm the current one is correct.

**Step 1: Plan**
First, outline a build plan. List the files you will create or modify, the components you will build, and any dependencies you will need. Explain your reasoning.

Wait for my confirmation before proceeding.

**Step 2: Boilerplate**
Once I approve the plan, generate the basic file structure and boilerplate code for each component. Keep it minimal, with placeholders for the core logic.

Wait for my confirmation before proceeding.

**Step 3: Core Logic**
Next, implement the core logic for the feature, following the plan we agreed on. Add clear comments to explain complex parts of the code.

Wait for my confirmation before proceeding.

**Step 4: Styling & Polish**
Now, add the styling using [STYLING_FRAMEWORK, e.g., Tailwind CSS, Chakra UI]. Ensure the component is responsive and matches our existing design system.

Wait for my confirmation before proceeding.

**Step 5: Testing**
Finally, generate a test suite for the new feature. Include unit tests for the core logic and integration tests for the component's interactions. Cover edge cases and invalid inputs.
```

## Example Usage

**To start building a login form in a Next.js app:**

"You are my expert AI pair programmer. We are going to build a new feature: a user login form with email and password fields in our Next.js application.

Let's do this step-by-step to ensure quality. Do not move to the next step until I confirm the current one is correct.

**Step 1: Plan**
First, outline a build plan. List the files you will create or modify, the components you will build, and any dependencies you will need. Explain your reasoning."

## Tips
- **Be Patient:** The stepwise process can feel slower at first, but it saves significant time on debugging and refactoring later.
- **Provide Feedback:** At each confirmation step, provide clear feedback. For example: "The plan looks good, but let's use Zustand for state management instead of Redux."
- **Combine with Context:** For best results, provide context about your project's tech stack, coding standards, and existing file structure before using this prompt.
