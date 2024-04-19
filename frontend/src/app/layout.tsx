'use client'

import React, { useState } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { ToastContainer } from 'react-toastify'
import { NextUIProvider } from '@nextui-org/react'
import { LanguageProvider } from '@/context/LanguageContext'

import '../styles/_main.scss'

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
            retry: false,
            staleTime: 0,
          },
        },
      }),
  )

  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <title>Ava | Dashboard</title>
        <meta
          name="description"
          content="Invoicer.ia est un outil de facturation en ligne pour les auto-entrepreneurs."
        />
        <meta
          name="keywords"
          content="facturation, auto-entrepreneur, freelance, facture, devis, comptabilité"
        />
        <meta name="author" content="Invoicer.ia" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <main className="c-layout">
          <LanguageProvider>
            <NextUIProvider>
              <QueryClientProvider client={queryClient}>
                {children}
                <ToastContainer />
                <ReactQueryDevtools initialIsOpen />
              </QueryClientProvider>
            </NextUIProvider>
          </LanguageProvider>
        </main>
      </body>
    </html>
  )
}

export default RootLayout
