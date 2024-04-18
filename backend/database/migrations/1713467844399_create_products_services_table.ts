import { BaseSchema } from '@adonisjs/lucid/schema'

export default class ProductsServicesSchema extends BaseSchema {
  protected tableName = 'products_services'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.uuid('id').primary().defaultTo(this.db.rawQuery('uuid_generate_v4()').knexQuery)
      table.string('name').notNullable()
      table.text('description').nullable()
      table.string('unity').nullable()
      table.decimal('quantity').nullable()
      table.decimal('price', 12, 2).notNullable()
      table.timestamp('created_at').notNullable()
      table.timestamp('updated_at').nullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
