import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./features/categorySlice";
import subcategoryReducer from "./features/subcategorySlice";
import brandReducer from "./features/brandSlice";

export const store = configureStore({
  reducer: {
    category: categoryReducer,
    subcategory: subcategoryReducer,
    brand: brandReducer,
  },
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
