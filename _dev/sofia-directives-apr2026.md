# SOFIA — Agent Directives · April 13, 2026

Issued following ANRA's feature audit session. Closing Soon filter confirmed shipped. Advisory signpost code is ready (see `advisory-signpost-patch.md`). Directives below cover what each agent does next.

---

## ── ANRA (direct action required) ──────────────────────────────────

**Task: Deploy the advisory resources signpost to index.html**

The code is ready in `advisory-signpost-patch.md` in the MYSCHOLAR root.

To deploy using the `myscholar-dev.skill`:

1. Open a new Claude session
2. Load `myscholar-dev.skill` (drag into the session or install via Cowork)
3. Upload your current `index.html`
4. Say: *"Using the patch in advisory-signpost-patch.md, apply the CSS addition and the HTML insertion to index.html. The CSS goes after `.copy-toast.show`. The HTML goes after `<div class="pagination" id="paginationBar"></div>`. Produce the complete updated file."*
5. Verify the output against the checklist in the patch file before deploying to GitHub

**Do not edit index.html manually across multiple sessions — always upload the current live file first.**

---

## ── AMIRAH DIRECTIVE ─────────────────────────────────────────────────

**Priority task: Draft first-contact outreach to Project Access Malaysia**

Context: Project Access Malaysia (projectaccessmy.com) offers mentorship for secondary school students. They have the human infrastructure but no scholarship database. MyScholar has the database but no mentorship layer. Our user bases overlap directly. We are about to list them as a free advisory resource on myscholar.my — this outreach follows that action, not precedes it.

**Draft the following:**

A short cold outreach email from ANRA to Project Access Malaysia. Mode A voice. No attachments in first contact. The ask is light: flag the listing, explore whether there's a cross-referral angle, nothing more.

**Hard constraints for this draft:**
- No mention of user numbers, traffic, or database size `[APPROVAL NEEDED if any metrics are referenced]`
- No commitment to partnership or collaboration — "worth exploring" is the ceiling
- No AI-sounding openers ("I hope this finds you well", "I am reaching out to")
- Under 120 words in the email body

**Draft template for Amirah to refine:**

The tone for mission-aligned orgs (NGOs, mentorship charities, education access groups) follows a specific pattern: lead with the **why ANRA built this** — B40 students, access gap, solo effort — before mentioning the listing. This earns credibility and creates genuine common ground. Keep it honest and human, not polished.

```
Subject: MyScholar — listed you as a free resource

Hi [name or team],

I run a free scholarship finder called MyScholar (myscholar.my). I built it because too many students — especially from B40 families — miss scholarships they actually qualify for, simply because no one told them about it. It's a solo project, still early days, but already covering 200+ programmes.

We just added a "Need help applying?" section to the site. Listed Project Access Malaysia first — you're doing the mentorship and access work that I can't build into a database.

No formal ask. But if there's value in pointing students between us — you handle the guidance, we handle the discovery — I'd genuinely like to explore that.

ANRA
myscholar.my
```

`[APPROVAL NEEDED: ANRA to confirm they're comfortable being named as the sender and confirm contact details before Amirah finalises and hands back for sending]`

---

**Secondary task: Draft the same outreach for Collegelah (collegelah.com)**

Same mission-aligned tone. Collegelah's differentiator is free essay support — reference the specific gap that closes (students get stuck between "found it" and "applied").

```
Subject: MyScholar — listed Collegelah as a free resource

Hi [name or team],

I built MyScholar (myscholar.my) — a free scholarship directory for Malaysian students. The motivation was simple: students from lower-income backgrounds were missing opportunities just because they didn't know where to look. Still a solo effort, but covering 200+ programmes now.

We just launched a "Need help applying?" section on the site. Listed Collegelah specifically for the free essay support — that's exactly where students get stuck, once they've already found the right scholarship.

If a cross-referral makes sense — your application support, our discovery layer — I'd be glad to chat.

ANRA
myscholar.my
```

`[APPROVAL NEEDED: Same as above — ANRA to confirm before sending]`

---

**Tertiary task (this week, lower priority):**

Draft a short Facebook post (Mode B, Bahasa Melayu) announcing the advisory resources section. Anchor it to the JPA April–May deadline window — students searching for help applying to JPA right now are the exact audience. Max 5 lines + link.

```
Draft (for Amirah to refine):

Dah jumpa biasiswa yang sesuai, tapi tak tahu macam mana nak mohon?

Kami baru tambah seksyen baru di myscholar.my — senarai sumber percuma untuk pelajar yang perlukan bantuan dengan esei permohonan dan mentorship, termasuk Project Access Malaysia dan Collegelah.

Biasiswa JPA masih dibuka — semak di myscholar.my

#biasiswa2026 #biasiswaJPA #pelajarMalaysia
```

`[APPROVAL NEEDED: ANRA to review before posting — confirm FB page handle and whether ANRA wants to tag the organisations]`

---

## ── MATT DIRECTIVE ───────────────────────────────────────────────────

No change to current research workflow. One flag for the backlog:

**Backlog item:** internships.html is missing a "Closing soon" filter equivalent. index.html has it (the 🟡 Closing soon chip with 60-day window logic). When MyIntern gets its next feature pass, this should be added. Not a Matt task — flagging for ANRA's product backlog.

**Current priority remains:** Internship data depth across Finance, Technology, Engineering, and Government/GLC sectors. Phase 5 partner readiness depends on this coverage being credible before any corporate outreach begins.

If Matt has capacity this week: prioritise a Tier 1 GLC sweep — specifically Khazanah, Telekom Malaysia, and Bank Negara Malaysia. These three are high student-demand names with known internship programmes but historically hard-to-find public URLs. A Prosple check + direct careers page sweep is the starting point.

---

## ── JACK DIRECTIVE ───────────────────────────────────────────────────

**Priority: Generate one targeted SEO page this week**

Target keyword: **"cara mohon biasiswa JPA 2026"** (and variants: "cara apply biasiswa JPA", "tips mohon biasiswa JPA lepasan SPM")

Rationale: JPA has multiple programmes in the April–May window right now (confirmed from the site audit: JPA PPN, JPA Khas Lepasan SPM, JPA JKPJ, JPA Dermasiswa B40/PIDN all show CLOSING SOON). Students are actively searching for application guidance at this exact moment. A page that surfaces both the scholarship listings AND links to the new advisory resources section captures that intent.

**Page brief:**
- Target: SPM leavers applying to JPA in April–May 2026
- Content angle: Step-by-step application overview + what documents are needed + link to myscholar.my/index.html#cardGrid for the listings + mention free resources (Project Access Malaysia, Collegelah)
- Internal link: Back to myscholar.my main site
- Schema: HowTo schema or Article schema (Jack to decide based on template)
- Filename: `SEO/cara-mohon-biasiswa-jpa-2026.html`
- Follow Jack's standard SEO page template and keyword density rules

**Secondary watch item (no page needed yet):**

Monitor whether "scholarship consultant Malaysia" or "konsultan biasiswa Malaysia" is rising in search. If it breaks into meaningful volume over the next 2–4 weeks, flag to SOFIA for a dedicated page targeting that query. The advisory resources section we just launched gives us the content anchor for it.

---

## ── SUMMARY STATUS ─────────────────────────────────────────────────

| Item | Owner | Status |
|---|---|---|
| Closing Soon filter | ANRA | ✅ Shipped |
| Advisory signpost code | myscholar-dev | ✅ Ready to deploy |
| Deploy advisory signpost to index.html | ANRA | 🔲 Pending |
| Project Access Malaysia outreach | Amirah → ANRA sends | 🔲 Draft ready above |
| Collegelah outreach | Amirah → ANRA sends | 🔲 Draft ready above |
| Facebook post (advisory launch) | Amirah → ANRA posts | 🔲 Draft ready above |
| JPA SEO page | Jack | 🔲 Assigned |
| Internship data depth (GLCs) | Matt | 🔄 Ongoing |
| "Closing soon" for internships.html | ANRA backlog | 📋 Logged |
| "X days left" computed counter | ANRA backlog | 📋 Logged |

---

*SOFIA Directives v1 · April 13, 2026 · myscholar.my · Not for external distribution*
