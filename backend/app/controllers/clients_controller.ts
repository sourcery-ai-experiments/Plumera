import { HttpContext } from '@adonisjs/core/http'
import Client from '#models/client'
import { createClientValidator } from '#validators/client'

export default class ClientsController {
  /**
   * Display a list of resource
   */
  async index({}: HttpContext) {
    return Client.all()
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

    const validation = await createClientValidator.validate(data)

    if (!validation) {
      return response.badRequest(validation)
    }

    const client: Client = await Client.create(data)

    return response.created(client)
  }

  /**
   * Show individual record
   */
  async show({ params, response }: HttpContext) {
    const client = await Client.find(params.id)

    if (!client) {
      return response.notFound()
    }

    return response.ok(client)
  }

  /**
   * Edit individual record
   */
  async edit({ params, response }: HttpContext) {
    const client = await Client.find(params.id)

    if (!client) {
      return response.notFound()
    }

    return response.ok(client)
  }

  /**
   * Handle form submission for the edit action
   */
  async update({ params, request, response }: HttpContext) {
    const data = request.all()

    const validation = await createClientValidator.validate(data)

    if (!validation) {
      return response.badRequest(validation)
    }

    const client: Client | null = await Client.find(params.id)

    if (!client) {
      return response.notFound()
    }

    client.merge(data)

    await client.save()

    return response.ok(client)
  }

  /**
   * Delete record
   */
  async destroy({ params, response }: HttpContext) {
    const client: Client | null = await Client.find(params.id)

    if (!client) {
      return response.notFound()
    }

    await client.delete()

    return response.noContent()
  }
}
