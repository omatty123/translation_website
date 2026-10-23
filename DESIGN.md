---
name: Banglangdang Translations
description: A compact personal portfolio with readable publication entries and documentary imagery.
colors:
  paper: "#fbfaf7"
  ink: "#203b33"
  body: "#3f4b45"
  muted: "#626c65"
  line: "#d8ddd5"
  wash: "#edf1e9"
  accent: "#285e4c"
  blue: "#e8eef0"
typography:
  display:
    fontFamily: "Manrope, Geist, Apple SD Gothic Neo, Malgun Gothic, sans-serif"
    fontSize: "clamp(36px, 4.1vw, 54px)"
    fontWeight: 650
    lineHeight: 1.14
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Manrope, Geist, Apple SD Gothic Neo, Malgun Gothic, sans-serif"
    fontSize: "30px"
    fontWeight: 650
    lineHeight: 1.25
    letterSpacing: "-0.025em"
  title:
    fontFamily: "Manrope, Geist, Apple SD Gothic Neo, Malgun Gothic, sans-serif"
    fontSize: "19px"
    fontWeight: 650
    lineHeight: 1.4
    letterSpacing: "-0.015em"
  body:
    fontFamily: "Geist, Apple SD Gothic Neo, Malgun Gothic, sans-serif"
    fontSize: "16px"
    lineHeight: 1.65
rounded:
  button: "4px"
  portrait: "5px"
  thumbnail: "3px"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "#ffffff"
    rounded: "{rounded.button}"
    padding: "10px 19px"
  button-primary-hover:
    backgroundColor: "{colors.accent}"
    textColor: "#ffffff"
---

# Design System: Banglangdang Translations

## Overview

This documents the implemented October 23, 2026 design in `app/page.tsx`, `app/globals.css`, and `app/layout.tsx`. Warm off-white, forest-green type, restrained color panels, and original imagery give the portfolio a personal, readable appearance. Fine rules organize open publication and course rows. The compact header leads directly to the introduction and work.

The approved direction is recorded in `PRODUCT.md`; homepage composition is recorded in `.impeccable/surfaces/app-page-tsx.md`. This file describes the implementation, not a separate visual-review verdict.

## Colors

- **Primary:** `ink` colors headings, the wordmark, and the primary action. `accent` colors destination links, focus outlines, selection backgrounds, and button hover.
- **Secondary:** `blue` distinguishes current literary work. Its local text colors are dark blue-green, separate from the main forest-green text.
- **Neutral:** `paper` is the page background; `body` is the reading color; `muted` supports credits and Korean titles. `line` separates entries. `wash` groups the pending course and contact copy.

Keep colors tied to these roles. Do not use additional panels or accents merely to fill space.

## Typography

Manrope supplies headings and the wordmark. Geist supplies body text and controls. Both load through `next/font/google`; Korean text falls back to Apple SD Gothic Neo or Malgun Gothic, then sans-serif. There is no serif or monospace role.

The frontmatter records default heading and body styles. Introductory copy uses 17px with 1.75 line height and a 61ch limit. Publication descriptions use 15px; credits use 13px. “Montafon Moonlight” is the current-work section's `h2`, at 36px on desktop and 29px below 700px. “Current work” appears in the subordinate credit line. Most labels use sentence case.

**Sans-serif only.** Keep all new or restyled interface type sans-serif, including fallbacks and SVG text. Preserve type embedded in original covers and source artwork.

**Natural heading wraps.** Do not insert decorative line breaks, block spans, or narrow widths that strand words. Keep the Korean name together with `word-break: keep-all` and `lang="ko"`.

## Layout

The centered content container reaches 1120px, with 40px minimum desktop side margins. The header has a 104px minimum height. Desktop introduction spacing is 52px above and 54px below; its text shares a row with a 244px portrait. Standard sections use 42px top and 50px bottom padding.

Publication and course collections use two equal columns. Publication rows pair a contained cover with title, description, credit, and destination. Current work uses a full-width pale-blue band with a centered inner grid. Contact pairs the Tripitaka photograph with text and email.

| Maximum width | Implemented adjustment |
| --- | --- |
| 1000px | Side margins become 28px; portrait becomes 200px; columns and cover spacing tighten; section headings stack. |
| 850px | Publications become one column. |
| 700px | Side margins become 20px; navigation moves below the wordmark; courses and contact become one column; article and supporting course rows stack. Portrait becomes 150px. |
| 500px | A 108px portrait sits alongside the name; introduction and actions span both columns below. Current-work artwork spans the title and credit rows; description and reading link use the full width below. |
| 360px | Portrait becomes 80px; the name becomes 29px; action spacing tightens to preserve the narrow layout. |

Headers remain compact. Inspect actual desktop and mobile heading wraps after changes; source inspection alone is insufficient.

## Elevation & Depth

The layout uses background color and rules for separation. Only book covers receive a subtle shadow (`2px 6px 12px #203b3312`). Publication and course entries remain flat; they do not lift or acquire shadows on hover.

## Shapes

Use small corners on buttons, portrait, and course thumbnails, as recorded above. Rules are 1px. Book covers preserve their proportions with `object-fit: contain`. The portrait preserves its supplied aspect ratio. Current-work artwork and the library photograph use deliberate cover crops.

## Components

- **Navigation:** plain text anchors, 44px minimum height, and underline on hover. The compact wordmark uses a subordinate “Translations” label. Navigation wraps rather than becoming a hidden menu.
- **Primary action:** dark green with white text, 48px minimum height, and a 180ms background transition. Secondary actions are underlined text links with 44px minimum height.
- **Destination links:** small decorative SVG arrows; text-link arrows move 3px on hover over 180ms. Keep action labels specific, including PDF labels.
- **Publication and course rows:** fine top rules and visible titles. Course thumbnails have empty alt text because the adjacent title identifies the same destination. Book covers have descriptive alt text.
- **Keyboard access:** the skip link becomes visible on focus. Anchors have a 3px accent outline with 5px offset. Preserve semantic headings, labeled navigation and sections, descriptive portrait/library alt text, and hidden decorative arrows.
- **Motion:** smooth anchor scrolling and restrained hover transitions only. `prefers-reduced-motion: reduce` disables smooth scrolling, transitions, and arrow movement.

## Do's and Don'ts

- **Do** preserve the supplied portrait, real publication covers, course thumbnails, Montafon artwork, and Tripitaka photograph. Use optimized display copies and retain originals unchanged.
- **Do** preserve image proportions for book covers, responsive image sizes, and the portrait's priority loading. Keep asset provenance with the assets; see `maintenance/content-sources.md` and the WebP JSON sidecars.
- **Do** check rendered fonts, keyboard focus, heading wraps, and horizontal overflow on desktop and mobile before delivery. These rules do not constitute a claim of full accessibility certification.
- **Don't** generate replacement covers or documentary images, or infer new reuse permission from an existing asset. Historical image licensing was not independently re-audited in this redesign.
- **Don't** introduce serif type, decorative heading breaks, oversized headers, or large empty areas for visual effect.
- **Don't** add visual components absent from the page, such as forms, filters, dialogs, or invented status badges, without a corresponding product requirement.
