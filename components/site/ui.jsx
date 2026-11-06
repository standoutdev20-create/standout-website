// Shared building blocks for the marketing site. Keep every page on these so
// spacing, type and buttons stay consistent.
import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'

export function cx(...c) {
  return c.filter(Boolean).join(' ')
}

export function Container({ className, children }) {
  return <div className={cx('mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8', className)}>{children}</div>
}

export function Section({ id, className, children, tone = 'white', ...rest }) {
  const tones = {
    white: 'bg-white text-slate-900',
    muted: 'bg-slate-50 text-slate-900',
    dark: 'bg-[#0B0F19] text-white',
  }
  return (
    <section id={id} className={cx('relative py-20 sm:py-24 lg:py-28', tones[tone], className)} {...rest}>
      {children}
    </section>
  )
}

export function Eyebrow({ children, dark = false, className }) {
  return (
    <span
      className={cx(
        'inline-flex items-center gap-2 rounded-full border px-3.5 py-1 text-[11px] font-semibold uppercase tracking-[0.16em]',
        dark ? 'border-white/15 bg-white/5 text-slate-300' : 'border-slate-200 bg-white text-slate-600 shadow-sm',
        className
      )}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
      {children}
    </span>
  )
}

/** Eyebrow + title (+ optional blue accent line) + description. */
export function SectionHeader({ eyebrow, title, accent, description, align = 'center', dark = false, className, children }) {
  const centered = align === 'center'
  return (
    <div className={cx('max-w-3xl', centered && 'mx-auto text-center', className)}>
      {eyebrow && <Eyebrow dark={dark}>{eyebrow}</Eyebrow>}
      <h2
        className={cx(
          'mt-5 text-3xl font-bold leading-[1.12] tracking-tight sm:text-4xl lg:text-[2.75rem]',
          dark ? 'text-white' : 'text-slate-900'
        )}
      >
        {title}
        {accent && (
          <>
            {' '}
            <span className={dark ? 'text-blue-400' : 'text-blue-600'}>{accent}</span>
          </>
        )}
      </h2>
      {description && (
        <p className={cx('mt-5 text-base leading-relaxed sm:text-lg', dark ? 'text-slate-400' : 'text-slate-600', centered && 'mx-auto max-w-2xl')}>
          {description}
        </p>
      )}
      {children}
    </div>
  )
}

/**
 * Pill button with the arrow chip used across the site.
 * variant: primary (black) | secondary (white outline) | light (white, for dark sections) | blue
 */
export function ButtonLink({ href, children, variant = 'primary', size = 'md', className, external, ...rest }) {
  const variants = {
    primary: 'bg-[#0B0F19] text-white shadow-lg shadow-slate-900/15 hover:bg-slate-800',
    secondary: 'border border-slate-300 bg-white text-slate-900 shadow-sm hover:border-slate-400 hover:shadow-md',
    light: 'bg-white text-slate-900 shadow-lg shadow-black/20 hover:bg-slate-100',
    blue: 'bg-blue-600 text-white shadow-lg shadow-blue-600/25 hover:bg-blue-500',
  }
  const chip = {
    primary: 'bg-blue-600 text-white',
    secondary: 'bg-[#0B0F19] text-white',
    light: 'bg-[#0B0F19] text-white',
    blue: 'bg-white text-blue-600',
  }
  const sizes = {
    sm: 'gap-3 py-1.5 pl-4 pr-1.5 text-sm',
    md: 'gap-4 py-2 pl-6 pr-2 text-[15px]',
  }
  const chipSize = size === 'sm' ? 'h-7 w-7' : 'h-8 w-8'
  const cls = cx(
    'group relative inline-flex items-center justify-between overflow-hidden rounded-full font-semibold transition-all duration-300 hover:-translate-y-0.5',
    variant === 'primary' && 'btn-shine',
    variants[variant],
    sizes[size],
    className
  )
  const inner = (
    <>
      <span>{children}</span>
      <span className={cx('flex shrink-0 items-center justify-center rounded-full transition-transform duration-300 group-hover:rotate-45', chip[variant], chipSize)}>
        <ArrowUpRight className="h-4 w-4" />
      </span>
    </>
  )
  if (external || href?.startsWith('http') || href?.startsWith('mailto:') || href?.startsWith('tel:')) {
    return (
      <a href={href} className={cls} {...(href?.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})} {...rest}>
        {inner}
      </a>
    )
  }
  return (
    <Link href={href} className={cls} {...rest}>
      {inner}
    </Link>
  )
}

/** Rounded photo with a subtle zoom on hover. */
export function Photo({ src, alt, className, imgClassName, sizes = '(min-width: 1024px) 50vw, 100vw', priority, children }) {
  return (
    <div className={cx('media-zoom relative overflow-hidden rounded-3xl bg-slate-100', className)}>
      <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className={cx('object-cover', imgClassName)} />
      {children}
    </div>
  )
}

/** Browser window chrome around a screenshot. */
export function BrowserFrame({ src, alt, url, className, sizes = '(min-width: 1024px) 60vw, 100vw', priority, dark = false }) {
  return (
    <div
      className={cx(
        'overflow-hidden rounded-2xl border shadow-2xl',
        dark ? 'border-white/10 bg-[#111827] shadow-black/40' : 'border-slate-200 bg-white shadow-slate-900/15',
        className
      )}
    >
      <div className={cx('flex items-center gap-2 border-b px-4 py-2.5', dark ? 'border-white/10' : 'border-slate-100 bg-slate-50')}>
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        {url && (
          <span
            className={cx(
              'ml-3 hidden truncate rounded-md px-3 py-0.5 text-[11px] sm:block',
              dark ? 'bg-white/5 text-slate-400' : 'bg-white text-slate-500 ring-1 ring-slate-200'
            )}
          >
            {url.replace(/^https?:\/\//, '').replace(/\/$/, '')}
          </span>
        )}
      </div>
      <div className="media-zoom relative aspect-[16/9]">
        <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className="object-cover object-top" />
      </div>
    </div>
  )
}

/** Small icon tile used on feature cards. */
export function IconTile({ icon: Icon, dark = false, className }) {
  return (
    <span
      className={cx(
        'inline-flex h-11 w-11 items-center justify-center rounded-xl',
        dark ? 'bg-white/10 text-blue-400 ring-1 ring-white/10' : 'bg-blue-50 text-blue-600 ring-1 ring-blue-100',
        className
      )}
    >
      <Icon className="h-5 w-5" />
    </span>
  )
}

/** Dark call-to-action band used at the end of pages. */
export function CTABand({
  eyebrow = "Let's build something",
  title = 'Have a project in mind?',
  accent = "Let's talk.",
  description = "Tell us what you're building. We'll come back within one business day with next steps and a rough scope.",
  primary = { href: '/contact', label: 'Start your project' },
  secondary = { href: '/work', label: 'See our work' },
}) {
  return (
    <Section tone="white" className="!py-16 sm:!py-20">
      <Container>
        <div className="relative overflow-hidden rounded-[2rem] bg-[#0B0F19] px-6 py-14 text-center sm:px-12 sm:py-20">
          <div className="pointer-events-none absolute inset-0">
            <Image src="/images/stock/team-laptops.jpg" alt="" fill sizes="100vw" className="object-cover opacity-[0.12]" />
            <div className="absolute -left-24 -top-24 h-80 w-80 rounded-full bg-blue-600/30 blur-[110px]" />
            <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-indigo-500/25 blur-[110px]" />
          </div>
          <div className="relative mx-auto max-w-2xl">
            <Eyebrow dark>{eyebrow}</Eyebrow>
            <h2 className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-5xl">
              {title} <span className="text-blue-400">{accent}</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg">{description}</p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <ButtonLink href={primary.href} variant="blue">
                {primary.label}
              </ButtonLink>
              {secondary && (
                <ButtonLink href={secondary.href} variant="light">
                  {secondary.label}
                </ButtonLink>
              )}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}

/** The hero background artwork, shared by every page's hero. */
export function HeroBackdrop() {
  return (
    <>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-cover bg-bottom bg-no-repeat"
        style={{ backgroundImage: "url('/images/hero-backdrop.svg')" }}
      />
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-white" />
    </>
  )
}

/** Inner-page hero: text left, image right. */
export function PageHero({ eyebrow, title, accent, description, actions, image, imageAlt, children }) {
  return (
    <section data-no-reveal className="relative overflow-hidden bg-white pb-20 pt-32 sm:pb-28 sm:pt-36 lg:pt-40">
      <HeroBackdrop />
      <Container className="relative">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <Eyebrow>{eyebrow}</Eyebrow>
            <h1 className="mt-6 text-4xl font-extrabold leading-[1.08] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              {title}
              {accent && (
                <>
                  <br />
                  <span className="text-shimmer">{accent}</span>
                </>
              )}
            </h1>
            {description && <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">{description}</p>}
            {actions && <div className="mt-9 flex flex-col gap-3 sm:flex-row">{actions}</div>}
            {children}
          </div>
          {image && (
            <div className="relative lg:col-span-6">
              <Photo src={image} alt={imageAlt || ''} priority className="aspect-[4/3] shadow-2xl shadow-slate-900/15 ring-1 ring-slate-200" />
            </div>
          )}
        </div>
      </Container>
    </section>
  )
}
