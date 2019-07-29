
exports.seed = function(knex, Promise) {
  return knex('users').insert([
    { username: 'User1', password: "password" }, // 1
    { username: 'User2', password: "password"  }, // 2
    { username: 'User3', password: "password"  },
  ]);
};

