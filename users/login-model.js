const db = require("../database/dbConfig.js")

module.exports = {
    find,
    findBy,
    add,
    findById,
    getUserTrips,
    insert
    // remove
};

function find() {
    return db("users").select("id", "username");
}

function findBy(username) {
    return db('users')
        .where(username)
        .then(user => {
            if (user.length) {
                return user[0]
            } else {
                return null
            }
        })
}

function add(user) {
    return db('users')
        .insert(user, 'id')
        // .then(ids => {
        //     const [id] = ids;
        //     return findById(id);
        // });
}

function findById(id) {
    return db("users")
        .select("id", "username")
        .where({ id })
        .first();
}

function getUserTrips(userId){
    return db("trips as t")
    .join("users as u", "u.id", "t.user_id")
    .select("t.id", "t.id", "t.title", "t.location", "t.miles", "t.description", "t.user_id")
    .where("t.user_id", userId)
}

function insert(userId, newTrip){
    return db("trips as t")
    .join("users as u", "u.id", "t.user_id")
    .where("t.user_id", userId)
    .insert(newTrip)
}