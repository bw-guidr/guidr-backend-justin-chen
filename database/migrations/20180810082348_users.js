exports.up = function (knex) {
  return knex.schema
    .createTable('users', users => {
      users.increments();

      users
        .string('username', 255)
        .notNullable()
        .unique();
      users
        .string("name", 128)
        .notNullable()
      users.string('password', 255).notNullable();
    })
    .createTable("trips", trips => {
      trips.increments();

      trips
        .integer('user_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('users')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');

      trips.text("title").notNullable()
      trips.string("trip_type")
      trips.string("date").notNullable()
      trips.text("location").notNullable()
      trips.integer("miles").notNullable()
      trips.text("description").notNullable()      
    })
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('users').dropTableIfExists('trips');
};
