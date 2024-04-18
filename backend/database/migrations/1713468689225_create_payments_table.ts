import { BaseSchema } from '@adonisjs/lucid/schema'

export default class PaymentsSchema extends BaseSchema {
  protected tableName = 'payments'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.uuid('id').primary().defaultTo(this.db.rawQuery('uuid_generate_v4()').knexQuery)
      table.decimal('total', 8, 2).nullable()
      table.string('order_id').nullable()
      table.string('st_cus_id', 1024).nullable()
      table.string('st_sub_id', 1024).nullable()
      table.string('st_payment_intent_id', 1024).nullable()
      table.string('st_payment_method', 1024).nullable()
      table.string('st_payment_status', 1024).nullable()
      table.bigInteger('date').nullable()
      table.timestamp('trial_end').nullable()
      table.timestamp('created_at').notNullable()
      table.timestamp('updated_at').nullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
