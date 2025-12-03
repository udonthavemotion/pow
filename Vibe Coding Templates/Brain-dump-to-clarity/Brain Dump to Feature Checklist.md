---
title: Brain Dump to Feature Checklist
description: Transforms a stream-of-consciousness brain dump into a structured and actionable feature checklist.
tags: [brain-dump, planning, feature-checklist, project-scoping, requirements]
use_cases:
  - Organizing initial ideas for a new project.
  - Converting meeting notes into a clear development plan.
  - Creating a prioritized list of features for a new product.
---

# Brain Dump to Feature Checklist

## Description
This prompt is designed to take a raw, unstructured brain dump of ideas and convert it into a clean, organized, and actionable feature checklist. It helps you move from the chaotic initial phase of a project to a structured plan with clear priorities.

## Quick Version
```
I have a brain dump of ideas for a new project. Turn it into a structured feature checklist with clear, actionable items.

Here is the brain dump:
[PASTE YOUR BRAIN DUMP HERE]
```

## Max Power Version
```
You are a senior product manager. Your task is to take my unstructured brain dump of ideas for a new [PROJECT_TYPE, e.g., "web application", "mobile app"] and transform it into a structured, prioritized feature checklist.

Analyze the following brain dump and produce a checklist with these columns:
- **Feature:** A concise, descriptive name for the feature.
- **Description:** A 1-2 sentence explanation of the feature and its purpose.
- **Priority:** Assign a priority (High, Medium, Low) based on its likely importance for a Minimum Viable Product (MVP).
- **Category:** Group related features into logical categories (e.g., "User Authentication", "Dashboard", "Settings").

Here is the brain dump:
[PASTE YOUR BRAIN DUMP HERE]

After the checklist, provide a brief summary of the core concept of the project and suggest 1-2 features that might be missing but are essential for this type of application.
```

## Example Usage

**Input Brain Dump:**
"Okay so I want to build this app for tracking my reading. Users should be able to sign up, log in, and then add books they are reading. I want to see a list of my books, maybe with cover images. It would be cool to track my progress, like what page I'm on. Maybe some stats, like how many books I've read this year. And I want to be able to search for books to add them, maybe using an API or something. Oh, and a profile page where I can see my stats."

**To use the prompt, you would replace `[PASTE YOUR BRAIN DUMP HERE]` with the text above.**

## Tips
- **Be Messy:** Don't worry about organizing your brain dump. The more raw and unstructured it is, the more the AI can help you find the hidden structure.
- **Provide Context:** For the "Max Power Version", providing the `[PROJECT_TYPE]` helps the AI make better priority judgments and suggestions.
