import express from 'express';
import booksController from './5-controllers-layer/books-controller';
import dotenv from "dotenv";
import tester from './1-middleware/tester';
import tester2 from './1-middleware/tester-two'

if (process.env.NODE_ENV === "production") {
  global.config = require("../config.json").production;
} else {
  global.config = require("../config.json").development;
}

dotenv.config();

const server = express(); // express is a function 

// server.use(tester); // pre-route
// server.use(tester2); // pre-route

server.use(booksController); // use is a middleware function that tells the server which controller/s to use.

server.use(tester); // pre-route
server.use(tester2); // pre-route

server.listen(process.env.PORT, () =>  console.log(`Listening on http://localhost:${process.env.PORT}`)); // starting the server