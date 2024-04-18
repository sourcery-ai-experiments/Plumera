import { HttpContext } from '@adonisjs/core/http'
import Plan from '#models/plan'
import { createPlanValidator, updatePlanValidator } from '#validators/plan'

export default class PlansController {
  /**
   * Display a list of resource
   */
  async index({}: HttpContext) {
    return Plan.all()
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

    const validation = await createPlanValidator.validate(data)

    if (!validation) {
      return response.badRequest(validation)
    }

    const plan: Plan = await Plan.create(data)

    return response.created(plan)
  }

  /**
   * Show individual record
   */
  async show({ params, response }: HttpContext) {
    const plan = await Plan.find(params.id)

    if (!plan) {
      return response.notFound()
    }

    return response.ok(plan)
  }

  /**
   * Edit individual record
   */
  async edit({ params, response }: HttpContext) {
    const plan = await Plan.find(params.id)

    if (!plan) {
      return response.notFound()
    }

    return response.ok(plan)
  }

  /**
   * Handle form submission for the edit action
   */
  async update({ params, request, response }: HttpContext) {
    const data = request.all()

    const validation = await updatePlanValidator.validate(data)

    if (!validation) {
      return response.badRequest(validation)
    }

    const plan: Plan | null = await Plan.find(params.id)

    if (!plan) {
      return response.notFound()
    }

    plan.merge(data)

    await plan.save()

    return response.ok(plan)
  }

  /**
   * Delete record
   */
  async destroy({ params, response }: HttpContext) {
    const plan: Plan | null = await Plan.find(params.id)

    if (!plan) {
      return response.notFound()
    }

    await plan.delete()

    return response.noContent()
  }
}
