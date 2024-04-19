'use server'

import { ReactNode, Suspense } from 'react'
import SideBar from '@/components/organisms/sidebar/sideBar'
import TopBar from '@/components/organisms/topbar/topBar'
import AuthContextProvider from '@/context/AuthContext'

const Layout = ({ children }: { children: ReactNode }) => (
  <AuthContextProvider>
    <section className="c-layout-dashboard">
      <SideBar />
      <div className="c-layout-dashboard__container">
        <TopBar />
        {children}
      </div>
    </section>
  </AuthContextProvider>
)

export default Layout
