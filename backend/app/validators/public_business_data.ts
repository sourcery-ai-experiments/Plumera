import vine from '@vinejs/vine'

export const createPublicBusinessDataValidator = vine.compile(
  vine.object({
    userId: vine.string(),
    siren_number: vine.string(),
    company_name: vine.string(),
    country: vine.string(),
    legal_structure: vine.string(),
    address: vine.string(),
    tva_number: vine.string().nullable(),
    activity_code: vine.string(),
    legal_status: vine.string(),
  })
)

export const updatePublicBusinessDataValidator = vine.compile(
  vine.object({
    userId: vine.string(),
    siren_number: vine.string(),
    company_name: vine.string(),
    country: vine.string(),
    legal_structure: vine.string(),
    address: vine.string(),
    tva_number: vine.string().nullable(),
    activity_code: vine.string(),
    legal_status: vine.string(),
  })
)
