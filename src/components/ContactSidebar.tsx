import Image from 'next/image';

const HIHELLO_URL = process.env.NEXT_PUBLIC_HIHELLO_URL ?? 'https://hihello.com/p/0e0cc4d5-1dff-4173-865e-22b4158e3d73';

export default function ContactSidebar() {
  return (
    <aside className="sidebar fade-in-3" aria-label="Contact options">

      {/* Direct contact */}
      <div className="sidebar-card">
        <div className="card-label">Direct Contact</div>
        <ul className="contact-methods">
          <li className="contact-method">
            <a href="tel:+12142335338" aria-label="Call Dean" style={{ display: 'contents' }}>
              <div className="method-icon">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.44 2 2 0 0 1 3.59 1.25h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.84a16 16 0 0 0 6 6l.92-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7a2 2 0 0 1 1.72 2.03z" />
                </svg>
              </div>
              <div className="method-info">
                <div className="method-label">Phone</div>
                <div className="method-value">(214) 233-5338</div>
                <div className="method-note">Text is preferred</div>
              </div>
            </a>
          </li>
          <li className="contact-method">
            <a href="mailto:dean@sharpsightedstudio.com" aria-label="Email Dean" style={{ display: 'contents' }}>
              <div className="method-icon">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <div className="method-info">
                <div className="method-label">Email</div>
                <div className="method-value">dean@sharpsightedstudio.com</div>
              </div>
            </a>
          </li>
        </ul>
      </div>

      {/* Social */}
      <div className="sidebar-card">
        <div className="card-label">Find Me Online</div>
        <div className="social-row" role="list">
          <a
            href="https://linkedin.com/in/dean-draper"
            className="social-btn"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            role="listitem"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect x="2" y="9" width="4" height="12" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </a>
          <a
            href="https://instagram.com/sharpsightedstudio"
            className="social-btn"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            role="listitem"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
          </a>
          <a
            href="https://vimeo.com/sharpsightedstudio"
            className="social-btn"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Vimeo"
            role="listitem"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M22 7.42c-.09 2-1.52 4.75-4.28 8.24C14.9 19.32 12.5 21 10.54 21c-1.26 0-2.33-1.16-3.2-3.49L5.8 12.29C5.19 9.96 4.54 8.8 3.84 8.8c-.15 0-.69.33-1.6.97L1 8.52c1-.88 2-.88 3.97-2.66C6.9 4.12 8.35 3.22 9.3 3.13c2.35-.23 3.8 1.38 4.33 4.82.58 3.69 1 5.98 1.2 6.87.67 3.03 1.4 4.54 2.2 4.54.62 0 1.56-.98 2.8-2.96 1.24-1.97 1.9-3.47 1.97-4.5.18-1.7-.49-2.55-1.99-2.55-.71 0-1.44.16-2.2.49 1.46-4.8 4.25-7.13 8.39-7z" />
            </svg>
          </a>
          <a
            href="https://facebook.com/sharpsightedstudio"
            className="social-btn"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            role="listitem"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>
          </a>
        </div>
      </div>

      {/* HiHello */}
      <div className="sidebar-card hihello-card">
        <div className="card-label">Save My Contact</div>
        <p className="hihello-intro">
          Scan the code or tap the link to grab my digital card. One tap and I&apos;m in your contacts.
        </p>
        <div className="qr-wrapper">
          <a
            href={HIHELLO_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Scan to save Dean Draper's contact card"
          >
            <Image
              src="/images/hihello-qr.png"
              alt="Scan to save Dean Draper's contact card"
              width={180}
              height={180}
              style={{ borderRadius: '8px' }}
            />
          </a>
          <div className="qr-cta">
            Scan to save &bull; or{' '}
            <a href={HIHELLO_URL} target="_blank" rel="noopener noreferrer">
              tap to open
            </a>
          </div>
        </div>
        <div className="hihello-badge">Digital Business Card</div>
      </div>

      {/* Service area */}
      <div className="sidebar-card">
        <div className="card-label">Service Area</div>
        <div className="service-area">
          <strong>121 Corridor and surrounding DFW</strong>
          Shoot days are Wednesday and Thursday. Book early for your preferred date.
          <div className="area-tags" role="list">
            {['Allen', 'Plano', 'Frisco', 'Lewisville', 'Grapevine', 'Southlake', 'Colleyville', 'Denton'].map(
              city => (
                <span key={city} className="area-tag" role="listitem">
                  {city}
                </span>
              )
            )}
          </div>
        </div>
      </div>

    </aside>
  );
}
