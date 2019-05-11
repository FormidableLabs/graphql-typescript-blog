import { books, Book } from "../data/books";

export const getById = (bookId: number): Book | void => {
  return books.find(book => book.id === bookId);
};
