import vine from '@vinejs/vine'

export const createPlanValidator = vine.compile(
  vine.object({
    name: vine.string(),
    price: vine.number().min(0),
    interval: vine.string(),
    trial_period_days: vine.number().min(0),
    lookup_key: vine.string(),
    st_plan_id: vine.string(),
  })
)

export const updatePlanValidator = vine.compile(
  vine.object({
    name: vine.string(),
    price: vine.number().min(0),
    interval: vine.string(),
    trial_period_days: vine.number().min(0),
    lookup_key: vine.string(),
    st_plan_id: vine.string(),
  })
)
