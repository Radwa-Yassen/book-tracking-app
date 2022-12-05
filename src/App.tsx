import { Switch, Route, Redirect } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";
import BookDetails from "./pages/BookDetailsPage";

function App() {
  return (
    <Switch>
      <Route path="/" exact>
        <Redirect to="/home" />
      </Route>
      <Route path="/home" exact>
        <HomePage />
      </Route>
      <Route path="/home/:bookId" exact>
        <BookDetails />
      </Route>
      <Route path="/search" exact>
        <SearchPage />
      </Route>
    </Switch>
  );
}

export default App;
