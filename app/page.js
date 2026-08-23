import HomeClient from './HomeClient'
import { faqs } from './homeFaqs'
import { defaultOgImages, defaultTwitterImages } from '@/lib/seo'

const TITLE = 'StandoutDev — Websites, Apps & Custom Software That Convert'
const DESCRIPTION =
  'StandoutDev builds fast, SEO-ready websites, mobile apps, e-commerce stores, and custom software for businesses that want to stand out. Based in Pune, India.'

export const metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: '/' },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: '/',
    images: defaultOgImages,
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
    images: defaultTwitterImages,
  },
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: {
      '@type': 'Answer',
      text: f.a,
    },
  })),
}

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <HomeClient />
    </>
  )
}
