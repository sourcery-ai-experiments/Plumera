import { BaseSchema } from '@adonisjs/lucid/schema'

export default class InvoicesSchema extends BaseSchema {
  protected tableName = 'invoices'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.uuid('id').primary().defaultTo(this.db.rawQuery('uuid_generate_v4()').knexQuery)
      table.uuid('user_id').unsigned().references('id').inTable('users').onDelete('CASCADE')
      table.uuid('client_id').unsigned().references('id').inTable('clients').onDelete('CASCADE')
      table.dateTime('date').notNullable()
      table.dateTime('due_date').notNullable()
      table.text('notes').nullable()
      table.text('terms').nullable()
      table.decimal('total_amount', 12, 2).notNullable()
      table.string('status').notNullable()
      table.timestamp('created_at').notNullable()
      table.timestamp('updated_at').nullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
