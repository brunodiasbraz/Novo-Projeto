const express = require("express");
require('dotenv').config()
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const req = require("express/lib/request");
const routes = require('./routes');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const corsoption={
  origin:"http://localhost", //origin from where you requesting
  credentials:true
  }
  const app = express();
  app.use(cors(corsoption));
app.use(cookieParser());
app.use(express.json());
app.use(routes);


const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASS;

mongoose.connect(
  `mongodb+srv://${dbUser}:${dbPassword}@nossoclube.d7xa57q.mongodb.net/?retryWrites=true&w=majority`
).then(() => {
  console.log("Conectou ao banco!");
  app.listen(3000);
}).catch((err) => console.log(err));
















