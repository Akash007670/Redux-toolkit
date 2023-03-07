import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    title: "Learning React",
    description:
      "It's an Amzing Library which ive been using for the past 1.5 years",
  },
  {
    id: 2,
    title: "Learning Redux and Redux Toolkit",
    description: "Started Learing this deeply from today onwards",
  },
  {
    id: 3,
    title: "Learning Node.js",
    description: "Started one month ago but couldn't stick to it.",
  },
];

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postAdded: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(title, description, userId) {
        return {
          payload: {
            id: nanoid(),
            title,
            description,
            userId,
          },
        };
      },
    },
  },
});

export const selectAllPosts = (state) => state.posts;

export const { postAdded } = postsSlice.actions;

export default postsSlice.reducer;
