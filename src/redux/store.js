import { configureStore } from "@reduxjs/toolkit";
import { apiConfig } from "./apiConfig";
import loginReducer from "./slices/loginSlice"

export const store = configureStore({
  reducer: {
    login: loginReducer,
    [apiConfig.reducerPath]: apiConfig.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiConfig.middleware),
});
