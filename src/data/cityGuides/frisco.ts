import type { CityGuide } from './_types';

const ACCESSED = '2026-06-12';

export const frisco: CityGuide = {
  slug: 'frisco',
  name: 'Frisco',
  fullName: 'Frisco, Texas',
  county: 'Collin County (eastern portion in Denton County)',
  tagline: `Sports City USA — where championship-caliber ambition meets small-town Texas roots.`,
  metaTitle: `Living in Frisco, TX | Community Guide & City Profile`,
  metaDescription: `Everything you need to know about living in Frisco, Texas — history, top-rated schools, parks, sports venues, local dining, and community events in one of DFW's fastest-growing cities.`,

  atAGlance: [
    {
      label: `Named Frisco`,
      value: `1902 (post office established)`,
      source: { title: `Discover the History of Frisco TX — Visit Frisco`, url: `https://www.visitfrisco.com/history`, accessed: ACCESSED },
    },
    {
      label: `Incorporated`,
      value: `First decade of the 1900s (city CVB cites 1904)`,
      source: { title: `Frisco, TX — TSHA Handbook of Texas`, url: `https://www.tshaonline.org/handbook/entries/frisco-tx`, accessed: ACCESSED },
    },
    {
      label: `Population`,
      value: `247,457 (2026 city estimate)`,
      source: { title: `City of Frisco Demographics`, url: `https://www.friscotexas.gov/1454/Demographics`, accessed: ACCESSED },
    },
    {
      label: `County`,
      value: `Collin County (eastern portion in Denton County)`,
      source: { title: `Frisco, TX — TSHA Handbook of Texas`, url: `https://www.tshaonline.org/handbook/entries/frisco-tx`, accessed: ACCESSED },
    },
    {
      label: `School district`,
      value: `Frisco ISD — 77 schools, 62,755 students (Oct. 2025)`,
      source: { title: `Frisco ISD Facts & Figures`, url: `https://www.friscoisd.org/about/district-overview/facts-figures`, accessed: ACCESSED },
    },
    {
      label: `City area`,
      value: `69.1 square miles`,
      source: { title: `City of Frisco Demographics`, url: `https://www.friscotexas.gov/1454/Demographics`, accessed: ACCESSED },
    },
    {
      label: `Known for`,
      value: `Dallas Cowboys World HQ, FC Dallas, the PGA of America, and top-rated schools — branded "Sports City USA"`,
      source: { title: `Visit Frisco Destination Overview`, url: `https://www.visitfrisco.com/press-room/destination-overview`, accessed: ACCESSED },
    },
  ],

  history: {
    body: `The land that became Frisco was first traveled by cattle drovers following the Shawnee Trail — a route originally worn by Indigenous peoples along a high white-rock ridge that tracked north from Austin toward the Red River. The nearby community of Lebanon had been settled along that same trail and held a U.S. post office since 1860, making it the natural hub of the surrounding prairie. Everything changed in 1902, when the St. Louis–San Francisco Railway pushed a line through the area and needed a lower-elevation watering stop for its steam engines. Lebanon sat too high on the ridge, so the stop was planted about four miles west, and a new community began forming around it.

That new stop took two names before it settled on one. Residents first called it Emerson, honoring a McKinney banker who reportedly promised to establish a national bank in exchange for the naming rights — a promise he never kept. The U.S. Postal Service rejected Emerson as too close to Emberson in Lamar County, so residents borrowed from the railroad itself: Frisco City, shortened to Frisco, became the official name when the post office opened in July 1902. Some Lebanon residents were so convinced of the new town's future that they physically relocated their houses on logs to the new townsite.

For the next several decades, Frisco remained an agricultural market town — at its peak hosting five cotton gins and a farmers' co-operative gin association. The population barely crested 2,000 before a growth surge in the 1980s, driven by suburban expansion spreading north from Dallas and Plano. What followed was one of the most dramatic growth trajectories in American municipal history: from roughly 6,000 residents in 1990 to more than 33,000 by 2000, 116,000 by 2010, and nearly a quarter-million today — earning Frisco repeated recognition as the fastest-growing city in the United States during the early 2000s.`,
    sources: [
      { title: `Discover the History of Frisco TX — Visit Frisco`, url: `https://www.visitfrisco.com/history`, accessed: ACCESSED },
      { title: `Frisco, TX — TSHA Handbook of Texas`, url: `https://www.tshaonline.org/handbook/entries/frisco-tx`, accessed: ACCESSED },
      { title: `Frisco Beginnings — Community Impact`, url: `https://communityimpact.com/austin/news/2013/09/30/frisco-beginnings/`, accessed: ACCESSED },
    ],
  },

  historicalSites: [
    {
      name: `Frisco Heritage Center`,
      description: `A free, city-operated historical park on Page Street where visitors can walk through the Frisco Heritage Museum, step aboard a preserved steam locomotive and wooden caboose, and explore restored historic buildings that trace the city's journey from railroad stop to booming suburb.`,
      url: `https://www.friscotexas.gov/1355/Frisco-Heritage-Center`,
      source: { title: `Frisco Heritage Center — City of Frisco`, url: `https://www.friscotexas.gov/1355/Frisco-Heritage-Center`, accessed: ACCESSED },
    },
    {
      name: `Historic Water Tower (Seventh & Elm)`,
      description: `Erected in the mid-1920s, this elevated tank served as the town's sole elevated water storage for more than five decades and stands today as one of the most visible reminders of early Frisco's infrastructure.`,
      source: { title: `Iconic Landmarks in Frisco TX — The Hahn Team`, url: `https://thehahnteam.com/blog/iconic-landmarks-in-frisco-tx-you-cant-miss`, accessed: ACCESSED },
    },
    {
      name: `Museum of the American Railroad / TrainTopia`,
      description: `Founded in 1963 and now anchored in Frisco, this nonprofit museum holds more than 70 pieces of historic steam, diesel, passenger, and freight equipment on 15 acres — one of the largest rail collections in the United States — alongside TrainTopia, its year-round indoor exhibition.`,
      source: { title: `Museum of the American Railroad — Visit Frisco`, url: `https://www.visitfrisco.com/things-to-do/museum-american-railroad/7`, accessed: ACCESSED },
    },
    {
      name: `The Rail District (Historic Downtown Frisco)`,
      description: `The heart of original Frisco, this walkable stretch of Main Street preserves the bones of the early railroad town while anchoring a $70 million streetscape reinvestment that widened sidewalks across the city's most historically layered neighborhood.`,
      url: `https://raildistrictfrisco.com/`,
      source: { title: `Frisco Rail District — Visit Frisco`, url: `https://www.visitfrisco.com/raildistrict`, accessed: ACCESSED },
    },
    {
      name: `Shawnee Trail Historic Marker (Collin College Frisco Campus)`,
      description: `A Texas State Historic Marker commemorating the Shawnee Trail, the 19th-century cattle-drive route that first put this stretch of North Texas on the map and gave the city's neighborhood and school their name.`,
      url: `https://www.collin.edu/campuses/frisco/index.html`,
      source: { title: `Discover the History of Frisco TX — Visit Frisco`, url: `https://www.visitfrisco.com/history`, accessed: ACCESSED },
    },
    {
      name: `Frisco Heritage Museum Exhibits`,
      description: `Inside the Frisco Heritage Center, permanent and rotating exhibits document the city's cotton-farming era, railroad origins, and mid-century growth through artifacts, photographs, and interpretive displays.`,
      url: `https://www.friscotexas.gov/1357/Exhibits`,
      source: { title: `Frisco Heritage Center — City of Frisco`, url: `https://www.friscotexas.gov/1355/Frisco-Heritage-Center`, accessed: ACCESSED },
    },
    {
      name: `Frisco Veterans Memorial`,
      description: `A contemplative outdoor memorial within the city's parks system honoring Frisco-area veterans, featuring inscribed names and a setting designed for quiet reflection and community ceremonies.`,
      url: `https://www.friscotexas.gov/facilities/facility/details/friscoveteransmemorial-107`,
      source: { title: `Parks & Trails — City of Frisco`, url: `https://www.friscotexas.gov/522/Parks-Trails`, accessed: ACCESSED },
    },
  ],

  pointsOfInterest: [
    {
      name: `The Star in Frisco — Dallas Cowboys World Headquarters`,
      description: `A 91-acre campus built through a public-private partnership between the City of Frisco and Frisco ISD, housing the Cowboys' football operations, practice fields, and the 12,000-seat Ford Center shared with local high schools, plus an entertainment district, hotel, and gym that make it a destination even on non-game days.`,
      url: `https://www.thestarinfrisco.com/`,
      source: { title: `The Star in Frisco — Official Website`, url: `https://www.thestarinfrisco.com/`, accessed: ACCESSED },
    },
    {
      name: `Omni PGA Frisco Resort`,
      description: `Opened in May 2023, this 660-acre resort is the new national home of the PGA of America, with two 18-hole championship courses, a 10-hole short course, 500 guest rooms, and more than a dozen restaurants and bars — making Frisco a premier golf destination in the Southwest.`,
      url: `https://www.pgafrisco.com/`,
      source: { title: `Omni PGA Frisco Resort grand opening — Community Impact`, url: `https://communityimpact.com/dallas-fort-worth/frisco/development/2023/05/02/texas-sized-investment-omni-pga-frisco-resort-celebrates-grand-opening/`, accessed: ACCESSED },
    },
    {
      name: `Riders Field — Home of the Frisco RoughRiders`,
      description: `Since 2003, this Double-A Texas Rangers affiliate ballpark has set itself apart with a 174-foot lazy river in right field — the largest water feature inside any U.S. professional sports venue — delivering a game-day experience that consistently ranks at the top of Double-A baseball.`,
      url: `https://www.milb.com/frisco/ballpark/ballpark`,
      source: { title: `Riders Field — Visit Frisco`, url: `https://www.visitfrisco.com/things-to-do/riders-field/539`, accessed: ACCESSED },
    },
    {
      name: `Toyota Stadium & the National Soccer Hall of Fame`,
      description: `Frisco's city-owned, 20,500-seat soccer stadium opened in 2005 and became the only active MLS venue to house a national hall of fame when the National Soccer Hall of Fame relocated here in 2018; a major public-private renovation will expand capacity by 2028.`,
      url: `https://www.fcdallas.com/`,
      source: { title: `Toyota Stadium (Texas) — Wikipedia`, url: `https://en.wikipedia.org/wiki/Toyota_Stadium_(Texas)`, accessed: ACCESSED },
    },
    {
      name: `National Videogame Museum`,
      description: `Opened in 2016 on Dallas Parkway, this one-of-a-kind attraction houses more than 100,000 artifacts spanning the full arc of video game history — from coin-op arcade classics to modern consoles — with interactive stations that let visitors actually play the exhibits.`,
      url: `https://nvmusa.org/`,
      source: { title: `National Videogame Museum — Official Website`, url: `https://nvmusa.org/`, accessed: ACCESSED },
    },
    {
      name: `Kaleidoscope Park`,
      description: `A public-private park featuring public art, interactive architecture, children's play areas, a splash pad, performance lawns, shaded promenades, and a dog park — open daily and designed as a new civic gathering place in the corporate corridor.`,
      url: `https://kaleidoscopepark.org/`,
      source: { title: `Kaleidoscope Park — City of Frisco`, url: `https://www.friscotexas.gov/Facilities/Facility/Details/Kaleidoscope-Park-124`, accessed: ACCESSED },
    },
    {
      name: `Sci-Tech Discovery Center`,
      description: `A hands-on science and technology museum designed for young explorers, offering rotating STEM exhibits and programming that turns abstract concepts into tangible, curiosity-driven experiences for school-age children and families.`,
      url: `https://www.sci-techdiscoverycenter.org/`,
      source: { title: `Visit Frisco Destination Overview`, url: `https://www.visitfrisco.com/press-room/destination-overview`, accessed: ACCESSED },
    },
    {
      name: `Frisco Rail District`,
      description: `Historic Downtown Frisco's main commercial strip mixes locally owned restaurants, boutique shops, and open-air hangouts along a recently reinvested stretch of Main Street, making it the city's most walkable, community-scaled neighborhood.`,
      url: `https://raildistrictfrisco.com/`,
      source: { title: `Frisco Rail District — Visit Frisco`, url: `https://www.visitfrisco.com/things-to-do/rail-district/552`, accessed: ACCESSED },
    },
  ],

  outdoors: [
    {
      name: `Grand Park (in development)`,
      description: `When complete, this 1,011-acre urban oasis stretching from the Dallas North Tollway to Lake Lewisville will be one of the largest urban parks in Texas; Phase 1 Civic Park construction is underway with completion targeted for fall 2027.`,
      url: `https://www.friscotexas.gov/1805/Grand-Park`,
      source: { title: `Grand Park — City of Frisco`, url: `https://www.friscotexas.gov/1805/Grand-Park`, accessed: ACCESSED },
    },
    {
      name: `Frisco Commons Park`,
      description: `One of the city's most-loved gathering spaces at 63 acres, combining walking trails, two playgrounds, open fields, a fishing pond, pavilions, an amphitheater, and a splash pad — busy on weekends year-round since it opened in 2004.`,
      url: `https://www.friscotexas.gov/Facilities/Facility/Details/Frisco-Commons-Park-104`,
      source: { title: `Parks & Trails — City of Frisco`, url: `https://www.friscotexas.gov/522/Parks-Trails`, accessed: ACCESSED },
    },
    {
      name: `Big Bluestem Trail at Grand Park`,
      description: `A 2.2-mile natural, unpaved trail winding through the undeveloped Grand Park land, connecting Preston Road-area neighborhoods to Stonebrook Parkway and offering a rare taste of native North Texas landscape within the city limits.`,
      url: `https://www.friscotexas.gov/1805/Grand-Park`,
      source: { title: `Grand Park — City of Frisco`, url: `https://www.friscotexas.gov/1805/Grand-Park`, accessed: ACCESSED },
    },
    {
      name: `Iron Horse Trail & Wildlife Preserve`,
      description: `A preserved natural area with more than three miles of unpaved, winding trail through native habitat — recommended by the city as a go-to alternative while Grand Park construction is active.`,
      url: `https://www.friscotexas.gov/facilities/facility/details/Iron-Horse-Trail-and-1135-Wildlife-Prese-89`,
      source: { title: `Grand Park — City of Frisco`, url: `https://www.friscotexas.gov/1805/Grand-Park`, accessed: ACCESSED },
    },
    {
      name: `City-Wide Trail Network (47+ miles)`,
      description: `Frisco's interconnected hike-and-bike trail system spans more than 47 miles and threads through over 60 parks, with paved multi-use paths and natural-surface routes linking neighborhoods across the city.`,
      url: `https://www.friscotexas.gov/582/Trails`,
      source: { title: `Parks & Trails — City of Frisco`, url: `https://www.friscotexas.gov/522/Parks-Trails`, accessed: ACCESSED },
    },
    {
      name: `Ruff Range Dog Park`,
      description: `Frisco's dedicated off-leash dog park, with separate fenced areas for small and large dogs, water stations, and room to run — part of a parks system that expressly welcomes four-legged family members.`,
      url: `https://www.friscotexas.gov/1819/Ruff-Range-Dog-Park`,
      source: { title: `Parks & Trails — City of Frisco`, url: `https://www.friscotexas.gov/522/Parks-Trails`, accessed: ACCESSED },
    },
    {
      name: `Frisco Skate Park`,
      description: `A dedicated skate facility within the parks system offering terrain for all skill levels, with extended evening hours that make it one of the few sports-specific amenities open late.`,
      url: `https://www.friscotexas.gov/Facilities/Facility/Details/Frisco-Skate-Park-82`,
      source: { title: `Parks & Trails — City of Frisco`, url: `https://www.friscotexas.gov/522/Parks-Trails`, accessed: ACCESSED },
    },
    {
      name: `The Harvest Community Garden`,
      description: `A city-operated community garden giving Frisco residents plots to grow their own produce, connecting urban dwellers to the agricultural heritage that defined the land before the suburb arrived.`,
      url: `https://www.friscotexas.gov/1747/Community-Garden`,
      source: { title: `Parks & Trails — City of Frisco`, url: `https://www.friscotexas.gov/522/Parks-Trails`, accessed: ACCESSED },
    },
  ],

  localBusinesses: [
    {
      name: `Hutchins BBQ`,
      description: `A three-generation, family-run Central Texas-style barbecue institution that earned a place on Texas Monthly's Top 50 BBQ Joints list — the kind of lunch spot where the brisket line forms before the doors open.`,
      url: `https://hutchinsbbq.com/`,
      source: { title: `Hutchins BBQ — Press`, url: `https://hutchinsbbq.com/press/`, accessed: ACCESSED },
    },
    {
      name: `The Heritage Table`,
      description: `A farm-driven, Main Street dining anchor in the heart of the Rail District, drawing on seasonal and locally sourced ingredients in a setting that honors the neighborhood's age while cooking firmly in the present.`,
      source: { title: `The Complete Guide to the Rail District — Downtown Frisco`, url: `https://downtownfrisco.com/downtown-frisco-tx-the-complete-guide-to-the-rail-district/`, accessed: ACCESSED },
    },
    {
      name: `Frisco Rail Yard`,
      description: `A social outdoor venue in the historic Rail District combining a rotating lineup of food trucks, a full bar, yard games, and live music in a festival-style open-air environment that draws a cross-generational crowd.`,
      url: `https://raildistrictfrisco.com/`,
      source: { title: `Frisco Rail District — Visit Frisco`, url: `https://www.visitfrisco.com/things-to-do/rail-district/552`, accessed: ACCESSED },
    },
    {
      name: `Randy's Steakhouse`,
      description: `A longtime local steakhouse in the Rail District beloved by regulars for its straightforward approach to quality beef and warm neighborhood hospitality, holding its own against every national chain in the city.`,
      source: { title: `A Foodie's Guide to the Rail District — Frisco Rail District`, url: `https://raildistrictfrisco.com/a-foodies-guide-to-the-delicious-bites-of-the-frisco-rail-district/`, accessed: ACCESSED },
    },
    {
      name: `La Finca Coffee & Bakery`,
      description: `A locally owned coffee and bakery on Main Street in the Rail District serving specialty espresso and house-made baked goods in a warm setting that doubles as a neighborhood gathering spot.`,
      source: { title: `A Foodie's Guide to the Rail District — Frisco Rail District`, url: `https://raildistrictfrisco.com/a-foodies-guide-to-the-delicious-bites-of-the-frisco-rail-district/`, accessed: ACCESSED },
    },
    {
      name: `Frisco Mercantile`,
      description: `A curated antique and artisan market in the Rail District where vendors sell vintage finds, handcrafted goods, and one-of-a-kind pieces under one roof — a reliable weekend destination for shopping independent.`,
      source: { title: `The Complete Guide to the Rail District — Downtown Frisco`, url: `https://downtownfrisco.com/downtown-frisco-tx-the-complete-guide-to-the-rail-district/`, accessed: ACCESSED },
    },
  ],

  schools: [
    {
      name: `Frisco ISD`,
      description: `Serving more than 62,755 students across 77 campuses, Frisco ISD ranks in the top 5% of Texas public school districts by testing performance and maintains a 95.2% four-year graduation rate, with math proficiency running well above the state average.`,
      url: `https://www.friscoisd.org/`,
      source: { title: `Frisco ISD Facts & Figures`, url: `https://www.friscoisd.org/about/district-overview/facts-figures`, accessed: ACCESSED },
    },
    {
      name: `Reedy High School`,
      description: `One of twelve FISD high schools, Reedy consistently ranks among the top high schools in Texas by U.S. News & World Report, with a near-zero dropout rate and a 97.9% four-year graduation rate.`,
      url: `https://schools.friscoisd.org/reedy`,
      source: { title: `Frisco High School rankings — U.S. News Education`, url: `https://www.usnews.com/education/best-high-schools/texas/districts/frisco-independent-school-district/frisco-high-school-19095`, accessed: ACCESSED },
    },
    {
      name: `Independence High School`,
      description: `Ranked among the top high schools in Texas by U.S. News, Independence offers a rigorous academic environment with a full menu of Advanced Placement coursework and strong college-placement outcomes.`,
      url: `https://schools.friscoisd.org/independence`,
      source: { title: `2026 Best Public Schools in Frisco — Niche`, url: `https://www.niche.com/k12/search/best-public-schools/t/frisco-collin-tx/`, accessed: ACCESSED },
    },
    {
      name: `Centennial High School`,
      description: `Consistently ranked among the top Texas high schools, Centennial exemplifies the FISD pattern of academically strong neighborhood high schools that give students access to competitive college prep close to home.`,
      url: `https://schools.friscoisd.org/centennial`,
      source: { title: `2026 Best Public Schools in Frisco — Niche`, url: `https://www.niche.com/k12/search/best-public-schools/t/frisco-collin-tx/`, accessed: ACCESSED },
    },
    {
      name: `Lawler & Fowler Middle Schools`,
      description: `Both schools rank among the top middle schools in the entire state of Texas by SchoolDigger, reflecting FISD's deep investment in academic quality across all grade levels, not just the high school years.`,
      url: `https://www.schooldigger.com/go/TX/district/20010/search.aspx`,
      source: { title: `Best Schools in Frisco ISD — SchoolDigger`, url: `https://www.schooldigger.com/go/TX/district/20010/search.aspx`, accessed: ACCESSED },
    },
    {
      name: `Frisco ISD Career & Technical Education Center`,
      description: `A dedicated facility where high school students pursue advanced coursework in health sciences, IT, construction, and more — earning industry certifications alongside their diploma in programs tied directly to workforce demand.`,
      url: `https://schools.friscoisd.org/cte`,
      source: { title: `Frisco ISD Facts & Figures`, url: `https://www.friscoisd.org/about/district-overview/facts-figures`, accessed: ACCESSED },
    },
    {
      name: `Collin College — Frisco Campus`,
      description: `The second-largest campus in the Collin College system with more than 8,500 students, set near the historic Shawnee Trail — an affordable option for associate degrees, workforce certifications, or a transfer pathway to a four-year university.`,
      url: `https://www.collin.edu/campuses/frisco/index.html`,
      source: { title: `Frisco Campus — Collin College`, url: `https://www.collin.edu/campuses/frisco/index.html`, accessed: ACCESSED },
    },
    {
      name: `University of North Texas at Frisco`,
      description: `A growing public-university branch campus built through a City of Frisco partnership with UNT, serving students in business and science with a dual-enrollment pathway with Collin College that lowers the cost of a bachelor's degree.`,
      url: `https://frisco.unt.edu/`,
      source: { title: `UNT to build Frisco campus — UNT.edu`, url: `https://www.unt.edu/story/innovative-new-partnership-leads-university-north-texas-build-frisco-campus`, accessed: ACCESSED },
    },
  ],

  communityCulture: [
    {
      name: `Frisco Freedom Fest (July 4)`,
      description: `The city's official Independence Day celebration at Frisco Square draws thousands with live music, a car show, a Taste of Frisco food showcase, and one of the largest fireworks finales in the entire DFW region.`,
      url: `https://www.friscofreedomfest.org/`,
      source: { title: `Frisco Freedom Fest — City of Frisco Calendar`, url: `https://www.friscotexas.gov/Calendar.aspx?EID=6651`, accessed: ACCESSED },
    },
    {
      name: `Texas Sculpture Garden (Hall Park)`,
      description: `Home to what Visit Frisco describes as the largest outdoor sculpture collection in the state, this publicly accessible garden gives the city a cultural anchor for art lovers, walkers, and corporate-campus workers alike.`,
      source: { title: `Visit Frisco Destination Overview`, url: `https://www.visitfrisco.com/press-room/destination-overview`, accessed: ACCESSED },
    },
    {
      name: `City Public Art Trail (120+ works)`,
      description: `Frisco's Public Art Program maintains more than 120 pieces of publicly accessible art integrated into parks, trails, and public spaces, supported by a StoryMap that turns the whole city into an open-air gallery.`,
      url: `https://www.friscotexas.gov/708/Public-Art`,
      source: { title: `Parks & Trails — City of Frisco`, url: `https://www.friscotexas.gov/522/Parks-Trails`, accessed: ACCESSED },
    },
    {
      name: `National Soccer Hall of Fame`,
      description: `Relocated to Frisco in 2018 and embedded inside Toyota Stadium, this is the only national sports hall of fame in the U.S. housed within an active professional sports venue — putting Frisco permanently on the soccer map.`,
      url: `https://www.nationalsoccerhof.com/`,
      source: { title: `Toyota Stadium (Texas) — Wikipedia`, url: `https://en.wikipedia.org/wiki/Toyota_Stadium_(Texas)`, accessed: ACCESSED },
    },
    {
      name: `The Grove at Frisco Commons`,
      description: `A city-operated outdoor event venue and amphitheater at Frisco Commons Park hosting concerts, community performances, and seasonal programming throughout the year.`,
      url: `https://www.friscotexas.gov/1559/The-Grove-at-Frisco-Commons`,
      source: { title: `Parks & Recreation — City of Frisco`, url: `https://www.friscotexas.gov/1914/Parks-Recreation`, accessed: ACCESSED },
    },
    {
      name: `Frisco Uncorked (Spring)`,
      description: `An annual spring event at Frisco Square pairing more than 100 wines with food from local restaurants, craft beers, and spirits — a lively communal setting to explore the city's dining and beverage scene.`,
      source: { title: `Top Annual Events and Festivals in Frisco — Explore Frisco`, url: `https://explore-frisco-texas.com/top-annual-events-festivals-frisco-texas/`, accessed: ACCESSED },
    },
    {
      name: `FIFA World Cup 2026 fan hub`,
      description: `With matches at nearby AT&T Stadium in Arlington, Frisco's sports infrastructure, hotels, and venues position it as a premier base for the 2026 tournament, with Visit Frisco actively marketing Cup-tied fan experiences.`,
      url: `https://www.visitfrisco.com/2026-world-cup`,
      source: { title: `FIFA World Cup 26 — Visit Frisco`, url: `https://www.visitfrisco.com/2026-world-cup`, accessed: ACCESSED },
    },
    {
      name: `Frisco's creative & photographer community`,
      description: `Frisco supports an active network of photographers and creatives who gather for group shoots across the city and Rail District — an informal tradition that reflects a young city still building its cultural identity together.`,
      url: `https://raildistrictfrisco.com/`,
      source: { title: `Downtown Frisco Events — Downtown Frisco`, url: `https://downtownfrisco.com/upcoming-downtown-frisco-events-you-dont-want-to-miss/`, accessed: ACCESSED },
    },
  ],
};

export default frisco;
