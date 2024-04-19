'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

const NotFound = () => {
  const router = useRouter()
  useEffect(() => {
    setTimeout(() => {
      router.push('/')
    }, 1000)
  }, [router])

  return (
    <>
      <div className="h-screen w-screen flex justify-center content-center flex-wrap">
        <p className="font-sans text-white error-text text-6xl">404</p>
      </div>
    </>
  )
}

export default NotFound
