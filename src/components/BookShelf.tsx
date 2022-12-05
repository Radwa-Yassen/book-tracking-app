import React from "react";
import Book from "../models/book";
import shelf from "../models/shelf";
import BookItem from "./BookItem";
import classes from "./BookShelf.module.css";

const BookShelf: React.FC<{
  shelfData: shelf;
  books?: Book[];
}> = (props) => {
  return (
    <div className={classes.bookshelf}>
      <h2 className={classes.title}>{props.shelfData.title}</h2>
      {props.books && props.books.length > 0 && (
        <div className={classes.books}>
          <ol className={classes.grid}>
            {props.books &&
              props.books.map((book: Book) => (
                <li key={book.id}>
                  <BookItem
                    bookData={book}
                    shelf={props.shelfData.id}
                  ></BookItem>
                </li>
              ))}
          </ol>
        </div>
      )}
      {(!props.books || props.books.length === 0) && (
        <p>There is no books to show</p>
      )}
    </div>
  );
};

export default BookShelf;
