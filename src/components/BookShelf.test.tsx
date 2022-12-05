import { render, screen } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";
import store from "../store/book-store";
import BookShelf from "./BookShelf";

describe("Book shelf component", () => {
  //Arrange
  const history = createMemoryHistory({ initialEntries: ["/home"] });
  test("renders shelf title", () => {
    //  Act
    render(
      <BookShelf
        shelfData={{ id: "currentlyReading", title: "Currently Reading" }}
      />
    );

    // Assert
    const shelfTitleElement = screen.getByText("Currently Reading");
    expect(shelfTitleElement).toBeInTheDocument();
  });
  test("renders shelf with no books", () => {
    // Act
    render(<BookShelf shelfData={{ id: "read", title: "Reads" }} />);
    const emptyMSGElement = screen.getByText("There is no books to show");
    expect(emptyMSGElement).toBeInTheDocument();
  });
  test("renders shelf with books", () => {
    // Act
    render(
      <Provider store={store}>
        <Router history={history}>
          <BookShelf
            shelfData={{ id: "read", title: "Reads" }}
            books={[
              { id: "b1", title: "book1", shelf: "read", authors: ["author1"] },
            ]}
          />
        </Router>
      </Provider>
    );
    // Assert
    const emptyMSGElement = screen.queryByText(/no books to show/i);
    expect(emptyMSGElement).toBeNull();
  });
  test("renders shelf with books and check book author", () => {
    // Act
    render(
      <Provider store={store}>
        <Router history={history}>
          <BookShelf
            shelfData={{ id: "read", title: "Reads" }}
            books={[
              { id: "b1", title: "book1", shelf: "read", authors: ["author1"] },
            ]}
          />
        </Router>
      </Provider>
    );
    // Assert
    const authorNameElement = screen.getByText(/author1/i);
    expect(authorNameElement).toBeInTheDocument();
  });
});
