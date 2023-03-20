import { configureStore } from "@reduxjs/toolkit";
import api from "./api/api";
import authReducer from "./reducer/authSlice/authSlice";

const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    auth: authReducer

  },
  devTools: import.meta.env.DEV,
  middleware: (getDefaultMiddlewares) =>
    getDefaultMiddlewares().concat(api.middleware)
})

export default store;