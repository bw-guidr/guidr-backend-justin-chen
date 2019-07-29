const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const loginRouter = require('../users/loginRouter.js');
const tripsRouter = require("../trips/tripsRouter.js")
const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.get('/', (req, res) => {
    res.status(200).json({ api: 'up' });
  });
  
server.use("/user", loginRouter)
server.use("/trips", tripsRouter)

module.exports = server;
