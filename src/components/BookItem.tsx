import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import Book from "../models/book";
import classes from "./BookItem.module.css";
import {
  bookActions,
  useAppDispatch,
} from "../store/book-store";
import { getAll } from "../store/book-actions";

const BookItem: React.FC<{ bookData: Book; shelf: string }> = (props) => {
  const [selectedSelf, setSelectedSelf] = useState<string>(
    props.shelf ? props.shelf : "none"
  );
  const selectRef = useRef<HTMLSelectElement>(null);
  const image = props.bookData?.imageLinks?.smallThumbnail;

  const dispatch = useAppDispatch();

  const changeHandler = (event: React.FormEvent) => {
    var selectedValue = selectRef.current
      ? selectRef.current.value
      : props.shelf;
    setSelectedSelf(selectedValue);
    console.log({ book: props.bookData, shelf: selectedValue });

    dispatch(
      bookActions.moveBook({ book: props.bookData, shelf: selectedValue })
    );

    getAll().then((res) => {
      dispatch(bookActions.setBooks({ items: res }));
    });
  };

  return (
    <div className={classes.book}>
      <div className={classes.top}>
        <div
          className={classes.cover}
          style={{
            width: 128,
            height: 188,
            backgroundImage: `url("${image}")`,
          }}
        ></div>
        <div className={classes.changer}>
          <select value={selectedSelf} onChange={changeHandler} ref={selectRef}>
            <option disabled>Move to...</option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
        </div>
      </div>
      <Link to={`/home/${props.bookData?.id}`}>
        <div className={classes.title}>{props.bookData.title}</div>
      </Link>
      {props.bookData.authors && props.bookData.authors.length > 0 && (
        <div className={classes.authors}>{props.bookData.authors[0]}</div>
      )}
    </div>
  );
};

export default BookItem;
