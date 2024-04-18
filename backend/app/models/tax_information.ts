import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class TaxInformation extends BaseModel {
  @column({ isPrimary: true })
  declare id: string

  @column()
  declare country: string

  @column()
  declare tax_rate: string

  @column()
  declare tax_type: string

  @column()
  declare exemptions: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
