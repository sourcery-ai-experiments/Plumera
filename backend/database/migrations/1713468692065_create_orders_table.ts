import { BaseSchema } from '@adonisjs/lucid/schema'

export default class OrdersSchema extends BaseSchema {
  protected tableName = 'orders'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.uuid('id').primary().defaultTo(this.db.rawQuery('uuid_generate_v4()').knexQuery)
      table.string('status').notNullable()
      table.decimal('total_price', 15, 2).notNullable()
      table.string('session_id').notNullable()
      table.uuid('user_id').unsigned().references('id').inTable('users').onDelete('CASCADE')
      table.uuid('payment_id').unsigned().references('id').inTable('payments').onDelete('CASCADE')
      table.timestamp('created_at').notNullable()
      table.timestamp('updated_at').nullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
