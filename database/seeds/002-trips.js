
exports.seed = function(knex, Promise) {
  return knex('trips').insert([
    {
      user_id: 1,
      title: "Hike through Yosemite",
      location: "Yosemite Falls, CA",
      miles: 10,
      description: "Hiking through Yosemite Falls...etc"
    },
    {
      user_id: 2,
      title: "Hike through Grand Canyon",
      location: "Grand Canyon, AZ",
      miles: 10,
      description: "Hiking through Grand Canyon...etc"
    },
    {
      user_id: 3,
      title: "Hike through Lake Tahoe",
      location: "Lake Tahoe, CA",
      miles: 10,
      description: "Hiking through Lake Tahoe...etc"
    }
  ]);
};

