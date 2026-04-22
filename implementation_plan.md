# Platinum Portfolio Forensic Remediation Plan

This is a deep, systemic architectural autopsy of `index.html` and its dependencies. The goal is to enforce the **Absolute Zero** and **Platinum Integrity** standards, shifting the portfolio from a "very good site" to an "impenetrable, high-fidelity engineering showcase."

## User Review Required

> [!WARNING]  
> **Strict CSP Enforcement:** This plan will aggressively strip all `'unsafe-inline'` from your `index.html` `Content-Security-Policy`. This means any rogue inline scripts or styles will break. I will externalize your Zero-FOUC script to a dedicated secure file. Do you approve this high-security lockdown?

> [!CAUTION]  
> **Visual Cleansing (Unsplash Purge):** I noticed multiple projects relying on `unsplash.com` images. To achieve Platinum Certification, we must banish generic stock photos. I will replace these with structured local paths (`assets/img/projects/cad-julito.jpg`, etc.). You will need to upload your high-fidelity CAD renders to these paths.

## Proposed Changes

---

### Security & Foundation (The Absolute Zero Layer)

#### [MODIFY] [index.html](file:///Users/abdulrahman/Github/abdulrahmanasami/index.html)
- **CSP Hardening:** Remove `'unsafe-inline'` from `script-src` and `style-src` in the `<meta>` CSP header.
- **Script Extraction:** Rip out the inline `<script>` at lines 75-98 (Zero-FOUC Hydration) and link it securely.
- **Inline Style Purge:** Remove inline `style="..."` attributes (lines 400, 401, 793) and map them to semantic CSS classes (`.resume-cv-btn-wrap`, `.lab-subtitle`).
- **Unsplash Purge:** Replace all `unsplash.com` hotlinks with structured, semantic local paths reflecting CAD engineering assets.
- **Fail-Safe Loader:** Inject a `<noscript>` block that forcibly hides the loader so the site remains readable if JS is blocked.

#### [NEW] [theme-guard.js](file:///Users/abdulrahman/Github/abdulrahmanasami/assets/js/theme-guard.js)
- Transfer the inline Zero-FOUC hydration logic here to maintain lightning-fast render blocking while maintaining strict CSP compliance.

#### [MODIFY] [portfolio-pro.css](file:///Users/abdulrahman/Github/abdulrahmanasami/assets/css/portfolio-pro.css)
- Inject the missing utility classes (`.resume-cv-btn-wrap`, `.lab-subtitle`, etc.) to bridge the gap left by the purged inline styles.

---

### Advanced Accessibility & State Management

#### [MODIFY] [portfolio-pro.js](file:///Users/abdulrahman/Github/abdulrahmanasami/assets/js/portfolio-pro.js)
- **A11y i18n Fix:** Currently, `<nav aria-label="Hauptnavigation">` is static. I will upgrade the `applyLanguage` engine to scan for `[data-i18n-aria]` and dynamically translate SR (Screen Reader) attributes, ensuring full compliance for Arabic, English, and German visually impaired users.
- **Timeout Immunity:** The Formspree fetch call exists but lacks a strict timeout orchestrator. I will implement a `Promise.race` timeout controller to prevent the submit button from spinning infinitely if the network drops (crucial for restricted networks like Syria).

#### [MODIFY] [i18n.js](file:///Users/abdulrahman/Github/abdulrahmanasami/assets/js/i18n.js)
- Extend the dictionary to include accessibility strings (e.g., `aria_nav_main`, `aria_theme_toggle`, `aria_sidebar_toggle`).

## Open Questions

1. **Asset Dimensions:** What aspect ratio are you aiming for with the final 3D CAD renders? (e.g., 16:9, 4:3) I can enforce object-fit rules in the CSS to ensure they never scale incorrectly.
2. **Formspree Redirection:** Do you want the form to redirect upon success, or is the current inline success message preferred?

## Verification Plan

### Automated/Manual Testing
- **CSP Validation:** Run browser dev tools to ensure zero CSP violations are logged after stripping `'unsafe-inline'`.
- **A11y Audit:** Switch between AR, DE, and EN and verify that `aria-label`s on navigation elements actively change language.
- **Network Throttle Testing:** Simulate an offline/3G connection to verify the Formspree timeout wrapper correctly triggers the error state instead of hanging permanently.
