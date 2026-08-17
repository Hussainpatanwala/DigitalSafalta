# Digital Safalta — International Expansion Tracker

**Goal:** Serve international clients alongside local Pune clients — accept
foreign-currency payment legally and reliably, and make the site actually
work for an international visitor, not just a local one.

**Owner:** Hussain Patanwala
**Started:** 2026-08-17

---

## The Real Gaps (CEO-level view, prioritized)

| # | Gap | Why it actually matters | Blocking? |
|---|---|---|---|
| 1 | No reliable way to **receive** international payment | Razorpay is a domestic card/UPI gateway — not built to receive a foreign bank transfer cleanly. Nothing else below matters until this works. | 🔴 Yes — build first |
| 2 | No registered legal entity yet ([[company-registration]] — OPC not filed) | Some payment platforms want business proof (GST/Udyam/incorporation docs). Also matters for credibility with larger international clients. | 🟡 Partial — some payment options work without it, full setup wants it |
| 3 | No GST "export of services" documentation (LUT) | International client billing should be zero-rated GST, not taxed like a domestic sale — needs a filed LUT to do this correctly | 🟡 Not blocking day one, but needed before real volume |
| 4 | Website shows pricing only in ₹, all messaging is Pune-local | A foreign visitor can't tell what anything costs in their currency or whether you even work internationally | 🟢 No — but pointless to fix before #1 is solved |
| 5 | No trust signals for international buyers | No Clutch/GoodFirms presence, no international case studies, no stated time zone/communication expectations | 🟢 No — comes after #4 |
| 6 | No documented payment-to-delivery workflow | Invoicing format, contract terms, currency handling, and FIRC record-keeping for taxes aren't written down anywhere | 🟡 Needed before first real international invoice goes out |

---

## Payment Method — Research Findings (2026)

Compared Wise Business, Payoneer, PayPal Business, and Razorpay specifically
for an Indian agency (not just a solo freelancer):

- **Wise Business** — lowest FX markup (~0.6%), issues a proper **eFIRC**
  (Foreign Inward Remittance Certificate) showing your *actual client* as
  the source of funds. Best for genuine compliance record-keeping.
- **Payoneer** — good for marketplace-based work (Upwork/Fiverr), but has
  a real downside for a direct-client agency: when Payoneer remits to your
  Indian bank, the paperwork shows **Payoneer's own US entity** as the
  source, not your actual client. Messier for audit/tax documentation.
- **PayPal Business** — highest cost (7-9% all-in after fees + conversion
  markup), but the easiest first-payment experience since most
  international clients already have an account. Fine as a fallback for
  a client who insists on it, not as your primary method.
- **Razorpay** — keep this for what it's already good at: Indian client
  payments (UPI/cards). Not the right tool for receiving foreign transfers.

**Decision: Wise Business as primary, PayPal Business as a fallback for
clients who specifically ask for it.**

---

## Build Plan — One Phase at a Time

### Phase 1: Payment infrastructure 🔴 IN PROGRESS
- [ ] Open a Wise Business account (works for a sole proprietor even before
      OPC incorporation completes — needs PAN + basic business proof)
- [ ] Set up a PayPal Business account as fallback
- [ ] Confirm which currencies to hold (USD, GBP at minimum)
- [ ] Document the actual invoice-to-payment-to-FIRC workflow

### Phase 2: Legal/tax readiness (runs alongside [[company-registration]])
- [ ] Complete OPC incorporation (existing tracker)
- [ ] File LUT for zero-rated GST on export-of-services invoices
- [ ] Confirm with a CA: how to record Wise/PayPal income for tax filing

### Phase 3: Website — make it work for an international visitor
- [ ] Add a currency display (at minimum USD alongside ₹ on Pricing)
- [ ] Add international-facing messaging (who you serve, how remote work
      happens, time zone/communication expectations)
- [ ] Update homepage/schema copy that's currently hard-coded to
      "Pune small businesses" to also welcome international visitors,
      without losing local SEO relevance

### Phase 4: Trust signals for international buyers
- [ ] Clutch.co + GoodFirms profiles (already drafted, not yet submitted)
- [ ] International case study/testimonial once first client is delivered
- [ ] "How we work with international clients" FAQ or page section

---

## Log

- 2026-08-17: Tracker created. Payment method research done, Wise Business
  selected as primary. Phase 1 starting next.
