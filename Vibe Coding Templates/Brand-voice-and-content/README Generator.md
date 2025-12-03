---
title: README Generator
description: Generates a comprehensive and user-friendly README file for your project.
tags: [readme, documentation, brand-voice, content, getting-started]
use_cases:
  - Creating a README for a new open-source project.
  - Improving the documentation for an existing project.
  - Ensuring your project is welcoming and easy to understand for new contributors.
---

# README Generator

## Description
This prompt generates a high-quality, comprehensive README file for your project. It includes all the essential sections, from installation and usage to contributing guidelines, ensuring your project is well-documented and easy for others to use.

## Quick Version
```
Generate a README file for my project. It's a [PROJECT_TYPE] called [PROJECT_NAME].

Here is the file structure:
[PASTE FILE STRUCTURE]
```

## Max Power Version
```
You are a technical writer specializing in open-source documentation. Your task is to create a comprehensive and user-friendly README.md file for my project.

**Project Name:** [PROJECT_NAME]
**Project Type:** [PROJECT_TYPE, e.g., "React component library", "Python data analysis tool"]
**One-Liner Description:** [BRIEF, CATCHY DESCRIPTION OF YOUR PROJECT]

Generate a README with the following sections:
1.  **Project Title & One-Liner:** Include the project name and the one-liner description.
2.  **Badges:** Add placeholders for common badges (e.g., build status, license, npm version).
3.  **Overview:** A 2-3 paragraph explanation of what the project does and why it's useful.
4.  **Features:** A bulleted list of the key features.
5.  **Getting Started:**
    -   **Prerequisites:** List any prerequisites (e.g., Node.js version, Python version).
    -   **Installation:** Provide a clear, copy-pasteable installation command.
6.  **Usage:** Show a clear, simple code example of how to use the project.
7.  **Configuration:** If applicable, explain any configuration options.
8.  **Contributing:** Provide a brief guide for new contributors (e.g., "Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.").
9.  **License:** State the project's license (e.g., "Distributed under the MIT License.").

Assume the reader is a developer who is new to your project. Use a friendly and encouraging tone. Add emoji callouts where helpful.
```

## Example Usage

**To generate a README for a new React component library:**

"You are a technical writer... 

**Project Name:** `react-cool-buttons`
**Project Type:** `React component library`
**One-Liner Description:** `A collection of beautiful, animated buttons for React.`

Generate a README with the following sections..."

## Tips
- **Provide a File Structure:** For better results, you can provide the AI with your project's file structure to help it understand the project's organization.
- **Be Specific:** The more specific you are in the `[PROJECT_TYPE]` and `[ONE-LINER DESCRIPTION]` fields, the better the generated README will be.
- **Customize:** Use the generated README as a starting point and customize it to fit your project's unique needs.
