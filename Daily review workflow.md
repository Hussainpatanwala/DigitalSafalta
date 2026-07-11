# Digital Safalta — Daily Product Review Workflow

**How to use this file:** Paste this whole file back to Claude at the start of a session (no extra prompt needed). Claude will check the "Reviewed Products Log" at the bottom, skip anything already done, and guide you through the next one starting at Step 1.

---

## Step 1 — Find a Candidate Product (10-15 min)

1. Go to **trends.google.com**
2. Search a broad category relevant to your niche (e.g., "wireless earbuds", "smartwatch", "power bank")
3. Set filters: **Region = India**, **Timeframe = Past 12 months** (or Past 5 years for a fuller picture)
4. Scroll down to **"Related queries"** and **"Related topics"** — sort by **Rising**
5. Look for entries marked **"Breakout"** — these are seeing explosive recent growth
6. Shortlist 2-3 specific product names that appear (not just generic terms)

**✅ Checkpoint:** You have a specific product name, not just a category.

---

## Step 2 — Validate Competition (10 min)

1. Google search: `"[Product Name]" review`
2. Count how many results are **genuine review articles** (blogs, YouTube, forums) vs. just store/product pages
3. Ask yourself:
   - Are the ranking sites big/established (Gadgets360, 91mobiles, big YouTube channels)? → harder to compete
   - Are the ranking sites thin, old, or just forum comments? → good opportunity
4. Check the **"People also ask"** box for a more specific angle (e.g., "is X waterproof", "X vs Y")

**✅ Checkpoint:** Low-to-medium competition, or a specific angle you can own (e.g., a price/deal angle).

---

## Step 3 — Validate on Amazon.in (5-10 min)

1. Go to **amazon.in**, search the exact product name
2. Confirm:
   - [ ] It's actually listed and **in stock**
   - [ ] Note the **current price** and **MRP** (original price)
   - [ ] Note the **star rating** and **number of ratings**
   - [ ] Copy the **product URL** — click into the listing and copy the `/dp/XXXXXXXXXX` link (this contains the ASIN)
3. Red flags to walk away from:
   - Very few ratings (under ~500) — too new/unproven
   - Rating below 3.5 — genuinely not a good product to recommend
   - Out of stock or "currently unavailable"

**✅ Checkpoint:** You have real price, MRP, rating, review count, and the exact product URL.

---

## Step 4 — Write the Review (20-30 min)

Use this structure every time:

1. **Title** — product name + a hook (price/value angle works well): *"[Product] Review: Worth It at ₹X?"*
2. **Hook (2-3 sentences)** — address the reader's real question directly
3. **Quick verdict** — 2-3 sentences, the bottom line up front
4. **Key features, explained** — not a spec dump; say *why* each spec matters to a real buyer
5. **Pros** — 4-6 genuine strengths
6. **Cons** — at least 2 honest downsides (never skip this — builds trust)
7. **Who it's for / who should skip it**
8. **Final verdict** — 2-3 sentences

**✅ Checkpoint:** The review has at least one genuine con, not just praise.

---

## Step 5 — Turn It Into a Supabase Insert (5 min, with Claude's help)

Bring: product name, price, MRP, rating, review count, product URL, and your written pros/cons/who-for/who-not-for/verdict. Claude formats it into:

```sql
insert into product_reviews (
  slug, title, meta_description, product_name,
  price_inr, mrp_inr, rating, review_count,
  pros, cons, who_for, who_not_for, verdict,
  affiliate_url, category, read_time, status, published_at
) values (
  'product-slug-here',
  'Title here',
  'Meta description here',
  'Product Name',
  0, 0, 0.0, 0,
  array['pro 1', 'pro 2'],
  array['con 1', 'con 2'],
  'who for text',
  'who not for text',
  'verdict text',
  'https://www.amazon.in/dp/ASIN?tag=autosafalta-21',
  'Category',
  '5 min',
  'published',
  now()
);
```

---

## Step 6 — Publish (2 min)

1. Supabase project → SQL Editor → paste the insert → **Run**
2. Visit `digitalsafalta.in/blog/reviews` and confirm the new card appears
3. Click into it and confirm the full review page renders correctly

---

## Step 7 — Confirm the Real Affiliate Link (1 min)

Confirm `affiliate_url` is a real product link with your tag:
```
https://www.amazon.in/dp/[ASIN]?tag=autosafalta-21
```

---

## Reviewed Products Log

*Update this table yourself after each published review — add a row with the date, product, and slug. When you paste this file back, Claude checks this table first and starts you on a NEW product, skipping anything listed here.*

| Date | Product Name | Slug | Category | Status |
|------|--------------|------|----------|--------|
| 2026-07-11 | Skullcandy Jib True 2 | skullcandy-jib-true-2 | Audio | Published |

---

## Daily Target

Aim for **1 review per day** to start. Once you've done 5-10 manually and feel confident in the judgment calls, that's the signal you're ready to teach an AI Agent to replicate this process.
