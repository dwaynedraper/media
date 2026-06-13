const HOME_FAQ = [
  {
    q: 'What is Sharp Sighted Media?',
    a: 'The real estate media studio of Sharp Sighted Studio, serving top-producing agents across the Dallas–Fort Worth 121 corridor with MLS photography, aerial, floor plans, video, and 3D tours — all delivered within 24 hours.',
  },
  {
    q: 'What is included in a standard shoot?',
    a: 'The Essentials Package ($400 per property) delivers MLS-optimized stills, aerial photography, a measured floor plan, a twilight hero edit, a 20-second vertical reel, and a branded property website.',
  },
  {
    q: 'Which cities do you serve?',
    a: 'The DFW 121 corridor and surrounding North Texas — Allen, Plano, Frisco, McKinney, Lewisville, The Colony, Coppell, Roanoke, Denton, Grapevine, Southlake, Colleyville, and Westlake, across Collin, Denton, and Tarrant counties.',
  },
  {
    q: 'Can you fly a drone over my listing?',
    a: 'Yes. Sharp Sighted Media is FAA Part 107 certified, and aerial photography is included in every Essentials Package — context and scale, flown legally.',
  },
  {
    q: 'How do I book a shoot?',
    a: 'Booking is online and confirmed instantly. Shoot days are Wednesday and Thursday, and files are delivered within 24 hours of the shoot.',
  },
];

const homeFaqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  '@id': 'https://sharpsighted.media/#faq',
  mainEntity: HOME_FAQ.map((item) => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: { '@type': 'Answer', text: item.a },
  })),
};

export default function HomeFaq() {
  return (
    <section className="city-section">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeFaqJsonLd) }}
      />
      <div className="container">
        <div className="section-label reveal">Questions, answered</div>
        <div className="city-faq reveal">
          {HOME_FAQ.map((item) => (
            <details key={item.q} className="city-faq-item">
              <summary>{item.q}</summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
