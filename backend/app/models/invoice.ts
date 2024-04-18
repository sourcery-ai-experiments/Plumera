import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import User from '#models/user'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'

export default class Invoice extends BaseModel {
  @column({ isPrimary: true })
  declare id: string

  @column()
  declare invoice_number: string

  @column()
  declare invoice_date: string

  @column()
  declare due_date: string

  @column()
  declare total: string

  @column()
  declare status: string

  @column()
  declare user_id: string

  @belongsTo(() => User)
  declare user: BelongsTo<typeof User>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
