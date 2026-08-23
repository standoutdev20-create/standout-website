import AboutClient from './AboutClient'
import { defaultOgImages, defaultTwitterImages } from '@/lib/seo'

const TITLE = 'About Us'
const DESCRIPTION =
  'StandoutDev is an IT solutions company that pairs product thinking with clean code — building websites, apps, and software that ship in weeks, not months.'

export const metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: '/about' },
  openGraph: {
    title: `${TITLE} — StandoutDev`,
    description: DESCRIPTION,
    url: '/about',
    images: defaultOgImages,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${TITLE} — StandoutDev`,
    description: DESCRIPTION,
    images: defaultTwitterImages,
  },
}

export default function AboutPage() {
  return <AboutClient />
}
