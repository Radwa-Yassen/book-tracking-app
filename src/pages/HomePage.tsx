import { Link } from "react-router-dom";
import classes from "./HomePage.module.css";
import BooksShelves from "../components/BooksShelves";

const HomePage: React.FC = (props) => {

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
