import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import Invoice from '#models/invoice'

import type { BelongsTo } from '@adonisjs/lucid/types/relations'

export default class InvoiceItem extends BaseModel {
  @column({ isPrimary: true })
  declare id: string

  @column()
  declare invoice_id: string

  @column()
  declare quantity: number

  @column()
  declare price: number

  @column()
  declare total: number

  @belongsTo(() => Invoice)
  declare invoice: BelongsTo<typeof Invoice>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
