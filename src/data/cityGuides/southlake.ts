import type { CityGuide } from './_types';

const ACCESSED = '2026-06-12';

export const southlake: CityGuide = {
  slug: `southlake`,
  name: `Southlake`,
  fullName: `Southlake, Texas`,
  county: `Tarrant County (primary); minor areas extend into Denton County`,
  tagline: `Where exceptional schools, open skies, and a true town square meet in the heart of DFW.`,
  metaTitle: `Living in Southlake, TX | Community Guide`,
  metaDescription: `Explore Southlake, Texas — Carroll ISD's top-ranked schools, Southlake Town Square, Bob Jones Nature Preserve, and a community calendar full of life.`,

  atAGlance: [
    {
      label: `Founded/Incorporated`,
      value: `1956 (incorporated September 22, 1956)`,
      source: { title: `Wikipedia — Southlake, Texas`, url: `https://en.wikipedia.org/wiki/Southlake,_Texas`, accessed: ACCESSED },
    },
    {
      label: `Population`,
      value: `31,265 (2020 U.S. Census)`,
      source: { title: `U.S. Census Bureau via Wikipedia — Southlake, Texas`, url: `https://en.wikipedia.org/wiki/Southlake,_Texas`, accessed: ACCESSED },
    },
    {
      label: `County`,
      value: `Tarrant County (primary); minor areas extend into Denton County`,
      source: { title: `Wikipedia — Southlake, Texas`, url: `https://en.wikipedia.org/wiki/Southlake,_Texas`, accessed: ACCESSED },
    },
    {
      label: `Primary School District`,
      value: `Carroll Independent School District (Carroll ISD)`,
      source: { title: `Carroll ISD Official Website`, url: `https://www.southlakecarroll.edu/`, accessed: ACCESSED },
    },
    {
      label: `Known for`,
      value: `One of the nation's highest-ranked suburban school districts, a walkable Town Square modeled on historic downtowns, and 758 acres of preserved Cross Timbers wilderness within city limits`,
      source: { title: `Experience Southlake — Bob Jones Nature Center`, url: `https://www.experiencesouthlaketexas.com/428/Bob-Jones-Nature-Center-and-Preserve`, accessed: ACCESSED },
    },
  ],

  history: {
    body: `Long before Southlake had a name, its rolling post-oak terrain drew Missouri colonists in the mid-1840s under the Peters Colony land grant. Farming communities — Dove, White's Chapel, Old Union, and Jellico — took root along creek beds and wagon roads, each anchored by a one-room school and a church. The Lonesome Dove Baptist Church, organized in February 1846, still stands as one of the oldest congregations in Tarrant County, and the 1871 White's Chapel Methodist Church gave permanent name to roads and cemeteries that remain today.

The decisive turning point came from water. Construction of Lake Grapevine began in 1948, requiring some families to surrender farmland to eminent domain and completing in 1952 at a cost of $11.8 million. The lake provided both identity and economic engine — and it provided the city its very name. When the neighboring city of Hurst threatened to annex the unincorporated area in 1956, local residents voted 30–24 to form their own town. Mayor-elect A. Gail Eubanks's thirteen-year-old daughter Suzanne, studying geography at the time, suggested the name: Southlake, for its position south of the new reservoir.

The city remained essentially rural until Dallas/Fort Worth International Airport opened in 1974, drawing airline employees and corporate relocations into the corridor. The opening of Solana — an 800-acre office campus that eventually became the headquarters of Sabre Holdings — signaled the shift from farm community to affluent suburb. By the mid-1990s, the city had the tax base and civic ambition to commission Southlake Town Square, a new downtown designed by architect David M. Schwarz and opened in 1999.`,
    sources: [
      { title: `Southlake Historical Society — Timeline`, url: `https://southlakehistory.org/history-of-southlake/timeline/`, accessed: ACCESSED },
      { title: `Wikipedia — Southlake, Texas`, url: `https://en.wikipedia.org/wiki/Southlake,_Texas`, accessed: ACCESSED },
      { title: `Southlake Historical Society — Founding of Southlake`, url: `https://southlakehistory.org/history-of-southlake/founding-of-southlake/`, accessed: ACCESSED },
    ],
  },

  historicalSites: [
    {
      name: `Lonesome Dove Baptist Church and Cemetery`,
      description: `Organized in February 1846 by twelve Baptists meeting in a private home, this is one of the oldest active congregations in Tarrant County; the adjoining cemetery holds many of the county's earliest pioneers.`,
      source: { title: `Southlake Historical Society — Historical Markers`, url: `https://southlakehistory.org/buildings-markers/historical-markers/`, accessed: ACCESSED },
    },
    {
      name: `White's Chapel United Methodist Church and Cemetery`,
      description: `Founded in 1871 by settlers who arrived by wagon train from Georgia, this is the first Methodist congregation in the area, with a cemetery whose earliest documented burial dates to 1872.`,
      source: { title: `Southlake Historical Society — Historical Markers`, url: `https://southlakehistory.org/buildings-markers/historical-markers/`, accessed: ACCESSED },
    },
    {
      name: `1919 Carroll School Building`,
      description: `This three-room brick schoolhouse became the educational and civic center of early Southlake — serving as the polling place where residents voted to incorporate the city in 1956 and briefly as town hall afterward.`,
      source: { title: `Southlake Historical Society — Historical Markers`, url: `https://southlakehistory.org/buildings-markers/historical-markers/`, accessed: ACCESSED },
    },
    {
      name: `Southlake Town Hall (Southlake Town Square)`,
      description: `Designed by architect David M. Schwarz and modeled on Texas's historic county courthouses, this building anchored the 1999 opening of Southlake Town Square and remains the civic and symbolic heart of the city.`,
      url: `https://southlaketownsquare.com/`,
      source: { title: `Southlake Historical Society — Town Square`, url: `https://southlakehistory.org/history-of-southlake/town-square/`, accessed: ACCESSED },
    },
    {
      name: `Wheeler and Murphy State Trooper Memorial`,
      description: `This roadside monument on Dove Road marks the spot where Texas state troopers E.B. Wheeler and H.D. Murphy were shot and killed on Easter Sunday, April 1, 1934, during Bonnie and Clyde's criminal trail through the area.`,
      source: { title: `Southlake Historical Society — Historical Markers`, url: `https://southlakehistory.org/buildings-markers/historical-markers/`, accessed: ACCESSED },
    },
    {
      name: `Bob Jones Historic Preserve`,
      description: `The 758-acre nature preserve bears the name of Bob Jones, born into slavery in 1850, who became a prosperous, respected rancher and built the Walnut Grove school on his own land so Black children could receive an education segregated schools denied them.`,
      url: `https://www.experiencesouthlaketexas.com/428/Bob-Jones-Nature-Center-and-Preserve`,
      source: { title: `Experience Southlake — Bob Jones Nature Center`, url: `https://www.experiencesouthlaketexas.com/428/Bob-Jones-Nature-Center-and-Preserve`, accessed: ACCESSED },
    },
    {
      name: `Jellico Community Historical Marker`,
      description: `A Texas Historical Commission marker for what was once a self-sufficient rural hamlet — with cotton gin, blacksmith, and post office — that thrived in the 1890s before fading when cotton prices collapsed in 1907.`,
      source: { title: `Southlake Historical Society — Historical Markers`, url: `https://southlakehistory.org/buildings-markers/historical-markers/`, accessed: ACCESSED },
    },
  ],

  pointsOfInterest: [
    {
      name: `Southlake Town Square`,
      description: `An outdoor mixed-use district on 130 acres of former farmland, combining 125+ shops, dozens of restaurants, the city library, and a gazebo-centered park that hosts nearly every major community event year-round.`,
      url: `https://southlaketownsquare.com/`,
      source: { title: `Wikipedia — Southlake Town Square`, url: `https://en.wikipedia.org/wiki/Southlake_Town_Square`, accessed: ACCESSED },
    },
    {
      name: `The Marq Southlake`,
      description: `Southlake's flagship community facility — a 109,000-square-foot campus housing the Champions Club fitness and aquatics center, an outdoor amphitheater, a senior center, and Legends Hall event venue.`,
      url: `https://www.experiencesouthlaketexas.com/148/Parks-Recreation`,
      source: { title: `Experience Southlake — Parks & Recreation`, url: `https://www.experiencesouthlaketexas.com/148/Parks-Recreation`, accessed: ACCESSED },
    },
    {
      name: `Bob Jones Nature Center and Preserve`,
      description: `A 758-acre sanctuary of Cross Timbers habitat with 20+ miles of trails, where more than 1,100 species of flora and fauna have been documented in one of the last significant Cross Timbers ecosystems in the Metroplex.`,
      url: `https://www.experiencesouthlaketexas.com/428/Bob-Jones-Nature-Center-and-Preserve`,
      source: { title: `Experience Southlake — Bob Jones Nature Center`, url: `https://www.experiencesouthlaketexas.com/428/Bob-Jones-Nature-Center-and-Preserve`, accessed: ACCESSED },
    },
    {
      name: `Grapevine Lake`,
      description: `An 8,000+ surface-acre U.S. Army Corps of Engineers reservoir just north of Southlake offering boating, kayaking, paddleboarding, camping, and miles of shoreline trails — and the reason the city of Southlake exists at all.`,
      url: `https://lake-grapevine.com/`,
      source: { title: `Trails at Grapevine Lake — U.S. Army Corps of Engineers`, url: `https://www.swf-wc.usace.army.mil/grapevine/Recreation/Trails/`, accessed: ACCESSED },
    },
    {
      name: `Sabre Holdings / Solana Business Park`,
      description: `The headquarters of travel-technology giant Sabre Corporation sits within the Solana business park at Southlake's western edge, making the city one of the few DFW suburbs with a Fortune 500 anchor that doubles as an architectural landmark.`,
      source: { title: `Wikipedia — Southlake, Texas`, url: `https://en.wikipedia.org/wiki/Southlake,_Texas`, accessed: ACCESSED },
    },
    {
      name: `Texas Rangers Miracle League Field`,
      description: `Purpose-built with a rubberized surface for wheelchairs and walkers, this field — co-funded by the Texas Rangers Baseball Foundation and the city — gives children and adults with disabilities a place to play baseball in an inclusive setting.`,
      url: `https://www.experiencesouthlaketexas.com/435/Texas-Rangers-Miracle-League-Field`,
      source: { title: `Experience Southlake — Miracle League Field`, url: `https://www.experiencesouthlaketexas.com/435/Texas-Rangers-Miracle-League-Field`, accessed: ACCESSED },
    },
    {
      name: `Southlake Public Library`,
      description: `Housed within the award-winning Town Hall building, the city's library opened in 2001 and anchors a cultural core alongside galleries, public sculpture, and event programming.`,
      url: `https://www.cityofsouthlake.com/3984/Library`,
      source: { title: `City of Southlake — Library`, url: `https://www.cityofsouthlake.com/3984/Library`, accessed: ACCESSED },
    },
  ],

  outdoors: [
    {
      name: `Bicentennial Park`,
      description: `Southlake's oldest and largest developed park — dedicated July 4, 1976 — covers 100+ acres with baseball fields, a tennis center, splash pads, the Champions Club, the Miracle League Field, and a championship pickleball complex.`,
      url: `https://www.experiencesouthlaketexas.com/693/Bicentennial-Park`,
      source: { title: `Experience Southlake — Bicentennial Park`, url: `https://www.experiencesouthlaketexas.com/693/Bicentennial-Park`, accessed: ACCESSED },
    },
    {
      name: `Bob Jones Nature Preserve Trails`,
      description: `20+ miles of hiking trails ranging from a quarter-mile loop to a nearly two-mile lakeside route, open daily from 7 a.m. and free to the public.`,
      url: `https://www.experiencesouthlaketexas.com/596/Bob-Jones-Nature-Center-Trail-Map`,
      source: { title: `Experience Southlake — Bob Jones Nature Center`, url: `https://www.experiencesouthlaketexas.com/428/Bob-Jones-Nature-Center-and-Preserve`, accessed: ACCESSED },
    },
    {
      name: `Northshore Trail at Grapevine Lake`,
      description: `A 22.5-mile single-track system managed by DORBA with the Corps of Engineers, widely regarded as the premier mountain biking trail in North Texas and drawing thousands of cyclists, runners, and hikers each year.`,
      url: `https://lake-grapevine.com/north-shore-trail/`,
      source: { title: `Lake Grapevine — North Shore Trail`, url: `https://lake-grapevine.com/north-shore-trail/`, accessed: ACCESSED },
    },
    {
      name: `Bob Jones Park`,
      description: `Adjacent to the nature center, this 500+-acre complex holds 14 lighted soccer fields, baseball and softball fields, a fishing pond with dock, and an amphitheater.`,
      url: `https://www.experiencesouthlaketexas.com/695/Bob-Jones-Park`,
      source: { title: `Experience Southlake — Bob Jones Park`, url: `https://www.experiencesouthlaketexas.com/695/Bob-Jones-Park`, accessed: ACCESSED },
    },
    {
      name: `Southlake Pickleball Complex`,
      description: `Opened February 2024 inside Bicentennial Park, this $4.5 million facility features eight courts plus a championship court — a direct response to residents who named pickleball a top parks priority.`,
      url: `https://www.experiencesouthlaketexas.com/705/Southlake-Pickleball`,
      source: { title: `Experience Southlake — Southlake Pickleball`, url: `https://www.experiencesouthlaketexas.com/705/Southlake-Pickleball`, accessed: ACCESSED },
    },
    {
      name: `Southlake Tennis Center`,
      description: `Set within Bicentennial Park, the Tennis Center provides lighted courts for league play, lessons, and open recreation, reflecting a long-standing city investment in racket sports.`,
      url: `https://www.experiencesouthlaketexas.com/434/Southlake-Tennis-Center`,
      source: { title: `Experience Southlake — Tennis Center`, url: `https://www.experiencesouthlaketexas.com/434/Southlake-Tennis-Center`, accessed: ACCESSED },
    },
    {
      name: `Town Square Parks (Ruskin Park & Central Plaza)`,
      description: `Walkable urban green spaces woven through Town Square, including Ruskin Park's gazebo and reflecting pond and a central plaza fountain modeled after a Savannah, Georgia original.`,
      url: `https://www.experiencesouthlaketexas.com/733/Town-Square-Parks`,
      source: { title: `Experience Southlake — Town Square Parks`, url: `https://www.experiencesouthlaketexas.com/733/Town-Square-Parks`, accessed: ACCESSED },
    },
    {
      name: `Boo Boo's Buddies Dog Park`,
      description: `Southlake's dedicated off-leash dog park gives four-legged residents room to run in a fenced, city-maintained setting.`,
      url: `https://www.experiencesouthlaketexas.com/429/Boo-Boos-Buddies-Dog-Park`,
      source: { title: `Experience Southlake — Boo Boo's Buddies Dog Park`, url: `https://www.experiencesouthlaketexas.com/429/Boo-Boos-Buddies-Dog-Park`, accessed: ACCESSED },
    },
  ],

  localBusinesses: [
    {
      name: `Truluck's Ocean's Finest Seafood and Crab`,
      description: `A landmark of Southlake fine dining since 2007, built on Florida Stone Crab served within 24 hours of the trap, alongside responsibly sourced seafood, USDA Prime steaks, and an 800-label wine cellar.`,
      url: `https://trulucks.com/locations/southlake-texas/`,
      source: { title: `Truluck's — Southlake`, url: `https://trulucks.com/locations/southlake-texas/`, accessed: ACCESSED },
    },
    {
      name: `Brio Italian Grille`,
      description: `Tucked inside Town Square, Brio brings a Tuscan country-villa sensibility with handcrafted pastas, premium proteins, a well-edited wine list, and a Sunday brunch locals return to.`,
      source: { title: `Best Restaurants in Southlake — Pass and Provisions`, url: `https://www.passandprovisions.com/restaurants-southlake-tx/`, accessed: ACCESSED },
    },
    {
      name: `Taverna Rossa`,
      description: `Opened in 2016 at Park Village, Taverna Rossa serves artisan wood-fired pizza, shareable small plates, and a Texas-influenced menu that anchors the western end of town.`,
      source: { title: `25 Best Restaurants in Southlake — Fort Worth Digital Diary`, url: `https://fortworthdigitaldiary.com/25-best-restaurants-in-southlake/`, accessed: ACCESSED },
    },
    {
      name: `Milwaukee Joe's Artisan Ice Cream`,
      description: `Founded by a former federal agent turned ice cream maker, Milwaukee Joe's is one of the area's most beloved frozen-dessert destinations, known for small-batch creativity and seasonal flavors.`,
      source: { title: `Restaurants in Southlake — Cozymeal`, url: `https://www.cozymeal.com/magazine/restaurants-southlake`, accessed: ACCESSED },
    },
    {
      name: `Sabre Corporation`,
      description: `With roughly 2,550 employees at its Southlake campus, Sabre is the city's largest private employer — a global travel-technology company whose reservation systems power airline bookings worldwide.`,
      source: { title: `Wikipedia — Southlake, Texas`, url: `https://en.wikipedia.org/wiki/Southlake,_Texas`, accessed: ACCESSED },
    },
    {
      name: `The Shops of Southlake / Park Village`,
      description: `A cluster of neighborhood retailers and restaurants adjacent to Town Square, offering a curated, walkable, block-by-block retail character uncommon in suburban DFW.`,
      url: `https://www.shopsofsouthlake.com/`,
      source: { title: `Shops of Southlake`, url: `https://www.shopsofsouthlake.com/the-best-of-southlake-tx-restaurants/`, accessed: ACCESSED },
    },
    {
      name: `Mesero Southlake`,
      description: `A polished Tex-Mex and American crossover at The Shops of Southlake, drawing regulars with signature margaritas, attentive service, and a setting that balances energy and ease.`,
      source: { title: `Shops of Southlake — Best Restaurants`, url: `https://www.shopsofsouthlake.com/the-best-of-southlake-tx-restaurants/`, accessed: ACCESSED },
    },
  ],

  schools: [
    {
      name: `Carroll Independent School District`,
      description: `Serving 8,100+ students across 11 campuses in 21 square miles, Carroll ISD is consistently ranked the #1 district in DFW, holds the TEA's top "A" rating at every campus, and has won the UIL Lone Star Cup nine times.`,
      url: `https://www.southlakecarroll.edu/`,
      source: { title: `Carroll ISD Official Website`, url: `https://www.southlakecarroll.edu/`, accessed: ACCESSED },
    },
    {
      name: `Carroll Senior High School`,
      description: `Covering grades 11–12, Carroll Senior ranks in the top 5% of Texas public high schools (89% math, 89% reading proficiency) and sixth in the state by U.S. News & World Report.`,
      url: `https://www.southlakecarroll.edu/schools`,
      source: { title: `Carroll High School Profile — Public School Review`, url: `https://www.publicschoolreview.com/carroll-high-school-profile/76092`, accessed: ACCESSED },
    },
    {
      name: `Carroll High School (grades 9–10)`,
      description: `The lower campus of Carroll ISD's two-tier high school model and the entry point to one of the state's most celebrated academic and athletic programs.`,
      url: `https://www.southlakecarroll.edu/schools`,
      source: { title: `Carroll ISD — Schools`, url: `https://www.southlakecarroll.edu/schools`, accessed: ACCESSED },
    },
    {
      name: `Dawson & Carroll Middle Schools`,
      description: `Both Carroll ISD middle schools rank among the top ten in Texas for 2026 — Dawson at No. 5 and Carroll at No. 7 — reflecting district-wide excellence well below the high school level.`,
      url: `https://www.southlakecarroll.edu/schools`,
      source: { title: `US News Middle School Rankings 2026 — CultureMap Dallas`, url: `https://dallas.culturemap.com/news/city-life/us-news-middle-schools-travis/`, accessed: ACCESSED },
    },
    {
      name: `Walnut Grove Elementary School`,
      description: `Named for the school Bob Jones built in 1920 for Black children excluded from segregated public schools, this Carroll ISD campus opened in 2011 and ranked 19th in Texas among elementary schools for 2026.`,
      url: `https://www.southlakecarroll.edu/schools`,
      source: { title: `Carroll ISD Official Website`, url: `https://www.southlakecarroll.edu/news-details/~board/district-news/post/carroll-isd-earns-straight-as-in-2025-tea-accountability-ratings`, accessed: ACCESSED },
    },
    {
      name: `The King's University`,
      description: `An accredited evangelical university on the Gateway Church campus that relocated from California to Texas in 2014, offering bachelor's degrees in fields including Biblical Counseling and Worship Leadership.`,
      url: `https://www.tku.edu/`,
      source: { title: `The King's University — About`, url: `https://www.tku.edu/about-the-kings/`, accessed: ACCESSED },
    },
    {
      name: `The Clariden School`,
      description: `A private Pre-K through 12th grade school offering a project-based learning model, giving families an accredited, college-preparatory alternative to Carroll ISD within the city.`,
      source: { title: `Wikipedia — Southlake, Texas`, url: `https://en.wikipedia.org/wiki/Southlake,_Texas`, accessed: ACCESSED },
    },
  ],

  communityCulture: [
    {
      name: `Art in the Square`,
      description: `Produced by the Southlake Women's Club each April at Town Square, this nationally recognized three-day juried festival features 150+ artists; admission is free and proceeds benefit local charities serving women, children, and families.`,
      url: `http://www.artinthesquare.com/`,
      source: { title: `26th Annual Art in the Square — Community Impact`, url: `https://communityimpact.com/dallas-fort-worth/grapevine-colleyville-southlake/arts-entertainment/2026/04/22/southlake-womens-club-to-host-26th-annual-art-in-the-square/`, accessed: ACCESSED },
    },
    {
      name: `Stars and Stripes (July 3)`,
      description: `Southlake's signature Independence Day celebration draws thousands to Town Square for live entertainment, family activities, and a fireworks display that's among the most-attended annual events in northeast Tarrant County.`,
      url: `https://www.visitsouthlaketexas.com/stars-and-stripes/`,
      source: { title: `City of Southlake — Events`, url: `https://www.cityofsouthlake.com/3949/Events`, accessed: ACCESSED },
    },
    {
      name: `Oktoberfest Southlake`,
      description: `Hosted by the Southlake Chamber of Commerce each October at Town Square, blending live music, local vendors, family activities, and Bavarian-inspired food into one of the fall's most attended gatherings in the 121 corridor.`,
      url: `https://visitsouthlaketexas.com/events/special-events-7/oktoberfest/`,
      source: { title: `City of Southlake — Events`, url: `https://www.cityofsouthlake.com/3949/Events`, accessed: ACCESSED },
    },
    {
      name: `DiwaliFest`,
      description: `Hosted by the Southlake Foundation each fall at Town Square, this free celebration of Indian culture features classical dance, live entertainment, cultural exhibitions, and authentic cuisine.`,
      url: `https://visitsouthlaketexas.com/events/special-events-7/diwali-fest/`,
      source: { title: `City of Southlake — Events`, url: `https://www.cityofsouthlake.com/3949/Events`, accessed: ACCESSED },
    },
    {
      name: `Southlake Spring Festival (Lunar New Year)`,
      description: `Launched in 2022 by the Association of Chinese Americans in Southlake, this free one-day Town Square celebration honors Lunar New Year with booths and performances representing cultures across East and Southeast Asia.`,
      source: { title: `City of Southlake — Events`, url: `https://www.cityofsouthlake.com/3949/Events`, accessed: ACCESSED },
    },
    {
      name: `Southlake Hispanic Heritage Celebration`,
      description: `Held each September at Town Square, this free event spotlights mariachi, folklórico dance, salsa, bachata, a marketplace of Hispanic and Latino artisans, and a kid-friendly zone.`,
      url: `https://southlakehispanicheritagefestival.com/`,
      source: { title: `City of Southlake — Events`, url: `https://www.cityofsouthlake.com/3949/Events`, accessed: ACCESSED },
    },
    {
      name: `MasterWorks Concert Series`,
      description: `Presented by the city and the Arts Council of Northeast Tarrant County, this recurring outdoor series brings live classical and orchestral performances to Town Square.`,
      url: `https://visitsouthlaketexas.com/events/special-events-7/master-works/`,
      source: { title: `City of Southlake — Events`, url: `https://www.cityofsouthlake.com/3949/Events`, accessed: ACCESSED },
    },
    {
      name: `Home for the Holidays — Tree Lighting`,
      description: `Held the Saturday before Thanksgiving, this kickoff to the holiday season transforms Town Square with a grand tree lighting, snow tubing, train rides, Santa photos, and Carroll ISD student performances.`,
      url: `https://visitsouthlaketexas.com/events/special-events-7/home-for-the-holidays/`,
      source: { title: `City of Southlake — Events`, url: `https://www.cityofsouthlake.com/3949/Events`, accessed: ACCESSED },
    },
  ],
};

export default southlake;
