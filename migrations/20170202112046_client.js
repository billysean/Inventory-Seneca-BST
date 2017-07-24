exports.up = function (knex, Promise) {
    knex
        .schema
        .createTable('Inventory', (table) => {
            table
                .increments('id')
                .primary()
            table.string(' ')
            table.string('NoU')
            table.string('payment')
            table.enu('payment', ['paid'])
            table.timestamps()
        }),

    knex
        .schema
        .createTable('client', (table) => {
            table
                .incremments('id')
                .primary()
            table.string('full_name', 50)
            table.string('email', 100)
            table.string('password')
            table.enu('sex', ['Male', 'Female'])
            table.text('work_phone')
            table.text('mobile')
            table.text('address')
            table
                .integer('country_id')
                .unsigned()
            table
                .foreign('country_id')
                .references('country.id')
            table
                .integer('company_id')
                .unsigned()
            table
                .foreign('company_id')
                .references('company.id')
            table.enu('status', ['valid', 'invalid'])
        })
};

exports.down = function (knex, Promise) {};
exports.config = {
    transaction: false
}
