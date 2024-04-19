'use client'

import { ReactNode, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime'
import { useAuth } from '@/context/AuthContext'

export default function AuthGuard({ children }: { children: ReactNode }) {
  const { token, loadingToken } = useAuth()
  const router: AppRouterInstance = useRouter()

  useEffect(() => {
    if (!token && !loadingToken) {
      router.push('/')
    }
  }, [token, loadingToken, router])

  if (loadingToken) {
    return <div>Loading...</div>
  }

  return <>{children}</>
}
