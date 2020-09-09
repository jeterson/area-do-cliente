import * as Knex from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('user', (table: Knex.TableBuilder) => {
        table.increments('id').primary()
        table.string('name').notNullable()
        table.string('email').notNullable()
        table.boolean('enabled').defaultTo(false)
        table.boolean('verified').defaultTo(false)
        table.dateTime('createdAt').notNullable()
        table.dateTime('updatedAt')
        table.string('internalCode')
        table.string('cnpj').notNullable()
        table.boolean('createdByCustomer')
        table.string('userType').notNullable()
        table.integer('verifiedUser')
        table.string('password').notNullable()
        table.dateTime('lastLogon')
    })
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('user')
}

