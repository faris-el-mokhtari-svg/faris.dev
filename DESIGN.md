---
name: Deploy Web Development
description: Bold, craft-forward web agency for gastronomy and local SMBs in Germany
colors:
  primary: "#FF5500"
  amber: "#f9aa2a"
  cream: "#FFFCF3"
  foreground: "#0a0a0a"
  hero-warm: "#ff7a00"
typography:
  display:
    fontFamily: "Barlow Condensed, system-ui, sans-serif"
    fontSize: "clamp(6rem, 12vw, 12rem)"
    fontWeight: 900
    lineHeight: 1
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Barlow, system-ui, sans-serif"
    fontSize: "clamp(3.75rem, 7vw, 5rem)"
    fontWeight: 500
    lineHeight: 0.9
  title:
    fontFamily: "Barlow, system-ui, sans-serif"
    fontSize: "clamp(3rem, 5vw, 3.75rem)"
    fontWeight: 500
    lineHeight: 1.1
  body:
    fontFamily: "Barlow, system-ui, sans-serif"
    fontSize: "clamp(1.875rem, 3vw, 2.5rem)"
    fontWeight: 400
    lineHeight: 1.25
  label:
    fontFamily: "Barlow, system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 600
    letterSpacing: "0.1em"
rounded:
  sm: "7px"
  md: "10px"
  lg: "12px"
  xl: "17px"
  2xl: "22px"
  image: "40px"
  pill: "9999px"
spacing:
  xs: "8px"
  sm: "16px"
  md: "24px"
  lg: "48px"
  xl: "64px"
  section: "80px"
components:
  button-primary:
    backgroundColor: "transparent"
    textColor: "{colors.cream}"
    rounded: "{rounded.pill}"
    padding: "16px 48px"
  button-primary-hover:
    backgroundColor: "rgba(255,255,255,0.15)"
    textColor: "{colors.cream}"
  button-nav:
    backgroundColor: "transparent"
    textColor: "{colors.foreground}"
    rounded: "{rounded.pill}"
    padding: "10px 20px"
  button-nav-hover:
    backgroundColor: "{colors.foreground}"
    textColor: "{colors.cream}"
  input-contact:
    backgroundColor: "transparent"
    textColor: "{colors.cream}"
    rounded: "{rounded.2xl}"
    padding: "0 20px"
    height: "72px"
  button-submit:
    backgroundColor: "{colors.amber}"
    textColor: "{colors.foreground}"
    rounded: "{rounded.pill}"
    height: "72px"
---

# Design System: Deploy Web Development

## 1. Overview

**Creative North Star: "The Craft Workshop"**

Deploy is built like a well-run workshop: skilled hands, no wasted moves. The aesthetic carries weight without shouting — large typography does structural work, not decorative work; the primary orange is a structural material, not a garnish. The site is in German, targeting gastronomy and local SMB owners who are skeptical of generic agency polish. The design has to feel like someone capable built it — direct, bold, inviting, and technically confident.

The color strategy is Committed: Signal Orange (`#FF5500`) carries 30–60% of key surfaces — hero panels, the contact section, section headings. It is not an accent used sparingly; it is the primary surface material. On cream backgrounds it commands; on full-orange panels, it recedes in favor of white typography. The system earns its energy from contrast, not from cramming color everywhere.

Motion is restrained. Interactions respond to the user (menu entrance, hover states) and nothing else. No scroll-triggered choreography, no auto-play. The workshop is focused.

**Key Characteristics:**
- Massive, gestural typography (display at 6–12rem) that acts as structural layout element, not decoration
- Orange (`#FF5500`) as primary surface material, not mere accent
- Warm cream (`#FFFCF3`) as the resting state between orange moments
- Pill-shaped CTAs throughout — consistent, round, confident
- Inter at every scale — hierarchy through weight and size alone, no typeface switching
- Flat surfaces, no card grids, no nested containers, no shadow-based depth

## 2. Colors: The Workshop Palette

Orange is the material this site is made of. Cream is where it rests between moments.

### Primary
- **Signal Orange** (`#FF5500`): The structural brand color. Used on the logo wordmark, section headings on cream, as full-panel background on the contact section, and as the dominant hue in hero gradient overlays. Not a 10% accent — this color owns up to 60% of key surfaces.
- **Hero Ember** (`#ff7a00`): Warm intermediate used only in hero gradient layers (`from-[#ff6b2f] via-[#ff7a00]`). Never as a flat surface color — exclusively in layered gradient contexts where it blends toward cream or Signal Orange.

### Secondary
- **Workshop Amber** (`#f9aa2a`): Reserved for the single highest-commitment CTA in the contact form (submit button). Golden, warm, distinct from Signal Orange without competing. One per view, maximum.

### Neutral
- **Warm Cream** (`#FFFCF3`): The page background. Barely-there warmth tinted toward Signal Orange — visible only when compared to pure white. Sections return to this between orange moments.
- **Ink** (`#0a0a0a`): Near-black for all body copy and neutral UI text. Tinted, not pure black.
- **Mist Border** (`rgba(0,0,0,0.09)`): Hairline dividers between page-level sections. Structural, not decorative.

### Named Rules
**The Signal Rule.** Signal Orange is a structural color, not a highlight. If a heading is orange, a panel is orange, and the logo is orange, that is correct. If a small badge, tooltip, or inline link is also orange, it is noise. Use Signal Orange to build — not to garnish.

**The Cream Return Rule.** After every orange moment (hero, contact panel), the page returns to cream. Cream is not empty space; it is the breath between orange passages.

## 3. Typography

**Display Font:** Barlow Condensed (Google Fonts, `system-ui` fallback) — used at Display scale only
**Body Font:** Barlow (Google Fonts) — used at Headline through Label

**Character:** One typeface family in two widths. Barlow Condensed at the massive hero wordmark has the precision of workshop signage — tight, architectural, direct. Regular Barlow from Headline down is humanist enough to stay warm at body scale. The family reads as one voice across the full range. No typeface switching.

### Hierarchy
- **Display** (weight 900, `clamp(6rem, 12vw, 12rem)`, line-height 1.0, tracking -0.04em): Hero wordmark. One use per page. This is a poster, not a heading — it acts as a structural layout element.
- **Headline** (weight 500, `clamp(3.75rem, 7vw, 5rem)`, line-height 0.9): Section-level statements. "Starkes Business", "Jede Herausforderung ist individuell." These carry the page's editorial voice.
- **Title** (weight 500, `clamp(3rem, 5vw, 3.75rem)`, line-height 1.1): Feature row headings, sub-section labels. Signal Orange (`#FF5500`) on cream backgrounds.
- **Body** (weight 400, `clamp(1.875rem, 3vw, 2.5rem)`, line-height 1.25): Prose runs deliberately large. This site speaks to local business owners reading on phones — the large body size is intentional accessibility, not a mistake.
- **Label** (weight 600, 0.75rem, tracking 0.1em, uppercase): Navbar links, footer text, supporting captions. The quiet layer under the loud type.

### Named Rules
**The One-Family Rule.** Barlow and Barlow Condensed are one family. Condensed is for the Display wordmark only; regular Barlow handles every other scale. No third typeface, no decorative serif. Hierarchy comes from weight contrast (400 → 900) and scale range (0.75rem → 12rem).

**The No-Gradient-Text Rule.** Text is a single solid color. `background-clip: text` combined with any gradient is prohibited — including on the brand wordmark and the Display-scale headline. If the Display heading needs more presence, increase scale or weight.

## 4. Elevation

This system is flat. Surfaces are distinguished by color (orange vs. cream vs. white), not by shadow or depth. The navbar acquires a subtle shadow when scrolled — this is the only shadow in the system, and it is functional (signals page position), not decorative.

### Shadow Vocabulary
- **Scroll Indicator** (`box-shadow: 0 1px 3px rgba(0,0,0,0.06)`): Navbar only, applied when the user has scrolled past 20px. Signals page position; communicates nothing about hierarchy.

### Named Rules
**The Flat-by-Default Rule.** If you are reaching for a card shadow to create visual separation, use a background color switch instead. Orange panels, cream panels, and white panels are the elevation system.

## 5. Components

### Buttons

Pill-shaped throughout. CTA weight is communicated through context (placement, size, color) and contrast — not through filled backgrounds at rest.

- **Shape:** Fully rounded (`border-radius: 9999px`)
- **Primary CTA (on orange/dark backgrounds):** `border: 1px solid rgba(255,255,255,0.8)`, `color: #FFFCF3`, `padding: 16px 48px`, text at 1.875rem. Hover: `background: rgba(255,255,255,0.15)`. Transition: `background 0.15s`.
- **Nav CTA (on white/cream backgrounds):** `border: 2px solid #0a0a0a`, `color: #0a0a0a`, `padding: 10px 20px`, `font-size: 0.875rem font-weight: 600`. Hover: fills to `background: #0a0a0a; color: #FFFCF3`. Transition: `background 0.15s, color 0.15s`.
- **No transform on buttons.** Scale and movement are reserved for the page's structural moments.

### Inputs / Fields (Contact Form)

The contact form lives inside a full-orange panel. Inputs are deliberately anti-chrome.

- **Style:** `border: 1px solid rgba(255,255,255,0.6)`, `background: transparent`, `border-radius: 22px`, `height: 72px`, `padding: 0 20px`, `font-size: 2rem`, `color: white`
- **Labels:** Large (2.25rem), white, flush-left. Labels are the heading of each field, not small metadata above it.
- **Focus:** `border-color: rgba(255,255,255,0.9)` — border brightens, no glow ring. Clean, in context.
- **Submit Button:** `background: #f9aa2a; color: #0a0a0a; border-radius: 9999px; height: 72px; font-size: 2.25rem; font-weight: 500`. Amber contrasts against Signal Orange without competing with it.

### Navigation

- **At-home, unscrolled:** Fully transparent header. Logo and links in white. CTA: `border-2 border-white text-white`.
- **Scrolled / inner pages:** `background: rgba(255,255,255,0.9)`, `backdrop-filter: blur(12px)`, `border-bottom: 1px solid rgba(0,0,0,0.05)`, `box-shadow: 0 1px 3px rgba(0,0,0,0.06)`. Logo wordmark switches to Signal Orange, links to `rgba(0,0,0,0.4)`.
- **Active link:** Signal Orange with `font-weight: 500`.
- **Logo lockup:** Small `Deploy` label (0.75rem, tracking-widest, `rgba(0,0,0,0.3)`) + `Web Development` wordmark (font-black, tracking -0.04em, Signal Orange).
- **Mobile:** Full-width drawer below header, `background: white`. Links stacked. Pill CTA centered at bottom.

### Feature Rows (Signature Component)

The homepage's feature list uses a two-column grid with hairline dividers — no cards, no icons, no boxes. Each row: title (Signal Orange, Title scale) left / body (Ink, large) right. Divider: `border-top: 1px solid rgba(0,0,0,0.35)` — notably darker than the global `--border` token, creating visible partition without card outlines.

### Contact Split Panel (Signature Component)

Full-bleed two-column layout at `min-height: 620px`. Left: orange gradient with photo overlay and editorial copy. Right: pure Signal Orange (`#FF5500`) with the form. No card framing, no inner container — the color IS the container.

## 6. Do's and Don'ts

### Do:
- **Do** use Signal Orange (`#FF5500`) as a surface material on full panels and structural headings — not as a 10% accent on an otherwise neutral page.
- **Do** return to cream (`#FFFCF3`) between orange moments. The contrast is what makes each feel intentional.
- **Do** keep all buttons pill-shaped (`border-radius: 9999px`) across every context.
- **Do** use Inter at extreme scales — the Display size (6–12rem) is a core feature, not an edge case.
- **Do** keep form inputs chrome-free on orange backgrounds: transparent fill, white/60 border, no focus glow.
- **Do** let typography carry structural load. Big headings replace cards. Grid dividers replace section boxes.

### Don't:
- **Don't** apply gradient text (`background-clip: text` + any gradient). Prohibited at every scale, including the brand Display wordmark. Solid color only.
- **Don't** use shadow-based card grids. There are no cards in this design. Separation comes from background color change.
- **Don't** make it look like a corporate consultancy: no stock-photo grids of suited people, no navy + gold, no generic trust-signal iconography (checkmarks, shields, star ratings in rows).
- **Don't** produce AI-slop: no hero-metric templates (big stat + gradient accent), no identical icon-heading-text card rows repeated three or four times, no cliché "innovative" shapes.
- **Don't** use a second typeface. The boring failure mode is not Inter — it is Inter at small scales with no size contrast. Push the scale.
- **Don't** animate layout properties or add scroll-choreography. State transitions only.
- **Don't** use glassmorphism decoratively. The navbar blur is the only permitted exception — functional only, applied on scroll.
- **Don't** use `border-left` stripes wider than 1px as colored callout accents. Use a full background tint or nothing.
