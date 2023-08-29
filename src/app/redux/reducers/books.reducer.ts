import { createReducer, on } from "@ngrx/store";
import { Book } from "src/models/book.model";
import { BooksApiActions } from "../actions/books.actions";

const initialState: ReadonlyArray<Book> = [];
export const BooksReducer = createReducer(
    initialState,
    on(BooksApiActions.retrievedBookList, (_state, { books }) => books)
);