---
title: Error-Forward Debugging
description: Feeds a compiler error or stack trace to the AI for a quick and accurate fix.
tags: [debugging, error-handling, stack-trace, compiler-error, bug-fix]
use_cases:
  - Quickly fixing compiler errors.
  - Understanding and resolving runtime exceptions.
  - Debugging issues in unfamiliar codebases.
---

# Error-Forward Debugging

## Description
This prompt leverages the AI's pattern-matching capabilities to quickly debug and fix code based on a specific error message or stack trace. Instead of describing the problem, you provide the error directly to the AI, leading to faster and more accurate solutions.

## Quick Version
```
I'm getting the following error. Fix the code to resolve it.

**Error:**
[PASTE ERROR MESSAGE OR STACK TRACE HERE]

**Code:**
[PASTE RELEVANT CODE SNIPPET HERE]
```

## Max Power Version
```
You are an expert debugger. Your task is to analyze the following error message and code, identify the root cause of the error, and provide a corrected version of the code.

**Error:**
[PASTE FULL ERROR MESSAGE OR STACK TRACE HERE]

**Code:**
[PASTE RELEVANT CODE, INCLUDING SURROUNDING LINES FOR CONTEXT]

First, provide the corrected, fully working code. 

Then, provide a clear, step-by-step explanation of:
1.  What caused the error.
2.  How your fix resolves the issue.
3.  How to prevent this type of error in the future.

Do not change any logic that is unrelated to the error.
```

## Example Usage

**To fix a TypeScript error:**

"You are an expert debugger... 

**Error:**
`Type 'string | null' is not assignable to type 'string'.`

**Code:**
```typescript
const element = document.getElementById('my-element');
const text: string = element.textContent;
```

## Tips
- **Provide the Full Error:** Don't truncate the error message. The full stack trace provides valuable context for the AI.
- **Include Surrounding Code:** Providing a few lines of code before and after the error location helps the AI understand the context and dependencies.
- **Ask for Prevention Tips:** The "Max Power Version" helps you learn from your mistakes by asking for prevention strategies, and receiving, preventative advice.
