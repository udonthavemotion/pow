---
title: Edge Case Test Creator
description: Generates tests specifically for edge cases you might not think of.
tags: [testing, edge-cases, quality-assurance, bug-prevention, comprehensive-testing]
use_cases:
  - Ensuring your code handles unusual inputs.
  - Preventing bugs from edge cases in production.
  - Improving test coverage with non-obvious scenarios.
---

# Edge Case Test Creator

## Description
This prompt generates tests specifically for edge cases—the unusual inputs and scenarios that are easy to overlook but can cause bugs in production. It helps you think like an attacker or a creative user who might use your application in unexpected ways.

## Quick Version
```
Generate edge case tests for this function:

[PASTE FUNCTION]
```

## Max Power Version
```
You are a QA specialist with expertise in finding edge cases. Your task is to generate comprehensive edge case tests for the following code.

**Code:**
[PASTE CODE]

**Context:** [DESCRIBE WHAT THIS CODE DOES IN THE APPLICATION]

Generate tests for these categories of edge cases:
1. **Boundary Values:** Test with minimum, maximum, and just-beyond-boundary values.
2. **Empty/Null/Undefined:** Test with empty strings, null, undefined, empty arrays/objects.
3. **Type Mismatches:** Test with unexpected types (e.g., passing a string where a number is expected).
4. **Special Characters:** Test with special characters, Unicode, emojis, SQL injection attempts.
5. **Concurrency:** If applicable, test race conditions or simultaneous operations.
6. **Resource Limits:** Test with very large inputs or many simultaneous requests.

For each test:
- Provide the test code using [TESTING_FRAMEWORK].
- Explain what edge case it's testing and why it matters.
- Specify the expected behavior.
```

## Tips
- Think about how users might misuse or abuse the feature.
- Consider what happens when external services fail or return unexpected data.
- These tests often catch bugs that slip through normal testing.
