// 3D smartphone showcase: three phones in perspective with floating
// notification cards. Pure HTML/CSS (no WebGL), so it's light and crisp.
import Image from 'next/image'
import {
  BadgeCheck,
  Bell,
  Home,
  LayoutGrid,
  Menu,
  MessageCircle,
  Plus,
  Rocket,
  Search,
  Share2,
  Smartphone,
} from 'lucide-react'
import { ButtonLink, Container, Eyebrow, HeroBackdrop, cx } from '@/components/site/ui'

function Phone({ className, children, style }) {
  return (
    <div
      className={cx(
        'relative aspect-[9/19] w-[230px] rounded-[2.6rem] bg-[#0B0F19] p-[9px] shadow-[0_40px_80px_-24px_rgba(11,15,25,0.55)] ring-1 ring-white/10 sm:w-[250px]',
        className
      )}
      style={style}
    >
      <div className="relative h-full w-full overflow-hidden rounded-[2.1rem] bg-white">
        <div className="absolute left-1/2 top-2.5 z-20 h-[22px] w-[86px] -translate-x-1/2 rounded-full bg-[#0B0F19]" />
        {children}
      </div>
    </div>
  )
}

function BrandDot({ size = 'h-6 w-6' }) {
  return (
    <span className={cx('relative inline-block overflow-hidden rounded-md bg-[#0B0F19]', size)}>
      <Image src="/images/Group.png" alt="" fill sizes="24px" className="object-contain p-[3px]" />
    </span>
  )
}

/** Centre phone: a StandoutDev-style project feed. */
function FeedScreen() {
  return (
    <div className="flex h-full flex-col pt-10 text-[#0B0F19]">
      <div className="flex items-center justify-between px-4">
        <Menu className="h-4 w-4" />
        <span className="flex items-center gap-1.5 text-[13px] font-bold">
          <BrandDot size="h-5 w-5" /> Standout<span className="-ml-1.5 text-blue-600">Dev</span>
        </span>
        <Search className="h-4 w-4" />
      </div>
      <div className="mt-3 flex gap-1.5 px-4 text-[10px] font-semibold">
        <span className="rounded-full bg-[#0B0F19] px-3 py-1.5 text-white">Projects</span>
        <span className="rounded-full bg-slate-100 px-3 py-1.5 text-slate-600">Services</span>
        <span className="rounded-full bg-slate-100 px-3 py-1.5 text-slate-600">Updates</span>
      </div>

      <div className="mt-4 flex items-center gap-2 px-4">
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-600 text-[9px] font-bold text-white">UM</span>
        <div className="leading-tight">
          <p className="text-[11px] font-bold">Uma Metal Craft</p>
          <p className="text-[9px] text-slate-500">Manufacturing · Pune</p>
        </div>
      </div>
      <div className="relative mx-4 mt-2.5 aspect-[16/11] overflow-hidden rounded-xl">
        <Image src="/uma1.webp" alt="" fill sizes="240px" className="object-cover object-left-top" />
      </div>
      <div className="px-4 pt-2.5">
        <p className="text-[12px] font-bold">Custom Manufacturing Website</p>
        <p className="text-[10px] font-semibold text-blue-600">Live · Built in 6 weeks</p>
        <div className="mt-2 space-y-1.5">
          {[
            ['Design', 'w-full'],
            ['Development', 'w-full'],
            ['SEO setup', 'w-4/5'],
          ].map(([label, w]) => (
            <div key={label}>
              <div className="flex justify-between text-[9px] text-slate-500">
                <span>{label}</span>
              </div>
              <div className="mt-0.5 h-1.5 rounded-full bg-slate-100">
                <div className={cx('h-full rounded-full bg-gradient-to-r from-blue-600 to-indigo-500', w)} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-auto flex items-end justify-around border-t border-slate-100 px-3 pb-3 pt-2 text-[8px] text-slate-400">
        <span className="flex flex-col items-center gap-0.5 font-semibold text-[#0B0F19]">
          <Home className="h-4 w-4" />
          Home
        </span>
        <span className="flex flex-col items-center gap-0.5">
          <LayoutGrid className="h-4 w-4" />
          Work
        </span>
        <span className="-mt-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#0B0F19] text-white shadow-lg">
          <Plus className="h-5 w-5" />
        </span>
        <span className="flex flex-col items-center gap-0.5">
          <Bell className="h-4 w-4" />
          Updates
        </span>
        <span className="relative flex flex-col items-center gap-0.5">
          <MessageCircle className="h-4 w-4" />
          Chat
          <span className="absolute -right-1 -top-1 flex h-3 w-3 items-center justify-center rounded-full bg-blue-600 text-[7px] font-bold text-white">2</span>
        </span>
      </div>
    </div>
  )
}

/** Left phone: product detail / e-commerce screen. */
function ProductScreen() {
  return (
    <div className="flex h-full flex-col pt-10 text-[#0B0F19]">
      <div className="relative mx-3 aspect-[4/5] overflow-hidden rounded-2xl">
        <Image src="/images/stock/ecommerce.jpg" alt="" fill sizes="220px" className="object-cover" />
        <span className="absolute left-2 top-2 rounded-full bg-white/90 px-2 py-0.5 text-[9px] font-bold">E-commerce</span>
      </div>
      <div className="px-4 pt-3">
        <p className="text-[15px] font-bold leading-tight">Online Store</p>
        <p className="mt-0.5 text-[10px] text-slate-500">Smooth checkout · Payments · Catalogue</p>
        <div className="mt-2 flex gap-1">
          {['bg-blue-600', 'bg-indigo-400', 'bg-slate-800'].map((c) => (
            <span key={c} className={cx('h-3.5 w-3.5 rounded-full ring-2 ring-white', c)} />
          ))}
        </div>
      </div>
      <div className="mt-auto p-3">
        <span className="flex w-full items-center justify-center rounded-full bg-[#0B0F19] py-2.5 text-[12px] font-semibold text-white">Add to cart</span>
      </div>
    </div>
  )
}

/** Right phone: client profile / analytics screen. */
function ProfileScreen() {
  return (
    <div className="flex h-full flex-col pt-10 text-[#0B0F19]">
      <div className="flex justify-end gap-2.5 px-4 text-slate-500">
        <Search className="h-3.5 w-3.5" />
        <Share2 className="h-3.5 w-3.5" />
      </div>
      <div className="mt-2 flex flex-col items-center px-4 text-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#0B0F19] text-base font-bold text-white">SK</span>
        <p className="mt-2 text-[13px] font-bold">Siddhanath Krupa</p>
        <p className="text-[10px] text-slate-500">Physics Classes · Education</p>
        <span className="mt-2.5 rounded-lg bg-blue-600 px-5 py-1.5 text-[10px] font-semibold text-white">Visit site</span>
      </div>
      <div className="mx-4 mt-3 rounded-xl bg-slate-50 p-2.5 ring-1 ring-slate-100">
        <p className="text-[9px] font-semibold text-slate-500">Weekly enquiries</p>
        <div className="mt-1.5 flex h-14 items-end gap-1">
          {[35, 50, 42, 65, 58, 80, 92].map((h, i) => (
            <span key={i} className="flex-1 rounded-t bg-gradient-to-t from-blue-600 to-indigo-400" style={{ height: `${h}%` }} />
          ))}
        </div>
      </div>
      <div className="mx-4 mt-2.5 grid flex-1 grid-cols-2 gap-1.5 pb-3">
        <div className="relative overflow-hidden rounded-lg">
          <Image src="/phy1.webp" alt="" fill sizes="110px" className="object-cover object-left-top" />
        </div>
        <div className="rounded-lg bg-gradient-to-b from-[#0B0F19] to-blue-700" />
      </div>
    </div>
  )
}

function FloatCard({ className, icon: Icon, iconClass, title, subtitle, image }) {
  return (
    <div className={cx('flex items-center gap-3 rounded-2xl bg-white/95 p-2.5 pr-4 shadow-xl shadow-slate-900/10 ring-1 ring-slate-100 backdrop-blur', className)}>
      {image ? (
        <span className="relative h-10 w-10 overflow-hidden rounded-xl">
          <Image src={image} alt="" fill sizes="40px" className="object-cover" />
        </span>
      ) : (
        <span className={cx('flex h-10 w-10 items-center justify-center rounded-xl', iconClass)}>
          <Icon className="h-5 w-5" />
        </span>
      )}
      <div className="leading-tight">
        <p className="text-sm font-bold text-slate-900">{title}</p>
        <p className="text-xs text-slate-500">{subtitle}</p>
      </div>
    </div>
  )
}

export function PhoneStage() {
  return (
    <div className="relative mx-auto h-[540px] w-full max-w-[640px] sm:h-[600px] lg:max-xl:origin-center lg:max-xl:scale-[0.86]">
      {/* navy shape behind */}
      <div className="absolute left-[30%] top-[10%] aspect-square w-[95%] rounded-full bg-gradient-to-br from-[#0B0F19] via-[#111a33] to-[#1e2a6b] sm:left-[34%]" />
      <div className="absolute right-10 top-24 h-72 w-72 rounded-full bg-blue-600/40 blur-[90px]" />

      <div className="absolute inset-0 flex items-center justify-center [perspective:1600px]">
        {/* left phone */}
        <div className="hero-float-slow absolute left-[2%] top-[14%] hidden sm:block">
          <Phone className="[transform:rotateY(32deg)_rotateZ(-6deg)_scale(0.88)]">
            <ProductScreen />
          </Phone>
        </div>
        {/* right phone */}
        <div className="hero-float absolute right-[0%] top-[16%] hidden sm:block">
          <Phone className="[transform:rotateY(-32deg)_rotateZ(6deg)_scale(0.88)]">
            <ProfileScreen />
          </Phone>
        </div>
        {/* centre phone */}
        <div className="relative z-10">
          <Phone className="w-[240px] sm:w-[270px]">
            <FeedScreen />
          </Phone>
        </div>
      </div>

      {/* floating cards */}
      <FloatCard
        className="hero-float absolute left-0 top-0 z-20 sm:left-[4%]"
        icon={MessageCircle}
        iconClass="bg-[#25D366] text-white"
        title="New enquiry"
        subtitle="from Pune"
      />
      <FloatCard className="hero-float-slow absolute right-0 top-8 z-20 hidden sm:flex" image="/uma1.webp" title="Website launched" subtitle="Uma Metal Craft" />
      <FloatCard
        className="hero-float-slow absolute bottom-4 left-0 z-20 sm:left-[2%]"
        icon={Smartphone}
        iconClass="bg-blue-50 text-blue-600"
        title="Mobile-ready"
        subtitle="Every screen size"
      />
      <FloatCard
        className="hero-float absolute bottom-12 right-0 z-20"
        icon={BadgeCheck}
        iconClass="bg-[#0B0F19] text-white"
        title="Design approved"
        subtitle="Ready for development"
      />
    </div>
  )
}

export default function AppShowcase({
  eyebrow = 'Apps & digital products',
  title = 'Products that look great.',
  accent = 'And work even better.',
  description = 'Websites, mobile apps and web platforms designed around your customers: fast, responsive and built to turn visitors into enquiries.',
  hero = false,
  primary = { href: '/contact', label: 'Start your project' },
  secondary = { href: '/work', label: 'See our work' },
}) {
  const Heading = hero ? 'h1' : 'h2'
  return (
    <section
      {...(hero ? { 'data-no-reveal': true } : {})}
      className={cx('relative overflow-hidden bg-white', hero ? 'pb-16 pt-28 sm:pb-24 sm:pt-32 lg:pt-36' : 'py-20 sm:py-24 lg:py-28')}
    >
      {hero && <HeroBackdrop />}
      <Container className="relative">
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-8">
          <div className={hero ? 'lg:col-span-6' : 'lg:col-span-5'}>
            <Eyebrow>{eyebrow}</Eyebrow>
            <Heading className={cx('mt-5 text-4xl font-extrabold leading-[1.05] tracking-tight text-slate-900 sm:text-5xl', hero ? 'lg:text-[3.4rem] xl:text-[3.6rem]' : 'lg:text-6xl')}>
              {title}
              <br />
              <span className={hero ? 'text-shimmer lg:whitespace-nowrap' : 'text-blue-600'}>{accent}</span>
            </Heading>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-slate-600 sm:text-lg">{description}</p>
            <ul className="mt-8 space-y-3">
              {[
                [Smartphone, 'Mobile apps and mobile-first websites'],
                [LayoutGrid, 'Dashboards, portals and SaaS platforms'],
                [Rocket, 'Launch support and ongoing improvements'],
              ].map(([Icon, text]) => (
                <li key={text} className="flex items-center gap-3 text-[15px] font-medium text-slate-700">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 text-blue-600 ring-1 ring-blue-100">
                    <Icon className="h-4 w-4" />
                  </span>
                  {text}
                </li>
              ))}
            </ul>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={primary.href}>{primary.label}</ButtonLink>
              <ButtonLink href={secondary.href} variant="secondary">
                {secondary.label}
              </ButtonLink>
            </div>
          </div>
          <div className={hero ? 'lg:col-span-6' : 'lg:col-span-7'}>
            <PhoneStage />
          </div>
        </div>
      </Container>
    </section>
  )
}

