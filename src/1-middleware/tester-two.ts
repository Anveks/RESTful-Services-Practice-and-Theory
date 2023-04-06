import { NextFunction, Request, Response } from "express";

function tester2(request: Request, repsonse: Response, next: NextFunction): void {
  console.log("second tester (before next).");
  next();
  console.log("second tester (after next).");
}

export default tester2;