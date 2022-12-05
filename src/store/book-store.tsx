import { createSlice, configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import Book from "../models/book";
import { update } from "./book-actions";

type BooksContextObj = {
  items: Book[];
};

const initialState: BooksContextObj = { items: [] };
const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    moveBook(state, action) {
      update(action.payload.book, action.payload.shelf).then(() => {
      });
    },

    setBooks(state, action) {
      state.items = action.payload.items;
    },
  },
});

const store = configureStore({
  reducer: bookSlice.reducer,
});

export const bookActions = bookSlice.actions;

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;

export const selectbooks = (state: RootState) => state;
