# Platinum Certification Remediation Tasks

- [x] Phase 1: Security & Foundation (Absolute Zero Layer)
  - [x] Create `assets/js/theme-guard.js` containing Zero-FOUC logic.
  - [x] Modify `index.html`: Update CSP tag (remove `'unsafe-inline'`).
  - [x] Modify `index.html`: Replace inline Zero-FOUC script with external link.
  - [x] Modify `index.html`: Remove inline `style` attributes and replace with classes.
  - [x] Modify `index.html`: Replace `unsplash.com` images with local placeholders structures mapping to CAD renders.
  - [x] Modify `index.html`: Inject `<noscript>` loader fallback.
  - [x] Modify `portfolio-pro.css`: Add new semantic classes linking to the removed inline styles.
- [x] Phase 2: Advanced Accessibility & State Management
  - [x] Modify `portfolio-pro.js`: Build A11y SR Translation logic for `[data-i18n-aria]`.
  - [x] Modify `portfolio-pro.js`: Implement `Promise.race` timeout controller for Formspree.
  - [x] Modify `i18n.js`: Add ARIA translations to German, English, and Arabic dictionaries.
- [x] Phase 3: Final Verification & Sign-off
  - [x] Verify CSP logic.
  - [x] Generate Walkthrough.
