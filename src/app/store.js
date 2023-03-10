import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import postsReducers from "../features/posts/postSlice";
import usersReducers from "../features/users/usersSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    posts: postsReducers,
    users: usersReducers,
  },
});
