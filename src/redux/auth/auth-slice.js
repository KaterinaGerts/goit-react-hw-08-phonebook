import { createSlice } from '@reduxjs/toolkit';
import { regicterUser } from './auth-operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
};

const AuthSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [regicterUser.fulfilled](state, { payload }) {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
    },
  },
});

export default AuthSlice.reducer;
