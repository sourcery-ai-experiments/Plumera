import { BaseSchema } from '@adonisjs/lucid/schema'

// Migration for the BankDetails table
export default class BankDetailsSchema extends BaseSchema {
  protected tableName = 'bank_details'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.uuid('id').primary().defaultTo(this.db.rawQuery('uuid_generate_v4()').knexQuery)
      table.uuid('user_id').unsigned().references('id').inTable('users')
      table.string('bank_name').notNullable()
      table.string('account_number').notNullable()
      table.string('routing_number').notNullable()
      table.string('swift_code').nullable()
      table.string('iban').nullable()
      table.boolean('is_primary_account').defaultTo(false)
      table.timestamp('created_at').notNullable()
      table.timestamp('updated_at').nullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
