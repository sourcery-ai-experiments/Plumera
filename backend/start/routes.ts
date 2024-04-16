/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import { middleware } from '#start/kernel'

const SessionController = () => import('#controllers/session_controller')

router
  .group(() => {
    router.get('/', ({ response }) => response.ok({ uptime: Math.round(process.uptime()) }))
    router.get('health', ({ response }) => response.noContent())

    router
      .group(() => {
        router.post('request-login-link', [SessionController, 'requestLoginLink'])
        router.post('login/{token}', [SessionController, 'loginWithToken'])
        router.get('connect-to-google', [SessionController, 'connectToGoogle'])
        router.get('signin-callback', [SessionController, 'store'])

        router
          .group(() => {
            router.get('me', [SessionController, 'me'])
            router.delete('sign-out', [SessionController, 'destroy'])
          })
          .use([middleware.auth()])
          .prefix('profile')
      })
      .prefix('auth')
  })
  .prefix('api/v1/')
