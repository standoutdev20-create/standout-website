import ContactClient from './ContactClient'
import { defaultOgImages, defaultTwitterImages, SITE_URL } from '@/lib/seo'
const TITLE = 'Contact Us — Start Your Project'
const DESCRIPTION =
  'Tell StandoutDev about your website, app, or software project. We reply within 24 hours with next steps and a rough scope.'

export const metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: '/contact' },
  openGraph: {
    title: `${TITLE} — StandoutDev`,
    description: DESCRIPTION,
    url: '/contact',
    images: defaultOgImages,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${TITLE} — StandoutDev`,
    description: DESCRIPTION,
    images: defaultTwitterImages,
  },
}

const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'StandoutDev',
  url: `${SITE_URL}/contact`,
  email: 'standoutdev20@gmail.com',
  telephone: '+91-93223-96236',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Pune',
    addressRegion: 'Maharashtra',
    postalCode: '411052',
    addressCountry: 'IN',
  },
}

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />
      <ContactClient />
    </>
  )
}
