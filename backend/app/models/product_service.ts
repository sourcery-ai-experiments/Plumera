import { DateTime } from 'luxon'
import { BaseModel, column, hasMany } from '@adonisjs/lucid/orm'
import InvoiceItem from '#models/invoice_item'
import type { HasMany } from '@adonisjs/lucid/types/relations'

export default class ProductService extends BaseModel {
  @column({ isPrimary: true })
  declare id: string

  @column()
  declare name: string

  @column()
  declare description: string

  @column()
  declare price: number

  @column()
  declare unity: string

  @column()
  declare quantity: number

  @hasMany(() => InvoiceItem)
  declare invoiceItems: HasMany<typeof InvoiceItem>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
