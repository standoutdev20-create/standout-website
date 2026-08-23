import WorkClient from './WorkClient'
import { defaultOgImages, defaultTwitterImages } from '@/lib/seo'

const TITLE = 'Our Work — Client Projects & Case Studies'
const DESCRIPTION =
  'See real websites, apps, and software StandoutDev has shipped for clients — with results, tech stacks, and full case studies.'

export const metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: '/work' },
  openGraph: {
    title: `${TITLE} — StandoutDev`,
    description: DESCRIPTION,
    url: '/work',
    images: defaultOgImages,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${TITLE} — StandoutDev`,
    description: DESCRIPTION,
    images: defaultTwitterImages,
  },
}

export default function WorkPage() {
  return <WorkClient />
}
