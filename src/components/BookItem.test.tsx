import React from "react";
import { render, screen } from "@testing-library/react";
import BookItem from "./BookItem";
import App from "../App";
import { Provider } from "react-redux";
import store from "../store/book-store";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";

describe("Book item", () => {
  //Arrange
  const history = createMemoryHistory({ initialEntries: ["/home"] });

  test("check book data", () => {
    //Act
    render(
      <Provider store={store}>
        <Router history={history}>
          <BookItem
            bookData={{
              title: "book1",
              authors: ["author1"],
              id: "b1",
              shelf: "currentlyReading",
            }}
            shelf="currentlyReading"
          ></BookItem>
        </Router>
      </Provider>
    );

    //Assert
    const authorElement = screen.getByText(/author1/i);
    const bookElement = screen.getByText(/book1/i);
    expect(authorElement).toBeInTheDocument();
    expect(bookElement).toBeInTheDocument();

  });
});
