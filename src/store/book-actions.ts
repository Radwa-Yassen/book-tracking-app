//import { bookActions } from ".";
import Book from "../models/book";

const api = "https://reactnd-books-api.udacity.com";

let token = localStorage.token;

if (!token) token = localStorage.token = Math.random().toString(36).substr(-8);

const headers = {
  Accept: "application/json",
  Authorization: token,
};

// export const fetchBooksList = () => {
//   return async (dispatch: any) => {
//     const fetchData = async () => {
//       const response = await fetch(`${api}/books`, { headers });

//       if (!response.ok) {
//         throw new Error("Could not fetch cart data!");
//       }

//       const data = await response.json();

//       return data;
//     };

//     try {
//       const booksData = await fetchData();
//       dispatch(
//         bookActions.setBooks({
//           items: booksData || [],
//         })
//       );
//     } catch (error) {
//       console.log(error);
//     }
//   };
// };

export const get = (bookId: string): Promise<Book> => {
  return fetch(`${api}/books/${bookId}`, { headers })
    .then((res) => res.json())
    .then((data) => data.book);
};

export const getAll = (): Promise<Book[]> => {
  return fetch(`${api}/books`, { headers })
    .then((res) => res.json())
    .then((data) => data.books);
};

export const update = (book: Book, shelf: string): Promise<Book> => {
  return fetch(`${api}/books/${book.id}`, {
    method: "PUT",
    headers: {
      ...headers,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ shelf }),
  }).then((res) => res.json());
};

export const search = (query: string, maxResults: number): Promise<Book[]> => {
  return fetch(`${api}/search`, {
    method: "POST",
    headers: {
      ...headers,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query, maxResults }),
  })
    .then((res) => res.json())
    .then((data) => data.books);
};
