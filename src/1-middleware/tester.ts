import { NextFunction, Request, Response } from "express";

function tester(request: Request, repsonse: Response, next: NextFunction): void {
  console.log("tester (before next).");
  next();
  console.log("tester (after next).");
}

export default tester;