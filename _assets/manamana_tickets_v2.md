# manamana.io — Improvement Tickets v2 (Deep Critique)

**This version replaces v1.** It is grounded in research on choice paralysis, the failure patterns of adjacent products (Yummly, PlateJoy, Entrée, multiple "Tinder for restaurants" attempts), and the specific dynamics of the Malaysian halal-certification market. It is more critical than v1 because v1 was too kind — it treated manamana as a UX project. It is actually a trust-and-positioning project that happens to have a UX layer.

**Context for the agent:** Single static HTML file. No build step, no backend. Restaurant data in `RESTAURANTS` array. Three-layer scoring: `moodScore + momentScore + prefScore + jitter`. localStorage for prefs and history. GA4 via `track()`. The whole app is ~1000 lines.

---

## What v1 missed (read this first)

Before the tickets, three structural problems v1 didn't name. Every ticket below either addresses one of these or doesn't matter.

**Problem 1: The product is positioned as "we decide" but architected as "we suggest."**
The four questions are filters; the matcher returns a top result; the "Pergi dah" button commits. But there is no reroll, no second choice, no escape valve — and the matcher uses a 0.4-jitter random factor, meaning the same answers can produce different results across sessions. That contradiction is invisible to the founder but obvious to a power user: the product simultaneously claims oracular authority ("Reading your soul lah") and behaves like a random recommender. Either the matcher is deterministic and authoritative (in which case kill the jitter and own it), or it is a suggester (in which case give users a list, not a single result). The current middle ground is the worst of both worlds. v1 ticket P0-2 (reroll) papered over this. It needs a real architectural decision.

**Problem 2: The halal claim is unverified and legally fragile.**
Every restaurant in the dataset is rendered with a "Halal" chip on reveal. The dataset itself has no `halalCertified` field, no JAKIM certificate number, no source citation. Some entries are halal-certified (Nando's, Sushi Zanmai). Some are halal-friendly / pork-free but not certified (Banyan, many cafes). Some are likely neither (PAUL Bakery — verify; serves alcohol-adjacent items). Malaysia treats false halal claims as a serious matter — JAKIM has prosecution power, and consumer trust collapses fast when a single restaurant turns out to be miscategorized. Verify Halal (the JAKIM-endorsed app) exists precisely because consumers don't trust unverified claims. manamana cannot build halal-Muslim trust without verification, and cannot be sued-or-shamed into a corner if it gets one wrong. This is not a UX ticket. It's an existential one.

**Problem 3: Every "Tinder for restaurants" has died, and so did Yummly.**
Entrée (swipe left/right on dishes), Munch (group swipe), Taest, multiple GitHub clones — all dead or zombie. Yummly, which is the closest analog with a $100M acquisition behind it, was shut down by Whirlpool in December 2024. The takeaway from the post-mortems is consistent: matching to a fixed database from preferences is a feature, not a product. It doesn't generate enough repeat behavior to sustain. Users solve their decision once, then either return to habit (the same 3-4 places) or escalate to a real recommender (a friend, a critic). manamana is closer to Akinator than to Tinder — it should embrace the "I read your soul" mystique and lean *harder* into editorial voice, not into algorithms. The tickets below shift weight from matching tweaks to retention loops and trust-building.

---

## Tickets, ordered by leverage

Priority labels: **CRITICAL** = blocks launch or trust. **HIGH** = ship within 2 weeks. **MEDIUM** = ship within 6 weeks. **LOW** = nice to have. **REJECTED** = considered and explicitly not doing, with reasoning.

---

### CRITICAL-1 · Decide whether manamana is an oracle or a suggester, then commit

**Why:** The current product is incoherent. The voice claims authority ("We'll decide. You just eat."). The mechanic — random jitter, no reroll, no list view — behaves like a slot machine. Users notice. A single user opening the app twice with the same answers and getting two different restaurants will quietly lose trust in the system. This is the single largest credibility gap in the product, and it cannot be patched with a button.

**The decision (founder must make this):**

- **Path A (Oracle):** Kill the jitter. Make the matcher fully deterministic given (answers, time, location, history). The same inputs always produce the same answer. Add a single "I changed my mind" button that goes back to the quiz, not a reroll button. Lean harder into the mystique — the loading screen becomes longer and more theatrical, the "why" copy is treated as revelation, not justification. This is the Akinator path. It requires the dataset to be deeper and the matching to be smarter, but the brand becomes unforgettable.

- **Path B (Curator):** Embrace the shortlist. Show top 3 with the #1 framed as "Aku rasa..." and #2-3 as "atau..." Give explicit reroll. Make jitter visible as variety. Drop the "We'll decide" tagline and replace with something honest like "Tiga pilihan, tiga puluh saat." This is the Burpple-killer path — it concedes the editorial fight but wins on speed.

**Acceptance criteria:**
- Founder writes a one-paragraph decision in the codebase as a top-of-file comment: `/* MANAMANA POSITIONING: Oracle | Curator. Locked YYYY-MM-DD. */`
- All subsequent tickets are evaluated against this decision
- The tagline, the loading copy, and the reveal screen mechanics are all consistent with the chosen path
- The decision is not revisited for at least 3 months of live usage data

**Cowork should not implement this ticket. It should block on it and ask the founder to decide before proceeding to CRITICAL-3 and beyond.**

---

### CRITICAL-2 · Fix the halal trust gap before any growth spend

**Why:** Every restaurant currently displays a "Halal" chip. The dataset does not store halal certification status, source, or verification date. Malaysia is the most halal-stringent consumer market in the world — JAKIM certification is not a marketing badge, it is a legally enforced status (MS 1500:2019). Verify Halal, the JAKIM-endorsed app, exists because consumers actively distrust unverified halal claims. If manamana sends a single observant Muslim user to a restaurant labeled "Halal" that turns out to be pork-friendly, halal-friendly-but-not-certified, or selling alcohol, the response will not be a refund request. It will be a screenshot on Twitter, a tag to JAKIM's account, and a permanent reputation collapse. The cost of this happening once is higher than the cost of fixing it now.

**Acceptance criteria:**
- Add three fields to every restaurant: `halalStatus: 'certified' | 'pork-free' | 'serves-pork' | 'unknown'`, `halalSource: string` (JAKIM cert number, "self-declared", "verified by founder visit YYYY-MM", etc.), `halalVerifiedDate: ISO date`
- The reveal chip changes based on status: `Halal certified` (green, with a small JAKIM logo if `halalSource` matches a JAKIM cert pattern), `Pork-free` (yellow), `Serves pork` (red, only shown if user has explicitly opted into pork-friendly mode), `Halal status not verified` (gray)
- Restaurants with `halalStatus: 'unknown'` are filtered out by default for users in the "halal-required" mode (see CRITICAL-4 on dietary mode)
- Every restaurant in the current dataset must be audited and assigned a status before launch. If the founder cannot verify a restaurant in 5 minutes via the Verify Halal app or a phone call, the entry is removed.
- A footer link "Salah info? Tell us" lets users flag mismatches; flags pause the restaurant from matching until reviewed
- Add an explicit disclaimer in the splash or footer: "Halal status disahkan terakhir [date]. Sentiasa check sendiri."

**Estimate:** This is 1-2 days of dataset work, not a coding ticket. The founder personally audits all 50 restaurants. There is no shortcut.

---

### CRITICAL-3 · Fix the SSL certificate

**Why:** As v1 noted. Unchanged. `https://manamana.io` serves an invalid certificate. Any growth marketing spent before this is fixed is wasted.

**Acceptance criteria:**
- `curl -vI https://manamana.io` returns valid cert covering `manamana.io` and `www.manamana.io`
- HTTP 301 → HTTPS
- HSTS header present
- A11y: GA4 still receives pageviews after the migration

---

### CRITICAL-4 · Add explicit dietary mode at the very start, not as a question buried in the quiz

**Why:** Dietary requirements are filters, not preferences. They cannot be averaged or scored. A vegetarian who picks "Cuisine: Asian vibes" and gets matched to a non-vegetarian restaurant has been failed by the product, not given a suggestion. The current flow has no dietary question at all — it assumes everyone is fine with the (claimed) all-halal dataset. This excludes pork-eating Chinese Malaysians (a large segment of Klang Valley), serves vegetarians badly, and trusts non-Muslim users with halal information they don't need.

**Acceptance criteria:**
- A one-time mode selector appears once on first visit, before the splash: a screen titled "Apa kau makan?" with options: `Halal sahaja` (halal-only), `Tak kisah` (no preference, includes pork-friendly), `Vegetarian`, `Vegan`. The choice is stored in localStorage as `mana_diet_v1` and never asked again.
- A small toggle on the splash lets users change the mode (so a Muslim user hosting non-Muslim friends can switch to "tak kisah" temporarily)
- The mode is a hard pre-filter, applied before the quiz scoring runs. It empties unsuitable restaurants from the pool entirely.
- The dataset gains a `diet` field per restaurant: `['halal-certified', 'pork-free', 'serves-pork', 'vegetarian-friendly', 'vegan-friendly']` (multi-tag array)
- If the chosen mode + the answers produce zero matches, the loading screen explicitly says so before reveal: "Susah sikit malam ni — only got [X] in mode [Y]. Tukar mode?" with an explicit option to relax
- Track `track('diet_mode_set', {mode})` and `track('diet_mode_changed', {from, to})`

**Why this is CRITICAL not HIGH:** Without this, manamana is a halal app pretending to be universal. Either commit to halal-only positioning (which is fine, and arguably stronger) or actually serve everyone. The current state is half a product.

---

### CRITICAL-5 · Track everything between reveal and outcome

**Why:** Same reasoning as v1's P0-3, but extended. We need to know not just "did they click Maps" but "did the match feel right." We are flying blind on the actual product metric.

**Acceptance criteria:**
- `track('reveal_shown', {restaurant, scores: {mood, moment, pref, total}, rank, gap_to_second})` on every reveal — capturing the matcher's confidence
- `track('reveal_abandoned', {restaurant, time_on_reveal_ms, action: 'closed_tab' | 'navigated_away' | 'reroll' | 'reset'})` — captures non-conversion paths
- `track('maps_clicked', {restaurant, time_to_click_ms, rerolls_used})` — extends existing
- `track('maps_returned', {restaurant, time_away_ms})` if the user comes back to the tab after Maps — partial signal of whether they actually went
- A single derived metric in GA4: `commit_rate = maps_clicked / reveal_shown`. This is the product's North Star. Below 50% means the matcher is wrong. Below 30% means the product is wrong.

---

### HIGH-1 · Replace the "5 questions" framing — there are 4, and one of them is doing nothing

**Why:** The product is marketed as "5 questions" but the code has 4. "Lapar tak?" contributes 2/15 points to the score and has only 2 options — it is the weakest signal in the system. Research on choice architecture (Iyengar/Lepper, NN/Group) is clear: low-information questions don't reduce paralysis, they add it. The user feels asked-for-no-reason, which corrodes the "we read your soul" promise. v1 suggested making it a hard filter; on reflection, that's wrong — speed isn't actually a strong filter for KL restaurants either (most places serve in under 30 minutes). Better to delete it and use the saved attention budget for something that matters.

**Acceptance criteria:**
- Remove the speed question from `QUESTIONS` array. Quiz becomes 3 questions.
- Update progress bar segments, "0X of 0Y" labels.
- Remove `scores.speed` from `moodScore` calculation.
- Marketing copy aligns: tagline becomes "Tiga soalan. Satu jawapan." or similar — honesty wins.
- **Replacement question candidate (test before adding):** "Pergi dengan siapa?" — solo / pair / group of 3+ — this dramatically affects what restaurants make sense (a banana leaf restaurant for solo is sad; a romantic spot for 5 friends is wrong). Group size is currently invisible to the matcher.

**Note to agent:** Do not add the replacement question without founder approval. Shipping 3 questions is fine. Shipping the wrong 4th is worse than shipping 3.

---

### HIGH-2 · Build the share-image mechanic, but with a twist that creates a viral loop

**Why:** v1 P1-3 had this right but underspecified the design goal. A generic "look what manamana matched me with" image gets one share and dies. The viral loop needs a hook that pulls the recipient into the app, not just to Google Maps. WhatsApp group culture in KL specifically rewards content that triggers debate or copycat behavior.

**Acceptance criteria:**
- The share card shows: restaurant name (huge), area, the "why" copy in the existing voice, AND a personality-style line based on the user's answers: e.g., "Untuk orang yang suka jimat tapi nak sedap" / "Date night energy detected" / "Klasik Bangsar mood"
- A QR code in the corner that links to `manamana.io?ref=share&seed=[matched-restaurant-id]`. When opened, the recipient gets a special splash: "Kawan kau got [Village Park]. Cuba kau punya pulak?" — they go through the quiz and see whether they get matched to the same place. This is the loop: every share invites a comparison.
- Generated via Canvas API on-device, no external service. Use the existing `bg` gradient as the card background.
- Native share sheet via `navigator.share({files})` on iOS 15+, fallback to WhatsApp text-with-link
- Track `track('share_viral_link_opened', {original_match, original_user_anon_id})` on the recipient side
- The "comparison" experience needs no extra code on the receiving end — it just stores `seed` in localStorage and shows a small banner on the reveal: "[Sender] got [restaurant] — kau dapat [different/same]"

**Why this matters more than v1 framed:** It turns every share from a one-way broadcast into a two-way conversation. KL group chats run on this kind of competitive teasing. This is the only feature in the product that can drive K-factor above 1.

---

### HIGH-3 · Ruthlessly audit and rebuild the dataset

**Why:** The current 50 restaurants have multiple problems beyond v1's note about coordinate clustering. On closer inspection: (a) some lat/lng values appear copy-pasted across sibling entries in the same area, (b) opening hours are best-guesses rather than verified, (c) the "why" copy quality varies — some entries are genuinely insightful, others are filler, (d) the price tier definitions don't match Klang Valley reality (RM30 is "jimat" but you can have a 4-person dim sum lunch for that). The dataset *is* the product. A great matcher on a mediocre dataset is a mediocre product.

**Acceptance criteria:**
- Every restaurant audited for: real lat/lng (Google Maps right-click → copy), real opening hours (call or check Google Business), halal status (Verify Halal app or visit), accurate price tier (check menu prices, not vibes)
- Drop any restaurant that has closed, pivoted, or can't be verified — the dataset shrinks before it grows
- Rewrite every "why" line that doesn't pass the test: "Would a real KL friend say this in a WhatsApp message?" If it sounds like marketing copy, kill it.
- Add 3-5 photos URL field per restaurant (Google Places API or hand-curated) — not yet displayed, but ready for the share-card system in HIGH-2
- Document the source for every entry: who recommended it, when verified, link to Verify Halal record if applicable
- Target dataset size after audit: 80-100 restaurants. Quality > quantity.
- Establish a versioning convention: `RESTAURANTS_VERSION = 'YYYY-MM-DD'` constant at top of array, surfaced in GA4 events so behavior across dataset versions is comparable

**Estimate:** 2 weeks of founder time. There is no way to outsource this without losing the editorial voice.

---

### HIGH-4 · Make the preference learning visible and exploitable by the user

**Why:** v1 P1-4 (history on splash) was right but timid. The `prefScore` learning has been operating since launch and the user has no idea. Modern users — particularly Gen Z, who are the highest-share-rate segment — *want* their algorithmic shadow exposed. Spotify Wrapped works because it shows you what you didn't know you were doing. manamana has the data; it's hiding it.

**Acceptance criteria:**
- A persistent "Profile aku" link in the corner (or accessible by long-press on the logo) opens a screen showing:
  - Top 3 cuisines you've matched with, by frequency
  - Your most-matched price tier, with a one-line interpretation: "Kau orang mid-range. We see you."
  - Last 5 matches with date and whether you opened Maps
  - A "delete profile" button that clears localStorage (compliance / honesty)
- The splash screen, on returning visits (visit count > 3), shows a tiny line: "12 matches · selalu kau pergi tempat Bangsar"
- The tone is observational, not creepy. Manglish as before. The line should feel like a friend who notices, not a system that surveils.
- Track `track('profile_viewed', {match_count})` and `track('profile_deleted')`

---

### HIGH-5 · Replace random jitter with deliberate variety

**Why:** Currently `Math.random() * 0.4` is added to every score. This is decision-making theater — it makes the product feel less reliable in service of a real concern (avoiding identical re-matches). The right solution is not randomness but *deliberate exclusion* of recently-served restaurants. This is what Spotify, Netflix, and TikTok all do; none of them inject score noise.

**Acceptance criteria:**
- Track the last 10 matched restaurants in `mana_recent_matches` localStorage
- In the matcher, apply a hard penalty (-5 to score) for restaurants matched in the last 7 days
- Apply a smaller penalty (-2) for restaurants matched in the last 30 days
- Remove the `Math.random() * 0.4` from the scoring
- A user with the same answers on consecutive days gets the same answer until the penalty decays — this is *correct behavior* and aligns with the oracle positioning
- Track `track('match_excluded_by_recency', {restaurant, days_since_match})`

**Note:** This ticket is conditional on Path A being chosen in CRITICAL-1. If Path B (Curator) is chosen, jitter is fine but should still be principled.

---

### MEDIUM-1 · The "WhatsApp group decision mode"

**Why:** The single most common decision-fatigue moment in KL is not solo — it's "5 of us, where to eat ah." Every existing food app fails this case. Group decision is a recognized gap (multiple GitHub Tinder-for-restaurants clones tried and died). Solving it doesn't require accounts or backend — a shared URL with a hash of answers does the job.

**Acceptance criteria:**
- New flow: after the quiz, before the reveal, an option "Pergi dengan kawan? Tunggu jawapan dorang dulu" generates a shareable URL like `manamana.io/group/[6-char-hash]`
- Friends opening the URL run their own quiz; their answers are stored in URL state (no backend needed — encode in the URL fragment)
- After 2-5 friends have answered (configurable), the originator returns to the URL and sees a consensus match — restaurant whose tags satisfy the most users' answer-sets, weighted by overlap
- The consensus algorithm: aggregate all participants' filters as a union for hard filters (halal, diet) and intersection for soft preferences (price within 1 tier of median, cuisine that satisfies plurality)
- Track entire flow: `group_created`, `group_joined`, `group_resolved`, `group_abandoned`
- This is a *defensible* feature against Burpple, OpenRice, Foodpanda — none of them solve group decisions

**Why MEDIUM not HIGH:** The solo experience needs to be tight first. Group is a multiplier, not a foundation.

---

### MEDIUM-2 · Closing-soon and "open exclusively now" matching

**Why:** v1 P2-4 mentioned closing-soon. Extending: the inverse is also valuable. A 2am match should know that almost everything is closed and confidently surface the few places that *are* open. Currently `isOpen()` returns binary; the matcher loses information.

**Acceptance criteria:**
- New helper `openSignal(r)` returns: `'open-comfortable'` (closes >2hrs from now), `'closing-soon'` (<60 min), `'opening-soon'` (opens within 30 min), `'closed'`, `'24h'`
- Reveal chip varies: green "Open" with hours / yellow "Closes in 35 min" / blue "24 hours" / etc.
- Late-night matching (after 10pm or before 6am) prioritizes `24h` and `open-comfortable` venues; 24h venues get a +3 score bonus during these hours
- Button text adapts: "Pergi cepat" if closing soon, "Pergi dah" otherwise
- Track `track('match_was_closing_soon', {minutes_left})` to measure how often this saves a bad experience

---

### MEDIUM-3 · The "I went, what did you think?" loop

**Why:** This is the missing feedback loop that turns one-shot users into a learning system. After the user clicks "Pergi dah," they leave the tab. They come back later (or the next time). We have no idea if the match was good. Without this, the product cannot improve based on real signal — only on click-through.

**Acceptance criteria:**
- On the next visit after a match, the splash shows a single line above the existing splash: "Last time kau pergi [Village Park]. Best tak?" with two buttons: "Sedap" / "Mehh"
- The response is stored in localStorage and influences future matching: a "sedap" boosts the cuisine/price/area cluster of that restaurant; a "mehh" suppresses it
- The response is also surfaced in the Profile (HIGH-4): "5 sedap · 2 mehh"
- This is the *only* notification-style nudge in the entire app — keep it light, don't add more
- Track `track('match_feedback', {restaurant, rating: 'sedap' | 'mehh', days_since_match})`

---

### MEDIUM-4 · Restaurant deep links into actual booking/delivery

**Why:** Currently the only CTA is "Open in Google Maps." For the splash-tier user (date night, work meal), Maps is wrong — they want to book a table. For lazy mid-tier moments, they may want Foodpanda/GrabFood. The single CTA flattens user intent.

**Acceptance criteria:**
- Each restaurant gets `actions` field: `{maps?, foodpanda?, grabfood?, table_booking?, phone?}` — populated where known
- Reveal screen shows up to 3 action buttons based on what's available and the matched occasion: Date/work meal → "Book table" or "Call" first; Casual → Maps first; Lapar gila → Foodpanda first
- Track which actions are clicked: `track('action_clicked', {restaurant, action_type})`
- This is also the foundation for any future monetization (affiliate links, sponsored placements) without committing to it now

---

### MEDIUM-5 · Splash-tier (price 3) dataset expansion

**Why:** Same as v1 P1-2 but reframed. Splash is currently 9 of 50 entries. After HIGH-3 audit, it might be 9 of 70. The premium user is high-value (high LTV, high share rate, low rejection rate of "treat yourself" signals) and currently underserved. But the dataset *quality* matters more than count. Don't add 20 mediocre splash-tier restaurants; add 10 great ones with strong "why" copy.

**Acceptance criteria:**
- Minimum 15 splash-tier entries (price=3) post-audit
- Cuisine spread: ≥4 Malaysian, ≥4 Asian, ≥4 Western
- Geographic spread: ≥2 in each of Bangsar, Mont Kiara/Hartamas, KLCC/Bukit Bintang, TTDI/Damansara, PJ
- Each entry has rich `momentCopy` for at least dinner and weekend slots
- Halal status verified per CRITICAL-2
- Some specific candidates to research and verify: Beta KL, Cantaloupe, Marble 8, Soulla, DC Restaurant, Mr Chew's Chino Latino, Marini's on 57, Hide. Verify operating status — KL fine dining churns annually.

---

### LOW-1 · Restaurant suggestion form (v1 P2-2, unchanged)

User-submitted suggestions feed the dataset for free. Use Formspree or a tiny Cloudflare Worker. Standard form, three fields, confirmation in the existing voice.

### LOW-2 · Geolocation re-ask (v1 P3-1, unchanged)

If user denied geo on first visit, offer a small "tap to retry" link.

### LOW-3 · Deep-cut mode (v1 P3-2, unchanged)

Power-user toggle that penalizes "too popular" restaurants.

### LOW-4 · Split data from logic (v1 P3-3, unchanged)

Move restaurants to JSON. Not urgent until the dataset hits ~150.

---

## Tickets I considered and rejected

**REJECTED · User accounts.**
The v1 memo argued against this and the research confirms it. Yummly had accounts; it died anyway. PlateJoy had accounts; it died anyway. Accounts add friction at the moment of first use and don't solve any problem that localStorage doesn't already solve at our current scale. We can revisit when we have a reason — group features (MEDIUM-1) might force this eventually, but URL-state can defer it for a long time.

**REJECTED · ML / embeddings for matching.**
Three reasons. (1) The dataset is too small for ML to outperform a well-tuned rule-based scorer. (2) The interpretability loss is severe — when a user complains "why did you match me to X?" we need to be able to answer. (3) Every failed competitor in this space (Yummly's Taste Profile, Entrée's "unique algorithm") used ML and still died. The matching is not the problem.

**REJECTED · Reviews and ratings.**
The moment we let users vote, we have to moderate, defend rankings, and compete with Burpple/OpenRice on their turf. The editorial voice (founder picks 100 places, writes a "why" for each) is more defensible than a crowd signal. Reviews would dilute the brand within a quarter.

**REJECTED · Native iOS/Android apps.**
Mobile web works, install friction is high, App Store discovery is dead for free utilities. Native lets us iterate hourly; native costs us weeks. Revisit only if/when push notifications become a critical retention lever — which they won't for a long time, because pushing "where to eat" notifications is the wrong product instinct (the user comes to us when they're hungry, not the other way around).

**REJECTED · Multi-city expansion.**
v1 already argued this. Extra reason: the matcher's halal-aware design is Klang Valley-tuned. Singapore has a different halal landscape. Penang has a smaller decision space. Going wider before going deep is the classic mistake.

**REJECTED · A general-purpose decision-fatigue platform.**
The architecture is food-specific. A "what to wear" version would share almost no code. If the founder ever wants to build that, it's a separate product with a separate brand.

---

## Suggested execution sequence

**Block on CRITICAL-1.** Founder makes the oracle/curator call. Document it. This is the only ticket the agent should refuse to work around.

**Week 1:** CRITICAL-3 (SSL), CRITICAL-5 (analytics), HIGH-1 (kill speed question).

**Weeks 2-3:** CRITICAL-2 (halal audit) and HIGH-3 (dataset rebuild) in parallel — these are founder-time, not agent-time, but the agent can prepare the schema changes and validation scripts.

**Week 4:** CRITICAL-4 (dietary mode), HIGH-5 (deterministic matching).

**Week 5-6:** HIGH-2 (viral share card), HIGH-4 (visible profile), MEDIUM-3 (post-match feedback).

**Week 7+:** Re-prioritize based on actual data from CRITICAL-5. The list above is informed guesses; week 7 numbers are real signal.

---

## What success looks like, measured

The product is working when we hit, simultaneously:

- **Commit rate ≥60%:** of users who see a reveal screen, ≥60% click "Pergi dah" (or any deep-link action)
- **D7 return ≥25%:** a quarter of first-time users come back within a week
- **Share rate ≥10%:** at least 1 in 10 reveals results in a share action
- **Group completion ≥40%:** when group mode launches, at least 40% of groups created reach a consensus match within 24h
- **Halal complaint rate = 0:** zero substantiated reports of incorrect halal labeling

If we hit those numbers, manamana is a real product. If we miss any of them by a meaningful margin after 90 days of live usage, the strategy needs rethinking — not the implementation.

