import { BaseSchema } from '@adonisjs/lucid/schema'

export default class PublicBusinessDataSchema extends BaseSchema {
  protected tableName = 'public_business_data'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.uuid('id').primary().defaultTo(this.db.rawQuery('uuid_generate_v4()').knexQuery)
      table.uuid('user_id').unsigned().references('id').inTable('users').onDelete('CASCADE')
      table.string('siren_number').unique().notNullable()
      table.string('company_name').nullable()
      table.string('country').nullable()
      table.string('legal_structure').nullable()
      table.string('address').nullable()
      table.string('tva_number').nullable()
      table.string('activity_code').nullable()
      table.string('legal_status').nullable()
      table.timestamp('created_at').nullable()
      table.timestamp('updated_at').nullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
