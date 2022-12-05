import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import BookItem from "../components/BookItem";
import Book from "../models/book";
import { search } from "../store/book-actions";
import classes from "./SearchPage.module.css";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState, selectbooks } from "../store/book-store";

const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

const SearchPage: React.FC = (props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [booksList, setbooksList] = useState<Book[]>([]);
  const state = useTypedSelector(selectbooks);

  const changeHandler = (event: React.FormEvent) => {
    var inputValue = inputRef.current ? inputRef.current.value : "";
    if (inputValue) {
      search(inputValue, 10).then((res: Book[]) => {
        if (res && res.length > 0) {
          setbooksList(res);
        } else {
          setbooksList([]);
        }
      });
    } else {
      setbooksList([]);
    }
  };

  if (booksList && booksList.length > 0 && state.items?.length > 0) {
     booksList.map((book: Book) => {
      var mappedBook = state.items.find((b) => {
        return book.id === b.id;
      });
      book.shelf = mappedBook ? mappedBook.shelf : "";
      return book;
    });
  }
  return (
    <div>
      <div className={classes.bar}>
        <Link to="/" className={classes.close}>
          Home
        </Link>
        <div className={classes.wrapper}>
          <input
            type="text"
            placeholder="Search by title, author, or ISBN"
            onChange={changeHandler}
            ref={inputRef}
          />
        </div>
      </div>
      <div className={classes.results}>
        <ol className={classes.grid}>
          {booksList &&
            booksList.map((book: Book) => (
              <li key={book.id}>
                <BookItem bookData={book} shelf={book.shelf}></BookItem>
              </li>
            ))}
        </ol>
      </div>
    </div>
  );
};

export default SearchPage;
