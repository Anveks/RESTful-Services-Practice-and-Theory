import express, { NextFunction, Request, Response } from 'express';
import logic from '../4-business-logic-layer/books-logic'

const router = express.Router();

// defining GET method + route + response
// http://localhost:3001/api/books
router.get("/api/books", async (request: Request, response: Response, next: NextFunction) => {

  try {
      // error handling demo:
      if (Math.random() < 0.5) throw new Error("Something went wrong...");
  
      const books = await logic.getAllBooksAsync();
      response.json(books); // data returned is already in json format
  } catch (err: any) {
    next(err);
  }

});

router.get("/api/books/:id", async (request: Request, response: Response, next: NextFunction) => {

  // validation + error handling demo:
  const id = +request.params.id;
  if(id <= 0) {
    next("Id cannot be equal or less than zero!");
    return;
  }
  const book = await logic.getOneBook(+id);
  console.log(book);
  response.json(book); // data returned is already in json format
});

export default router;