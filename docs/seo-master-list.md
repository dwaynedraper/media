# Sharp Sighted Media — SEO & AI-Searchability Master List

**Goal:** Get found on Google (page 1–2 for local + service queries), get recommended by AI assistants (ChatGPT, Claude, Perplexity, Google AI Overviews), and earn steady inbound *without* more ad spend.

**The honest framing:** There's no switch that makes an AI recommend you. Research on 1.2M AI answers shows the things that earn AI citations are the *same* things that earn Google page 1 — crawlable, well-structured content with local context, a complete Google Business Profile, real reviews, and authoritative mentions across the web. Domain traffic is the single strongest predictor of AI citations. **So this is one plan that serves both goals.** It compounds slowly (3–6 months), then keeps paying.

**Legend:** `[SITE]` = on-site, Claude can build it · `[YOU]` = off-site, only Dean can do (accounts, reviews) · `[✓]` = already in place.

---

## Tier 0 — Already done (your head start)

- `[✓]` Rich structured data: Organization, LocalBusiness (all 13 cities in `areaServed`), Service, Place, Breadcrumb, Offer
- `[✓]` Per-page metadata, titles, descriptions, Open Graph, canonicals
- `[✓]` Dynamic `sitemap.xml` (homepage, packages, service areas, city hubs) + `robots.ts`
- `[✓]` Fast image delivery (Cloudinary `f_auto`/`q_auto`) with descriptive, location-aware alt text
- `[✓]` Analytics (Plausible) wired in
- `[✓]` Clean URL structure + non-www canonical policy

---

## Tier 1 — Foundation & Local (biggest ROI, "found without ad spend")

This tier is where the "found occasionally without spend" outcome actually comes from. Local pack + GBP + reviews drive the majority of unpaid local discovery, and AI engines lean on these signals too.

- `[YOU]` **Google Business Profile (GBP)** — the #1 lever. Claim + verify, then complete *everything*:
  - Categories: primary "Commercial photographer," secondary "Photographer," "Video production service," "Aerial photographer"
  - Service area: all 13 corridor cities (no storefront address needed — set as service-area business)
  - Services + descriptions + prices (mirror the packages), business hours, booking/website links, the $400 Essentials hook
  - 20+ photos of your best work, refreshed monthly; weekly GBP "Posts"
  - *Claude can draft all the copy, categories, services, and post calendar for you to paste in.*
- `[YOU]` **Bing Places for Business** — powers Bing + Microsoft Copilot (and some ChatGPT grounding). Quick to mirror from GBP.
- `[YOU]` **Apple Business Connect** — powers Apple Maps + Siri. Free, fast, low competition.
- `[SITE]` **Crawlable NAP block** — add visible, consistent Name / phone (214-233-5338) / email / service area to the contact page and footer. Must match GBP *exactly* (NAP consistency is a core local ranking factor). *Currently missing on the contact page.*
- `[YOU]` **Reviews engine** — ask every client for a Google review; aim for a steady drip, not a burst. Respond to all. Reviews are a top-3 local ranking factor and a heavy AI trust signal. *Claude can write request templates + response templates.*
- `[YOU]` **Core citations/directories** with identical NAP: Google, Bing, Apple, Yelp, Thumbtack, Nextdoor, plus the local Chambers (Frisco, Allen, McKinney) and any real-estate vendor directories.

---

## Tier 2 — On-site structured data & technical (Claude can build now)

- `[SITE]` **FAQPage schema + visible FAQs** on the homepage, /packages, and each service-area/city page. Write answers with **local context** (cost in DFW, turnaround, neighborhoods) — research shows 44% of AI citations come from the first 30% of a page, and local FAQ answer-blocks are exactly what AI extracts.
- `[SITE]` **AggregateRating + Review schema** on the LocalBusiness once you have ~5+ Google reviews (pull the star rating into search results + AI).
- `[SITE]` **Service + Offer schema with prices** on /packages now that pricing is public (Essentials $400, Zillow $550, Premium $1,000, add-ons). Makes offerings machine-readable.
- `[SITE]` **Explicitly welcome AI crawlers** in robots (GPTBot, OAI-SearchBot, ClaudeBot, PerplexityBot, Google-Extended). You currently allow all, but being explicit signals intent and future-proofs.
- `[SITE]` **`/llms.txt`** — a short plain-text file summarizing the business, services, service area, and key page URLs for AI crawlers. Low effort, emerging standard.
- `[SITE]` **Core Web Vitals pass** — verify LCP/CLS/INP are green (site is already fast; confirm and protect it). Speed → traffic → AI citations.
- `[SITE]` **Image SEO polish** — keep descriptive filenames + alt; consider ImageObject schema on portfolio hero shots.

---

## Tier 3 — Content (the engine that earns rankings + citations)

- `[SITE]` **Answer-first blocks** near the top of key pages: "How much does real estate photography cost in DFW?", "How fast is turnaround?", "What's included?" — concise, extractable, with the city/area named.
- `[SITE]` **Finish the city landing pages** — the `/[city]` hubs + `/service-areas/[city]` cover "real estate photographer [city]" intent. Roll out the remaining 8 corridor cities.
- `[SITE]` **A guides/blog hub** targeting the informational queries AI pulls from: "Do listing videos help homes sell?", "Zillow Showcase explained," "Drone photography rules for real estate in Texas," "How much does a Matterport tour cost?" Each = a citation magnet and ties to your brand's content strategy.
- `[SITE]` **Keyword map** — primary: "real estate photographer DFW / Frisco / [corridor city]," "drone real estate photography DFW," "Zillow 3D tour DFW," "real estate video DFW." Assign one primary intent per page (no cannibalization between `/service-areas/[city]` = photography intent and `/[city]` = lifestyle intent).
- `[YOU]` **Freshness cadence** — refresh stats ~quarterly, add a new FAQ or guide every 1–2 months. AI favors recently-updated sources.

---

## Tier 4 — Off-site authority

- `[YOU]` **Backlinks & mentions** — local Chambers, partner agents linking back, brokerage vendor lists, local press, "best DFW real estate photographers" listicles (pitch to be included — these are exactly what AI quotes).
- `[YOU]` **Zillow photo credit via Aryeo** — your name/logo on the listings you shoot puts "Sharp Sighted Media" in front of agents and on a high-authority domain.
- `[✓/YOU]` **Consistent social profiles** linked via `sameAs` (already in schema) — keep them active and NAP-consistent.

---

## Measurement (set up once, free)

- `[YOU]` **Google Search Console** — verify the domain, submit the sitemap, watch impressions/queries/positions. Non-negotiable, free, the source of truth. *Claude can walk you through verification.*
- `[YOU]` **Bing Webmaster Tools** — same idea for Bing/Copilot.
- `[YOU]` **AI-citation spot checks** — monthly, ask ChatGPT/Claude/Perplexity "best real estate photographer in Frisco / DFW" and log whether you appear; track over time.

---

## Do these 5 first (highest impact, this month)

1. **`[YOU]` Google Business Profile** — claim, verify, fully complete. Nothing else moves the needle as fast for local discovery. *(Claude drafts the content.)*
2. **`[SITE]` FAQ schema + local answer-blocks** on home, packages, and city pages.
3. **`[SITE]` Crawlable NAP** on contact + footer; **`[YOU]`** make every directory match it.
4. **`[YOU]` Start the reviews drip** — ask your last 10 happy clients today. *(Claude writes the ask.)*
5. **`[YOU]` Google Search Console** — verify + submit sitemap so you can actually see what's working.

---

*Updated 2026-06-13. This is the working checklist — we'll knock out the `[SITE]` items in code and Claude will draft everything you need for the `[YOU]` items.*
