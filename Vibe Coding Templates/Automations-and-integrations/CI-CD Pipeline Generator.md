---
title: CI/CD Pipeline Generator
description: Generates a basic CI/CD pipeline configuration file for GitHub Actions.
tags: [automations, ci-cd, github-actions, deployment, devops]
use_cases:
  - Setting up a CI/CD pipeline for a new project.
  - Automating the testing and building of your application.
  - Creating a repeatable deployment process.
---

# CI/CD Pipeline Generator

## Description
This prompt generates a basic CI/CD pipeline configuration file for GitHub Actions. It helps you automate the process of testing, building, and deploying your application, ensuring a consistent and reliable release process.

## Quick Version
```
Generate a GitHub Actions workflow file to build and test my [LANGUAGE/FRAMEWORK] project.
```

## Max Power Version
```
You are a DevOps specialist. Your task is to generate a basic CI pipeline configuration file for GitHub Actions (`.github/workflows/ci.yml`).

My project uses [LANGUAGE/FRAMEWORK] and the package manager is [PACKAGE_MANAGER, e.g., npm, yarn, pip].

Generate a pipeline that triggers on every push to the `main` branch and automatically performs the following steps:
1.  **Checkout:** Checks out the code.
2.  **Setup:** Sets up the correct version of [LANGUAGE, e.g., Node.js, Python].
3.  **Install Dependencies:** Installs the project dependencies using [PACKAGE_MANAGER].
4.  **Lint:** Runs the linter to check for code style issues.
5.  **Test:** Runs the test suite to ensure the code is working correctly.
6.  **Build:** Builds the application for production.

Provide the complete, copy-paste-ready YAML file. Add comments to explain each step of the workflow.
```

## Example Usage

**To generate a CI pipeline for a Node.js project:**

"You are a DevOps specialist... 

My project uses `Node.js/React` and the package manager is `npm`.

Generate a pipeline that triggers on every push to the `main` branch..."

## Tips
- **Specify Versions:** For best results, specify the versions of your language and tools (e.g., `Node.js 18`, `Python 3.10`).
- **Customize the Trigger:** You can customize the trigger for the workflow. For example, you can have it run on pull requests as well: `on: [push, pull_request]`.
- **Add Deployment:** This prompt focuses on the CI part of CI/CD. You can extend the generated workflow to include a deployment step (e.g., deploying to a cloud provider like Vercel, Netlify, or AWS).
