import { NextFunction, Request, Response } from "express";

function errorsHandler(err: any, request: Request, response: Response, next: NextFunction) {

  if (err instanceof Error) {
    response.status(500).send(err.message);
    return;
  } 

  if (typeof err === 'string') {
    response.status(500).send(err);
    return;
  }

  response.status(500).send("Some error...");
}

export default errorsHandler;