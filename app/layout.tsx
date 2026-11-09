import type { Metadata } from 'next';
import './globals.css';
import Intro from '../components/Intro';
import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';
import WhatsAppFloat from '../components/WhatsAppFloat';
import { SITE } from '../lib/site';

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: 'S.N. Fitness | Premium AC Gym in Bethuadahari',
    template: '%s | S.N. Fitness',
  },
  description:
    'S.N. Fitness - premium fully air-conditioned gym in Bethuadahari, West Bengal. Rated 5 stars by 110+ members. Coaches with 7+ years of experience.',
  icons: { icon: '/gym_logo.jpg' },
  openGraph: {
    siteName: 'S.N. Fitness',
    type: 'website',
    images: ['/gym_logo.jpg'],
  },
};

const gymJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'HealthAndBeautyBusiness',
  name: 'S.N. Fitness',
  url: SITE.url,
  image: `${SITE.url}/gym_logo.jpg`,
  telephone: `+${SITE.phone}`,
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Mathpara St',
    addressLocality: 'Bethuadahari',
    addressRegion: 'West Bengal',
    postalCode: '741126',
    addressCountry: 'IN',
  },
  aggregateRating: { '@type': 'AggregateRating', ratingValue: '5.0', reviewCount: '110' },
  openingHoursSpecification: [
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'], opens: '06:00', closes: '12:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'], opens: '16:00', closes: '22:00' },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(gymJsonLd) }} />
      </head>
      <body suppressHydrationWarning>
        <Intro />
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
