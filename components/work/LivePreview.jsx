'use client';

// Interactive live preview of a project's website inside a device frame.
// Desktop renders the site at a real 1440px width and scales it to fit, so it
// looks exactly like the site on a laptop; tablet and mobile render at their
// real widths.
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { ExternalLink, Loader2, Monitor, RotateCw, Smartphone, Tablet } from 'lucide-react';
import { cx } from '@/components/site/ui';

const devices = {
  desktop: { label: 'Desktop', icon: Monitor, width: 1440, height: 900 },
  tablet: { label: 'Tablet', icon: Tablet, width: 820, height: 1100 },
  mobile: { label: 'Mobile', icon: Smartphone, width: 390, height: 780 },
};

export default function LivePreview({ url, title, poster }) {
  const [device, setDevice] = useState('desktop');
  const [loaded, setLoaded] = useState(false);
  const [slow, setSlow] = useState(false);
  const [reloadKey, setReloadKey] = useState(0);
  const [boxWidth, setBoxWidth] = useState(0);
  const boxRef = useRef(null);

  useEffect(() => {
    const el = boxRef.current;
    if (!el) return;
    const ro = new ResizeObserver(([entry]) => setBoxWidth(entry.contentRect.width));
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    setLoaded(false);
    setSlow(false);
    const t = setTimeout(() => setSlow(true), 12000);
    return () => clearTimeout(t);
  }, [device, reloadKey]);

  const d = devices[device];
  // Scale the device down to the available width (never up).
  const frameExtra = device === 'desktop' ? 0 : 28; // bezel padding for tablet/phone
  const scale = boxWidth ? Math.min(1, (boxWidth - frameExtra) / d.width) : 0;
  const shownHeight = d.height * (scale || 1) + frameExtra;
  const host = url.replace(/^https?:\/\//, '').replace(/\/$/, '');

  const iframe = (
    <iframe
      key={`${device}-${reloadKey}`}
      src={url}
      title={`${title} live website preview`}
      onLoad={() => setLoaded(true)}
      sandbox="allow-scripts allow-same-origin allow-popups allow-forms allow-popups-to-escape-sandbox"
      referrerPolicy="no-referrer-when-downgrade"
      className="block border-0 bg-white"
      style={{ width: d.width, height: d.height, transform: `scale(${scale})`, transformOrigin: 'top left' }}
    />
  );

  const loadingLayer = !loaded && (
    <div className="absolute inset-0 z-10 flex items-center justify-center bg-slate-50">
      {poster && device === 'desktop' && <Image src={poster} alt="" fill sizes="80vw" className="object-cover object-top opacity-60 blur-[2px]" />}
      <div className="relative flex flex-col items-center gap-3 px-6 text-center">
        <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-lg ring-1 ring-slate-200">
          <Loader2 className="h-4 w-4 animate-spin text-blue-600" /> Loading live site…
        </span>
        {slow && (
          <a href={url} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-blue-600 underline underline-offset-4">
            Taking a while? Open it in a new tab
          </a>
        )}
      </div>
    </div>
  );

  return (
    <div>
      {/* Toolbar */}
      <div className="mb-5 flex flex-col items-stretch justify-between gap-3 sm:flex-row sm:items-center">
        <div className="inline-flex self-start rounded-full border border-slate-200 bg-white p-1 shadow-sm" role="tablist" aria-label="Preview device">
          {Object.entries(devices).map(([key, { label, icon: Icon }]) => (
            <button
              key={key}
              type="button"
              role="tab"
              aria-selected={device === key}
              onClick={() => setDevice(key)}
              className={cx(
                'inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-colors',
                device === key ? 'bg-[#0B0F19] text-white' : 'text-slate-600 hover:text-slate-900'
              )}
            >
              <Icon className="h-4 w-4" />
              <span className="hidden sm:inline">{label}</span>
            </button>
          ))}
        </div>
        <div className="flex items-center gap-2 self-start sm:self-auto">
          <button
            type="button"
            onClick={() => setReloadKey((k) => k + 1)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-sm transition hover:text-slate-900"
            aria-label="Reload preview"
          >
            <RotateCw className="h-4 w-4" />
          </button>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#0B0F19] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800"
          >
            Open in new tab <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </div>

      {/* Stage */}
      <div ref={boxRef} className="w-full">
        {scale > 0 && device === 'desktop' && (
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl shadow-slate-900/15">
            <div className="flex items-center gap-2 border-b border-slate-100 bg-slate-50 px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
              <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
              <span className="h-3 w-3 rounded-full bg-[#28c840]" />
              <span className="ml-3 flex min-w-0 flex-1 items-center gap-2 truncate rounded-lg bg-white px-3 py-1.5 text-xs text-slate-500 ring-1 ring-slate-200">
                <span className="h-2 w-2 shrink-0 rounded-full bg-emerald-500" />
                {host}
              </span>
            </div>
            <div className="relative overflow-hidden" style={{ height: d.height * scale }}>
              {loadingLayer}
              {iframe}
            </div>
          </div>
        )}

        {scale > 0 && device !== 'desktop' && (
          <div className="flex justify-center" style={{ height: shownHeight }}>
            <div
              className={cx('relative overflow-hidden bg-[#0B0F19] p-[14px] shadow-2xl shadow-slate-900/25', device === 'mobile' ? 'rounded-[2.75rem]' : 'rounded-[2rem]')}
              style={{ width: d.width * scale + frameExtra, height: shownHeight }}
            >
              <div
                className={cx('relative overflow-hidden bg-white', device === 'mobile' ? 'rounded-[2.1rem]' : 'rounded-[1.4rem]')}
                style={{ width: d.width * scale, height: d.height * scale }}
              >
                {loadingLayer}
                {iframe}
              </div>
            </div>
          </div>
        )}
      </div>

      <p className="mt-4 text-center text-xs text-slate-400">This is the real, live website. Scroll and click inside the preview to explore it.</p>
    </div>
  );
}
