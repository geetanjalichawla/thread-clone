import { ClerkProvider } from '@clerk/nextjs'
import '../globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'


import TopBar from '@/components/shared/TopBar'
import BottomBar from '@/components/shared/BottomBar'
import LeftSidebar from '@/components/shared/LeftSidebar'
import RightSidebar from '@/components/shared/RightSidebar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Threads',
  description: 'A next.js 13 meta thread application',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>

      <html lang="en">
        <body className={inter.className}>
          <TopBar />
          <main>
            <LeftSidebar/>
            <section>
              {children}
            </section>
            <RightSidebar />
          </main>
          <BottomBar />
        </body>
      </html>
    </ClerkProvider>

  )
}
