import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./features/categorySlice";
import subcategoryReducer from "./features/subcategorySlice";
import brandReducer from "./features/brandSlice";
import productReducer from "./features/productSlice";
import authReducer from "./features/authSlice";
import userReducer from "./features/userSlice";
import addressReducer from "./features/addressSlice";
import wishlistReducer from "./features/wishlistSlice";
import cartReducer from "./features/cartSlice";
import couponReducer from "./features/couponSlice";
import orderReducer from "./features/orderSlice";
import reviewReducer from "./features/reviewSlice";

export const store = configureStore({
  reducer: {
    category: categoryReducer,
    subcategory: subcategoryReducer,
    brand: brandReducer,
    product: productReducer,
    auth: authReducer,
    user: userReducer,
    address: addressReducer,
    wishlist: wishlistReducer,
    cart: cartReducer,
    coupon: couponReducer,
    order: orderReducer,
    review: reviewReducer,
  },
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
