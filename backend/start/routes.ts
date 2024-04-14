/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'

router
  .group(() => {
    router.get('/', ({ response }) => response.ok({ uptime: Math.round(process.uptime()) }))
    router.get('health', ({ response }) => response.noContent())
  })
  .prefix('api/v1/')
