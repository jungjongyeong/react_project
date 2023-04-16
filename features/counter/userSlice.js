import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,

  },
  reducers: {
    login: (state, action) => { // login에 대한 정보면 이걸 실행
      state.user = action.payload; // login하면 유저의 정보들이 state.user에 들어간다.
    },
    logout: (state) => { // logout에 대한 정보면 이걸 실행
      state.user = null;
    },
  },

});

export const { login, logout } = userSlice.actions;

export const selectUser = (state) => state.user.user;



export default userSlice.reducer;
