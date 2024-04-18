import vine from '@vinejs/vine'

export const signinValidator = vine.compile(
  vine.object({
    email: vine.string().email(),
  })
)

export const createUserValidator = vine.compile(
  vine.object({
    email: vine.string().email(),
    password: vine.string(),
    full_name: vine.string(),
    magic_link_token: vine.string(),
    last_reset_date: vine.string(),
    access_token: vine.string(),
    refresh_token: vine.string(),
    google_id: vine.string(),
    country: vine.string(),
    business_form: vine.string(),
    siren_number: vine.string(),
    magic_link_token_expires_at: vine.string(),
    subscription_active: vine.string(),
  })
)
