---
name: nextjs-guard
description: Guards against Next.js compiler errors, HMR cache corruption, hydration mismatches, port binding conflicts, and client manifest issues.
---

# Next.js & React Developer Sandbox Guard

Use this skill when modifying, running, or debugging Next.js App Router applications to ensure high compilation reliability and prevent browser runtime errors.

## Standard Protocols

### 1. Dev Server & Port Management
* **Stale Process Verification**: Before starting a development server, check for running processes on target ports (usually `3000` and `3001`) and terminate them.
* **Process Clean Command**: 
  ```bash
  lsof -ti:3000,3001 | xargs kill -9 2>/dev/null
  ```
* **Always Bind Default Port**: Run dev servers cleanly after releasing ports to ensure the user is viewing the correct live compilation on port `3000`.

### 2. Preventing Manifest Corruption
* **Unified Import Entry Points**: Never mix imports from duplicate entry points of the same animation library (e.g. do not import from both `framer-motion` and `motion/react` in the same project).
* **Strict 'use client' Declarations**: Any custom React component that invokes client-side React Hooks (`useState`, `useRef`, `useEffect`, `useCallback`) must explicitly declare the `'use client';` directive at the very top of the file to prevent server/client boundary conflicts in the compiler.
* **HMR Cache Clean**: If compilation errors or runtime client failures (`TypeError: __webpack_modules__[moduleId] is not a function` or missing module in Client Manifest) are encountered, execute:
  ```bash
  rm -rf .next
  ```
  Then restart the dev server cleanly.

### 3. Verification Plan
* **Build Check**: Always execute a production build check before declaring development tasks complete:
  ```bash
  npm run build
  ```
* **Verify HTTP Code**: Verify the dev server is active and serving content cleanly (e.g. returns HTTP status `200`) using `curl`:
  ```bash
  curl -s -o /dev/null -w "%{http_code}" http://localhost:3000
  ```
