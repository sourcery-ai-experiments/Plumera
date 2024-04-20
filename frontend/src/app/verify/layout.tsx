'use client'

import { ReactNode } from 'react'
import AuthContextProvider from '@/context/AuthContext'

const Layout = ({ children }: { children: ReactNode }) => {
  return <AuthContextProvider>{children}</AuthContextProvider>
}

export default Layout
