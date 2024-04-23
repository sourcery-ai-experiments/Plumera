import vine from '@vinejs/vine'

export const createInvoiceItemValidator = vine.compile(
  vine.object({
    invoice_id: vine.string(),
    quantity: vine.number().min(0),
    line_total: vine.number().min(0),
  })
)

export const updateInvoiceItemValidator = vine.compile(
  vine.object({
    invoice_id: vine.string(),
    quantity: vine.number().min(0),
    line_total: vine.number().min(0),
  })
)
