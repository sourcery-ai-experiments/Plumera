import vine from '@vinejs/vine'

export const createProductServiceValidator = vine.compile(
  vine.object({
    name: vine.string(),
    description: vine.string(),
    unity: vine.string(),
    quantity: vine.number().min(0),
    price: vine.number().min(0),
  })
)

export const updateProductServiceValidator = vine.compile(
  vine.object({
    name: vine.string(),
    description: vine.string(),
    unity: vine.string(),
    quantity: vine.number().min(0),
    price: vine.number().min(0),
  })
)
