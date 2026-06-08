import type { Metadata } from 'next'
import { Manrope, Sora } from 'next/font/google'
import './askabase.css'

const manrope = Manrope({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-manrope',
})

const sora = Sora({
  subsets: ['latin', 'latin-ext'],
  weight: ['600', '700', '800'],
  variable: '--font-sora',
})

export const metadata: Metadata = {
  title: 'Askabase — zapytaj swoją bazę danych po ludzku',
  description:
    'Askabase to asystent AI dla biur rachunkowych. Zadajesz pytanie w języku naturalnym, a system przeszukuje dane i odpowiada w czytelnej formie — bez SQL i ręcznego raportowania.',
  icons: {
    icon: '/images/askabase/favicon.png',
    apple: '/images/askabase/favicon.png',
  },
  openGraph: {
    title: 'Askabase — asystent AI dla biur rachunkowych',
    description:
      'Zadawaj pytania o dane, dokumenty i terminy w naturalnym języku. Wdrażamy Askabase w biurach rachunkowych.',
    url: 'https://vibeapps.pl/askabase',
    siteName: 'Askabase',
    locale: 'pl_PL',
    type: 'website',
  },
  alternates: {
    canonical: 'https://vibeapps.pl/askabase',
  },
}

export default function AskabaseLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className={`${manrope.variable} ${sora.variable} askabase-page`}>
      {children}
    </div>
  )
}
