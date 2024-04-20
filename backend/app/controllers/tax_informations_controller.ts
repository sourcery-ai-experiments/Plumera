import { HttpContext } from '@adonisjs/core/http'
import TaxInformation from '#models/tax_information'
import {
  createTaxInformationValidator,
  updateTaxInformationValidator,
} from '#validators/tax_information'

export default class TaxInformationsController {
  /**
   * Display a list of resource
   */
  async index({}: HttpContext) {
    return TaxInformation.all()
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

    const validation = await createTaxInformationValidator.validate(data)

    if (!validation) {
      return response.badRequest(validation)
    }

    const taxInformation: TaxInformation = await TaxInformation.create(data)

    return response.created(taxInformation)
  }

  /**
   * Show individual record
   */
  async show({ params, response }: HttpContext) {
    const taxInformation = await TaxInformation.find(params.id)

    if (!taxInformation) {
      return response.notFound()
    }

    return response.ok(taxInformation)
  }

  /**
   * Edit individual record
   */
  async edit({ params, response }: HttpContext) {
    const taxInformation = await TaxInformation.find(params.id)

    if (!taxInformation) {
      return response.notFound()
    }

    return response.ok(taxInformation)
  }

  /**
   * Handle form submission for the edit action
   */
  async update({ params, request, response }: HttpContext) {
    const data = request.all()

    const validation = await updateTaxInformationValidator.validate(data)

    if (!validation) {
      return response.badRequest(validation)
    }

    const taxInformation: TaxInformation | null = await TaxInformation.find(params.id)

    if (!taxInformation) {
      return response.notFound()
    }

    taxInformation.merge(data)

    await taxInformation.save()

    return response.ok(taxInformation)
  }

  /**
   * Delete record
   */
  async destroy({ params, response }: HttpContext) {
    const taxInformation: TaxInformation | null = await TaxInformation.find(params.id)

    if (!taxInformation) {
      return response.notFound()
    }

    await taxInformation.delete()

    return response.noContent()
  }
}
