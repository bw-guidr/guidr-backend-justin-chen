
exports.seed = function(knex, Promise) {
  return knex('users').insert([
    { username: 'User1', name: "Ryan", age: 30, length_as_guide: "2 years", title: "Lead Guide", password: "password" }, // 1
    { username: 'User2', name: "Austen", age: 31,length_as_guide: "15 years", title: "Master Guide", password: "password"  }, // 2
    { username: 'User3', name: "Justin", age: 27,length_as_guide: "1 years", title: "Amateur Guide", password: "password"  },
  ]);
};

