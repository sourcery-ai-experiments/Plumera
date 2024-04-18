import { BaseSchema } from '@adonisjs/lucid/schema'

export default class PlansSchema extends BaseSchema {
  protected tableName = 'plans'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.uuid('id').primary().defaultTo(this.db.rawQuery('uuid_generate_v4()').knexQuery)
      table.string('name', 255).notNullable()
      table.decimal('price', 7).notNullable()
      table.string('interval').notNullable()
      table.integer('trial_period_days').notNullable()
      table.string('lookup_key', 255).notNullable()
      table.string('st_plan_id', 255).notNullable()
      table.timestamp('created_at').notNullable()
      table.timestamp('updated_at').nullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
