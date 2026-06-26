---
name: premium-creative-design
description: Guidelines for high-fidelity UI/UX design, premium typography, micro-interactions, layout alignment, and eliminating flat/generic AI slop.
---

# Premium Creative UI/UX Design System Guidelines

Use this skill when designing user interfaces, layout containers, fonts, typography, aspect ratios, interactive overlays, or animation physics to maintain premium, human-curated creative director standards.

## Design Principles

### 1. Typography & Hierarchy
* **Brand Typeface Consistency**: Always respect the primary brand typefaces configured in `@font-face` (e.g. `Halenoir`, `Outfit`, `Inter`). Avoid system fallback fonts (`Arial`, `Helvetica`) for primary headings, navigation labels, and subtitles.
* **Layout Scaling**: Keep type sizes proportional and use letter-spacing metrics (e.g., `tracking-[-0.03em]` or `tracking-wider`) appropriate for display typography.
* **No Text Wrapping Violations**: Prevent unwanted wrapping on navigational elements and display items using utilities like `whitespace-nowrap`.

### 2. Space, Alignment & Rhythms
* **Visual Anchors**: Coordinate horizontal flex alignment (`justify-start` vs `justify-end`) with the text alignment direction (`text-left` vs `text-right`). 
* **Seamless Boundaries**: For gallery slides or continuous lists, set spacing to `gap-0` and remove inner border radii, applying `borderRadius` only to outer edges to form unified seamless groups.
* **Optimal Spacing**: Reduce generic viewport height parameters (`min-h-screen`) for non-hero segments. Target well-proportioned dimensions (like `h-[70vh]` or custom min-heights like `min-h-[490px]`) to keep content sections balanced.

### 3. Sophisticated Color Systems & Micro-Interactions
* **Curated Palette Anchors**: Utilize subtle colors, deep dark mode bases (e.g. `#121212`), transparent gradients, and low-opacity borders (e.g. `white/5` or `white/10`) instead of bright/flat primary colors.
* **Interaction Physics**: Always specify spring dynamics for transitions involving dragging, scaling, or position tracking. Set low `stiffness` and proper `damping` values to feel organic and fluid:
  ```typescript
  transition: { type: "spring", stiffness: 50, damping: 10 }
  ```
* **Draggable Containers**: Make sure interactions map logically. When a container is draggable, apply the drag property to the outer bounding frame (not the inner image element) so the entire visual unit shifts together.
* **Zoom Refinements**: Scale elements (e.g., active thumbnails) using nested clipping wrappers (`overflow-hidden`) and custom `transformOrigin` / absolute positions to hide crop leaks and margins.

### 4. Non-Slop Component Checklist
* Avoid standard boxy borders or generic cards with simple outlines.
* Integrate glassmorphism (`backdrop-filter`) and smooth shadows (`shadow-soft`).
* Design custom transitions using `AnimatePresence` and coordinate `exit` animations with cached project references (`lastProjectRef`) to prevent height collapse during close actions.
