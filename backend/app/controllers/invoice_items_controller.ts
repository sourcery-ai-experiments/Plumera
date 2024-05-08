import { HttpContext } from '@adonisjs/core/http'
import InvoiceItem from '#models/invoice_item'
import { createInvoiceItemValidator, updateInvoiceItemValidator } from '#validators/invoice_item'

export default class InvoiceItemsController {
  /**
   * Display a list of resource
   */
  async index({}: HttpContext) {
    return InvoiceItem.all()
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

    const validation = await createInvoiceItemValidator.validate(data)

    if (!validation) {
      return response.badRequest(validation)
    }

    const invoiceItem: InvoiceItem = await InvoiceItem.create(data)

    return response.created(invoiceItem)
  }


    async storeAll({ request, response }: HttpContext) {
        // Convert the object with numeric keys into an array
        const itemsObject = request.all();
        const itemsArray = Object.values(itemsObject);  // This converts the object into an array of values

        let results = [];
        let errors = [];

        for (const data of itemsArray) {
            const validation = await createInvoiceItemValidator.validate(data);
            if (!validation) {
                // errors.push(validation));
                continue;  // Skip this iteration if validation fails
            }

            try {
                // If validation passes, create the invoice item
                const invoiceItem = await InvoiceItem.create(data);
                results.push(invoiceItem);
            } catch (error) {
                errors.push({ message: "Failed to create invoice item", details: error.message });
            }
        }

        // Check if there were any errors
        if (errors.length > 0) {
            return response.status(400).json({ errors });
        }

        // If all items were created without errors
        return response.status(201).json(results);
    }





    /**
   * Show individual record
   */
  async show({ params, response }: HttpContext) {
    const invoiceItem = await InvoiceItem.find(params.id)

    if (!invoiceItem) {
      return response.notFound()
    }

    return response.ok(invoiceItem)
  }

  /**
   * Edit individual record
   */
  async edit({ params, response }: HttpContext) {
    const invoiceItem = await InvoiceItem.find(params.id)

    if (!invoiceItem) {
      return response.notFound()
    }

    return response.ok(invoiceItem)
  }

  /**
   * Handle form submission for the edit action
   */
  async update({ params, request, response }: HttpContext) {
    const data = request.all()

    const validation = await updateInvoiceItemValidator.validate(data)

    if (!validation) {
      return response.badRequest(validation)
    }

    const invoiceItem: InvoiceItem | null = await InvoiceItem.find(params.id)

    if (!invoiceItem) {
      return response.notFound()
    }

    invoiceItem.merge(data)

    await invoiceItem.save()

    return response.ok(invoiceItem)
  }

  /**
   * Delete record
   */
  async destroy({ params, response }: HttpContext) {
    const invoiceItem: InvoiceItem | null = await InvoiceItem.find(params.id)

    if (!invoiceItem) {
      return response.notFound()
    }

    await invoiceItem.delete()

    return response.noContent()
  }
}
