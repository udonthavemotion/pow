---
title: UX Audit and Recommendations
description: Provides a UX audit of a page or feature and suggests actionable improvements.
tags: [ux, ui, visual-design, user-experience, audit]
use_cases:
  - Improving the user experience of an existing page.
  - Identifying and fixing common UI/UX issues.
  - Getting a fresh perspective on your application's design.
---

# UX Audit and Recommendations

## Description
This prompt asks the AI to act as a UX specialist, providing an audit of a given page or feature and suggesting concrete, actionable improvements. It's a great way to get a quick design review and identify areas for visual and interactive polish.

## Quick Version
```
Audit the UX of this page and suggest 3 improvements. I'm providing the HTML and CSS.

**HTML:**
[PASTE HTML]

**CSS:**
[PASTE CSS]
```

## Max Power Version
```
You are a senior UX/UI designer. Your task is to conduct a UX audit of the following page/feature and provide a report with actionable recommendations. The target audience is [TARGET_AUDIENCE, e.g., "non-technical users", "power users"].

I am providing the HTML and CSS for the page.

**HTML:**
[PASTE HTML]

**CSS:**
[PASTE CSS]

Analyze the code and provide a report with the following sections:
1.  **Overall Impression:** A brief, high-level summary of the user experience.
2.  **Top 3 Strengths:** What the design does well.
3.  **Top 3 Areas for Improvement:** Identify the most critical UX issues (e.g., clarity, accessibility, consistency).
4.  **Actionable Recommendations:** For each area of improvement, provide a specific, actionable recommendation with a code example showing how to implement the fix.

Focus on high-impact, low-effort changes that will significantly improve the user experience.
```

## Example Usage

**To get a UX audit of a login form:**

"You are a senior UX/UI designer... The target audience is non-technical users.

**HTML:**
```html
<form>
  <label>Username</label>
  <input type="text" />
  <label>Password</label>
  <input type="password" />
  <button>Submit</button>
</form>
```

**CSS:**
```css
/* ... your form styles ... */
```

## Tips
- **Provide Screenshots:** If possible, include a screenshot of the page (you can't do this directly, but you can describe it or link to it if it's live) to give the AI more visual context.
- **Define the User Goal:** Briefly explain what the user is trying to achieve on this page. This helps the AI evaluate the UX in the context of the user's goals.
- **Specify the Target Audience:** Different audiences have different needs and expectations. Defining the target audience helps the AI provide more relevant recommendations.
