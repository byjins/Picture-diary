import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'loginUser',
  initialState: {
    isLoggedIn: false,
    info: {
      id: '',
      name: '',
      email: '',
    },
  },
  reducers: {
    setInfo: (state, action) => {
      state.isLoggedIn = true;
      state.info = action.payload;
    },
    logOut: (state, action) => {
      state.isLoggedIn = false;
      state.info = { id: '', name: '', email: '' };
    },
  },
});

export const { setInfo, logOut } = slice.actions;

export default slice.reducer;
