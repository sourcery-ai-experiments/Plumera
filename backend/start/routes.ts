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
const InvoiceItemsController = () => import('#controllers/invoice_items_controller')
const InvoicesController = () => import('#controllers/invoices_controller')
const OrdersController = () => import('#controllers/orders_controller')
const PaymentsController = () => import('#controllers/payments_controller')
const PlansController = () => import('#controllers/plans_controller')
const ProductServicesController = () => import('#controllers/product_services_controller')
const PublicBusinessDataController = () => import('#controllers/public_business_data_controller')
const TaxInformationsController = () => import('#controllers/tax_informations_controller')

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

    router
      .group(() => {
        router
          .group(() => {
            router.resource('invoice-items', InvoiceItemsController).apiOnly()
            router.resource('invoices', InvoicesController).apiOnly()
          })
          .prefix('billing')

        router
          .group(() => {
            router.resource('product-services', ProductServicesController).apiOnly()
            router.resource('public-business-data', PublicBusinessDataController).apiOnly()
            router.resource('tax-informations', TaxInformationsController).apiOnly()
          })
          .prefix('business-data')

        router.group(() => {
          router.resource('orders', OrdersController).apiOnly()
          router.resource('payments', PaymentsController).apiOnly()
          router.resource('plans', PlansController).apiOnly()
        })
      })
      .use([middleware.auth()])
  })
  .prefix('api/v1')
