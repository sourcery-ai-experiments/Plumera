import vine from '@vinejs/vine'

export const createBankDetailsValidator = vine.compile(
  vine.object({
    userId: vine.string(),
    bank_name: vine.string(),
    account_number: vine.string(),
    routing_number: vine.string(),
    swift_code: vine.string(),
    iban: vine.string(),
    is_primary_account: vine.boolean(),
  })
)

export const updateBankDetailsValidator = vine.compile(
  vine.object({
    userId: vine.string(),
    bank_name: vine.string(),
    account_number: vine.string(),
    routing_number: vine.string(),
    swift_code: vine.string(),
    iban: vine.string(),
    is_primary_account: vine.boolean(),
  })
)
