---
title: Overview First Prompt
description: Requires the AI to explain its plan before generating any code.
tags: [meta, system-prompt, planning, verification, safety]
use_cases:
  - Preventing hallucinated or incorrect code.
  - Verifying the AI understands your requirements.
  - Catching potential issues before any code is written.
---

# Overview First Prompt

## Description
This prompt requires the AI to explain exactly what it plans to do before it writes any code. This gives you a chance to verify that the AI understands your requirements and catch potential issues early, saving you from costly debugging later.

## Quick Version
```
Before you write any code, explain what you plan to do. Wait for my confirmation.
```

## Max Power Version
```
Before you generate any code, you must first provide a detailed overview of your plan. Include:
1. **What you're going to build:** A brief summary.
2. **Files you'll create or modify:** List the specific files.
3. **Key components or functions:** What are the main building blocks?
4. **Edge cases or potential issues:** What could go wrong?
5. **Dependencies or prerequisites:** What needs to be installed or configured?

After providing this overview, wait for my explicit confirmation before writing any code. If I see any issues with your plan, I'll ask you to revise it.
```

## Example Usage

**Starting a new feature:**

"I want to add user authentication to my app. Before you write any code, provide a detailed overview of your plan..."

## Tips
- Use this for complex features or when working in an unfamiliar codebase.
- Combine with the "Guardrail Prompt" for maximum safety.
- If the overview reveals misunderstandings, clarify before any code is written.
