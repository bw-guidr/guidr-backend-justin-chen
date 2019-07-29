const express = require('express');

const dbTrips = require("./trips-model.js");

const { authenticate } = require('../auth/authenticate');

const router = express.Router();

router.get('/all', (req, res) => {
    dbTrips
    .get()
    .then(trips => {
        res.status(200).json(trips)
    })
    .catch(error => {
        res.status(500).json(error)
    })
});

router.post("/", authenticate, (req, res) => {
    const trip = req.body

    dbTrips
    .insert(trip)
    .then(trip => {
        res.status(201).json(trip)
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

router.get('/:id', validateTripId, (req, res) => {
    const id = req.params.id

    dbTrips
    .getById(id)
    .then(post => {
        res.status(200).json(post)
    })
    .catch(error => {
        res.status(500).json(error)
    })
});

router.delete('/:id', authenticate, (req, res) => {
    const id = req.params.id

    dbTrips
    .remove(id)
    .then(trip => {
        res.status(200).json({ message: `ID ${id} deleted`})
    })
    .catch(err => {
        res.status(500).json(err)
    })
});

router.put('/:id', authenticate, validateTripId, (req, res) => {
    const post = req.body
    const id = req.params.id

    dbTrips
    .update(id, post)
    .then(post => {
        res.status(200).json(post)
    })
    .catch(error => {
        res.status(500).json(error)
    })
});

// custom middleware

function validateTripId(req, res, next) {
    const id = req.params.id

    dbTrips
    .getById(id)
    .then(post => {
        if(!post){
            res.status(404).json( {error: "ID not found" } )
        } else {
            next();
        }})
    .catch(error => {
        res.status(500).json( {error: "Something went wrong"} )
    })
};

module.exports = router;