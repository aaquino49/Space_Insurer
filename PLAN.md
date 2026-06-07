# Space Insurer — Project Plan

> *"In the year 2387, everything in the galaxy is insured. Most of it shouldn't be."*

You are the freshly-appointed CEO of **Mutual of Andromeda**, a plucky interstellar insurance firm. Underwrite the riskiest ventures in known space — planetary colonies, orbital habitats, deep-space freight, cryo-tourism — collect premiums, dodge bankruptcy, and survive the absurd catastrophes the universe throws at your policyholders. Aliens *will* file claims. Meteors *will* total a colony. A hive mind *will* dispute its deductible.

---

## 1. High-Level Overview

### 1.1 Concept
**Space Insurer** is a single-file browser game that fuses a lightweight **insurance tycoon simulation** (set premiums, manage a capital reserve, build a policy portfolio, hire staff) with **narrative event cards** (respond to unfolding sci-fi disasters and weird claims). It's a **roguelike**: each playthrough is a "fiscal run." Go bankrupt and the company folds — but you keep meta-progression unlocks that carry into the next run.

The tone is **fun and goofy** throughout: think *Reigns* meets *SimCity* meets a galactic actuarial table written by a comedian. Corporate jargon collides with cosmic horror. Every disaster is a punchline; every choice has a (sometimes ridiculous) cost.

### 1.2 The Core Fantasy
You're not the hero who fights the alien invasion. You're the suit who has to decide whether the alien invasion is covered under Section 12(b) of the policy, and whether paying out will bankrupt you before the next quarter.

### 1.3 Core Gameplay Loop
A run proceeds in **turns** (each turn = one "business cycle," e.g. a quarter). Each turn:

1. **Portfolio phase** — Review your active policies. Sign new clients (each is a risk/reward bet), set premiums, allocate capital reserves, and manage your staff/departments.
2. **Event phase** — Draw 1–3 **event cards**. These are incoming claims, disasters, opportunities, regulatory visits, and weird galactic happenings. You choose how to respond; each choice spends resources and shifts your stats.
3. **Resolution phase** — Premiums roll in, claims pay out, your reserve and reputation update. Random events may trigger based on your portfolio's risk exposure.
4. **End-of-turn report** — A goofy corporate dashboard shows your P&L, and the turn counter ticks. Survive long enough / hit milestones to win the run.

**Lose condition:** Capital reserve hits zero (insolvency) — or reputation bottoms out and regulators pull your license.
**Win condition:** Reach a target valuation / survive a set number of fiscal years / complete the run's objective. Then "exit" (IPO, acquisition, or glorious retirement) and bank meta-progress.

### 1.4 Key Resources & Stats
- **Capital Reserve ($¢ — "GalactiCredits")** — Your cash. Premiums add, claims subtract. Hit zero = game over.
- **Reputation** — Galactic trust. High rep = more/better clients & cheaper reinsurance. Low rep = regulators circle.
- **Risk Exposure** — Aggregate danger of your portfolio. High exposure = more premium income but nastier random catastrophes.
- **Solvency Rating** — A letter grade (AAA → junk) derived from reserve vs. exposure. Affects what events you draw.
- **Heat / Regulatory Attention** — Cutting corners (denying valid claims, shady fine print) raises Heat; too much triggers audits.

### 1.5 The Four Insurance Lines (Client Categories)
Each line has its own flavor of catastrophe:
1. **Colonization** — New planet settlements. Risks: meteor strikes, obscure viruses, hostile fauna, terraforming gone wrong.
2. **Orbital & Stations** — Space stations and habitats. Risks: decompression, reactor meltdowns, station-wide AI revolts, rogue debris.
3. **Shipping & Freight** — Cargo haulers and trade routes. Risks: piracy, wormhole losses, cargo that turns out to be alive.
4. **Specialty & Weird** — High-risk exotic policies. Risks: alien invasions, hive-mind disputes, time anomalies, sentient-AI lawsuits, cryo-tourist "incidents."

### 1.6 Event Card System
Cards are the heart of the goofy tone. Each card has:
- **Flavor text** (the absurd situation)
- **2–4 choices**, each with **visible-ish costs** and **hidden consequences**
- **Tags** (which line/stat it touches) so cards are drawn relevant to your portfolio

Card types: **Claims** (pay or deny — denials risk reputation/Heat), **Opportunities** (new clients, deals), **Crises** (escalating multi-turn disasters), **Regulatory** (audits, new laws), **Flavor/Random** (pure comedy, small effects), and **Boss Events** (huge run-defining catastrophes, e.g. a galaxy-wide Meteorpocalypse).

### 1.7 Roguelike Structure & Meta-Progression
- A run = one company's lifespan. Permadeath on insolvency.
- **Difficulty scales** as turns pass (bigger disasters, demanding clients).
- **Between runs**, spend a meta-currency (**"Legacy / Industry Cred"**) to unlock: new insurance lines, starting perks, staff archetypes, new card pools, alternate starting companies ("characters"), and cosmetic flavor.
- **Run modifiers / starting scenarios** give variety (e.g., "The Startup" — low capital, high rep gain; "The Conglomerate" — rich but high Heat).

### 1.8 Tone & Presentation Pillars
- **Goofy-corporate aesthetic:** retro-future terminal UI, faux-spreadsheet dashboards, comic-sans-adjacent-but-tasteful headings, emoji/ASCII icons for aliens & meteors.
- **Writing is the star:** every event is a joke with a decision attached.
- **Readable at a glance:** the player always knows their money, rep, and what's on fire.
- **No external assets required:** everything renders with CSS, emoji, and a touch of canvas/SVG so it stays a single shareable file.

### 1.9 Technical Approach
- **Single self-contained `index.html`** — vanilla HTML/CSS/JS, no build step, no dependencies. Runs by double-clicking. (Matches the City Builder / Deck Builder pattern.)
- **State as one JSON-able object** — easy save/load to `localStorage`.
- **Data-driven content** — events, clients, and lines defined in plain JS arrays/objects so content can be added without touching engine code.
- **Deterministic-ish RNG** with a seed so runs can be replayed/shared.

---

## 2. Detailed Milestones

Each milestone is a shippable, testable increment. Earlier milestones build the playable skeleton; later ones add depth, content, and polish.

### Milestone 0 — Foundation & Scaffolding
**Goal:** A running single-file app with the core architecture in place.
- [ ] Create `index.html` with semantic layout regions: header (stats bar), main (portfolio + cards), footer (turn controls).
- [ ] Establish CSS design tokens (retro-future palette, fonts, panel styles, spacing scale).
- [ ] Set up the global `game` state object schema (capital, reputation, exposure, solvency, heat, turn, policies[], staff[], flags{}).
- [ ] Build a tiny state-management pattern: `setState()` → `render()` re-draw loop.
- [ ] Seeded RNG utility.
- [ ] `localStorage` save/load stubs + a "New Game" reset.
- **Deliverable:** App loads, shows placeholder stats, can advance an empty turn counter.

### Milestone 1 — Core Turn Loop & Economy
**Goal:** The financial heartbeat works end to end.
- [ ] Implement the turn cycle: Portfolio → Event → Resolution → Report.
- [ ] Premium income calculation (per-policy premium summed each turn).
- [ ] Claim payout mechanics (deduct from reserve).
- [ ] Reserve, reputation, exposure, and solvency-rating math + derivation rules.
- [ ] Lose condition (insolvency / license revoked) with a goofy "Company Folded" game-over screen.
- [ ] Basic win/objective condition (survive N turns) with a "victory" screen.
- **Deliverable:** A full, if content-thin, run can be won or lost.

### Milestone 2 — Event Card Engine
**Goal:** The card system that drives drama and comedy.
- [ ] Card data schema (id, type, flavor, choices[], tags, weight, conditions).
- [ ] Card-draw logic: weighted, filtered by portfolio/state conditions.
- [ ] Choice resolution: apply effects (stat deltas, flags, follow-up cards).
- [ ] Card UI component: animated draw, choice buttons, consequence reveal.
- [ ] Seed ~15 starter cards across types (claim, opportunity, crisis, flavor) to prove the system.
- **Deliverable:** Drawing and resolving cards meaningfully changes the run.

### Milestone 3 — Policies & Portfolio Management
**Goal:** The tycoon half — building and tuning your book of business.
- [ ] Client/policy data model (line, premium, payout exposure, term length, quirks).
- [ ] "Sign new client" flow: offers appear, player accepts/declines, sets premium.
- [ ] Premium-setting tradeoff (higher premium = more income but client may walk / lower rep).
- [ ] Portfolio view: list of active policies with status, risk, time-to-renewal.
- [ ] Renewals & lapses (policies expire; some renew, some don't).
- [ ] The four insurance lines wired in with distinct risk profiles.
- **Deliverable:** Player actively shapes a portfolio that feeds the economy and event draws.

### Milestone 4 — Staff & Departments
**Goal:** Spend money to gain capabilities and modify odds.
- [ ] Staff/department data model (cost, upkeep, effect).
- [ ] Core departments: Underwriting (better client offers), Claims (cheaper payouts), Actuarial (risk visibility/forecasts), Legal (deny claims with less Heat), PR (reputation recovery).
- [ ] Hire/fire UI and per-turn upkeep costs.
- [ ] Department effects hooked into economy & card resolution.
- **Deliverable:** Meaningful build choices that let players specialize a run.

### Milestone 5 — Risk, Catastrophes & Crisis Chains
**Goal:** The scary, exciting consequences of a risky portfolio.
- [ ] Exposure-driven random catastrophe rolls each turn.
- [ ] Multi-turn **crisis chains** (a disaster that escalates over several turns with branching choices).
- [ ] **Boss Events** — rare, run-defining mega-catastrophes (Meteorpocalypse, Hive-Mind Class Action, Galactic Pandemic).
- [ ] Reinsurance mechanic: pay to offload tail risk before catastrophes hit.
- [ ] Heat/regulatory audit events triggered by shady play.
- **Deliverable:** Runs have dramatic peaks, tension, and memorable disasters.

### Milestone 6 — Content Pass #1 (The Comedy Engine)
**Goal:** Enough cards and clients to make runs feel rich and funny.
- [ ] Write 60–100+ event cards across all lines and types (the bulk of the humor lives here).
- [ ] 20–30 distinct client archetypes with personality and quirks.
- [ ] Flavor-text variation system so repeats feel fresh.
- [ ] Tone & copy editing pass for consistency and laughs.
- **Deliverable:** A run rarely repeats content and consistently lands jokes.

### Milestone 7 — Roguelike Meta-Progression
**Goal:** Reasons to play again.
- [ ] Meta-currency ("Industry Cred") earned per run based on performance.
- [ ] Persistent unlock store (new lines, perks, card pools, staff archetypes).
- [ ] Starting scenarios / "characters" (alternate companies with unique rules).
- [ ] Run modifiers and escalating difficulty curve.
- [ ] Persistent profile saved to `localStorage` (separate from run save).
- **Deliverable:** Losing feels like progress; players want "one more run."

### Milestone 8 — UI/UX & Juice Polish
**Goal:** Make it feel good and read clearly.
- [ ] Polished stat dashboard with at-a-glance health (color states, trend arrows).
- [ ] Card animations, transitions, and satisfying choice feedback.
- [ ] End-of-turn P&L "corporate report" screen with goofy charts.
- [ ] Sound effects (optional, generated via WebAudio so still single-file) + mute toggle.
- [ ] Particle/visual flourishes for catastrophes (canvas meteors, alien emoji rain).
- [ ] Responsive layout + keyboard support.
- **Deliverable:** The game looks and feels like a finished, charming product.

### Milestone 9 — Balance, Tuning & Difficulty
**Goal:** Make it fair, tense, and replayable.
- [ ] Economic balance pass (premium/claim/reserve curves so runs aren't trivially won or lost).
- [ ] Difficulty scaling tuning across run length.
- [ ] Card weight/condition tuning for good pacing.
- [ ] Add an in-game debug/sandbox panel for fast tuning.
- [ ] Playtest, gather notes, iterate.
- **Deliverable:** A run that's consistently engaging from start to finish.

### Milestone 10 — Onboarding, Save/Load & Release Polish
**Goal:** Ship it.
- [ ] First-time tutorial / tooltip pass (teach the loop without a wall of text).
- [ ] Robust save/resume mid-run + "abandon run" option.
- [ ] Settings (mute, difficulty, reset profile, seed entry for shared runs).
- [ ] Credits, version stamp, and an about/help screen.
- [ ] Final cross-browser test (single-file integrity check).
- **Deliverable:** A complete, self-contained `index.html` ready to share.

### Stretch Goals (Post-Launch)
- Daily-seed challenge mode with shareable score.
- "Board of Directors" meta-layer with quarterly demands.
- More insurance lines (e.g., Temporal Insurance, Sentient-AI Liability).
- Achievements / "Hall of Folded Companies."
- Cosmetic UI themes unlockable via meta-progression.

---

## 3. Suggested Build Order Rationale
Milestones 0–2 produce a **playable vertical slice** fast (a run you can win/lose driven by cards). Milestones 3–5 add the **tycoon depth and drama**. Milestone 6 is where the game becomes *funny* at scale. Milestones 7+ turn a good game into a **replayable, polished product**. You can stop after M6 and have a genuinely fun toy; M7–10 make it shippable.

---
*Document version: 1.0 — initial plan.*
