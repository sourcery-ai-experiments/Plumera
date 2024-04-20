'use client'

import { ReactNode, Suspense, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime'

export default function AuthGuard({ children }: { children: ReactNode }) {
  const router: AppRouterInstance = useRouter()
  const token =
    typeof window !== 'undefined' ? localStorage.getItem('access_token') : null
  const loadingToken = false

  useEffect(() => {
    if (!token && !loadingToken) {
      router.push('/login')
    }
  }, [token, loadingToken, router])

  if (loadingToken) {
    return <div>Loading...</div>
  }

  return <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
}
