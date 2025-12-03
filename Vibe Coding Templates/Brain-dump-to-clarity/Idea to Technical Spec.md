---
title: Idea to Technical Spec
description: Converts a high-level idea into a detailed technical specification.
tags: [brain-dump, technical-spec, planning, architecture, requirements]
use_cases:
  - Planning the architecture for a new feature.
  - Creating a technical spec for a development team.
  - Clarifying technical requirements before starting to code.
---

# Idea to Technical Spec

## Description
This prompt helps you transform a high-level product idea into a detailed technical specification that includes architecture decisions, data models, API endpoints, and implementation considerations.

## Quick Version
```
Turn this idea into a technical spec: [YOUR IDEA]
```

## Max Power Version
```
You are a senior software architect. Convert the following high-level idea into a detailed technical specification.

**Idea:** [YOUR IDEA]

**Target Stack:** [TECH STACK, e.g., "React, Node.js, PostgreSQL"]

Provide a technical spec with these sections:
1. **Overview:** A brief summary of what we're building and why.
2. **Architecture:** High-level system architecture and component breakdown.
3. **Data Model:** Database schema or data structures needed.
4. **API Design:** Key API endpoints with request/response formats.
5. **Technical Considerations:** Performance, security, scalability concerns.
6. **Implementation Plan:** Suggested order of implementation with milestones.
7. **Open Questions:** Any technical decisions that need further discussion.
```

## Tips
- Provide context about your existing tech stack for more relevant recommendations.
- Use the spec as a living document that evolves as you learn more.
