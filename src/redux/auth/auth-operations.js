import { createAsyncThunk } from '@reduxjs/toolkit';
import * as authApi from 'services/auth-api';
// import axios from 'axios';

export const regicterUser = createAsyncThunk(
  'auth/regicterUser',
  async (credentials, { rejectWithValue }) => {
    try {
      const contacts = await authApi.register(credentials);
      return contacts;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const logInUser = createAsyncThunk(
  'auth/logInUser',
  async (credentials, { rejectWithValue }) => {
    try {
      const contacts = await authApi.logIn(credentials);
      return contacts;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const logOutUser = createAsyncThunk(
  'auth/logOutUser',
  async (_, { rejectWithValue }) => {
    try {
      await authApi.logOut();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const saveCurrentUser = createAsyncThunk(
  'auth/saveCurrentUser',
  async (_, thunkAPI) => {
    console.log(thunkAPI);
    const state = thunkAPI.getState();   
    const currentToken = state.authorization.token;
    if (currentToken === null) {
      return thunkAPI.rejectWithValue();
    }
    try {
      const data = await authApi.currentUser(currentToken);
      return data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  },
);

// axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

// const token = {
//   set(token) {
//     axios.defaults.headers.common.Authorization = `Bearer ${token}`;
//   },
//   unset() {
//     axios.defaults.headers.common.Authorization = '';
//   },
// };

// export const saveCurrentUser = createAsyncThunk(
//   'auth/refresh',
//   async (_, thunkAPI) => {
//     const state = thunkAPI.getState();
//     const persistedToken = state.auth.token;

//     if (persistedToken === null) {//
//       return thunkAPI.rejectWithValue();
//     }

//     token.set(persistedToken);
//     try {
//       const { data } = await axios.get('/users/current');
//       return data;
//     } catch (error) {
//       // TODO: Добавить обработку ошибки error.message
//     }
//   },
// );
