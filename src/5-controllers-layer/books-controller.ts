import express, { NextFunction, Request, Response } from 'express';
import logic from '../4-business-logic-layer/books-logic'

const router = express.Router();

// defining GET method + route + response
// http://localhost:3001/api/books
router.get("/api/books", async (request: Request, response: Response, next: NextFunction) => {
  const books = await logic.getAllBooksAsync();
  response.json(books); // data returned is already in json format
});

router.get("/api/books/:id", async (request: Request, response: Response) => {
  const id = request.params.id
  const book = await logic.getOneBook(+id);
  console.log(book);
  response.json(book); // data returned is already in json format
});

export default router;