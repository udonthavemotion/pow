---
title: Performance Optimization
description: Identifies performance bottlenecks and suggests optimizations with trade-offs.
tags: [refactoring, performance, optimization, bottleneck, profiling]
use_cases:
  - Speeding up slow functions or components.
  - Optimizing database queries.
  - Reducing bundle size or memory usage.
---

# Performance Optimization

## Description
This prompt helps you identify and fix performance bottlenecks in your code. It provides multiple optimization options with clear trade-offs, allowing you to make informed decisions about which optimizations to implement.

## Quick Version
```
This code is slow. Suggest optimizations:

[PASTE CODE]
```

## Max Power Version
```
You are a performance optimization specialist. Analyze the following code for bottlenecks and suggest optimizations.

**Code:**
[PASTE CODE]

**Context:** [DESCRIBE WHERE THIS CODE RUNS AND HOW OFTEN]

Provide a performance analysis with:
1. **Identified Bottlenecks:** What's causing the performance issues?
2. **Option A:** A conservative optimization with minimal risk.
3. **Option B:** A more aggressive optimization with higher performance gains.
4. **Trade-offs:** For each option, explain the trade-offs (e.g., code complexity, maintainability, memory usage).
5. **Benchmarking Suggestion:** How to measure the improvement.

Focus on real-world scenarios, not micro-optimizations.
```

## Tips
- Provide context about how often the code runs and with what data size.
- Always benchmark before and after to verify improvements.
- Consider maintainability alongside performance gains.
