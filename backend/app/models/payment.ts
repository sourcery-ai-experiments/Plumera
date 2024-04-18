import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Payment extends BaseModel {
  @column({ isPrimary: true })
  declare id: string

  @column()
  declare total: number

  @column()
  declare order_id: string

  @column()
  declare st_cus_id: string

  @column()
  declare st_sub_id: string

  @column()
  declare st_payment_intent_id: string

  @column()
  declare st_payment_method: string

  @column()
  declare st_payment_status: string

  @column()
  declare date: number

  @column.dateTime()
  declare trial_end: DateTime

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
