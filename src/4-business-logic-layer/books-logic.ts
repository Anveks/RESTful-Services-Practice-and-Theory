import { BookModel } from "../2-models/book-model";
import ErrorModel from "../2-models/error-model";
import dal from "../3-data-access-layer/dal";

async function getAllBooksAsync(): Promise<BookModel[]>{
  const books: BookModel[] = await dal.getAllBooks();
  return books;
}

async function getOneBook(id: number): Promise<BookModel> {
  if (!id) return null;
  const books: BookModel[] = await dal.getAllBooks();
  const book: BookModel = books.find(b => b.id === id);
  if (!book) throw new ErrorModel(404, `Item with ID ${id} is not found!`); // throw behaves as 'return' when triggered
  return book; 
}

async function addNewBook(book: BookModel): Promise<BookModel> {
  // joi validation here:
  const err = book.validatePost();
  if (err) throw new ErrorModel(404, err);
  const books: BookModel[] = await dal.getAllBooks();
  const newId: number = books.reduce((max, b) => max.id ? b : max).id + 1;
  book.id = newId;
  await dal.saveAllBooks(books);
  return book;
}

async function deleteBook(id: number): Promise<boolean>{
  const books: BookModel[] = await dal.getAllBooks();
  const index: number = books.findIndex(b =>  b.id === id);
  if (index === -1) return false;
  books.splice(index, 1);
  await dal.saveAllBooks(books);
  return true;
}

export default {
  getAllBooksAsync,
  getOneBook,
  deleteBook,
  addNewBook
}