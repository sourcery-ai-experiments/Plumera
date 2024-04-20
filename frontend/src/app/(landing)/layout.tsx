import type { Metadata } from 'next'

import { cn } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'Convo | Language Learning',
  description: 'Speech focused language learning',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="light">
      <body
        className={cn(
          'grainy flex min-h-screen flex-col font-sans antialiased',
        )}
      >
        {children}
      </body>
    </html>
  )
}
