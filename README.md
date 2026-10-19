# Space Insurer

> *"In the year 2387, everything in the galaxy is insured. Most of it shouldn't be."*

A comedic insurance-tycoon roguelike that runs in your browser. You are the newly appointed CEO of **Mutual of Andromeda**, an interstellar insurer that underwrites the riskiest ventures in known space: planetary colonies, orbital stations, deep-space freight and stranger things. Sign clients, set premiums, hire departments and decide which absurd claims to pay, all while staying solvent for 20 quarters. Aliens will file claims. Meteors will total a colony. A hive mind will dispute its deductible.

The whole game is a single HTML file with no dependencies or build step. It works on desktop and mobile.

| | |
|---|---|
| Version | 0.5.0 |
| Stack | One HTML file: vanilla JavaScript, CSS and inline SVG art; Web Audio for sound |
| Saves | Your browser's `localStorage` (current run, meta-progression and settings) |

## Play

**Locally:** open `index.html` in a browser. That's it.

**With the bundled server** (Node.js 18+):
```
npm start
```
Then open http://localhost:3000. The server is a small zero-dependency static file server that reads the `PORT` environment variable, so it also runs as-is on hosts like Railway.

## How it plays

A run is one company's lifespan: **20 quarters**, starting with **¢10,000** in GalactiCredits and 50 reputation. Each quarter has four phases:

1. **Portfolio.** Review client offers and sign the ones worth the risk. Set each premium with a slider (up to 160% of the base rate): a higher premium earns more but lowers the chance the client accepts. Buy reinsurance and hire departments.
2. **Events.** Draw event cards and choose how to respond. Every choice costs something and shifts your stats.
3. **Resolution.** Premiums come in, claims go out, and catastrophes may strike based on how much risk you've taken on.
4. **Report.** A corporate dashboard shows the quarter's profit and loss.

**You lose** if your capital hits zero (insolvency) or regulators pull your licence. **You win** by surviving all 20 quarters; finish with ¢15,000 or more for a full IPO victory.

### Stats to watch

| Stat | What it means |
|---|---|
| Capital | Your cash. Premiums add to it, claims take from it. Zero ends the run. |
| Reputation | Galactic trust. Low reputation brings fewer and worse offers, and below 15 it draws regulatory heat every turn. |
| Risk exposure | How much danger your portfolio carries. More exposure means more premium income and bigger catastrophes. |
| Heat | Regulatory attention from cutting corners, such as denying valid claims. High heat triggers audits and can cancel policies. |

### Insurance lines

- **Colonization:** new settlements facing meteor strikes, strange viruses and hostile fauna.
- **Orbital and stations:** habitats facing decompression, reactor trouble and AI revolts.
- **Shipping and freight:** haulers facing pirates, wormholes and cargo that turns out to be alive.
- **Specialty and weird:** alien invasions, hive-mind disputes, time anomalies and cryo-tourism "incidents".

### Event cards

60 hand-written cards across six types: claims (pay or deny), opportunities, multi-turn crises, regulatory visits, pure-comedy flavor cards, and five run-defining boss catastrophes. Difficulty ramps through the run, from gentle early quarters to a brutal final push.

### Departments

Hire departments for an upfront cost plus quarterly upkeep. For example, Underwriting brings an extra client offer each quarter, Claims cuts every payout by 25%, and the Actuarial division shows each client's real claim odds and your margin as you set the premium.

### Meta-progression

Every run, win or lose, earns **Industry Cred**, which you spend between runs on permanent perks: extra starting capital, a reputation boost, an extra client offer, free first-quarter reinsurance and more. There are also achievements to unlock.

## Repository contents

| Path | What |
|---|---|
| `index.html` | The entire game |
| `server.js`, `package.json` | Optional static server for local play or hosting |
| `Assets/` | Source SVGs for the logo, card-type badges, icons and banners (the game itself embeds them inline) |
| `PLAN.md` | The original design plan: concept, systems and milestones |
| `CARDS_SAMPLE.md` | Sample event cards written during design |
| `ASSET_REQUEST.md` | The art brief used to produce the SVG assets |

## Status

A playable prototype. The [design plan](PLAN.md) covers ideas not built yet, such as staff archetypes, alternate starting companies and more card pools.
