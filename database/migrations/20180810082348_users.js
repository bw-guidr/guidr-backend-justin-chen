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
      users.integer("age")
      users.string("length_as_guide")
      users.string("title")
      users.string("tagline")
      users.string("image_url")
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
      trips.float("miles").notNullable()
      trips.text("description").notNullable() 
      trips.string("trip_url")     
    })
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('users').dropTableIfExists('trips');
};
