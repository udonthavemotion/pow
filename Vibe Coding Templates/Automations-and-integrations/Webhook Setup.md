---
title: Webhook Setup
description: Generates code to receive and process webhooks from third-party services.
tags: [webhooks, integrations, event-driven, api, automation]
use_cases:
  - Receiving payment notifications from Stripe.
  - Processing events from GitHub or GitLab.
  - Building event-driven integrations.
---

# Webhook Setup

## Description
This prompt generates the code needed to receive and process webhooks from third-party services. It includes endpoint creation, signature verification, event handling, and error handling.

## Quick Version
```
Create a webhook endpoint for [SERVICE_NAME] in [LANGUAGE/FRAMEWORK].
```

## Max Power Version
```
You are an integration specialist. Create a webhook endpoint to receive events from [SERVICE_NAME].

**Framework:** [YOUR FRAMEWORK]
**Events to Handle:** [LIST EVENTS, e.g., "payment.succeeded, payment.failed"]

Generate code that:
1. **Endpoint:** Creates a POST endpoint at `/webhooks/[service-name]`.
2. **Signature Verification:** Verifies the webhook signature to ensure it's from the legitimate service.
3. **Event Parsing:** Parses the webhook payload.
4. **Event Handling:** Routes different event types to appropriate handlers.
5. **Error Handling:** Handles parsing errors and returns appropriate HTTP status codes.
6. **Logging:** Logs all webhook events for debugging.
7. **Idempotency:** Ensures the same webhook isn't processed multiple times.

Provide:
1. The complete webhook endpoint code.
2. Example event handlers for each event type.
3. Instructions for configuring the webhook in [SERVICE_NAME].
4. Security best practices for webhook endpoints.
```

## Tips
- Always verify webhook signatures to prevent spoofing.
- Make webhook handlers idempotent to handle duplicate deliveries.
- Log all webhook events for debugging and audit trails.
