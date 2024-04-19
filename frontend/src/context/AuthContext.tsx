'use client'

import { createContext, ReactNode, useContext, useState } from 'react'
import { CookieValueTypes, getCookie } from 'cookies-next'
import api from '@/config/api'

export const AuthContext = createContext<any>({
  isAuthenticated: () => false,
  user: null,
  connectWithGoogle: async () => {},
})

export const useAuth = () => useContext(AuthContext)

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<any>(null)

  const isAuthenticated = (): boolean => {
    const token: CookieValueTypes = getCookie('')
    return !!token
  }

  const connectWithGoogle = async () => {
    const response = await api.get('auth/connect-with-google')
    console.log(response)
  }

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        connectWithGoogle,
        user,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider
