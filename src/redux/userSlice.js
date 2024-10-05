import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  token: null,
  isAuthenticated: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
    }
  }
});

export const { setUser, logout } = userSlice.actions;

export default userSlice.reducer;
