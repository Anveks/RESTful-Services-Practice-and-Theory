import { NextFunction, Request, Response } from "express";
import { appendFile } from "fs/promises";

async function logger(request: Request, reponse: Response, next: NextFunction){
  try {
    const now = new Date();
    const time = now.toLocaleString();
    const method = request.method;
    const url = request.url;
    const message = `Time: ${time}, Method: ${method}, URL: ${url} \n -------------------------- \n`;
    appendFile("./logs.txt", message);
    next(); // non-blocking middleware
  } 
  catch(err: any){
    console.log(err.message);
  }
}

export default logger;