import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import Navbar from '@/components/navbar/Navbar'
import Container from '@/components/global/Container'
import Providers from './provider'
import { ClerkProvider } from '@clerk/nextjs'

export const metadata: Metadata = {
  title: 'store',
  description: 'store app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body>
        <ClerkProvider>
          <Providers>
            <Navbar />
            <Container className='py-20'>{children}</Container>
          </Providers>
        </ClerkProvider>
      </body>
    </html>
  )
}
