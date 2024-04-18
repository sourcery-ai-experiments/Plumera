import vine from '@vinejs/vine'

export const createPaymentValidator = vine.compile(
  vine.object({
    total: vine.number().min(0),
    order_id: vine.string(),
    st_cus_id: vine.string(),
    st_sub_id: vine.string(),
    st_payment_intent_id: vine.string(),
    st_payment_method: vine.string(),
    st_payment_status: vine.string(),
    date: vine.number().min(0),
    trial_end: vine.string().nullable(),
  })
)

export const updatePaymentValidator = vine.compile(
  vine.object({
    total: vine.number().min(0),
    order_id: vine.string(),
    st_cus_id: vine.string(),
    st_sub_id: vine.string(),
    st_payment_intent_id: vine.string(),
    st_payment_method: vine.string(),
    st_payment_status: vine.string(),
    date: vine.number().min(0),
    trial_end: vine.string().nullable(),
  })
)
