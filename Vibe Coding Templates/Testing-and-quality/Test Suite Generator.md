---
title: Test Suite Generator
description: Generates a complete test suite for a function, class, or module.
tags: [testing, quality-assurance, unit-testing, integration-testing, jest]
use_cases:
  - Writing unit tests for a new function.
  - Creating an integration test for a new component.
  - Ensuring high test coverage for your codebase.
---

# Test Suite Generator

## Description
This prompt generates a comprehensive test suite for a given piece of code. It helps you ensure your code is reliable by testing for normal inputs, edge cases, and invalid inputs. It can be adapted to your preferred testing framework.

## Quick Version
```
Write unit tests for this function using [TESTING_FRAMEWORK, e.g., Jest, PyTest].

[PASTE YOUR FUNCTION HERE]
```

## Max Power Version
```
You are a senior software engineer with expertise in test-driven development (TDD). Your task is to generate a complete and robust test suite for the following [CODE_TYPE, e.g., "function", "React component", "class"].

**Code to be tested:**
[PASTE YOUR CODE HERE]

Generate the test suite using [TESTING_FRAMEWORK, e.g., Jest, PyTest] and adhere to the following requirements:
1.  **Normal Inputs:** Include tests for typical, expected inputs.
2.  **Edge Cases:** Include tests for edge cases (e.g., empty arrays, zero values, null inputs).
3.  **Invalid Inputs:** Include tests for invalid inputs and ensure the code handles them gracefully (e.g., throws an error, returns a default value).
4.  **Mocks:** If the code has external dependencies (e.g., API calls, database connections), provide mocked implementations for them.
5.  **Clarity:** Use descriptive test names (e.g., `it('should return true when the user is an admin')`) and include comments to explain complex test setups.

Provide the complete, copy-paste-ready test file.
```

## Example Usage

**To generate tests for a JavaScript utility function:**

"You are a senior software engineer... Your task is to generate a complete and robust test suite for the following `function`.

**Code to be tested:**
```javascript
function sum(a, b) {
  return a + b;
}
```

Generate the test suite using `Jest`..."

## Tips
- **Specify the Framework:** Always provide the `[TESTING_FRAMEWORK]` to get the correct syntax and conventions.
- **Provide Dependencies:** If the code has dependencies, provide their code or a brief description to help the AI create accurate mocks.
- **Iterate on Tests:** Use the generated tests as a starting point and add more specific tests based on your knowledge of the application's business logic.
