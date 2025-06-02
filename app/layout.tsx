import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'VibeApps - Transformacja Biznesu przez Dedykowane Systemy IT',
  description: 'Zwiększ wydajność firmy o 300%. Dedykowane systemy IT, automatyzacja procesów, oszczędność czasu i pieniędzy. Bezpłatna konsultacja.',
  keywords: 'automatyzacja procesów, systemy IT, CRM, aplikacje biznesowe, optymalizacja',
  
  // Meta obrazy dla social media
  openGraph: {
    title: 'VibeApps - Transformacja Biznesu',
    description: 'Zwiększ wydajność firmy o 300% dzięki dedykowanym systemom IT',
    url: 'https://vibeapps.pl',
    siteName: 'VibeApps',
    images: [
      {
        url: '/images/logo/2 Logo VibeApps poziom bez tła.png',
        width: 1200,
        height: 630,
        alt: 'VibeApps - Transformacja Biznesu',
      },
    ],
    locale: 'pl_PL',
    type: 'website',
  },
  
  // Twitter meta
  twitter: {
    card: 'summary_large_image',
    title: 'VibeApps - Transformacja Biznesu',
    description: 'Zwiększ wydajność firmy o 300%',
    images: ['/images/logo/2 Logo VibeApps poziom bez tła.png'],
  },
  
  // Favicons
  icons: {
    icon: '/images/logo/4 Logo VibeApps kwadrat z tłem.png',
    apple: '/images/logo/4 Logo VibeApps kwadrat z tłem.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/logo/4 Logo VibeApps kwadrat z tłem.png" sizes="any" />
        <link rel="apple-touch-icon" href="/images/logo/4 Logo VibeApps kwadrat z tłem.png" />
        <script async src="https://tally.so/widgets/embed.js"></script>
      </head>
      <body>{children}</body>
    </html>
  )
}
