import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";
import BooksShelves from "./BooksShelves";
import { createMemoryHistory } from "history";
import store from "../store/book-store";

describe("Book Shelves component", () => {
  //Arrange
  const history = createMemoryHistory({ initialEntries: ["/home"] });
  test("renders book Shelves content", () => {
    //  Act
    render(
      <Provider store={store}>
        <Router history={history}>
          <BooksShelves />
        </Router>
      </Provider>
    );
    // Assert
    const CRShelfTitleElement = screen.getByText("Currently Reading");
    const WTRShelfTitleElement = screen.getByText("Want to Read");
    const RShelfTitleElement = screen.getByText("Read");
    expect(CRShelfTitleElement).toBeInTheDocument();
    expect(WTRShelfTitleElement).toBeInTheDocument();
    expect(RShelfTitleElement).toBeInTheDocument();
  });
});
