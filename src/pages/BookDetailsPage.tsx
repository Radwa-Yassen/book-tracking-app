import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Book from "../models/book";
import { get } from "../store/book-actions";
import classes from "./BookDetailsPage.module.css";

const BookDetails: React.FC = (props) => {
  const params = useParams<{ bookId: string }>();
  const [book, setBook] = useState<Book>();
  const image = book?.imageLinks?.smallThumbnail;

  useEffect(() => {
    get(params.bookId).then((res: Book) => {
      if (res) {
        setBook(res);
      }
    });
  }, [params.bookId]);

  return (
    <div className={classes.page}>
      <div className={classes.title}>
        <h1>Book Details</h1>
      </div>
      {book && (
        <div>
          <div
            className={classes.cover}
            style={{
              width: 128,
              height: 188,
              backgroundImage: `url("${image}")`,
            }}
          ></div>
          <title>{book?.title}</title>
          <div>Authors : </div>
          {book?.authors && book.authors.map((a) => <p key={a}>{a}</p>)}

          <div>
            Disciption : <p>{book.description}</p>
          </div>

          <div><a href={book.previewLink} target="blank">Preview link</a></div>
        </div>
      )}

      {!book && <p>No book with this id</p>}
    </div>
  );
};

export default BookDetails;
