import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { insertDataWithImage } from "../helpers/insertData";
import notify from "../helpers/notify";

const initialState = {
  loading: false,
  error: null,
  allProducts: [],
};

export const createProduct = createAsyncThunk(
  "product/create",
  async (formData, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await insertDataWithImage("/api/v1/prodcts", formData);
      return res.data;
    } catch (err) {
      if (err.response?.data?.message)
        return rejectWithValue(err.response.data.message);
      else return rejectWithValue(err.message);
    }
  }
);

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createProduct.pending, (state, action) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(createProduct.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      return notify("تم إضافة المنتج بنجاح", "success");
    });
    builder.addCase(createProduct.rejected, (state, action) => {
      state.loading = false;
      state.error = action?.error?.message;
      console.log(action);
      return notify("حدث خطأ أثناء إضافة المنتج", "error");
    });
  },
});

export default productSlice.reducer;
