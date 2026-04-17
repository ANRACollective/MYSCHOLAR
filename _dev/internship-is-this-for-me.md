# "Is This For Me?" — MyIntern Experience Design
**SOFIA · April 2026 · myscholar.my/internships**

---

## The Problem We're Solving

A Malaysian student opens MyIntern. They see 150 cards. They scroll. They click one. They read the description. They discover the CGPA requirement is 3.5 and they have a 3.1. They go back. They click another. It's only open to Bumiputera students. Back again.

That's Prosple's experience too, just with 783 listings instead of 150.

The student pain that came through forum research is clear: they waste time applying to things they can't get, and they get no response. The rejection isn't communicated — it's just silence. Over and over.

MyIntern's job is to eliminate that silence before it happens. Tell the student *upfront* whether something is worth their time. Not after the click. Not after the application. Before.

---

## The Three Moments That Matter

Thinking like a student, here are the three moments where we either earn trust or lose them:

**Moment 1: Landing on the page.**
"Is there anything here for me, or is this going to waste my time?"

**Moment 2: Reading a card.**
"Do I even qualify? Is it still open? How much does it pay? Is this company any good to work for?"

**Moment 3: Clicking through.**
"The link works. The page is current. I can actually apply."

We already own Moment 3 better than Prosple — Matt's verified URLs and last_verified dates give us that. Now we need to own Moments 1 and 2.

---

## Part 1: The Internship Quiz (3 Questions)

Keep it shorter than the scholarship quiz. Students are looking for a job, not doing a personality test.

### Question 1: What level are you studying at?
- Diploma (I'm on a diploma programme)
- Degree (Undergraduate — Year 1, 2, or 3)
- Final Year (Degree, graduating soon)
- I just need any internship (Show me everything)

*Why this matters:* Some listings are Diploma-eligible, most require Degree. Showing the wrong ones wastes the student's time and makes the site feel irrelevant.

### Question 2: What field are you studying?
- Engineering (civil, mechanical, electrical, chemical)
- Computer Science & IT (software, data, cybersecurity)
- Business, Finance & Accounting
- Science & Healthcare (biology, pharmacy, medicine, nursing)
- Law
- Creative, Communications & Media
- I'm flexible / any field

*Why this matters:* A law student clicking through engineering internships they can't take is the same experience as no filter at all. The current `roles_available` field has enough data to match on this.

### Question 3: Do you have a fixed start date from your university?
- Yes, I need to start in [Month picker: Jan–Dec]
- No, I can start anytime

*Why this matters:* Students on rolling internships don't care about timing. Students whose university mandates an industrial training period (very common in Malaysian diploma/degree programmes) need to find something that fits. This unlocks the `intake_months` and `rolling` filter meaningfully.

**After the quiz:** Surface a filtered list. Show the count. Say "We found 23 internships that match your profile" — not "150 internships." The specificity is the value.

---

## Part 2: Card Redesign — What Goes On the Card

Right now the card probably shows: company name, industry chips, description, View button, and bookmark.

What a student actually needs to self-screen in 5 seconds:

### Must-show on card face (no click needed):
1. **Company name + logo** — already there
2. **CGPA badge** — "Min CGPA 3.0" shown as a small pill. If unknown, show nothing (don't show "CGPA: any" — that looks like we made it up).
3. **Study level badge** — "Diploma OK" or "Degree only" — one chip, plain language
4. **Stipend** — "~RM 1,000/month" prominently. If estimated, show a tilde. If unknown, show nothing. Do not show "Stipend: —" — just omit it.
5. **Rolling vs intake** — "Rolling — apply anytime" OR "Next intake: July 2026" — one line, clear.
6. **Open to all / Bumiputera flag** — only surface the Bumiputera chip if bumi_only=true. If open, say nothing — that's the default expectation.

### The tip (already in schema, needs to be surfaced):
Currently tips live in the DB but might not be shown prominently on the card. The tip is the thing Prosple doesn't have. It should be on the card — not just the detail page. A single line in a slightly different colour. "Most people don't know: the actuarial track closes in October."

### What NOT to show on the card:
- Long descriptions (they're for the detail page)
- More than 3 chips
- Intake months as numbers (nobody knows that {3,9} means March and September)
- The URL itself

---

## Part 3: The "You Qualify" Signal

This is the bigger idea. Once a student has done the 3-question quiz, the card can show a light signal about fit. Not a score. Not a percentage. Just a quiet indicator.

Proposal: a small coloured dot or border tint on the card.

- **Solid ring** — "Based on what you told us, this looks like a match"
- **No ring** — "We can't confirm — check the eligibility section"
- **Grey ring** — "This one requires Bumiputera status / different study level"

This requires:
- Study level from quiz matched to `study_level` on the record
- Field from quiz matched loosely to `roles_available` or `industry`
- Start date from quiz matched to `rolling` or `intake_months`

No CGPA question in the quiz — that's too personal to ask. Instead, show the CGPA requirement on the card so they can self-assess privately.

Implementation note: This is all frontend logic. No backend change needed. The quiz answers live in a JS object, the cards filter/rank based on it.

---

## Part 4: The Filter System (Alongside or Instead of Quiz)

The quiz runs once when a student arrives. But once they're on the page, they want to filter further. The quiz sets a baseline; chips/filters let them refine.

Filters to build (in priority order):

| Filter | Values | Data source |
|---|---|---|
| Study level | Diploma / Degree / Any | `study_level` column |
| Industry | Finance, Tech, Engineering, Healthcare, FMCG, Consulting, Legal, NGO | `industry[]` |
| Stipend range | Under RM 1,000 / RM 1,000–1,500 / RM 1,500+ / Not shown | `allowance_text` (parse first number) |
| Rolling only | Toggle | `rolling` boolean |
| Open to all | Toggle | `open_to_all` / `bumi_only` |

These exist as data in the DB right now. It's a frontend build, not a data problem.

---

## Part 5: What We Say vs What Prosple Says

This is copy strategy. The words matter as much as the filters.

**Prosple card:** "Apply on employer site →"
**MyIntern card:** "View internship →" then on the detail page a specific, honest tip before the link.

**Prosple empty state:** "No results found."
**MyIntern empty state:** "Nothing matches your exact profile right now — but here are 3 that are close. We add new listings regularly."

**Prosple listing count:** "783 open now!"
**MyIntern:** "23 match your profile" (after quiz) — or "150 verified listings" (before quiz). Volume is not the sell. Fit is.

**Prosple verification:** none visible
**MyIntern:** "Last checked: 15 Apr 2026" — quiet but there. Trust signal without being annoying.

---

## Part 6: The One Thing We Build Next

Before any of the above, one change that costs almost nothing and delivers immediate value:

**Add `min_cgpa` as a numeric column.** Right now CGPA requirements are buried in the `eligibility` text field. You can't filter on text. A student can't say "show me only internships I can apply to with a 3.1 CGPA."

Add `min_cgpa DECIMAL(3,2)` to the schema. Matt populates it on every record where we have the data. The frontend shows it as a badge ("Min CGPA 3.0") and eventually adds a slider filter.

Matt can populate this for the records where we now have eligibility text — at least 40+ records already have the data, it just needs extracting.

That one column changes the student's experience from "scroll and hope" to "filter and know."

---

## Priority Order

1. **Add `min_cgpa` column** — DB change, 5 minutes. Matt backfills where data exists.
2. **CGPA badge on card** — frontend, show `min_cgpa` value on the card face. Single line of code once column exists.
3. **Stipend on card** — already in data for 113/150 records. Surface it on the card face.
4. **The tip on card** — it's in the DB. Show the first 80 characters on the card, full tip on the detail view.
5. **Internship quiz** — 3-question flow that pre-filters the list. Build after the card is right.
6. **Filter chips** — rolling / study level / stipend range / open to all. Quick to build once data is confirmed clean.

---

## What This Looks Like to a Student

A diploma student in final year, studying business, whose university requires her to start industrial training in June.

She lands on MyIntern. The quiz takes 20 seconds. She answers: Diploma, Business Finance & Accounting, June start.

The page refreshes. She sees 18 cards. Each card shows: a company name she recognises (or doesn't, but there's a logo), "Diploma OK" in green text, "Rolling — apply anytime" or "June intake available", a stipend if we have it, and one honest tip.

She doesn't have to read 150 descriptions. She doesn't have to click through 30 links to discover she doesn't qualify. She has 18 realistic options surfaced in 20 seconds.

That is the gap Prosple cannot close. They have too many listings and too little curation to do this. We can, because we're building with students first — not with employers first.

---

## For ANRA: The Build Sequence

When you're ready to build, here is the exact sequence:

```
Step 1: Add min_cgpa column
ALTER TABLE internships ADD COLUMN min_cgpa DECIMAL(3,2);

Step 2: Tell Matt to populate it
"Matt, populate min_cgpa for all records where eligibility text mentions a CGPA requirement"

Step 3: Show stipend + CGPA badge on card (internships.html frontend)

Step 4: Show tip text on card (first 80 chars)

Step 5: Build the 3-question quiz flow

Step 6: Wire quiz answers to filter logic
```

---

*SOFIA · MyScholar Internship Experience Design · April 2026*
