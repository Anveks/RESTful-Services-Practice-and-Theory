import { BookModel } from "../2-models/book-model";
import { readFile, writeFile } from "fs/promises";

async function getAllBooks(): Promise<BookModel[]>{
  const content: string = await readFile(global.config.database.file, "utf-8");
  const books: BookModel[] = JSON.parse(content);
  return books;
}

async function saveAllBooks(books: BookModel[]): Promise<void>{
  const content: string = JSON.stringify(books, null, 4);
  await writeFile(global.config.database.file, content);
}

export default {
  getAllBooks,
  saveAllBooks
}