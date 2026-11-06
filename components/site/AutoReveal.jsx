'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { ADMIN_BASE } from '@/lib/constants/admin';

/**
 * Lightweight scroll-reveal for a page's sections.
 *
 * Every <section> inside the wrapper (except ones marked data-no-reveal) gets
 * its direct children faded/slid in as they enter the viewport, and the
 * children of any `.grid` inside it are staggered. It uses one
 * IntersectionObserver + CSS transitions (see `.reveal` in globals.css), so
 * there is no per-frame JavaScript and nothing runs while scrolling.
 *
 * Content is only hidden once JS has run (`.reveal` is added here), so the
 * page is fully visible without JS and for reduced-motion users.
 */
export default function AutoReveal({ children }) {
  const rootRef = useRef(null);
  const pathname = usePathname();

  useEffect(() => {
    const root = rootRef.current;
    if (!root || pathname?.startsWith(ADMIN_BASE)) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (!('IntersectionObserver' in window)) return;

    const targets = new Set();
    root.querySelectorAll('section:not([data-no-reveal]):not([data-no-reveal] section)').forEach((section) => {
      Array.from(section.children).forEach((el) => {
        if (getComputedStyle(el).position === 'absolute') return;
        targets.add(el);
      });
      section.querySelectorAll('.grid').forEach((grid) => {
        Array.from(grid.children).forEach((el, i) => {
          if (getComputedStyle(el).position === 'absolute') return;
          el.style.setProperty('--reveal-delay', `${Math.min(i, 5) * 90}ms`);
          targets.add(el);
        });
      });
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target;
          el.classList.add('is-visible');
          observer.unobserve(el);
          // Once the entrance is done, drop the reveal classes so the
          // element's own transitions (hover effects etc.) apply again.
          const delay = parseInt(el.style.getPropertyValue('--reveal-delay'), 10) || 0;
          setTimeout(() => el.classList.remove('reveal', 'is-visible'), 900 + delay);
        });
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 }
    );

    targets.forEach((el) => {
      el.classList.add('reveal');
      observer.observe(el);
    });

    return () => {
      observer.disconnect();
      targets.forEach((el) => el.classList.remove('reveal', 'is-visible'));
    };
  }, [pathname]);

  return <div ref={rootRef}>{children}</div>;
}
