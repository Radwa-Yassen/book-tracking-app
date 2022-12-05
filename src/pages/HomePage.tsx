import { Link } from "react-router-dom";
//import { getAll, update } from "../store/book-actions";
import classes from "./HomePage.module.css";
//import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import BooksShelves from "../components/BooksShelves";
//import { RootState, selectbooks, useAppDispatch } from "../store";

//const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

const HomePage: React.FC = (props) => {
  //const dispatch = useAppDispatch();
  //const state = useTypedSelector(selectbooks);

  //console.log(state[0]);

  //   const WTRBooks= books.map((book:Book)=>{
  // return book.shelf==="wantToRead";
  //   });

  //   const RBooks= books.map((book:Book)=>{
  // return book.shelf==="Read";
  //   });

  //   const moveBookHandler = (book: Book, shelf: string) => {
  //  update(book,shelf).then((res=> console.log(res)));
  //   };

  return (
    <div className={classes.page}>
      <div className={classes.title}>
        <h1>MyReads</h1>
      </div>
      <div className={classes.content}>
        <BooksShelves></BooksShelves>
      </div>
      <div className={classes.search}>
        <Link to="/search">Search</Link>
      </div>
    </div>
  );
};

export default HomePage;
