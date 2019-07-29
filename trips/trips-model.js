const db = require("../database/dbConfig.js")

module.exports = {
    get,
    getById,
    insert,
    update,
    remove
}

function get() {
    return db('trips');
  }
  
  function getById(id) {
    return db('trips')
      .where({ id })
      .first();
  }
  
  function insert(trip) {
    return db('trips')
      .insert(trip)
      .then(ids => {
        return getById(ids[0]);
      });
  }
  
  function update(id, changes) {
    return db('trips')
      .where({ id })
      .update(changes);
  }
  
  function remove(id) {
    return db('trips')
      .where({ id })
      .del();
  }
  