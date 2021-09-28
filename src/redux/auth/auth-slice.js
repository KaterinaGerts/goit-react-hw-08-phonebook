import { createSlice } from '@reduxjs/toolkit';
//import authOperations from './auth-operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
};

const AuthSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: {},
})

export default AuthSlice.reducer;