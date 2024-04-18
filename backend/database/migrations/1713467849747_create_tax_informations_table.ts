import { BaseSchema } from '@adonisjs/lucid/schema'

export default class TaxInformationSchema extends BaseSchema {
  protected tableName = 'tax_information'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.uuid('id').primary().defaultTo(this.db.rawQuery('uuid_generate_v4()').knexQuery)
      table.string('country').notNullable()
      table.decimal('tax_rate', 5, 2).notNullable()
      table.string('tax_type').notNullable()
      table.string('exemptions').nullable()
      table.timestamp('created_at').notNullable()
      table.timestamp('updated_at').nullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
