
exports.seed = function(knex, Promise) {
  return knex('users').insert([
    { username: 'User1', name: "Ryan", password: "password" }, // 1
    { username: 'User2', name: "Austen", password: "password"  }, // 2
    { username: 'User3', name: "Justin", password: "password"  },
  ]);
};

