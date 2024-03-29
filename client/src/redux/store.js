import { configureStore } from "@reduxjs/toolkit";
import loginSlice  from "./Slices/login/index.js";

export const store = configureStore({
  reducer: { login: loginSlice },
});
