import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "userSlice",
  initialState: {
    isLogin: false,
    userInfo: {
      email: "",
      name: "",
    },
  },
  reducers: {
    login: (state, action) => {
      state.isLogin = true;
      //    state.userInfo={}
    },
    logout: (state, action) => {
      state.isLogin = false;
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
