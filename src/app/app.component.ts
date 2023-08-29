import { Component, OnInit } from '@angular/core';
import { GoogleBooksService } from './services/books.service';
import { Store } from '@ngrx/store';
import { BooksActions, BooksApiActions } from './redux/actions/books.actions';
import { SelectBookCollection, SelectBooks } from './redux/selectors/books.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  books$ = this.store.select(SelectBooks);
  bookCollection$ = this.store.select(SelectBookCollection);

  constructor(private bookService: GoogleBooksService, private store: Store) { }

  ngOnInit() {
    this.bookService
      .getBooks()
      .subscribe(books => this.store.dispatch(BooksApiActions.retrievedBookList({ books })));
  }

  onAdd(bookId: string) {
    this.store.dispatch(BooksActions.addBook({ bookId }));
  }

  onRemove(bookId: string) {
    this.store.dispatch(BooksActions.removeBook({ bookId }));
  }


}
