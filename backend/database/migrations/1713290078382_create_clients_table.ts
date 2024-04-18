import { BaseSchema } from '@adonisjs/lucid/schema'

export default class ClientsSchema extends BaseSchema {
  protected tableName = 'clients'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.uuid('id').primary().defaultTo(this.db.rawQuery('uuid_generate_v4()').knexQuery)
      table.uuid('user_id').unsigned().references('id').inTable('users').onDelete('CASCADE')
      table.string('name').notNullable()
      table.string('email', 254).notNullable()
      table.string('address').notNullable()
      table.string('country').notNullable()
      table.string('siren_number').unique()
      table.timestamp('created_at').notNullable()
      table.timestamp('updated_at').nullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
