// Update with your config settings.
require('ts-node/register')
module.exports = {
    client: "pg",
    connection: {
      database: "",
      user: "",
      password: ""
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations"
    }
  

};
