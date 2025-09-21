import type { Metadata } from 'next'
import { Poppins, Playfair_Display } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
})

export const metadata: Metadata = {
  title: 'Hapssatou | Développeuse Web & Mobile',
  description:
    "Portfolio de Hapssatou, Concepteur Développeur d'Applications spécialisée en développement web et mobile, en recherche d'alternance en cybersécurité.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="fr"
      className={`${poppins.variable} ${playfair.variable}`}
      suppressHydrationWarning
    >
      {/* Empêche le flash de mauvais thème avant l'hydratation */}
      <Script id="theme-init" strategy="beforeInteractive">
        {`
          try {
            const stored = localStorage.getItem('theme');
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            const theme = stored ? stored : (prefersDark ? 'dark' : 'light');
            if (theme === 'dark') document.documentElement.classList.add('dark');
            else document.documentElement.classList.remove('dark');
          } catch (_) {}
        `}
      </Script>

      <body className="font-sans text-gray-900 bg-gradient-to-br from-pink-50 to-white min-h-screen dark:text-gray-100 dark:from-gray-950 dark:to-gray-900">
        <Navbar />
        <main className="container mx-auto px-4 py-8">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
