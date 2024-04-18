import { HttpContext } from '@adonisjs/core/http'
import Payment from '#models/payment'
import { createPaymentValidator, updatePaymentValidator } from '#validators/payment'

export default class PaymentsController {
  /**
   * Display a list of resource
   */
  async index({}: HttpContext) {
    return Payment.all()
  }

  /**
   * Display form to create a new record
   */
  async create({}: HttpContext) {}

  /**
   * Handle form submission for the create action
   */
  async store({ request, response }: HttpContext) {
    const data = request.all()

    const validation = await createPaymentValidator.validate(data)

    if (!validation) {
      return response.badRequest(validation)
    }

    const payment: Payment = await Payment.create(data)

    return response.created(payment)
  }

  /**
   * Show individual record
   */
  async show({ params, response }: HttpContext) {
    const payment = await Payment.find(params.id)

    if (!payment) {
      return response.notFound()
    }

    return response.ok(payment)
  }

  /**
   * Edit individual record
   */
  async edit({ params, response }: HttpContext) {
    const payment = await Payment.find(params.id)

    if (!payment) {
      return response.notFound()
    }

    return response.ok(payment)
  }

  /**
   * Handle form submission for the edit action
   */
  async update({ params, request, response }: HttpContext) {
    const data = request.all()

    const validation = await updatePaymentValidator.validate(data)

    if (!validation) {
      return response.badRequest(validation)
    }

    const payment: Payment | null = await Payment.find(params.id)

    if (!payment) {
      return response.notFound()
    }

    payment.merge(data)

    await payment.save()

    return response.ok(payment)
  }

  /**
   * Delete record
   */
  async destroy({ params, response }: HttpContext) {
    const payment: Payment | null = await Payment.find(params.id)

    if (!payment) {
      return response.notFound()
    }

    await payment.delete()

    return response.noContent()
  }
}
