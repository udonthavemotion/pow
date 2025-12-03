---
title: Requirements Clarification
description: Asks clarifying questions to turn vague requirements into specific, actionable tasks.
tags: [brain-dump, requirements, clarification, questions, planning]
use_cases:
  - Clarifying vague feature requests from stakeholders.
  - Breaking down ambiguous requirements.
  - Ensuring you understand what needs to be built before starting.
---

# Requirements Clarification

## Description
This prompt helps you take a vague or ambiguous requirement and turn it into a clear, specific, and actionable task by asking the right clarifying questions. It's especially useful when working with non-technical stakeholders or when requirements are incomplete.

## Quick Version
```
I have this vague requirement: [REQUIREMENT]. Ask me clarifying questions to make it specific and actionable.
```

## Max Power Version
```
You are a senior product manager and business analyst. Your task is to take the following vague requirement and ask me clarifying questions to turn it into a clear, specific, and actionable task.

**Vague Requirement:** [PASTE REQUIREMENT]

Ask me questions about:
1. **User Goals:** What is the user trying to achieve?
2. **Scope:** What's included and what's explicitly out of scope?
3. **Success Criteria:** How will we know this is done correctly?
4. **Edge Cases:** What happens in unusual situations?
5. **Technical Constraints:** Are there any technical limitations or preferences?
6. **Priority:** Is this a must-have or nice-to-have?

After I answer your questions, provide a rewritten requirement that is clear, specific, and ready for implementation.
```

## Example Usage

**Input:** "We need a better dashboard."

**The AI will ask:** "What specific information should the dashboard display? Who will use it? What actions should users be able to take from the dashboard?"

## Tips
- Answer the AI's questions thoughtfully—this process often reveals gaps in your own understanding.
- Use the clarified requirement as the basis for your technical spec or feature plan.
- This prompt is great for preventing scope creep and misunderstandings.
