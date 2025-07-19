import '~/css/global.scss'

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import GridDebuggerClient from '~/components/grid-debugger-client'
import { Header } from '~/components/header'
import { isDev, siteURL } from '~/lib/constants'

import { AppHooks } from './app-hooks'
import { Providers } from './providers'

const inter = Inter({ subsets: ['latin'], variable: '--font-body' })

export const metadata: Metadata = {
  title: {
    default: 'next-typescript | basement.studio',
    template: '%s | basement.studio'
  },
  metadataBase: siteURL,
  description: `A minimalist's boilerplate — Next.js with TypeScript.`,
  icons: [
    {
      rel: 'apple-touch-icon',
      url: '/apple-touch-icon.png'
    }
  ],
  manifest: '/manifest.webmanifest',
  twitter: {
    card: 'summary_large_image',
    title: 'next-typescript | basement.studio',
    creator: '@basementstudio',
    siteId: '@basementstudio'
  }
}

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className={inter.variable}>
        <Providers>
          <Header />
          {children}
          {isDev && <GridDebuggerClient />}
          <AppHooks />
        </Providers>
      </body>
    </html>
  )
}

export default RootLayout
