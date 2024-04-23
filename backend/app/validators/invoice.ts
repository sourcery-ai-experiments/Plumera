import vine from '@vinejs/vine'

export const createInvoiceValidator = vine.compile(
  vine.object({
    user_id: vine.string().optional(),
    invoice_number: vine.string().optional(),
    client_id: vine.string().optional(),
    invoice_date: vine.string().optional(),
    date: vine.string().optional(),
    due_date: vine.string().optional(),
    notes: vine.string().optional(),
    terms: vine.string().optional(),
    total_amount: vine.number().min(0).optional(),
    status: vine.string().optional(),
  })
)

export const updateInvoiceValidator = vine.compile(
  vine.object({
    user_id: vine.string().optional(),
    invoice_number: vine.string().optional(),
    client_id: vine.string().optional(),
    invoice_date: vine.string().optional(),
    date: vine.string().optional(),
    due_date: vine.string().optional(),
    notes: vine.string().optional(),
    terms: vine.string().optional(),
    total_amount: vine.number().min(0).optional(),
    status: vine.string().optional(),
  })
)
