import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import User from '#models/user'

export default class BankDetail extends BaseModel {
  @column({ isPrimary: true })
  declare id: string

  @column()
  declare bank_name: string

  @column()
  declare account_number: string

  @column()
  declare routing_number: string

  @column()
  declare swift_code: string

  @column()
  declare iban: string

  @column()
  declare is_primary_account: boolean

  @column()
  declare user_id: string

  @belongsTo(() => User)
  declare user: BelongsTo<typeof User>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
