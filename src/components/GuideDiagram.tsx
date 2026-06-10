/**
 * FIG. 02 — One house, two listings. Blueprint-style comparison of a
 * standard photos-only MLS listing vs the Essentials Package, with every
 * claim superscript-numbered to a source legend.
 *
 * Source discipline: each stat was traced to its original study and
 * confirmed verbatim (see media/docs/listing-media-research.md for the
 * full research file, including the recycled vendor folklore we refuse
 * to print). Pure SVG riding the theme variables — sharp at any size,
 * correct in both themes, zero image bytes.
 */

const Sup = ({ n }: { n: string }) => (
  <tspan className="gd-text-gold" fontSize="6.5" dy="-3">{` ${n}`}</tspan>
);

export default function GuideDiagram() {
  return (
    <figure className="guide-diagram">
      <svg
        viewBox="0 0 960 740"
        role="img"
        aria-label="Technical comparison diagram: a standard MLS listing with photos alone versus the Essentials Package — strategic stills, twilight hero edit, LiDAR floor plan, aerial photos, and a twenty-second vertical highlight reel — with sourced statistics for each component and a numbered source legend."
      >
        <defs>
          <pattern id="gd-grid" width="24" height="24" patternUnits="userSpaceOnUse">
            <path d="M24 0H0V24" fill="none" strokeWidth="0.5" className="gd-grid" opacity="0.22" />
          </pattern>
          <pattern id="gd-hatch" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
            <line x1="0" y1="0" x2="0" y2="8" strokeWidth="0.75" className="gd-soft" opacity="0.7" />
          </pattern>
        </defs>

        {/* drawing sheet */}
        <rect x="1" y="1" width="958" height="738" strokeWidth="1" className="gd-frame" />
        <rect x="1" y="1" width="958" height="738" fill="url(#gd-grid)" />

        {/* header */}
        <text x="28" y="36" fontSize="12" className="gd-text-gold">FIG. 02 — ONE HOUSE, TWO LISTINGS</text>
        <text x="932" y="36" fontSize="9.5" textAnchor="end" className="gd-text">
          STANDARD MLS PHOTOS VS THE ESSENTIALS PACKAGE
        </text>
        <line x1="28" y1="48" x2="932" y2="48" strokeWidth="0.75" className="gd-frame" />

        {/* column divider */}
        <line x1="480" y1="64" x2="480" y2="448" strokeWidth="0.75" strokeDasharray="4 4" className="gd-frame" />

        {/* ——— LEFT: photos alone ——— */}
        <text x="40" y="82" fontSize="10.5" className="gd-text">A. PHOTOS ALONE</text>

        {/* listing card sketch */}
        <rect x="60" y="96" width="150" height="86" fill="url(#gd-hatch)" opacity="0.55" />
        <rect x="60" y="96" width="150" height="86" strokeWidth="1" className="gd-frame" />
        <rect x="60" y="188" width="46" height="28" strokeWidth="0.75" className="gd-frame" />
        <rect x="112" y="188" width="46" height="28" strokeWidth="0.75" className="gd-frame" />
        <rect x="164" y="188" width="46" height="28" strokeWidth="0.75" className="gd-frame" />
        <text x="232" y="150" fontSize="9.5" className="gd-text">DAYTIME PHOTOS,</text>
        <text x="232" y="164" fontSize="9.5" className="gd-text">AND NOTHING ELSE</text>

        <text x="60" y="256" fontSize="10" className="gd-text-strong">— PHOTOS CARRY THE ENTIRE LISTING</text>
        <text x="74" y="272" fontSize="9" className="gd-text">about 60% of buyer attention lands on the photos,</text>
        <text x="74" y="284" fontSize="9" className="gd-text">and photos are all this listing has<Sup n="1" /></text>

        <text x="60" y="314" fontSize="10" className="gd-text-strong">— NO FLOOR PLAN</text>
        <text x="74" y="330" fontSize="9" className="gd-text">57% of buyers rate floor plans very useful<Sup n="2" /></text>
        <text x="74" y="342" fontSize="9" className="gd-text">here, they are left guessing the layout</text>

        <text x="60" y="372" fontSize="10" className="gd-text-strong">— NO AERIAL CONTEXT</text>
        <text x="74" y="388" fontSize="9" className="gd-text">lot, orientation, surroundings — invisible</text>

        <text x="60" y="418" fontSize="10" className="gd-text-strong">— NO SOCIAL ASSET</text>
        <text x="74" y="434" fontSize="9" className="gd-text">the listing lives where buyers search,</text>
        <text x="74" y="446" fontSize="9" className="gd-text">not where they scroll</text>

        {/* ——— RIGHT: the Essentials Package ——— */}
        <text x="510" y="82" fontSize="10.5" className="gd-text">B. THE ESSENTIALS PACKAGE</text>

        <text x="510" y="108" fontSize="9" className="gd-text-gold">01</text>
        <text x="544" y="108" fontSize="10" className="gd-text-strong">STRATEGIC STILLS</text>
        <text x="544" y="122" fontSize="9" className="gd-text">shots that sell the feel of the home, not the far corner</text>
        <text x="544" y="134" fontSize="9" className="gd-text">photos: very useful to 81% of buyers — the #1 feature<Sup n="2" /></text>
        <text x="544" y="146" fontSize="9" className="gd-text">78% of sellers favor agents offering pro photography<Sup n="3" /></text>

        <text x="510" y="172" fontSize="9" className="gd-text-gold">02</text>
        <text x="544" y="172" fontSize="10" className="gd-text-strong">TWILIGHT HERO — EDIT-ONLY, NEVER FAKED</text>
        <text x="544" y="186" fontSize="9" className="gd-text">the cover frame ~95% of buyers look at first<Sup n="1" /></text>
        <text x="544" y="198" fontSize="9" className="gd-text">2024 split test: the subtle twilight edit won;</text>
        <text x="544" y="210" fontSize="9" className="gd-text">the overcooked fake lost to plain daylight<Sup n="8" /></text>

        <text x="510" y="236" fontSize="9" className="gd-text-gold">03</text>
        <text x="544" y="236" fontSize="10" className="gd-text-strong">LIDAR-MEASURED FLOOR PLAN</text>
        <text x="544" y="250" fontSize="9" className="gd-text">86% of buyers are more likely to view a home</text>
        <text x="544" y="262" fontSize="9" className="gd-text">whose listing has a floor plan they like<Sup n="3" /></text>
        <text x="544" y="274" fontSize="9" className="gd-text">rated very useful by 57% — the #3 listing feature<Sup n="2" /></text>

        <text x="510" y="300" fontSize="9" className="gd-text-gold">04</text>
        <text x="544" y="300" fontSize="10" className="gd-text-strong">AERIAL, WITH CONTEXT</text>
        <text x="544" y="314" fontSize="9" className="gd-text">52% of agents use drones, yet aerials appear in</text>
        <text x="544" y="326" fontSize="9" className="gd-text">only about 1 in 7 professional shoots<Sup n="5" /><Sup n="6" /></text>

        <text x="510" y="352" fontSize="9" className="gd-text-gold">05</text>
        <text x="544" y="352" fontSize="10" className="gd-text-strong">20-SECOND VERTICAL HIGHLIGHT REEL</text>
        <text x="544" y="366" fontSize="9" className="gd-text">wow-factor shots only, built for the scroll</text>
        <text x="544" y="378" fontSize="9" className="gd-text">Reels out-engage static photo posts by ~40%<Sup n="7" /></text>
        <text x="544" y="390" fontSize="9" className="gd-text">social media: agents&apos; #1 quality-lead source (54%)<Sup n="5" /></text>

        {/* ——— the two facts that matter most ——— */}
        <rect x="40" y="470" width="430" height="92" strokeWidth="1.25" className="gd-gold" />
        <text x="64" y="528" fontSize="34" className="gd-text-gold">86%</text>
        <text x="160" y="502" fontSize="9.5" className="gd-text-strong">of buyers are more likely to view a home whose</text>
        <text x="160" y="516" fontSize="9.5" className="gd-text-strong">listing includes a floor plan they like<Sup n="3" /></text>
        <text x="160" y="538" fontSize="8" className="gd-text">5,000+ BUYERS · BLINDED NATIONAL SURVEY · 2024</text>

        <rect x="490" y="470" width="430" height="92" strokeWidth="1.25" className="gd-gold" />
        <text x="514" y="520" fontSize="34" className="gd-text-gold">10+</text>
        <text x="514" y="538" fontSize="8" className="gd-text">SAVES / DAY</text>
        <text x="610" y="502" fontSize="9.5" className="gd-text-strong">Zillow listings averaging ten-plus daily saves</text>
        <text x="610" y="516" fontSize="9.5" className="gd-text-strong">typically sell above list price<Sup n="4" /></text>
        <text x="610" y="538" fontSize="8" className="gd-text">MEDIA IS HOW A LISTING GETS SAVED</text>

        {/* ——— legend ——— */}
        <text x="40" y="592" fontSize="9.5" className="gd-text-gold">SOURCES</text>
        <line x1="40" y1="600" x2="920" y2="600" strokeWidth="0.6" className="gd-frame" />

        <text x="40" y="618" fontSize="8.5" className="gd-text">1&#8194;SEILER, MADHAVAN &amp; LIECHTY · J. REAL ESTATE RESEARCH 34:2 · EYE-TRACKING · 2012</text>
        <text x="40" y="634" fontSize="8.5" className="gd-text">2&#8194;NAR · 2025 PROFILE OF HOME BUYERS &amp; SELLERS · EXHIBIT 3-8</text>
        <text x="40" y="650" fontSize="8.5" className="gd-text">3&#8194;ZILLOW CONSUMER HOUSING TRENDS SURVEYS 2024 · 5,000+ BUYERS / 6,200+ SELLERS</text>
        <text x="40" y="666" fontSize="8.5" className="gd-text">4&#8194;ZILLOW RESEARCH · VIEWS, SAVES &amp; SHARES VS SALE OUTCOMES · MAR 2025</text>

        <text x="510" y="618" fontSize="8.5" className="gd-text">5&#8194;NAR · REALTOR TECHNOLOGY SURVEYS · 2023–2025</text>
        <text x="510" y="634" fontSize="8.5" className="gd-text">6&#8194;HOMEJAB PLATFORM DATA · 2023 (VENDOR DATA)</text>
        <text x="510" y="650" fontSize="8.5" className="gd-text">7&#8194;SOCIALINSIDER · INSTAGRAM BENCHMARKS · 35M POSTS · 2025</text>
        <text x="510" y="666" fontSize="8.5" className="gd-text">8&#8194;BAM × BOXBROWNIE PAID-AD SPLIT TEST · 2024</text>

        {/* footer */}
        <line x1="28" y1="692" x2="932" y2="692" strokeWidth="0.75" className="gd-frame" />
        <text x="28" y="710" fontSize="8.5" className="gd-text">
          EVERY NUMBER TRACES TO ITS ORIGINAL STUDY. THE RECYCLED FOLKLORE — &quot;68% FASTER&quot;, &quot;3× MORE VIEWS&quot; — IS DELIBERATELY ABSENT.
        </text>
        <text x="932" y="710" fontSize="8.5" textAnchor="end" className="gd-text-gold">SHARP SIGHTED MEDIA</text>
      </svg>
      <figcaption className="guide-diagram-sources">
        Sources:{' '}
        <a href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=2029823" target="_blank" rel="noopener noreferrer">Seiler et al., JRER 2012</a>{' · '}
        <a href="https://www.nar.realtor/research-and-statistics/research-reports/highlights-from-the-profile-of-home-buyers-and-sellers" target="_blank" rel="noopener noreferrer">NAR 2025 Profile</a>{' · '}
        <a href="https://www.zillowstatic.com/bedrock/app/uploads/sites/33/2024/09/2025-Consumer-Housing-Trends-Report-for-Agents.pdf" target="_blank" rel="noopener noreferrer">Zillow CHT 2024</a>{' · '}
        <a href="https://www.zillow.com/research/save-shares-views-35038/" target="_blank" rel="noopener noreferrer">Zillow Research 2025</a>{' · '}
        <a href="https://www.nar.realtor/newsroom/realtors-embrace-ai-digital-tools-to-enhance-client-service-nar-survey-finds" target="_blank" rel="noopener noreferrer">NAR Tech Survey 2025</a>{' · '}
        <a href="https://homejab.com/real-estate-drone-photography-market-listings/" target="_blank" rel="noopener noreferrer">HomeJab 2023</a>{' · '}
        <a href="https://www.socialinsider.io/social-media-benchmarks/instagram" target="_blank" rel="noopener noreferrer">Socialinsider 2025</a>{' · '}
        <a href="https://nowbam.com/can-4-twilight-photos-really-get-more-clicks-on-your-listings/" target="_blank" rel="noopener noreferrer">BAM 2024</a>
      </figcaption>
    </figure>
  );
}
