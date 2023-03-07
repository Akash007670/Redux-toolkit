import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "0",
    name: "Akash Kumar",
  },
  {
    id: "1",
    name: "Roshan Kumar",
  },
  {
    id: "2",
    name: "Abhi Kumar",
  },
];

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export const selectAllUsers = (state) => state.users;

export default userSlice.reducer;
