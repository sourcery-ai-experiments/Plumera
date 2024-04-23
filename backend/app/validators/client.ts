import vine from '@vinejs/vine'

export const createClientValidator = vine.compile(
  vine.object({
    user_id: vine.string().optional(),
    name: vine.string().optional(),
    email: vine.string().email().optional(),
    address: vine.string().optional(),
    country: vine.string().optional(),
    siren_number: vine.string().optional(),
  })
)

export const updateClientValidator = vine.compile(
  vine.object({
    user_id: vine.string().nullable(),
    name: vine.string().nullable(),
    email: vine.string().email().nullable(),
    address: vine.string().nullable(),
    country: vine.string().nullable(),
    siren_number: vine.string().nullable(),
  })
)
