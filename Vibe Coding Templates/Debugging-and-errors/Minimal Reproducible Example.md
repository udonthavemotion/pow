---
title: Minimal Reproducible Example
description: Creates a minimal code example that reproduces a bug.
tags: [debugging, reproduction, bug-report, minimal-example, isolation]
use_cases:
  - Reporting bugs to library maintainers.
  - Isolating the cause of a complex bug.
  - Creating a test case for a bug fix.
---

# Minimal Reproducible Example

## Description
This prompt helps you create a minimal, reproducible example of a bug—the smallest amount of code needed to demonstrate the issue. This is invaluable for debugging, reporting bugs to library maintainers, and creating test cases.

## Quick Version
```
Create a minimal reproducible example of this bug:

[DESCRIBE THE BUG]
```

## Max Power Version
```
You are a debugging specialist. Create a minimal reproducible example (MRE) that demonstrates the following bug.

**Bug Description:** [DESCRIBE WHAT'S WRONG]

**Current Code:** [PASTE YOUR FULL CODE OR LINK TO REPO]

Create an MRE that:
1. **Is Minimal:** Remove all code that isn't necessary to reproduce the bug.
2. **Is Complete:** Include all imports, dependencies, and setup needed to run it.
3. **Is Reproducible:** Anyone should be able to copy-paste and see the bug.
4. **Isolates the Issue:** Focus on the specific problem, not the entire application.

Provide:
1. The complete MRE code.
2. Steps to reproduce the bug.
3. Expected vs. actual behavior.
4. Your hypothesis about what's causing the bug (if you have one).
```

## Example Usage

**When you have a complex bug in a large codebase:**

"You are a debugging specialist... 

**Bug Description:** My React component isn't re-rendering when state changes.

**Current Code:** [link to your repo or paste the component]"

## Tips
- The process of creating an MRE often helps you find the bug yourself.
- MREs are essential for getting help on Stack Overflow or GitHub issues.
- Use online code playgrounds (CodeSandbox, StackBlitz) to share MREs.
