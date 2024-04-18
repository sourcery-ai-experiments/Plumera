import { HttpContext } from '@adonisjs/core/http'
import Order from '#models/order'
import { createOrderValidator, updateOrderValidator } from '#validators/order'

export default class OrdersController {
  /**
   * Display a list of resource
   */
  async index({}: HttpContext) {
    return Order.all()
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

    const validation = await createOrderValidator.validate(data)

    if (!validation) {
      return response.badRequest(validation)
    }

    const order: Order = await Order.create(data)

    return response.created(order)
  }

  /**
   * Show individual record
   */
  async show({ params, response }: HttpContext) {
    const order = await Order.find(params.id)

    if (!order) {
      return response.notFound()
    }

    return response.ok(order)
  }

  /**
   * Edit individual record
   */
  async edit({ params, response }: HttpContext) {
    const order = await Order.find(params.id)

    if (!order) {
      return response.notFound()
    }

    return response.ok(order)
  }

  /**
   * Handle form submission for the edit action
   */
  async update({ params, request, response }: HttpContext) {
    const data = request.all()

    const validation = await updateOrderValidator.validate(data)

    if (!validation) {
      return response.badRequest(validation)
    }

    const order: Order | null = await Order.find(params.id)

    if (!order) {
      return response.notFound()
    }

    order.merge(data)

    await order.save()

    return response.ok(order)
  }

  /**
   * Delete record
   */
  async destroy({ params, response }: HttpContext) {
    const order: Order | null = await Order.find(params.id)

    if (!order) {
      return response.notFound()
    }

    await order.delete()

    return response.noContent()
  }
}
