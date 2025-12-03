---
title: API Integration Builder
description: Generates code to integrate with a third-party API.
tags: [api, integration, http, rest, webhooks]
use_cases:
  - Connecting to a payment provider like Stripe.
  - Integrating with a CRM or marketing platform.
  - Building a wrapper around a third-party API.
---

# API Integration Builder

## Description
This prompt generates the code needed to integrate with a third-party API, including authentication, request handling, error handling, and response parsing. It saves you from reading through API documentation and writing boilerplate code.

## Quick Version
```
Write code to integrate with the [API_NAME] API in [LANGUAGE]. I need to [WHAT YOU WANT TO DO, e.g., "create a customer"].
```

## Max Power Version
```
You are an integration specialist. Generate code to integrate with the [API_NAME] API.

**Language/Framework:** [YOUR TECH STACK]
**API Documentation:** [LINK TO API DOCS OR PASTE KEY ENDPOINTS]
**What I Need to Do:** [DESCRIBE THE INTEGRATION, e.g., "Create a customer, charge their card, and handle webhooks for payment events"]

Generate the integration code with:
1. **Authentication:** Handle API keys, OAuth, or other auth methods securely.
2. **API Client:** Create a client class or module with methods for each API operation.
3. **Error Handling:** Handle API errors, rate limits, and network failures gracefully.
4. **Type Safety:** If using TypeScript or a typed language, include type definitions for requests and responses.
5. **Example Usage:** Show a simple example of how to use the integration.
6. **Environment Variables:** List the environment variables needed (e.g., API keys).

Ensure the code is production-ready, secure, and follows best practices.
```

## Tips
- Provide a link to the API documentation for best results.
- Store API keys in environment variables, never in code.
- Test the integration thoroughly, including error scenarios.
