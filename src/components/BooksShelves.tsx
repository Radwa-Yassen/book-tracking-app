import { useEffect, useState } from "react";
import Book from "../models/book";
import shelf from "../models/shelf";
import BookShelf from "./BookShelf";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { bookActions, RootState, selectbooks, useAppDispatch } from "../store/book-store";
import { getAll } from "../store/book-actions";

const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;


const BooksShelves: React.FC = (props) => {

  const dispatch = useAppDispatch();
  const state = useTypedSelector(selectbooks);


  const shelf1: shelf = { title: "Currently Reading", id: "currentlyReading" };
  const shelf2: shelf = { title: "Want to Read", id: "wantToRead" };
  const shelf3: shelf = { title: "Read", id: "read" };

  const [CRbooksList, setCRbooksList] = useState<Book[]>([]);
  const [WTRbooksList, setWTRbooksList] = useState<Book[]>([]);
  const [RbooksList, setRbooksList] = useState<Book[]>([]);

  useEffect(()=>{

    getAll().then((res)=>{
      dispatch(bookActions.setBooks({items:res}));
    });
  },[dispatch,state])

  useEffect(() => {
    const books = state.items;
    var CRBooks = books.filter((book: Book) => {
      return book.shelf === "currentlyReading";
    });
    var WTRBooks = books.filter((book: Book) => {
      return book.shelf === "wantToRead";
    });
    var RBooks = books.filter((book: Book) => {
      return book.shelf === "read";
    });
    setCRbooksList(CRBooks);
    setWTRbooksList(WTRBooks);
    setRbooksList(RBooks);
  }, [state]);

  return (
    <div>
      <BookShelf shelfData={shelf1} books={CRbooksList}></BookShelf>
      <BookShelf shelfData={shelf2} books={WTRbooksList}></BookShelf>
      <BookShelf shelfData={shelf3} books={RbooksList}></BookShelf>
    </div>
  );
};

export default BooksShelves;
