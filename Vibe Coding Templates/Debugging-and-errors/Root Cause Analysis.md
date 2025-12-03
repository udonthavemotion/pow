---
title: Root Cause Analysis
description: Analyzes a bug to identify its root cause and prevent future occurrences.
tags: [debugging, root-cause, bug-analysis, prevention, learning]
use_cases:
  - Understanding why a bug occurred.
  - Preventing similar bugs in the future.
  - Learning from mistakes in your codebase.
---

# Root Cause Analysis

## Description
This prompt goes beyond just fixing a bug—it helps you understand why the bug occurred in the first place and how to prevent similar issues in the future. It's a learning tool that improves your development practices over time.

## Quick Version
```
Analyze this bug and explain what caused it:

[DESCRIBE THE BUG AND PASTE RELEVANT CODE]
```

## Max Power Version
```
You are a senior debugging specialist. Perform a root cause analysis of the following bug.

**Bug Description:** [DESCRIBE WHAT WENT WRONG]

**Expected Behavior:** [WHAT SHOULD HAVE HAPPENED]

**Actual Behavior:** [WHAT ACTUALLY HAPPENED]

**Code:**
[PASTE RELEVANT CODE]

Provide an analysis with:
1. **Root Cause:** What is the fundamental reason this bug occurred?
2. **Contributing Factors:** What conditions or assumptions allowed this bug to exist?
3. **The Fix:** Provide the corrected code.
4. **Prevention Strategy:** How can we prevent this type of bug in the future? (e.g., add tests, use TypeScript, add validation)
5. **Related Risks:** Are there other places in the codebase that might have similar issues?
```

## Tips
- Be honest about what you expected vs. what happened.
- Use this for recurring bugs or bugs that caused significant issues.
- Implement the prevention strategies to improve code quality over time.
