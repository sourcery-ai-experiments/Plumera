import vine from '@vinejs/vine'

export const createTaxInformationValidator = vine.compile(
  vine.object({
    country: vine.string(),
    tax_rate: vine.number().min(0),
    tax_type: vine.string(),
    exemptions: vine.string().nullable(),
  })
)

export const updateTaxInformationValidator = vine.compile(
  vine.object({
    country: vine.string(),
    tax_rate: vine.number().min(0),
    tax_type: vine.string(),
    exemptions: vine.string().nullable(),
  })
)
