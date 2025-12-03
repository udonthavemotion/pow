---
title: Production Readiness Checklist
description: Generates a checklist to ensure your application is ready for production.
tags: [production, deployment, checklist, readiness, devops]
use_cases:
  - Preparing for a production launch.
  - Ensuring nothing is missed before deployment.
  - Creating a standard deployment checklist for your team.
---

# Production Readiness Checklist

## Description
This prompt generates a comprehensive checklist to ensure your application is ready for production deployment. It covers security, performance, monitoring, error handling, and more.

## Quick Version
```
Create a production readiness checklist for my [PROJECT_TYPE] application.
```

## Max Power Version
```
You are a DevOps and site reliability engineer. Create a comprehensive production readiness checklist for my [PROJECT_TYPE] application.

**Tech Stack:** [YOUR TECH STACK]
**Deployment Target:** [e.g., "AWS", "Vercel", "self-hosted"]

Generate a checklist with these categories:
1. **Security:** SSL, secrets management, input validation, security headers.
2. **Performance:** Caching, CDN, database optimization, bundle size.
3. **Monitoring:** Error tracking, logging, uptime monitoring, analytics.
4. **Error Handling:** Graceful degradation, user-friendly error messages, fallbacks.
5. **Scalability:** Load balancing, database connection pooling, rate limiting.
6. **Backup & Recovery:** Database backups, disaster recovery plan.
7. **Documentation:** Deployment instructions, runbooks, API docs.
8. **Testing:** All tests passing, load testing completed, security scan done.

For each item:
- Provide a brief explanation of why it's important.
- Include a checkbox format for easy tracking.
- Mark critical items that must be done before launch.
```

## Tips
- Go through this checklist before every major deployment.
- Customize it based on your specific application and infrastructure.
- Automate as many checklist items as possible.
