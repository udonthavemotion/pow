---
title: Configuration Extraction
description: Extracts hardcoded values into a centralized configuration file.
tags: [refactoring, configuration, environment-variables, best-practices, maintainability]
use_cases:
  - Removing magic numbers and hardcoded strings.
  - Creating environment-specific configurations.
  - Improving code maintainability and flexibility.
---

# Configuration Extraction

## Description
This prompt identifies hardcoded configuration values in your code (like API endpoints, magic numbers, or feature flags) and extracts them into a centralized configuration file. This makes your code more maintainable and easier to configure for different environments.

## Quick Version
```
Extract all hardcoded configuration values from this code into a config file:

[PASTE CODE]
```

## Max Power Version
```
You are a senior software engineer specializing in code maintainability. Your task is to extract all hardcoded configuration values from the following code into a centralized configuration system.

**Code:**
[PASTE CODE]

**Target Configuration Format:** [e.g., ".env file", "config.js", "YAML file"]

Identify and extract:
1. **API Endpoints:** Any hardcoded URLs.
2. **Magic Numbers:** Numeric constants that should be configurable.
3. **Feature Flags:** Boolean values that control features.
4. **Environment-Specific Values:** Anything that might change between dev/staging/production.
5. **Secrets:** Any API keys or passwords (flag these as critical!).

Provide:
1. The refactored code with configuration values replaced by references.
2. The configuration file with all extracted values.
3. A list of environment variables needed (with example values).
4. Any hardcoded secrets that need immediate attention.
```

## Tips
- Never commit secrets to version control—use environment variables.
- Create a `.env.example` file to document required configuration.
- Use different configuration files for different environments.
