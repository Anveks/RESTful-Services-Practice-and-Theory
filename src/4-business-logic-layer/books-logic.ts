import { BookModel } from "../2-models/book-model";
import dal from "../3-data-access-layer/dal";

async function getAllBooksAsync(): Promise<BookModel[]>{
  const books: BookModel[] = await dal.getAllBooks();
  return books;
}

async function getOneBook(id: number): Promise<BookModel> {
  const books: BookModel[] = await dal.getAllBooks();
  const book: BookModel = books.find(b => b.id === id);
  return book;
}

export default {
  getAllBooksAsync,
  getOneBook
}