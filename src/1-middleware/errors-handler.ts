import { NextFunction, Request, Response } from "express";
import ErrorModel from "../2-models/error-model";

function errorsHandler(err: any, request: Request, response: Response, next: NextFunction) {

  // case of Error object:
  if (err instanceof Error) {
    response.status((err as any).status || 500).send(err.message);
    return;
  } 

  // case of custom ErrorModel:
  if(err instanceof ErrorModel) {
    response.status(err.status).send(err.message);
  }

  // case of any other err type:
  if (typeof err === 'string') {
    response.status(500).send(err);
    return;
  }

  // after throwing err message - continue to the next functon: 
  next();
}

export default errorsHandler;