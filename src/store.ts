import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./features/categorySlice";
import brandReducer from "./features/brandSlice";

export const store = configureStore({
  reducer: {
    category: categoryReducer,
    brand: brandReducer,
  },
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
