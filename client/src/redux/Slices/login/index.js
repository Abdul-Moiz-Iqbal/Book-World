import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
  name: "login",
  initialState: {
    loginTogle: false,
  },
  reducers: {
    isLoginOpen: (state) => {
      state.loginTogle = !state.loginTogle;
    },
  },
});

export const { isLoginOpen } = loginSlice.actions;
export default loginSlice.reducer;
