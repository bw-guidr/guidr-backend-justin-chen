const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
// const express = require("express");

const Users = require("./login-model.js");
const secrets = require("./secrets.js")

router.post("/register", (req, res) => {
  // implement user registration
  let user = req.body
  const hash = bcrypt.hashSync(user.password, 14);
  user.password = hash

  Users.add(user)
    .then(saved => {
      res.status(201).json(saved)
    })
    .catch(err => {
      res.status(500).json(err)
    })
})

router.post("/login", (req, res) => {
  let { username, password } = req.body

  Users.findBy({ username })
    .then(user => {
      console.log(user)
      if (user && bcrypt.compareSync(password, user.password)) {

        const token = generateToken(user)

        res.status(200).json({
          message: `Login successful, ${user.username}`,
          token //res.body = message, token
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