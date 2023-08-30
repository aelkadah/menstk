import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getDataTokenWithoutParams } from "../helpers/getData";
import notify from "../helpers/notify";
import { insertDataToken } from "../helpers/insertData";
import { deleteData } from "../helpers/deleteData";
import { updateData } from "../helpers/updateData";

const initialState = {
  loading: false,
  error: null,
  cart: null,
};

export const loggedUserCart = createAsyncThunk(
  "cart/loggedCart",
  async (data, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await getDataTokenWithoutParams("/api/v1/cart");
      return res.data;
    } catch (err) {
      if (err.response?.data?.message)
        return rejectWithValue(err.response.data.message);
      else return rejectWithValue(err.message);
    }
  }
);

export const addToCart = createAsyncThunk(
  "cart/add",
  async (data, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await insertDataToken("/api/v1/cart", data);
      return res.data;
    } catch (err) {
      if (err.response?.data?.message)
        return rejectWithValue(err.response.data.message);
      else return rejectWithValue(err.message);
    }
  }
);

export const removeCartItem = createAsyncThunk(
  "cart/removeItem",
  async (id, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await deleteData(`/api/v1/cart/${id}`);
      return res.data;
    } catch (err) {
      if (err.response?.data?.message)
        return rejectWithValue(err.response.data.message);
      else return rejectWithValue(err.message);
    }
  }
);

export const clearUserCart = createAsyncThunk(
  "cart/clear",
  async (data, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await deleteData("/api/v1/cart");
      return res.data;
    } catch (err) {
      if (err.response?.data?.message)
        return rejectWithValue(err.response.data.message);
      else return rejectWithValue(err.message);
    }
  }
);

export const applyCouponToCart = createAsyncThunk(
  "cart/applyCoupon",
  async (data, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await updateData("/api/v1/cart/applyCoupon", data);
      return res.data;
    } catch (err) {
      if (err.response?.data?.message)
        return rejectWithValue(err.response.data.message);
      else return rejectWithValue(err.message);
    }
  }
);

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loggedUserCart.pending, (state, action) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(loggedUserCart.fulfilled, (state, action) => {
      state.cart = action?.payload;
      state.loading = false;
      state.error = null;
    });
    builder.addCase(loggedUserCart.rejected, (state, action) => {
      state.loading = false;
      state.error = action?.payload;
      //   console.log(action);
      //   return notify("حدث خطأ أثناء تحميل عربة التسوق", "error");
    });

    builder.addCase(addToCart.pending, (state, action) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(addToCart.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      return notify("تمت الإضافة إلى عربة التسوق", "success");
    });
    builder.addCase(addToCart.rejected, (state, action) => {
      state.loading = false;
      state.error = action?.payload;
      console.log(action);
      return notify("حدث خطأ أثناء الإضافة إلى عربة التسوق", "error");
    });

    builder.addCase(applyCouponToCart.pending, (state, action) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(applyCouponToCart.fulfilled, (state, action) => {
      // state.cart = action?.payload;
      state.loading = false;
      state.error = null;
      return notify("تم تطبيق كوبون الخصم", "success");
    });
    builder.addCase(applyCouponToCart.rejected, (state, action) => {
      state.loading = false;
      state.error = action?.payload;
      console.log(action);
      return notify("خطأ في كوبون الخصم", "error");
    });

    builder.addCase(removeCartItem.pending, (state, action) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(removeCartItem.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      return notify("تم حذف المنتج من العربة", "success");
    });
    builder.addCase(removeCartItem.rejected, (state, action) => {
      state.loading = false;
      state.error = action?.payload;
      console.log(action);
      return notify("حدث خطأ أثناء حذف المنتج من العربة", "error");
    });

    builder.addCase(clearUserCart.pending, (state, action) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(clearUserCart.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      return notify("تم تفريغ العربة", "success");
    });
    builder.addCase(clearUserCart.rejected, (state, action) => {
      state.loading = false;
      state.error = action?.payload;
      console.log(action);
      return notify("حدث خطأ أثناء حذف العربة", "error");
    });
  },
});

export default cartSlice.reducer;
