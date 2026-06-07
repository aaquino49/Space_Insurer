# Space Insurer — Asset Requests

Output folder: `Assets/`
Game folder: `C:\Users\alexa\OneDrive\Desktop\Claude Projects\Space Insurer\`

---

## REQUEST 001 — Company Logo SVG
**File:** `Assets/logo-mutual-of-andromeda.svg`
**Status:** COMPLETED (Saved to Assets/logo-mutual-of-andromeda.svg)

A retro-future corporate logo for "Mutual of Andromeda," a goofy interstellar insurance company.

**Style:** 1960s NASA-meets-boring-insurance-firm. The joke is that it looks completely professional and corporate, but it's for space insurance.

**Elements:**
- Main icon: a stylized Andromeda spiral galaxy (two sweeping arms) with a tiny shield/umbrella overlaid at center
- Horizontal lockup: [icon left] [text right] — "MUTUAL OF ANDROMEDA" in spaced capitals below "EST. 2301"
- Color palette: deep navy/void background (#03030f), galaxy arms in cyan (#00ccff), shield in gold (#ffcc44), text in light steel blue (#b8cce8)
- SVG viewBox: `0 0 480 80`
- Clean flat vector, no gradients needed — should look crisp at small sizes

---

## REQUEST 002 — Insurance Line Icons (4 SVGs)
**Status:** COMPLETED (Saved as 4 icons in Assets/)

Four ~48×48 icons for the four insurance lines. Flat, geometric, retro-future style.

**File:** `Assets/icon-colonization.svg`
- Subject: A small planet with a glass dome colony on the surface
- Color scheme: amber/gold (#ffaa00) on dark navy (#080820)
- ViewBox: `0 0 48 48`

**File:** `Assets/icon-orbital.svg`
- Subject: A toroidal (donut-ring) space station with two solar panel arms
- Color scheme: cyan (#00ccff) on dark navy (#080820)
- ViewBox: `0 0 48 48`

**File:** `Assets/icon-shipping.svg`
- Subject: A chunky blocky cargo freighter/hauler flying left-to-right, with exhaust plumes
- Color scheme: green (#00e87a) on dark navy (#080820)
- ViewBox: `0 0 48 48`

**File:** `Assets/icon-specialty.svg`
- Subject: A classic flying saucer UFO with a question mark beam pointing down
- Color scheme: purple (#bb66ff) on dark navy (#080820)
- ViewBox: `0 0 48 48`

---

## REQUEST 003 — Tileable Star Field SVG Pattern
**File:** `Assets/bg-starfield.svg`
**Status:** COMPLETED (Saved to Assets/bg-starfield.svg)

A tileable SVG for the dark background of the game UI.

**Spec:**
- ViewBox / tile size: `0 0 400 300`
- Background fill: `#03030f` (near-black void)
- ~80 scattered white dots at varying sizes (r=0.4, r=0.7, r=1.0, r=1.5) and varying opacity (0.3–0.9)
- ~10 dots with a faint blue tint (`#aaddff`) for color variation
- 2–3 very faint soft blobs (ellipses with low opacity ~0.05) representing distant galaxies
- Must tile seamlessly (stars near edges should not create obvious repeating patterns — randomize placement carefully)

---

## REQUEST 004 — Card Back Design SVG
**File:** `Assets/card-back.svg`
**Status:** COMPLETED (Saved to Assets/card-back.svg)

The back face of an event card in the game.

**Spec:**
- ViewBox: `0 0 240 340`
- Background: dark navy panel (`#0a0a2a`) with a subtle border (`#2828aa`, 2px, rounded corners r=6)
- Center motif: the Mutual of Andromeda shield/galaxy logo (simplified, same style as REQUEST 001 icon)
- Decorative border inside the card edge: thin line pattern, maybe a subtle circuit-board or star-map aesthetic
- Bottom text: "MUTUAL OF ANDROMEDA — INSURANCE & ACTUARIAL SERVICES"
- Color palette: navy bg, cyan accents, gold shield, dim text

---

---

## REQUEST 005 — Event Card Type Icons (5 SVGs)
**Status:** COMPLETED (Saved 5 icons to Assets/)
Five small 36×36 icons representing the five event card types. Same flat retro-future style as the line icons.

**File:** `Assets/card-type-claim.svg`
- Subject: A cracked/shattered shield with a dollar sign crack pattern
- Color: red (#ff4466) on dark navy
- ViewBox: `0 0 36 36`

**File:** `Assets/card-type-opportunity.svg`
- Subject: A rising star/comet with a upward arrow integrated
- Color: green (#00e87a) on dark navy
- ViewBox: `0 0 36 36`

**File:** `Assets/card-type-crisis.svg`
- Subject: A warning triangle with a lightning bolt inside
- Color: amber (#ffaa00) on dark navy
- ViewBox: `0 0 36 36`

**File:** `Assets/card-type-regulatory.svg`
- Subject: A clipboard/document with a stamp or magnifying glass overlay
- Color: purple (#bb66ff) on dark navy
- ViewBox: `0 0 36 36`

**File:** `Assets/card-type-boss.svg`
- Subject: A skull wearing a corporate necktie — the boss event is both scary and corporate
- Color: gradient from red to gold (#ff4466 → #ffcc44) on dark navy
- ViewBox: `0 0 36 36`

---

## REQUEST 006 — Card Type "FLAVOR" Icon
**File:** `Assets/card-type-flavor.svg`
**Status:** COMPLETED (Saved to Assets/card-type-flavor.svg)
- Subject: A cosmic cocktail glass (martini glass with a small planet/star as the olive, orbited by a tiny ring)
- Color: cyan (#00ccff) on dark navy
- ViewBox: `0 0 36 36`

---
---

## REQUEST 007 — Reinsurance / Safety Net Icon
**File:** `Assets/icon-reinsurance.svg`
**Status:** COMPLETED (Saved to Assets/icon-reinsurance.svg)
- Subject: An umbrella with a planet inside it (insurance for insurance — the meta-protection)
- Color: gold (#ffcc44) on dark navy
- ViewBox: `0 0 48 48`
- Style: flat geometric retro-future, matching the line icons

---

## REQUEST 008 — Catastrophe Warning Banner Texture
**File:** `Assets/banner-catastrophe.svg`
**Status:** COMPLETED (Saved to Assets/banner-catastrophe.svg)
A decorative horizontal banner/header for "CATASTROPHE" level events. Should feel alarming but funny.

- ViewBox: `0 0 600 40`
- Background: deep red (#1a0000) with a subtle hazard-stripe diagonal pattern (#220000 alternating)
- Left and right: small warning triangle icons (SVG inline)
- Center text: "⚠ CATASTROPHE ALERT ⚠" in bold monospace, color #ff4466, letter-spacing 4px
- Border: thin red glow line top and bottom

---
---

## REQUEST 009 — Meta-Progress / Industry Cred Icon
**File:** `Assets/icon-industry-cred.svg`
**Status:** COMPLETED (Saved to Assets/icon-industry-cred.svg)
The meta-currency icon — "Industry Cred" (IC) displayed between runs.
- Subject: A gold star badge/medal with the letters "IC" on it and a tiny galaxy spiral in the background
- Color: gold (#ffcc44) with cyan accents (#00ccff), on dark navy
- ViewBox: `0 0 36 36`
- Style: retro badge, like a '60s NASA achievement award, flat

---

## REQUEST 010 — Run Summary / Trophy Banner
**File:** `Assets/banner-victory.svg`
**Status:** COMPLETED (Saved to Assets/banner-victory.svg)
A banner displayed on the victory / IPO screen.

- ViewBox: `0 0 600 60`
- Background: deep green (#001100) → slightly lighter (#002200) diagonal
- Center text: "🚀 IPO SUCCESSFUL — MUTUAL OF ANDROMEDA" in gold (#ffcc44), bold monospace
- Decorative stars scattered at the edges
- Top/bottom border: thin green glow line (#00e87a)

---
---

## REQUEST 011 — Tutorial / Help Icon
**File:** `Assets/icon-help.svg`
**Status:** COMPLETED (Saved to Assets/icon-help.svg)
A small help/question-mark icon for the tutorial tooltip button in the HUD.
- Subject: A question mark inside a speech bubble (friendly, not scary)
- Color: cyan (#00ccff) on dark navy (#080820)
- ViewBox: `0 0 24 24`
- Style: clean, flat, minimal

---

## REQUEST 012 — Settings / Gear Icon
**File:** `Assets/icon-settings.svg`
**Status:** COMPLETED (Saved to Assets/icon-settings.svg)
A settings gear icon for the settings button in the HUD.
- Subject: Classic 6-tooth gear / cog wheel
- Color: text-dim gray (#6688aa) on transparent (no background rect)
- ViewBox: `0 0 24 24`
- Style: flat, single color, scalable

---
*Last updated by Claude — check Assets/ folder timestamps to track fulfillment status.*
