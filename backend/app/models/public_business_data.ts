import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import User from '#models/user'

export default class PublicBusinessData extends BaseModel {
  @column({ isPrimary: true })
  declare id: string

  @column()
  declare business_name: string

  @column()
  declare siren_number: string

  @column()
  declare company_name: string

  @column()
  declare user_id: string

  @column()
  declare country: string

  @column()
  declare legal_structure: string

  @column()
  declare address: string

  @column()
  declare tva_number: string

  @column()
  declare activity_code: string

  @column()
  declare legal_status: string

  @belongsTo(() => User, {
    foreignKey: 'user_id',
  })
  declare user: BelongsTo<typeof User>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
