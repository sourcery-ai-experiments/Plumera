import vine from '@vinejs/vine'

export const createInvoiceValidator = vine.compile(
  vine.object({
    userId: vine.string(),
    clientId: vine.string(),
    date: vine.string(),
    due_date: vine.string(),
    total_amount: vine.number().min(0),
    status: vine.string(),
  })
)

export const updateInvoiceValidator = vine.compile(
  vine.object({
    userId: vine.string(),
    clientId: vine.string(),
    date: vine.string(),
    due_date: vine.string(),
    total_amount: vine.number().min(0),
    status: vine.string(),
  })
)
