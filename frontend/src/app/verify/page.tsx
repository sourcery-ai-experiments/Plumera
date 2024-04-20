'use client'

import { useEffect } from 'react'
import { toast } from 'sonner'
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime'
import { useRouter } from 'next/navigation'
import api from '@/config/api'
import { setCookie } from 'nookies'
import { useAuth } from '@/context/AuthContext'

const VerifyToken = () => {
  const router: AppRouterInstance = useRouter()
  const { setToken } = useAuth()

  const magic_link_token =
    typeof window !== 'undefined'
      ? new URLSearchParams(window.location.search).get('magic_link_token')
      : null

  const verifyTokenMutation = async (token: string | null) => {
    if (!token) {
      handleInvalidToken()
      return
    }

    const response = await api.post(`auth/login/${token}`).catch(handleApiError)

    if (!response || !response.data) {
      handleInvalidToken()
      return
    }

    const { access_token } = response.data

    setCookies(access_token)
    setToken(access_token)
    localStorage.setItem('access_token', access_token)

    router.push('/dashboard')

    /* const paymentRes = await api.get(`check-payment`).catch(handleApiError)

    if (!paymentRes || !paymentRes.data || !paymentRes.data.order) {
      handleInvalidToken()
      return
    }

    const { status } = paymentRes.data.order

    if (status === 'unpaid') {
      router.push('/dashboard/subscription')
    } else {
      router.push('/dashboard')
    }*/
  }

  const setCookies = (accessToken: string) => {
    setCookie(undefined, 'access_token', accessToken, {
      maxAge: 30 * 24 * 60 * 60,
      path: '/',
    })
  }

  const handleApiError = (error: any) => {
    if (error.response && error.response.status === 404) {
      router.push('/dashboard/subscription')
    } else {
      handleInvalidToken()
    }
  }

  const handleInvalidToken = () => {
    toast.error(
      `Le lien de connexion est invalide ou a expiré. Veuillez demander un nouveau lien de connexion.`,
      { position: 'top-right' },
    )
    router.push('/')
  }

  useEffect(() => {
    verifyTokenMutation(magic_link_token)
  }, [magic_link_token])

  return (
    <div className="flex min-h-full flex-col text-center justify-center sm:px-6 lg:p-8 p-8 h-[100vh]">
      <div className="m-auto justify-center">please wait ...</div>
    </div>
  )
}

export default VerifyToken
