---
title: Test Coverage Analyzer
description: Analyzes code to identify areas lacking test coverage.
tags: [testing, coverage, quality-assurance, gaps, improvement]
use_cases:
  - Identifying untested code paths.
  - Improving overall test coverage.
  - Prioritizing testing efforts.
---

# Test Coverage Analyzer

## Description
This prompt analyzes your code to identify areas that lack test coverage and suggests which tests to write first. It helps you prioritize testing efforts and improve the overall reliability of your codebase.

## Quick Version
```
Analyze this code and tell me what tests are missing:

[PASTE CODE]
```

## Max Power Version
```
You are a QA engineer specializing in test coverage. Analyze the following code and its existing tests to identify gaps in test coverage.

**Code:**
[PASTE CODE]

**Existing Tests:**
[PASTE TESTS OR SAY "No tests yet"]

Provide a coverage analysis with:
1. **Coverage Assessment:** What percentage of the code is covered (estimate)?
2. **Untested Code Paths:** Identify specific functions, branches, or edge cases that lack tests.
3. **Priority Tests:** List the top 5 tests that should be written first, ordered by importance.
4. **Risk Areas:** Identify the riskiest untested code (e.g., error handling, authentication).
5. **Test Templates:** For the top 3 priority tests, provide a test template showing what should be tested.

Focus on high-value tests that catch real bugs, not just increasing coverage numbers.
```

## Tips
- Use coverage tools (like Jest's coverage report) alongside AI analysis.
- Prioritize testing critical paths and error handling.
- Aim for meaningful coverage, not 100% coverage.
