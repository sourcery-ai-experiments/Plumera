import { HttpContext } from '@adonisjs/core/http'
import Invoice from '#models/invoice'
import { createInvoiceValidator, updateInvoiceValidator } from '#validators/invoice'

export default class InvoicesController {
  /**
   * Display a list of resource
   */
  async index({}: HttpContext) {
    return Invoice.all()
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

    const validation = await createInvoiceValidator.validate(data)

    if (!validation) {
      return response.badRequest(validation)
    }

    const invoice: Invoice = await Invoice.create(data)

    return response.created(invoice)
  }

  /**
   * Show individual record
   */
  async show({ params, response }: HttpContext) {
    const invoice = await Invoice.find(params.id)

    if (!invoice) {
      return response.notFound()
    }

    return response.ok(invoice)
  }

  /**
   * Edit individual record
   */
  async edit({ params, response }: HttpContext) {
    const invoice = await Invoice.find(params.id)

    if (!invoice) {
      return response.notFound()
    }

    return response.ok(invoice)
  }

  /**
   * Handle form submission for the edit action
   */
  async update({ params, request, response }: HttpContext) {
    const data = request.all()

    const validation = await updateInvoiceValidator.validate(data)

    if (!validation) {
      return response.badRequest(validation)
    }

    const invoice: Invoice | null = await Invoice.find(params.id)

    if (!invoice) {
      return response.notFound()
    }

    invoice.merge(data)

    await invoice.save()

    return response.ok(invoice)
  }

  /**
   * Delete record
   */
  async destroy({ params, response }: HttpContext) {
    const invoice: Invoice | null = await Invoice.find(params.id)

    if (!invoice) {
      return response.notFound()
    }

    await invoice.delete()

    return response.noContent()
  }
}
