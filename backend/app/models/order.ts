import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import User from '#models/user'
import Payment from '#models/payment'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'

export default class Order extends BaseModel {
  @column({ isPrimary: true })
  declare id: string

  @column()
  declare status: string

  @column()
  declare total_price: number

  @column()
  declare session_id: string

  @column()
  declare user_id: string

  @column()
  declare payment_id: string

  @belongsTo(() => User)
  declare user: BelongsTo<typeof User>

  @belongsTo(() => Payment)
  declare payment: BelongsTo<typeof Payment>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
