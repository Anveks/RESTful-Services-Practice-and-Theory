import { NextFunction, Request, Response } from "express";

function queryStringBlocker(request: Request, response: Response, next: NextFunction): void {
  if(Object.keys(request.query).length > 0) {
    response.status(400).send("No query strings allowed!");
    return;
  }
  next();
}

export default queryStringBlocker;

// Object.keys(request.query) returns an array of keys from query strings;