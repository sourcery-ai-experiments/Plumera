import vine from '@vinejs/vine'

export const createClientValidator = vine.compile(
  vine.object({
    userId: vine.string(),
    name: vine.string(),
    email: vine.string().email(),
    address: vine.string(),
    country: vine.string(),
    siren_number: vine.string(),
  })
)

export const updateClientValidator = vine.compile(
  vine.object({
    userId: vine.string(),
    name: vine.string(),
    email: vine.string().email(),
    address: vine.string(),
    country: vine.string(),
    siren_number: vine.string(),
  })
)
