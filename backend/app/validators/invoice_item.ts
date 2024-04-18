import vine from '@vinejs/vine'

export const createInvoiceItemValidator = vine.compile(
  vine.object({
    invoiceId: vine.string(),
    productServiceId: vine.string(),
    quantity: vine.number().min(0),
    line_total: vine.number().min(0),
  })
)

export const updateInvoiceItemValidator = vine.compile(
  vine.object({
    invoiceId: vine.string(),
    productServiceId: vine.string(),
    quantity: vine.number().min(0),
    line_total: vine.number().min(0),
  })
)
