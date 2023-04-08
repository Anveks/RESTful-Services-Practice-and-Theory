import express, { NextFunction, Request, Response } from 'express';
import logic from '../4-business-logic-layer/books-logic'
import ErrorModel from '../2-models/error-model';
import { BookModel } from '../2-models/book-model';

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

// get one book route including :id([0-9]+) RegEx (Regular Expression) check on item id;
router.get("/api/books/:id", async (request: Request, response: Response, next: NextFunction) => {
  try {
    // validation + error handling demo:
    const id = +request.params.id;
    if(id <= 0) {
      next("Id cannot be equal or less than zero!");
      return;
    }
    const book = await logic.getOneBook(+id);
    if (!book) next(new ErrorModel(404, `Item with ID ${id} not found!`))
    response.json(book); // data returned is already in json format
  } catch(err: any) {
    next(err);
  }
});

router.post("/api/books)", async (request: Request, response: Response, next: NextFunction) => {
  try {
    const book: BookModel = new BookModel(request.body);
    // joi validation here:
    const err = book.validatePost();
    if (err) { 
      next(new ErrorModel(400, err));
      return; 
    }
    const newBook: BookModel = await logic.addNewBook(book);
    response.status(201).json(newBook);
  } catch(err: any) {
    next(err);
  }
});

router.delete("/api/books/:id", async (request: Request, response: Response, next: NextFunction) => {
  try {
    // validation + error handling demo:
    const id = +request.params.id;
    if(id <= 0) {
      next("Id cannot be equal or less than zero!");
      return;
    }
    const deletedBook = await logic.deleteBook(+id);
    if (!deletedBook) {
      next(new ErrorModel(404, `Item with ID ${id} not found!`))
    } else {
      response.status(204).send("An item has been deleted!");
    }
    
  } catch(err: any) {
    next(err);
  }
});

export default router;