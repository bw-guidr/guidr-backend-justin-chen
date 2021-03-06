const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
// const express = require("express");

const Users = require("./login-model.js");
const secrets = require("./secrets.js")

const { authenticate } = require('../auth/authenticate');


router.post("/register", (req, res) => {
  // implement user registration
  let user = req.body

  if (user.username.length > 0 && user.password.length >= 5) {
    const hash = bcrypt.hashSync(user.password, 14);
    user.password = hash

    Users.add(user)
      .then(user => {
        res.status(201).json(user)
      })
      .catch(err => {
        res.status(500).json(err)
      })
  } else {
    res.status(400).json({
      message: "Username can't be blank and Password must be 5 or more characters"
    })
  }
})

router.post("/login", (req, res) => {
  let { username, name, password } = req.body

  Users.findBy({ username })
    .then(user => {
      console.log(user)
      if (user && bcrypt.compareSync(password, user.password)) {

        const token = generateToken(user)

        res.status(200).json({
          user,
          message: `Login successful, ${user.name}`,
          token
        })
      } else {
        res.status(401).json({ message: "Username and Password incorrect" })
      }
    })
    .catch(error => {
      console.log(error)
      res.status(500).json(error)
    })
})

router.get("/all", (req, res) => {
  Users
    .getAllUsers()
    .then(users => {
      res.status(200).json(users)
    })
    .catch(err => {
      res.status(500).json(err)
    })
})

router.get("/:id", (req, res) => {
  const id = req.params.id

  Users
    .findById(id)
    .then(user => {
      res.status(200).json(user)
    })
    .catch(err => {
      res.status(500).json(err)
    })
})

router.get("/:id/trips", (req, res) => {
  const id = req.params.id
  Users
    .getUserTrips(id)
    .then(trips => {
      res.status(200).json(trips)
    })
    .catch(err => {
      res.status(500).json(err)
    })
})

router.post("/:id/trips", authenticate, (req, res) => {
  const newTrip = req.body
  const id = req.params.id

  Users
    .insert(id, newTrip)
    .then(trip => {
      res.status(201).json(trip)
    })
    .catch(err => {
      res.status(500).json(err)
    })
})



function generateToken(user) {
  const jwtPayload = {
    id: user.id,
    username: user.username,
  };

  const jwtOptions = {
    expiresIn: '1d',
  };
  return jwt.sign(jwtPayload, secrets.jwtSecret, jwtOptions);
}

module.exports = router
