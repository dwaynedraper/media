'use client';

export default function SproutForm() {
  return (
    <iframe
      src={process.env.NEXT_PUBLIC_SPROUT_FORM_URL ?? ''}
      scrolling="yes"
      title="Real Estate Media Inquiry Form"
      style={{ display: 'block', width: '100%', border: 'none', minHeight: '1000px' }}
    />
  );
}
