# Frontend High-Level Design Implementations

This repository contains practical implementations of various real-world frontend high-level design concepts. Each subdirectory is a standalone demo that illustrates a specific architectural pattern, optimization technique, or design principle used in modern web development by Big Tech companies.

## What's Included

### [px-to-rem-demo](./px-to-rem-demo)

ref ~ [Meta - Changing font sizes for better accessibility](https://engineering.fb.com/2020/05/08/web/facebook-redesign/#:~:text=Changing%20font%20sizes%20for%20better%20accessibility)

A demonstration of how to improve accessibility by automatically converting pixel values to rem units using Webpack and PostCSS. This implementation shows how to:

- Set up a build pipeline using Webpack
- Process CSS with PostCSS plugins
- Convert px units to rem for better scaling
- Implement font size controls that scale the entire UI

### [three-tier-code-splitting](./three-tier-code-splitting)

ref ~ [Meta - Code-splitting JavaScript for faster performance](https://engineering.fb.com/2020/05/08/web/facebook-redesign/#:~:text=Code%2Dsplitting%20JavaScript%20for%20faster%20performance)

An implementation of a three-tier JavaScript loading approach inspired by Facebook's loading strategy. This demo shows how to:

- Implement a tiered code-splitting strategy for optimized loading
- Organize code into separate tier1 and tier2 directories
- Create custom loading functions for different loading priorities
- Implement skeleton loading screens for both initial HTML and React components
- Demonstrate the difference between critical UI elements (Tier 1) and secondary UI elements (Tier 2)
- Improve key performance metrics like First Paint and Time to Interactive

The implementation includes interactive elements (buttons) that demonstrate how user interactions are prioritized based on their importance.

## Purpose

The goal of this repository is to:

1. **Demonstrate Practical Implementations** - Show working examples of architectural patterns and not just theory
2. **Provide Reference Code** - Serve as a reference for implementing similar solutions in your own projects
3. **Showcase Best Practices** - Illustrate modern frontend development approaches with a focus on:
   - Accessibility
   - Performance optimization
   - Maintainable code structure
   - Modern build tooling
   - Progressive enhancement

## How to Use This Repository

Each demo is a self-contained project with its own README, dependencies, and build process:

1. Navigate to the demo directory of interest
2. Read the specific README.md for context and instructions
3. Install dependencies with `npm install`
4. Follow the demo-specific instructions for running or building
