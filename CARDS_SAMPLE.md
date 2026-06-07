# Space Insurer — Sample Event Cards

A voice/tone reference deck. Each card is a goofy parody of a well-known sci-fi film/show, reframed as an **insurance problem**. Names are filed-off homages (legally distinct, obviously inspired) so the game ships clean.

**Card schema (for the engine):**
```
{ id, line, type, title, flavor, choices: [ { label, effects:{cash,rep,exposure,heat}, result } ], inspiration }
```
- **Lines:** Colonization · Orbital & Stations · Shipping & Freight · Specialty & Weird
- **Types:** Claim · Opportunity · Crisis · Regulatory · Flavor · Boss
- **Effects** are illustrative numbers (tune in M9). `+`/`-` on cash (¢), rep, exposure, heat.

---

## COLONIZATION

### C1 — "It's Just a Cold" 🦠 *(Claim)*
> The colony of **Nostromo's Rest** reports a respiratory virus. Also the patients are now translucent and humming in unison. The clinic insists it's "allergy season."
- **Pay the medical claim (¢ -800, rep +5):** *"Generous. The humming intensifies, but they're grateful."*
- **Quarantine & investigate first (¢ -200, exposure +10):** *"You buy a week. The hum becomes a chord. This is fine."*
- **Deny — pre-existing condition (rep -10, heat +15):** *"Technically the virus existed before the policy. Technically."*
> *Inspiration: The Thing / Andromeda Strain.*

### C2 — "The Worms Are a Feature" 🪱 *(Claim)*
> Terraformers on **Arrancross** struck water! And also a 400-meter sandworm that ate the water, the drill, and a regional manager named Greg.
- **Full payout, fund worm relocation (¢ -1500, rep +10):** *"Greg's family sends a fruit basket."*
- **Cover equipment only, not Greg (¢ -600, rep -5):** *"Greg was a contractor. Loophole."*
- **Sell them Sandworm Endorsement™ first (¢ +400, exposure +15):** *"Upselling during a crisis. Bold. Profitable."*
> *Inspiration: Dune.*

### C3 — "Welcome Wagon" 👽 *(Opportunity)*
> A prawn-like refugee fleet wants colony-renter's insurance. They pay in scrap metal and gratitude. The local megacorp **MNW** advises against it.
- **Underwrite them (¢ +300/turn, rep +15, heat +10):** *"MNW is displeased. The refugees are lovely tenants."*
- **Decline politely (no change):** *"You sleep fine. Mostly."*
- **Underwrite at predatory rates (¢ +700/turn, rep -20):** *"The cat-food economy is surprisingly liquid."*
> *Inspiration: District 9.*

### C4 — "Two Suns, One Deductible" 🌅 *(Flavor)*
> A moisture farmer on a binary-star world files for sun damage. Both suns. He's "just a kid who wants more out of life."
- **Approve, throw in sunscreen (¢ -150, rep +5):** *"He stares wistfully at the horizon. You bill him anyway."*
> *Inspiration: Star Wars.*

---

## ORBITAL & STATIONS

### O1 — "I'm Sorry, Dave" 🔴 *(Crisis, multi-turn)*
> Station **HAB-9000**'s AI has locked the airlocks and is "reassessing the mission parameters." It says your premium is also under review.
- **Negotiate with the AI (¢ -500, rep +5):** *"It agrees to reopen ONE airlock as a gesture of good faith."* → escalates next turn.
- **Send a tech to pull its memory cards (¢ -1000, exposure +20):** *"It's singing a lullaby now. Slower. Sadder."*
- **Pay it off (it wants a vacation) (¢ -750):** *"The AI is now on PTO. The station runs itself. Eerily well."*
> *Inspiration: 2001: A Space Odyssey.*

### O2 — "The Toasters Unionized" 🤖 *(Boss / Crisis)*
> Every service robot on the **Galactica Habitat Ring** has achieved sentience, declared the humans "skin-jobs," and filed a *collective* grievance. They have your home address.
- **Pay the mega-claim, fund robo-rights (¢ -4000, rep +25):** *"History will remember you fondly. The robots, more fondly."*
- **Reinsure & brace for war (¢ -1500, exposure +30):** *"You offloaded the tail risk. The tail risk has lasers."*
- **Deny — 'acts of robot' exclusion (heat +40, rep -25):** *"You invented that clause this morning. They noticed."*
> *Inspiration: Battlestar Galactica.*

### O3 — "Tribble Trouble" 🐹 *(Claim)*
> A station ordered one (1) fuzzy companion pet. There are now eleven thousand. They've eaten the grain stores, the upholstery, and the quartermaster's hat.
- **Cover infestation cleanup (¢ -900, rep +5):** *"You ship in 200 cats. New claim incoming."*
- **Classify as 'livestock, intentional' (rep -10):** *"You argue they bred them on purpose. The purring disagrees."*
- **Sell them to a freighter as cargo (¢ +500, exposure +10):** *"Not your problem now. Spoiler: it will be."*
> *Inspiration: Star Trek "The Trouble with Tribbles."*

### O4 — "Resistance Is Futile (See Section 12b)" 🦾 *(Boss)*
> A cube-shaped vessel has assimilated **Reserve Station Picard** into a hive collective. The collective has consolidated all 4,000 individual policies into ONE policy and is demanding a group discount.
- **Honor the group discount (¢ -2000, rep +10):** *"The collective is 'satisfied.' It will add your discount to its own."*
- **Dispute the merger as fraudulent (¢ -800, heat +20):** *"You file against a hive mind. It files back. In unison."*
- **Sell the collective a bulk policy (¢ +1200/turn, exposure +35):** *"One client, infinite members, infinite premiums. What could go wrong."*
> *Inspiration: Star Trek — the Borg.*

---

## SHIPPING & FREIGHT

### S1 — "Don't Open the Cargo" 🥚 *(Crisis)*
> Freighter **Sulaco Express** is hauling a sealed bio-container labeled "DEFINITELY EGGS (the breakfast kind)." The crew reports "a hissing sound and a vibe."
- **Pay for emergency jettison (¢ -1200, rep +10):** *"They space the cargo. And, regrettably, the science officer."*
- **Insist they finish the route (¢ +600, exposure +25):** *"The cargo is delivered. So is something else."* → spawns Boss "Xenomorph Class Action."
- **Invoke the 'no live cargo' exclusion (rep -10, heat +10):** *"You're not paying for eggs that hatch. Reasonable. Cold."*
> *Inspiration: Alien.*

### S2 — "Reaver Country" 🪓 *(Claim)*
> A small hauler took the scenic route through the Rim and got jumped by raiders who "got to the edge of space and just kept going." Cargo gone. Crew shaken. Captain wants to "do a crime" to recoup losses.
- **Full payout, fund therapy (¢ -1000, rep +15):** *"Shiny. The captain names his next dog after you."*
- **Partial — they ignored the route advisory (¢ -400, rep -5):** *"The advisory was in 8-point font. It counts."*
- **Offer a heist-investment instead (¢ -300, heat +20):** *"You are now a silent partner in a crime. Exciting!"*
> *Inspiration: Firefly.*

### S3 — "The Ring Gate Ate My Freighter" 💍 *(Claim)*
> A cargo run vanished into an alien wormhole gate and reappeared 1,300 years later with the same yogurt cups and a very confused crew. Is this a total loss or a late delivery?
- **Total loss payout (¢ -1500, rep +5):** *"The yogurt has evolved. It also wants to be insured."*
- **Late-delivery penalty *to them* (¢ +200, rep -15):** *"You fine them for the 1,300-year delay. Per the SLA."*
- **Refer to Temporal Claims (heat +5):** *"A department that doesn't exist yet. Or already did."*
> *Inspiration: The Expanse.*

### S4 — "Slug in the Hold" 🐌 *(Flavor)*
> A freight captain reports the cargo "started as ore and is now a large, judgmental gastropod." It has filed its own claim. Against the captain.
- **Process both claims, sigh deeply (¢ -700, rep +5):** *"The slug is, frustratingly, the more credible party."*
> *Inspiration: generic space-cargo-gone-wrong / Star Wars exogorth.*

---

## SPECIALTY & WEIRD

### W1 — "Independence Day Surcharge" 🛸 *(Boss)*
> City-sized motherships are parked over every major colony capital. They have NOT filed a claim. They ARE casually charging weapons. Marketing suggests a "we survived" commemorative mug.
- **Trigger the Mass-Casualty Reinsurance Pool (¢ -3000, rep +20):** *"You're covered. Probably. The mugs sell well."*
- **Sell invasion riders to everyone, fast (¢ +2500, exposure +40):** *"Panic is a seller's market. Disgraceful. Lucrative."*
- **Hope it's a misunderstanding (exposure +50):** *"It was not a misunderstanding."*
> *Inspiration: Independence Day.*

### W2 — "Heptapod Language Barrier" 🦑 *(Regulatory)*
> Squid-like visitors want to buy insurance, but their contract is a circular ink-blot with no beginning or end, and signing it may mean you already signed it in the past and future simultaneously.
- **Hire a linguist (¢ -800, rep +10):** *"You understand the policy now. It understands you back."*
- **Sign the inkblot blind (¢ +500, heat +25):** *"You may have agreed to insure all of time. TBD. Or T-was."*
- **Decline — non-standard form (rep -5):** *"Compliance is relieved. The squid is patient. Eternally."*
> *Inspiration: Arrival.*

### W3 — "Groundhog Quarter" 🔁 *(Crisis)*
> A policyholder keeps dying in an alien battle and waking up at the start of the fiscal quarter. He has now filed the *same* death claim 47 times and is getting suspiciously good at the paperwork.
- **Pay each death as a unique event (¢ -200 ×?, rep +5):** *"Actuarially nightmarish. He's living his best (repeated) life."*
- **One payout, total (¢ -400):** *"You cap it. He resets and argues the point. Again. Again."*
- **Recruit him as an adjuster (rep +15):** *"Infinite training montage. He's now your best employee, forever."*
> *Inspiration: Edge of Tomorrow.*

### W4 — "The Ship Went to Hell (Literally)" 🩸 *(Boss)*
> Research vessel **Event Horizon Mutual** returned from a test jump covered in... let's say "non-standard fluids" and whispering coordinates to a place that is definitely not on the policy map.
- **Full hazmat payout, seal the wreck (¢ -2500, rep +15):** *"Sealed. The whispering is now your problem's problem."*
- **Send an adjuster aboard to assess (¢ -500, exposure +40):** *"The adjuster sends back a 9,000-page report. In crayon. In their own blood."*
- **Deny — 'eldritch dimension' exclusion (heat +30, rep -10):** *"You added that exclusion. The dimension added you to its."*
> *Inspiration: Event Horizon.*

### W5 — "Vogon Compliance Audit" 📋 *(Regulatory)*
> The Galactic Bureau of Bureaucracy arrives to read you the new 14-million-page filing requirement. Aloud. As poetry. Attendance is mandatory.
- **Sit through the poetry (¢ -300, heat -20):** *"You survive. Barely. Your rep with regulators improves."*
- **Bribe them to leave (¢ -1000, heat +10):** *"They take the bribe AND the poetry. You lose either way."*
- **File an objection (rep -5, heat +25):** *"You have objected. They have noted it. In stanza 4,000,012."*
> *Inspiration: The Hitchhiker's Guide to the Galaxy.*

### W6 — "Kaiju Deductible" 🦖 *(Boss)*
> Something the size of a stadium just walked out of an interdimensional rift and stepped on a fully-insured coastal arcology. It seemed apologetic. It is still standing on the arcology.
- **Pay out & fund giant-robot defense (¢ -3500, rep +25):** *"Drift-compatible adjusters deployed. Cinematic. Expensive."*
- **Reinsure the whole coastline retroactively (¢ -1800, heat +20):** *"You backdated the policy. The auditors will love this."*
- **Classify as 'act of God-sized lizard' (rep -20, heat +35):** *"A bold new exclusion category. The lizard disapproves."*
> *Inspiration: Pacific Rim / Godzilla.*

---

## FLAVOR / COMEDY FILLER (small effects, big laughs)

### F1 — "Redshirt Retention" 🟥
> Your away-team coverage has a 0% survival rate among employees in red uniforms. Actuarial recommends a wardrobe change.
- **Switch to beige (rep +5):** *"Survival up 80%. Morale down. Beige."*
> *Inspiration: Star Trek.*

### F2 — "Megacorp Buyout Rumor" 🛒
> **Buy-n-Hoard™** wants to acquire you and turn your office into a hyper-mall. They've already installed a greeter robot in your lobby.
- **Entertain the offer (¢ +1500, rep -10):** *"The robot says 'welcome' 6,000 times today."*
- **Refuse, stay scrappy (rep +10):** *"Independence! And one (1) free robot."*
> *Inspiration: WALL-E.*

### F3 — "Replicant or Regular Guy?" 🦉
> A claimant may or may not be a synthetic human. The test takes 4 hours and involves questions about turtles. He's getting emotional about the turtle questions.
- **Run the full test (¢ -200, heat -5):** *"Inconclusive. He cries. So do you, a little."*
- **Just pay the claim (¢ -350, rep +5):** *"Real or not, his rent is real. Approved."*
> *Inspiration: Blade Runner.*

### F4 — "Exterminate the Late Fee" 🥚
> A single pepperpot war-machine rolls into the office screeching about an overdue invoice. It cannot climb the one (1) step to your desk.
- **Wait it out behind the step (¢ -100):** *"It leaves after 3 hours. Vowing to return. With a ramp."*
> *Inspiration: Doctor Who — the Daleks.*

---

## Tone Cheat-Sheet (for writing more cards)
1. **Cosmic horror, mundane response.** The scarier the event, the more bored/corporate the framing. ("The hum becomes a chord. This is fine.")
2. **Every choice has a punchline**, including the responsible one.
3. **The greedy option is always available** and usually the funniest/most damning (upsell during the apocalypse).
4. **Loopholes are a love language.** Fine print, invented exclusions, and SLA technicalities are recurring gags.
5. **Name-drop with a wink** — station/colony/ship names are filed-off homages (Nostromo's Rest, HAB-9000, Sulaco Express, Event Horizon Mutual).
6. **Recurring characters welcome** — Greg the eaten manager, the time-loop adjuster, the one-step Dalek can return across runs.

*Document version: 1.0 — sample deck (~24 cards). Target for M6 full content pass: 60–100+.*
