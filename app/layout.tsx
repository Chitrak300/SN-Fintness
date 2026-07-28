import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'S.N. Fitness | Premium AC Gym in Bethuadahari',
  description: 'S.N. Fitness - Premium fully air-conditioned gym in Bethuadahari, West Bengal. Rated 5 stars by 110+ members. Trainers with 7+ years experience.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
