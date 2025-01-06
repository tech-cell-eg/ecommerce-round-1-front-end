import { createReducer } from "@reduxjs/toolkit";
import { setUser, signOut } from "../actions/userActions";

const initialState = {
  id: null,
  name: "",
  email: "",
  // image: null,
  token: "",
};

const userReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setUser, (state, action) => {
      return { ...state, ...action.payload };
    })
    .addCase(signOut, () => initialState);
});

export default userReducer;
