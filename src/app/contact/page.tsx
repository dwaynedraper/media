import type { Metadata } from 'next';
import SproutForm from '@/components/SproutForm';
import ContactSidebar from '@/components/ContactSidebar';

export const metadata: Metadata = {
  title: 'Book a Real Estate Photography Session',
  description:
    'Book your real estate media session or reach out directly. Sharp Sighted Media serves the 121 Corridor in the Dallas-Fort Worth area.',
  alternates: { canonical: '/contact' },
};

export default function Contact() {
  return (
    <>
      <header className="page-header">
        <div className="page-header-bg" aria-hidden="true" />
        <div className="page-header-inner fade-in">
          <div className="page-eyebrow">Sharp Sighted Media</div>
          <h1>
            Ready to be <em>seen?</em>
            <br />
            Let&apos;s talk.
          </h1>
          <p className="page-header-sub">
            Fill out the form and you&apos;ll hear from us the same day. Or reach out directly.
            Whatever feels easiest.
          </p>
        </div>
      </header>

      <div className="contact-body">
        <div className="form-panel fade-in-2">
          <div className="form-panel-header">
            <div className="form-panel-label">Real Estate Media</div>
            <div className="form-panel-title">Tell us about your business</div>
          </div>
          <div className="form-panel-body">
            <div className="form-embed-area">
              <SproutForm />
            </div>
          </div>
        </div>
        <ContactSidebar />
      </div>
    </>
  );
}
