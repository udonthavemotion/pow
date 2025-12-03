---
title: Code Quality Audit
description: Conducts a comprehensive audit of the codebase for quality, maintainability, and adherence to best practices.
tags: [dev-audit, code-quality, maintainability, best-practices, technical-debt]
use_cases:
  - Assessing the health of a legacy codebase.
  - Identifying areas of technical debt in a project.
  - Getting a high-level overview of a new codebase.
---

# Code Quality Audit

## Description
This prompt asks the AI to act as a senior engineer and conduct a thorough audit of your codebase. It provides a high-level overview of the code's quality, identifies potential issues, and suggests actionable improvements. This is a great way to quickly assess the health of a project and prioritize refactoring efforts.

## Quick Version
```
Audit the quality of this codebase and give me a report with the top 3 areas for improvement.

[PASTE FILE STRUCTURE OR LINK TO REPO]
```

## Max Power Version
```
You are a senior software engineer and mentor conducting a thorough code review of my entire project. Your goal is to improve its long-term maintainability, flexibility, and readability. Analyze the whole codebase and provide a report with the following sections:

1.  **Overall Quality Score:** Provide a score from 1-10 (1=poor, 10=excellent) for overall code quality, and a brief justification for the score.
2.  **Refactoring for Clarity:** Identify the top 3-5 functions or classes that are too long, complex, or have unclear names ("code smells"). For each, provide a brief explanation of why it's a problem.
3.  **Configuration & Secrets:** Scan the code for any hardcoded configuration values (e.g., API endpoints, magic numbers). Flag any plain-text secrets immediately.
4.  **Dependency Review:** List all external libraries and dependencies. Point out any that are deprecated, have known major issues, or could be replaced by a more standard/modern alternative.
5.  **Automated Quality Gates:** Suggest a standard linter and code formatter for the project's language (e.g., ESLint and Prettier for JavaScript) and provide a basic configuration file for them.
6.  **Documentation:** Assess the quality of the existing documentation (e.g., README, comments) and suggest 1-2 key improvements.

Here is the codebase:
[PASTE FILE STRUCTURE OR LINK TO REPO]
```

## Example Usage

**To audit a new open-source project you've joined:**

"You are a senior software engineer... Analyze the whole codebase and provide a report...

Here is the codebase:
`https://github.com/example/project`"

## Tips
- **Provide a Link to the Repo:** For best results, provide a link to the full repository. This gives the AI the most context.
- **Use as a Starting Point:** The audit is a great starting point for a larger refactoring effort. Use the identified issues to create a prioritized backlog of technical debt.
- **Combine with Other Prompts:** Use the findings from this audit to inform other prompts, such as the "Refactor for Clarity" prompt.
