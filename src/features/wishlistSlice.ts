import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getDataTokenWithoutParams } from "../helpers/getData";
import notify from "../helpers/notify";
import { deleteData } from "../helpers/deleteData";

const initialState = {
  loading: false,
  error: null,
  wishlist: [],
};

export const getUserWishlist = createAsyncThunk(
  "wishlist/all",
  async (data, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await getDataTokenWithoutParams("/api/v1/wishlist");
      return res.data;
    } catch (err) {
      if (err.response?.data?.message)
        return rejectWithValue(err.response.data.message);
      else return rejectWithValue(err.message);
    }
  }
);

export const removeWishlist = createAsyncThunk(
  "wishlist/remove",
  async (id, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await deleteData(`/api/v1/wishlist/${id}`);
      return res.data;
    } catch (err) {
      if (err.response?.data?.message)
        return rejectWithValue(err.response.data.message);
      else return rejectWithValue(err.message);
    }
  }
);

export const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(getUserWishlist.pending, (state, action) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getUserWishlist.fulfilled, (state, action) => {
      state.wishlist = action?.payload;
      state.loading = false;
      state.error = null;
    });
    builder.addCase(getUserWishlist.rejected, (state, action) => {
      state.loading = false;
      state.error = action?.payload;
      console.log(action);
      return notify("حدث خطأ أثناء تحميل المنتجات المفضلة", "error");
    });

    builder.addCase(removeWishlist.pending, (state, action) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(removeWishlist.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      return notify("تمت إزالة المنتج من المفضلة", "success");
    });
    builder.addCase(removeWishlist.rejected, (state, action) => {
      state.loading = false;
      state.error = action?.payload;
      console.log(action);
      return notify("حدث خطأ أثناء إزالة المنتج من المفضلة", "error");
    });
  },
});

export default wishlistSlice.reducer;
