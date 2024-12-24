import { createReducer } from '@reduxjs/toolkit';
import { setUser } from '../actions/userActions';

const initialState = {
  id: null,
  name: '',
  email: ''
};

const userReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setUser, (state, action) => {
      return { ...state, ...action.payload };
    });
});

export default userReducer;