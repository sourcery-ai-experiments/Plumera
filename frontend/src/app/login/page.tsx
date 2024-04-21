'use client'

import Button from '@/components/atoms/button/button'
import { useState } from 'react'
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime'
import { useRouter } from 'next/navigation'
import { AxiosResponse } from 'axios'
import api from '@/config/api'

const Home = () => {
  const router: AppRouterInstance = useRouter()

  const [isLoaded, setIsLoaded] = useState(false)

  const loginMutation = (email: void) => {
    setIsLoaded(true)

    api
      .post('auth/request-login-link', { email })
      .then((res: AxiosResponse) => res)
      .then((res: AxiosResponse) => {
        if (res.status === 200) {
          setIsLoaded(false)
          router.push('/checkmail')
        } else {
          setIsLoaded(false)
          router.push('/')
        }
      })
  }

  const handleGoogleConnect = (): void => {
    api
      .get('auth/connect-to-google')
      .then((response: AxiosResponse) => {
        const redirectUrl = response.request.responseURL
        window.location.href = redirectUrl
      })
      .catch((error: any) => {
        console.error('Error:', error)
      })
  }

  const handleSubmit = (event: any): void => {
    event.preventDefault()
    const { email } = event.target.elements
    loginMutation(email.value)
  }

  return (
    <div className="c-login">
      <div>
        {/* <img src="/images/" alt="logo" /> */}
        <h4>Bienvenue !</h4>
        <p>Connectez-vous pour accéder à votre compte.</p>

        <form onSubmit={handleSubmit}>
          <div className="c-input">
            <span className="c-input__subtitle">Email address</span>
            <input
              className="c-input__subtitle__input"
              type="email"
              placeholder="example@example.com"
              name="email"
              required
            />
          </div>

          <Button
            label={isLoaded ? 'Chargement...' : 'Envoyer le lien de connexion'}
            type="submit"
            size="large"
          />

          <hr />

          <Button
            label="Se connecter avec google"
            type="button"
            size="large"
            icon={<img src="/images/icons/google.svg" alt="" width={20} />}
            onClick={handleGoogleConnect}
          />
        </form>
      </div>
    </div>
  )
}

export default Home
