import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import LoginUserSlice from './User/loginUserSlice';

const middleware = [...getDefaultMiddleware(), logger];

export const store = configureStore({
  reducer: {
    loginUser: LoginUserSlice,
  },
  middleware,
});
