import { HttpContext } from '@adonisjs/core/http'
import ProductService from '#models/product_service'
import {
  createProductServiceValidator,
  updateProductServiceValidator,
} from '#validators/product_service'

export default class ProductServicesController {
  /**
   * Display a list of resource
   */
  async index({}: HttpContext) {
    return ProductService.all()
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

    const validation = await createProductServiceValidator.validate(data)

    if (!validation) {
      return response.badRequest(validation)
    }

    const productService: ProductService = await ProductService.create(data)

    return response.created(productService)
  }

  /**
   * Show individual record
   */
  async show({ params, response }: HttpContext) {
    const productService = await ProductService.find(params.id)

    if (!productService) {
      return response.notFound()
    }

    return response.ok(productService)
  }

  /**
   * Edit individual record
   */
  async edit({ params, response }: HttpContext) {
    const productService = await ProductService.find(params.id)

    if (!productService) {
      return response.notFound()
    }

    return response.ok(productService)
  }

  /**
   * Handle form submission for the edit action
   */
  async update({ params, request, response }: HttpContext) {
    const data = request.all()

    const validation = await updateProductServiceValidator.validate(data)

    if (!validation) {
      return response.badRequest(validation)
    }

    const productService: ProductService | null = await ProductService.find(params.id)

    if (!productService) {
      return response.notFound()
    }

    productService.merge(data)

    await productService.save()

    return response.ok(productService)
  }

  /**
   * Delete record
   */
  async destroy({ params, response }: HttpContext) {
    const productService: ProductService | null = await ProductService.find(params.id)

    if (!productService) {
      return response.notFound()
    }

    await productService.delete()

    return response.noContent()
  }
}
