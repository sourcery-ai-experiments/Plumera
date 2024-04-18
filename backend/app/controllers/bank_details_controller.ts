import { HttpContext } from '@adonisjs/core/http'
import BankDetail from '#models/bank_detail'
import { createBankDetailsValidator, updateBankDetailsValidator } from '#validators/bank_detail'

export default class BankDetailsController {
  /**
   * Display a list of resource
   */
  async index({}: HttpContext) {
    return BankDetail.all()
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

    const validation = await createBankDetailsValidator.validate(data)

    if (!validation) {
      return response.badRequest(validation)
    }

    const bankDetail: BankDetail = await BankDetail.create(data)

    return response.created(bankDetail)
  }

  /**
   * Show individual record
   */
  async show({ params, response }: HttpContext) {
    const bankDetail = await BankDetail.find(params.id)

    if (!bankDetail) {
      return response.notFound()
    }

    return response.ok(bankDetail)
  }

  /**
   * Edit individual record
   */
  async edit({ params, response }: HttpContext) {
    const bankDetail = await BankDetail.find(params.id)

    if (!bankDetail) {
      return response.notFound()
    }

    return response.ok(bankDetail)
  }

  /**
   * Handle form submission for the edit action
   */
  async update({ params, request, response }: HttpContext) {
    const data = request.all()

    const validation = await updateBankDetailsValidator.validate(data)

    if (!validation) {
      return response.badRequest(validation)
    }

    const bankDetail: BankDetail | null = await BankDetail.find(params.id)

    if (!bankDetail) {
      return response.notFound()
    }

    bankDetail.merge(data)

    await bankDetail.save()

    return response.ok(bankDetail)
  }

  /**
   * Delete record
   */
  async destroy({ params, response }: HttpContext) {
    const bankDetail: BankDetail | null = await BankDetail.find(params.id)

    if (!bankDetail) {
      return response.notFound()
    }

    await bankDetail.delete()

    return response.noContent()
  }
}
