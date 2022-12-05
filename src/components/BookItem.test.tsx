import React from "react";
import { render, screen } from "@testing-library/react";
import BookItem from "./BookItem";
import App from "../App";

describe("Book item", () => {
  test("check title", () => {
    //Arrange
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () =>
          Promise.resolve({
            title: "book1",
            authors: ["auther1"],
            id: "b1",
            shelf: "currentlyReading",
          }),
      })
    ) as jest.Mock;

    //Act
    <App></App>;

    //Assert
    const linkElement = screen.getByText(/book1/i);
    expect(linkElement).toBeInTheDocument();
  });
  //  window.fetch = jest.fn();
  // window.fetch.mockResolvedValueOnce({
  //   json: async () => [{ id: 'p1', title: 'First post' }],
  // });
  // test('check title', () => {
  // //Act
  // render(<BookItem bookData={{title:"book1",authors:["auther1"],id:"b1",shelf:"currentlyReading"}} shelf="currentlyReading"/>);

  // //Assert
  // const linkElement = screen.getByText(/book1/i);
  // expect(linkElement).toBeInTheDocument();
  //   });
});
