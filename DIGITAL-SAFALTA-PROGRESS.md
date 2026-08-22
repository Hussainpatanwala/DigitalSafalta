# Digital Safalta — Master Progress Tracker

Consolidated from a chat session that accidentally mixed in an unrelated
project (Imperial Frames) — this file is Digital Safalta only.

**Owner:** Hussain Patanwala | **Compiled:** 2026-08-22

---

## ✅ SEO — Technical Foundation (COMPLETE)
- Canonical tags, Open Graph/Twitter Card tags — site-wide via shared `SEO.tsx`
- Full JSON-LD schema (`src/lib/schema.ts`): Organization, Service, FAQ,
  Article, Breadcrumb — wired into all shared page templates
- `sitemap.xml` fixed and current (21 URLs)
- `robots.txt` created (was missing entirely — likely cause of earlier GSC
  "critical errors")
- `www` → non-www redirect fixed via Cloudflare Page Rule (zone-level, not
  the Pages project)
- Google Analytics + Search Console both verified
- Google Business Profile fully set up, verified, NAP-consistent

## ✅ SEO — Content (COMPLETE)
- All 6 original blog posts expanded to 1,200+ words (found and fixed a
  dead-code bug along the way — `google-ads-vs-meta-ads.tsx` had written
  content that was never actually rendered)
- 7th service page built: Excel & VBA Automation
  (`/services/excel-vba-automation`)
- New Agency-cluster post: "Digital Marketing Agency Near Me" — featured
  post on the blog, interlinked from `what-is-digital-marketing.tsx`
- Homepage hero rewritten (problem-led direction, user-selected) + sizing
  fixed
- Contact page layout fully reworked (two-column desktop layout, paired
  form fields, top padding trimmed to clear the fixed nav cleanly)
- Blog "Continue Reading" widget added across all 7 posts (curated
  related-post pairs, not automatic) — `src/lib/blogPosts.ts`

## 🔴 SEO — Backlinks (IN PROGRESS — highest priority right now)
Content pages are indexed but not pulling their own search traffic yet —
this is what fixes that.
- [x] Clutch.co — submitted, "under review, not yet published" (normal,
      Clutch reviews manually)
- [ ] GoodFirms — queued next, same copy ready
      (`directory-profile-copy.md`)
- [ ] Client footer-credit links ("Website by Digital Safalta") — outreach
      messages already written (`client-outreach-footer-credit.md`), code
      snippet ready (`footer-credit-snippet.md`), not yet sent to clients
- [ ] MCCIA/PCCIA local Pune chamber listings — not started

## 🔴 SEO — Reviews (IN PROGRESS — second-highest priority)
- Currently 2 Google reviews, 5.0 stars
- Target: 10-15+ before adding AggregateRating schema to the homepage
  (deliberately withheld until review count is real — avoids looking
  fabricated)
- Also worth using Clutch's own "Request a Review" tool on the same past
  clients being asked for Google reviews

## Analytics reality-check (from first real GA4 data pull)
- Headline "76 active users" is inflated — Council Bluffs/Ashburn/Prineville
  in the geo breakdown are known cloud data-center hubs, almost certainly
  bot traffic. Genuine India-based users: ~20. Use this as the honest
  baseline going forward.
- Neither "digital marketing agency near me" nor "marketing agency near
  me" appear in Search Console's query list yet — zero impressions, not
  low rank. Expected at this stage; backlinks/reviews are what changes
  this.

## Legal / Compliance (DONE for both DS + Halo)
- Digital Safalta: Privacy Policy + Terms of Service built (`/privacy`,
  `/terms`) — previously had none, footer links were dead `href="#"`
- Halo: Privacy Policy, Terms, **and Refund Policy** built — refund policy
  content verified against actual `admin-refund-payment.ts` code (full
  refunds only, admin-triggered only, reverts to Free tier) rather than
  generic boilerplate
- DPDP-compliant consent: explicit unticked checkboxes + real versioned
  consent records on both Halo's signup and DS's contact form (not just a
  passive link) — confirmed working end-to-end via direct DB verification
- Still open: fill in `[bracketed]` placeholders (dates, retention periods,
  refund SLA), get lawyer-reviewed

## Company Registration — OPC (NOT YET STARTED)
- Decision made: register as OPC now (true solo ownership), convert to
  Pvt Ltd later (OPC is excluded from the Section 80-IAC tax holiday —
  known tradeoff, accepted)
- Full roadmap documented (SPICe+ incorporation → DPIIT recognition →
  Udyam/MSME → trademarks) — nothing filed yet, needs a CA for the actual
  filing
- Halo does not need its own separate company — runs as a product line
  under the same OPC

## International Expansion (NEW DIRECTION — Phase 1 in progress)
Full detail in `international-expansion-tracker.md` (repo root). Summary:
- **Phase 1 (payment infra) — IN PROGRESS:** Udyam Registration (free,
  ~10 min, no prerequisites) → unlocks Wise Business under the "Digital
  Safalta" name → Wise Business as primary international payment method
  (PayPal Business as fallback only). This chain does NOT need to wait for
  OPC incorporation.
- **Phase 2 (legal/tax):** GST LUT filing for zero-rated export invoices,
  runs alongside OPC filing
- **Phase 3:** Website currency display + international-facing messaging
- **Phase 4:** Trust signals — same Clutch/GoodFirms work as the backlink
  track above, dual-purpose

## Marketing Audit Tool — Rebuild (IN PROGRESS, mid-session)
Found the existing tool was 100% AI-invented output (system prompt
literally said "always give a confident answer... make smart assumptions
if data is missing") — no real data fetched at all. Rebuilding around
**only what can be genuinely verified**:
- Real: Google PageSpeed Insights/Lighthouse (performance, SEO, best
  practices scores + Core Web Vitals), real HTML fetch for contact-readiness
  signals (phone link, contact form, WhatsApp link)
- Dropped as infeasible to verify for free: Google Business Profile check,
  social media presence, competitor comparison — AI no longer allowed to
  invent these
- New `functions/api/audit.ts` and rebuilt `MarketingAuditPage.tsx` written
  this session — **not yet confirmed deployed/tested by user**

## Email Setup (DONE)
- `halo@digitalsafalta.in` — send + receive via `patanwalahussain@gmail.com`,
  confirmed working (Cloudflare Email Routing + Gmail SMTP with App
  Password)
- Recommended next: catch-all routing for both `digitalsafalta.in` and
  `halo.digitalsafalta.in` (separate MX setup needed per subdomain),
  `no-reply@` addresses for automated mail, `privacy@digitalsafalta.in`
  for the grievance-officer contact

---

## What's actually left to do (the real punch list)
1. Submit GoodFirms profile
2. Send client footer-credit outreach messages
3. Keep pushing Google + Clutch reviews toward 10-15+
4. Complete Udyam Registration → start Wise Business signup
5. Confirm the rebuilt Marketing Audit tool works once deployed
6. Everything else (OPC filing, GST LUT, trademark filing) needs a CA —
   not blocked on any more code work
