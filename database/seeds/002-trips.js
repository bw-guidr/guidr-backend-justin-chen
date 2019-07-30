
exports.seed = function(knex, Promise) {
  return knex('trips').insert([
    {
      user_id: 1,
      title: "Hike through Yosemite",
      date: "20190730",
      trip_type: "Professional",
      location: "Yosemite Falls, CA",
      miles: 10,
      description: "Hiking through Yosemite Falls...etc"
    },
    {
      user_id: 2,
      title: "Hike through Grand Canyon",
      date: "20190730" ,
      trip_type: "Private",
      location: "Grand Canyon, AZ",
      miles: 10,
      description: "Hiking through Grand Canyon...etc"
    },
    {
      user_id: 3,
      title: "Hike through Lake Tahoe",
      date: "20190730" ,
      trip_type: "Private",
      location: "Lake Tahoe, CA",
      miles: 10,
      description: "Hiking through Lake Tahoe...etc"
    }
  ]);
};

