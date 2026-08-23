import ServicesClient from './ServicesClient'
import { defaultOgImages, defaultTwitterImages } from '@/lib/seo'

const TITLE = 'Services — Web, Mobile App & Custom Software Development'
const DESCRIPTION =
  'Website development, mobile apps, custom software, SaaS dashboards, e-commerce, CMS, and UI/UX design — full IT product services from StandoutDev.'

export const metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: '/services' },
  openGraph: {
    title: `${TITLE} — StandoutDev`,
    description: DESCRIPTION,
    url: '/services',
    images: defaultOgImages,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${TITLE} — StandoutDev`,
    description: DESCRIPTION,
    images: defaultTwitterImages,
  },
}

export default function ServicesPage() {
  return <ServicesClient />
}
