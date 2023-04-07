import dotenv from "dotenv";
import express, { NextFunction, Request, Response } from 'express';
import logger from './1-middleware/logger';
import tester from './1-middleware/tester';
import booksController from './5-controllers-layer/books-controller';
import queryStringBlocker from "./1-middleware/query-string-blocker";
import errorsHandler from "./1-middleware/errors-handler";
import  ErrorModel  from "./2-models/error-model";

if (process.env.NODE_ENV === "production") {
  global.config = require("../config.json").production;
} else {
  global.config = require("../config.json").development;
}

dotenv.config();

const server = express(); // express is a function 

server.use(logger);
server.use(queryStringBlocker);
server.use(tester); // pre-route middleware

server.use(booksController); // use is a middleware function that tells the server which controller/s to use.

server.use("*", (request: Request, response: Response, next: NextFunction) => {
  next(new ErrorModel(404, "Route not found..."))
}); // error handling in case route not found

server.use(errorsHandler); 

server.listen(process.env.PORT, () =>  console.log(`Listening on http://localhost:${process.env.PORT}`)); // starting the server