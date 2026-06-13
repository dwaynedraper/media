'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { cloudinaryUrl } from '@/lib/cloudinary';
import type { CityExperience, MediaSlot, Scene } from '@/data/cityGuides/_experience-types';
import styles from './CityHub.module.css';

/* Resolve a media slot to a URL. Real shot (Cloudinary) once publicId is set;
   a deterministic placeholder until then. */
function mediaUrl(slot: MediaSlot | undefined, variant: 'thumb' | 'bg', w: number, h: number): string {
  if (slot?.publicId) return cloudinaryUrl(slot.publicId, variant);
  const seed = (slot?.id ?? 'x').replace(/[^a-z0-9]+/gi, '-');
  return `https://picsum.photos/seed/ssm-${seed}/${w}/${h}`;
}

export default function CityHub({ experience }: { experience: CityExperience }) {
  const rootRef = useRef<HTMLDivElement>(null);
  const slots = new Map(experience.mediaManifest.map((s) => [s.id, s]));
  const slot = (id?: string) => (id ? slots.get(id) : undefined);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // scroll progress
    const bar = root.querySelector<HTMLElement>(`.${styles.progress}`);
    const onScroll = () => {
      if (!bar) return;
      const d = document.documentElement;
      bar.style.width = (d.scrollTop / (d.scrollHeight - d.clientHeight)) * 100 + '%';
    };
    document.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    // reveal on view
    const revealEls = root.querySelectorAll<HTMLElement>('[data-reveal]');
    if (reduce) {
      revealEls.forEach((el) => el.classList.add(styles.isIn));
    } else {
      const io = new IntersectionObserver(
        (es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add(styles.isIn); io.unobserve(e.target); } }),
        { threshold: 0.18 },
      );
      revealEls.forEach((el) => io.observe(el));
    }

    // animated counters (initial text already correct for SSR / reduced motion)
    if (!reduce) {
      const cio = new IntersectionObserver(
        (es) => es.forEach((e) => {
          if (!e.isIntersecting) return;
          const el = e.target as HTMLElement;
          const raw = el.dataset.count ?? el.textContent ?? '';
          const m = raw.match(/^(\D*)([\d,]+)(\D*)$/);
          cio.unobserve(el);
          if (!m) return;
          const prefix = m[1], target = +m[2].replace(/,/g, ''), suffix = m[3];
          const dur = 1300, t0 = performance.now();
          const step = (t: number) => {
            const p = Math.min((t - t0) / dur, 1);
            const v = Math.round(target * (1 - Math.pow(1 - p, 3)));
            el.textContent = prefix + v.toLocaleString('en-US') + suffix;
            if (p < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }),
        { threshold: 0.6 },
      );
      root.querySelectorAll<HTMLElement>('[data-count]').forEach((el) => cio.observe(el));
    }

    return () => document.removeEventListener('scroll', onScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const sentences = experience.headline.split(/(?<=\.)\s+/).filter(Boolean);

  return (
    <div className={styles.hub} ref={rootRef}>
      <div className={styles.progress} aria-hidden="true" />

      {experience.scenes.map((scene) => renderScene(scene))}

      {/* hero is rendered inline above via renderScene; helper closures below */}
    </div>
  );

  function img(id: string | undefined, variant: 'thumb' | 'bg', w: number, h: number, alt: string) {
    const s = slot(id);
    return <img src={mediaUrl(s, variant, w, h)} alt={alt} loading="lazy" draggable={false} />;
  }

  function renderScene(scene: Scene) {
    switch (scene.type) {
      case 'hero':
        return (
          <section key={scene.id} id="top" className={styles.hero}>
            <div className={styles.heroMedia} aria-hidden="true">
              {img(scene.media?.[0], 'bg', 1800, 1100, '')}
            </div>
            <div className={`${styles.wrap} ${styles.heroInner}`}>
              <h1 className={styles.heroH1}>
                {sentences.map((line, i) => (
                  <span
                    key={line}
                    className={`${styles.heroLine} ${i === sentences.length - 1 ? styles.heroEm : ''}`}
                    style={{ animationDelay: `${i * 0.16}s` }}
                  >
                    {line}{' '}
                  </span>
                ))}
              </h1>
              <p className={styles.heroSub}>{experience.subhead}</p>
            </div>
            <div className={styles.scrollcue}>Scroll<span>⌄</span></div>
          </section>
        );

      case 'statBar':
        return (
          <section key={scene.id} className={styles.stats}>
            <div className={styles.wrap}>
              <div className={styles.statGrid}>
                {scene.stats?.map((st, i) => (
                  <div className={styles.stat} key={st.label} data-reveal style={{ transitionDelay: `${i * 0.08}s` }}>
                    <div className={styles.statNum} data-count={st.value}>{st.value}</div>
                    <div className={styles.statLab}>{st.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        );

      case 'mediaGrid':
        return (
          <section key={scene.id} className={styles.scene}>
            <div className={styles.wrap}>
              <div className={styles.sceneHead} data-reveal>
                <div className={styles.eyebrow}>{scene.eyebrow}</div>
                <h2 className={styles.h2}>{scene.heading}</h2>
                {scene.body && <p className={styles.lead}>{scene.body}</p>}
              </div>
              <div className={styles.dayGrid}>
                {scene.items?.map((it, i) => (
                  <div className={styles.day} key={it.title + i} data-reveal style={{ transitionDelay: `${(i % 3) * 0.08}s` }}>
                    {img(it.media, 'thumb', 700, 900, it.caption ?? '')}
                    <div className={styles.dayCap}><b>{it.title}</b><span>{it.caption}</span></div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        );

      case 'spotlight': {
        const flip = !scene.items; // text-left when no item rail
        return (
          <section key={scene.id} className={`${styles.scene} ${styles.sceneAlt}`}>
            <div className={styles.wrap}>
              <div className={flip ? styles.splitFlip : styles.split}>
                <div className={styles.media} data-reveal>{img(scene.media?.[0], 'thumb', 1000, 780, scene.heading ?? '')}</div>
                <div data-reveal style={{ transitionDelay: '0.08s' }}>
                  <div className={styles.eyebrow}>{scene.eyebrow}</div>
                  <h2 className={styles.h2}>{scene.heading}</h2>
                  {scene.body && <p className={styles.lead}>{scene.body}</p>}
                </div>
              </div>
            </div>
            {scene.items && (
              <>
                <div style={{ height: '1.6rem' }} />
                <div className={styles.railHint}>Swipe →</div>
                <div className={styles.rail}>
                  {scene.items.map((it, i) => (
                    <div className={styles.card} key={it.title} data-reveal style={{ transitionDelay: `${(i % 4) * 0.06}s` }}>
                      <div className={styles.cardImg}>{img(it.media, 'thumb', 600, 450, it.title)}</div>
                      <div className={styles.cardBody}><b>{it.title}</b><span>{it.caption}</span></div>
                    </div>
                  ))}
                </div>
              </>
            )}
          </section>
        );
      }

      case 'rankBand':
        return (
          <section key={scene.id} className={`${styles.scene} ${styles.band}`}>
            <div className={styles.wrap}>
              <div data-reveal><div className={styles.eyebrow}>{scene.eyebrow}</div></div>
              <div className={styles.rank} data-reveal style={{ transitionDelay: '0.06s' }}>
                <span className={styles.rankHash}>#</span>1
              </div>
              <h2 className={styles.h2} data-reveal style={{ transitionDelay: '0.06s', marginTop: '.5rem' }}>{scene.heading}</h2>
              {scene.body && <p className={styles.lead} data-reveal style={{ transitionDelay: '0.12s' }}>{scene.body}</p>}
              <div className={styles.chips} data-reveal style={{ transitionDelay: '0.12s' }}>
                {scene.items?.map((it) => <div className={styles.chip} key={it.title}>{it.title}</div>)}
              </div>
            </div>
          </section>
        );

      case 'rail':
        return (
          <section key={scene.id} className={`${styles.scene} ${styles.sceneAlt}`}>
            <div className={styles.wrap}>
              <div className={styles.sceneHead} data-reveal>
                <div className={styles.eyebrow}>{scene.eyebrow}</div>
                <h2 className={styles.h2}>{scene.heading}</h2>
              </div>
            </div>
            <div className={styles.railHint}>Swipe →</div>
            <div className={styles.rail}>
              {scene.items?.map((it, i) => (
                <div className={styles.card} key={it.title} data-reveal style={{ transitionDelay: `${(i % 4) * 0.06}s` }}>
                  <div className={styles.cardImg}>{img(it.media, 'thumb', 600, 450, it.title)}</div>
                  <div className={styles.cardBody}><b>{it.title}</b><span>{it.caption}</span></div>
                </div>
              ))}
            </div>
          </section>
        );

      case 'marquee':
        return (
          <section key={scene.id} className={styles.scene} style={{ paddingTop: 0 }}>
            <div className={styles.wrap} style={{ paddingBottom: '.6rem' }}>
              <div className={styles.sceneHead} data-reveal><div className={styles.eyebrow}>{scene.eyebrow}</div></div>
            </div>
            <div className={styles.marquee}>
              <div className={styles.track}>
                {[0, 1].map((dup) =>
                  scene.items?.map((it, i) => (
                    <span key={`${dup}-${it.title}`} className={i % 2 ? styles.trackOutline : ''}>
                      {it.title}<span className={styles.trackDot}> • </span>
                    </span>
                  )),
                )}
              </div>
            </div>
          </section>
        );

      case 'timeline':
        return (
          <section key={scene.id} className={`${styles.scene} ${styles.sceneAlt}`}>
            <div className={styles.wrap}>
              <div className={styles.sceneHead} data-reveal>
                <div className={styles.eyebrow}>{scene.eyebrow}</div>
                <h2 className={styles.h2}>{scene.heading}</h2>
              </div>
              <div className={styles.timeline}>
                {scene.steps?.map((s, i) => (
                  <div className={styles.tstep} key={s.year} data-reveal style={{ transitionDelay: `${i * 0.1}s` }}>
                    <div className={styles.tyear}>{s.year}</div>
                    <p>{s.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        );

      case 'cards':
        return (
          <section key={scene.id} className={styles.scene}>
            <div className={styles.wrap}>
              <div className={styles.sceneHead} data-reveal>
                <div className={styles.eyebrow}>{scene.eyebrow}</div>
                <h2 className={styles.h2}>{scene.heading}</h2>
              </div>
              <div className={styles.youGrid}>
                {scene.items?.map((it, i) => (
                  <div className={styles.you} key={it.title} data-reveal style={{ transitionDelay: `${i * 0.08}s` }}>
                    <b>{it.title}</b><span>{it.caption}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        );

      case 'mapMoment':
        return (
          <section key={scene.id} className={`${styles.scene} ${styles.sceneAlt}`}>
            <div className={styles.wrap}>
              <div className={styles.sceneHead} data-reveal>
                <div className={styles.eyebrow}>{scene.eyebrow}</div>
                <h2 className={styles.h2}>{scene.heading}</h2>
              </div>
              <div className={styles.map} data-reveal>
                {img(scene.media?.[0], 'bg', 1200, 680, 'Where Southlake sits in the DFW Metroplex')}
                <div className={styles.pin} style={{ left: '50%', top: '46%' }}><div className={styles.pinDot} /><b>Southlake</b><span>You are here</span></div>
                <div className={styles.pin} style={{ left: '33%', top: '70%' }}><div className={`${styles.pinDot} ${styles.pinDotAlt}`} /><b>DFW Airport</b><span>~15 min</span></div>
                <div className={styles.pin} style={{ left: '74%', top: '30%' }}><div className={`${styles.pinDot} ${styles.pinDotAlt}`} /><b>Downtown Dallas</b><span>~35 min</span></div>
                <div className={styles.pin} style={{ left: '20%', top: '32%' }}><div className={`${styles.pinDot} ${styles.pinDotAlt}`} /><b>Fort Worth</b><span>~30 min</span></div>
              </div>
            </div>
          </section>
        );

      case 'cta':
        return (
          <section key={scene.id} className={styles.cta}>
            <div className={styles.wrap}>
              <div className={styles.eyebrow} data-reveal style={{ color: 'var(--accent-deep)' }}>{scene.eyebrow}</div>
              <h2 className={styles.h2} data-reveal style={{ transitionDelay: '0.06s' }}>{scene.heading}</h2>
              {scene.body && <p className={styles.lead} data-reveal style={{ transitionDelay: '0.12s' }}>{scene.body}</p>}
              <a className={styles.btn} href="#top" data-reveal style={{ transitionDelay: '0.12s' }}>Watch it again ↺</a>
              <div className={styles.explore} data-reveal style={{ transitionDelay: '0.18s' }}>
                See it through our lens — <Link href={`/service-areas/${experience.slug}`}>photography in {experience.slug.charAt(0).toUpperCase() + experience.slug.slice(1)}</Link>
                {' · '}
                <Link href="/packages">packages &amp; pricing →</Link>
              </div>
              <div className={styles.credit} data-reveal style={{ transitionDelay: '0.22s' }}>
                A free city guide from <Link href="/">Sharp Sighted Media</Link>
              </div>
            </div>
          </section>
        );

      default:
        return null;
    }
  }
}
