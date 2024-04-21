import { cn } from '@/lib/utils'
import { ReactNode } from 'react'

export default function RootLayout({ children }: { children: ReactNode }) {
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
