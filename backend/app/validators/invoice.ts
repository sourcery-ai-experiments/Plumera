import vine from '@vinejs/vine'

export const createInvoiceValidator = vine.compile(
  vine.object({
    user_id: vine.string().optional(),
    client_id: vine.string().optional(),
    date: vine.string().optional(),
    due_date: vine.string().optional(),
    total_amount: vine.number().min(0),
    status: vine.string(),
  })
)

export const updateInvoiceValidator = vine.compile(
  vine.object({
    user_id: vine.string().optional(),
    client_id: vine.string().optional(),
    date: vine.string().optional(),
    due_date: vine.string().optional(),
    total_amount: vine.number().min(0),
    status: vine.string(),
  })
)
