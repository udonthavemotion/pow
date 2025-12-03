---
title: Refactor for Clarity
description: Refactors a piece of code to improve its readability, maintainability, and adherence to best practices.
tags: [refactoring, code-quality, readability, maintainability, best-practices]
use_cases:
  - Cleaning up a complex function or class.
  - Improving the readability of legacy code.
  - Ensuring code follows the Single Responsibility Principle.
---

# Refactor for Clarity

## Description
This prompt helps you refactor a specific piece of code to make it cleaner, more readable, and easier to maintain. It focuses on improving the code's structure and clarity without changing its functionality.

## Quick Version
```
Refactor this code to improve its readability and maintainability. Explain the changes you made.

[PASTE YOUR CODE HERE]
```

## Max Power Version
```
You are a senior software engineer specializing in code quality and clean architecture. Your task is to refactor the following code to improve its long-term maintainability, flexibility, and readability.

Analyze the code and provide a refactored version that addresses the following:
1.  **Clarity:** Simplify complex logic, improve variable names, and add comments where necessary.
2.  **Single Responsibility Principle:** Break down long functions or classes into smaller, more focused units.
3.  **Best Practices:** Ensure the code adheres to the best practices and idiomatic style of [LANGUAGE/FRAMEWORK].
4.  **Don't Change Functionality:** The refactored code must produce the exact same output and behavior as the original.

First, provide the fully refactored code. Then, provide a brief, clear explanation of the key changes you made and why they improve the code.

Here is the code:
[PASTE YOUR CODE HERE]
```

## Example Usage

**To refactor a complex Python function:**

"You are a senior software engineer specializing in code quality and clean architecture... Here is the code:

```python
def handle_user_data(data):
    # ... complex, nested logic ...
```

## Tips
- **Provide Context:** If the code interacts with other parts of your application, provide a brief explanation of that context to help the AI make better refactoring decisions.
- **Specify Language/Framework:** Always fill in the `[LANGUAGE/FRAMEWORK]` placeholder to get the most relevant and idiomatic suggestions.
- **Test the Output:** Always test the refactored code to ensure it behaves exactly as the original.
