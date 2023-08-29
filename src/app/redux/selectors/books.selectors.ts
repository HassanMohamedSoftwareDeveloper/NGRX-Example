import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Book } from "src/models/book.model";

export const SelectBooks = createFeatureSelector<ReadonlyArray<Book>>("Books");

export const SelectCollectionState = createFeatureSelector<ReadonlyArray<string>>("Collection");

export const SelectBookCollection = createSelector(
    SelectBooks,
    SelectCollectionState,
    (books, collection) => {
        return collection.map((id) => books.find((book) => book.id === id)!);
    }
);