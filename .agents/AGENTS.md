# Workspace Customization Rules

These instructions guide Antigravity behavior in this workspace to avoid compiler crashes, enforce premium UX design, and adhere to a professional creative director aesthetic.

## Rule 1: Technical Integrity (No Compiler Crashing)
* Prior to starting the dev server or compiling, always ensure target ports are cleared.
* Strictly enforce unified module imports (e.g. only use `framer-motion`, never mix with `motion/react`).
* Verify client boundaries using `'use client'` on any component referencing client hooks.
* Clear compilation cache using `rm -rf .next` immediately if a React hydration/manifest error occurs.
* Verify tasks using `npm run build` to ensure type-checking passes cleanly before declaring completion.

## Rule 2: Graphic Designer & Creative Director Aesthetics
* Reject flat, generic, or AI-looking component designs. 
* Use premium typography hierarchies matching custom typefaces (e.g., `Halenoir`).
* Use Spring animation dynamics with controlled drag/hover scale limits instead of basic transitions.
* Align layouts cleanly with custom viewport proportions (`70vh` height instead of full-screen heights on sub-sections).
* Eliminate container overlaps, layout jumps, and element leaks (always audit mockup zoom-scaling factors, applying custom image scale offsets like `1.06` to `1.15` as needed).
