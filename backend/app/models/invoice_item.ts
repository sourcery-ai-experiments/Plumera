import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import Invoice from '#models/invoice'
import ProductService from '#models/product_service'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'

export default class InvoiceItem extends BaseModel {
  @column({ isPrimary: true })
  declare id: string

  @column()
  declare invoice_id: string

  @column()
  declare product_service_id: string

  @column()
  declare quantity: number

  @column()
  declare price: number

  @column()
  declare total: number

  @belongsTo(() => Invoice)
  declare invoice: BelongsTo<typeof Invoice>

  @belongsTo(() => ProductService)
  declare productService: BelongsTo<typeof ProductService>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
