import vine from '@vinejs/vine'

export const createOrderValidator = vine.compile(
  vine.object({
    status: vine.string(),
    total_price: vine.number().min(0),
    session_id: vine.string(),
    userId: vine.string(),
    paymentId: vine.string(),
  })
)

export const updateOrderValidator = vine.compile(
  vine.object({
    status: vine.string(),
    total_price: vine.number().min(0),
    session_id: vine.string(),
    userId: vine.string(),
    paymentId: vine.string(),
  })
)
