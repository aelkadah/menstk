import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getData } from "../helpers/getData";
import { deleteData } from "../helpers/deleteData";
import { insertDataWithImage } from "../helpers/insertData";
import notify from "../helpers/notify";

const initialState = {
  loading: false,
  error: null,
  allProducts: [],
  oneProduct: [],
};

export const getAllProducts = createAsyncThunk(
  "product/all",
  async ([sort, limit, page], thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await getData(
        `/api/v1/products?limit=${limit}&page=${page || 1}&sort=${sort}`
      );
      return res.data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const searchProducts = createAsyncThunk(
  "product/search",
  async ([keyword, limit, page], thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await getData(
        `/api/v1/products?keyword=${keyword}&limit=${limit}&page=${page || 1}`
      );
      return res.data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const getProductsByBrand = createAsyncThunk(
  "product/brand",
  async ([brand, sort, limit, page], thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await getData(
        `/api/v1/products?limit=${limit}&brand=${brand}&sort=+price&page=${
          page || 1
        }&sort=${sort}`
      );
      return res.data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const getProductsByCategory = createAsyncThunk(
  "product/category",
  async ([category, sort, limit, page], thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await getData(
        `/api/v1/products?limit=${limit}&category=${category}&page=${
          page || 1
        }&sort=${sort}`
      );
      return res.data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const getOneProduct = createAsyncThunk(
  "product/one",
  async (id, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await getData(`/api/v1/products/${id}`);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const createProduct = createAsyncThunk(
  "product/create",
  async (formData, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await insertDataWithImage("/api/v1/products", formData);
      return res.data;
    } catch (err) {
      if (err.response?.data?.message)
        return rejectWithValue(err.response.data.message);
      else return rejectWithValue(err.message);
    }
  }
);

export const deleteProduct = createAsyncThunk(
  "product/delete",
  async (id, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await deleteData(`/api/v1/products/${id}`);
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
    builder.addCase(getAllProducts.pending, (state, action) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getAllProducts.fulfilled, (state, action) => {
      state.allProducts = action.payload;
      state.loading = false;
      state.error = null;
    });
    builder.addCase(getAllProducts.rejected, (state, action) => {
      state.loading = false;
      state.error = action?.error?.message;
      console.log(action);
      return notify("حدث خطأ أثناء تحميل المنتجات", "error");
    });

    builder.addCase(getProductsByBrand.pending, (state, action) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getProductsByBrand.fulfilled, (state, action) => {
      state.allProducts = action.payload;
      state.loading = false;
      state.error = null;
    });
    builder.addCase(getProductsByBrand.rejected, (state, action) => {
      state.loading = false;
      state.error = action?.error?.message;
      console.log(action);
      return notify("حدث خطأ أثناء تحميل المنتجات", "error");
    });

    builder.addCase(getProductsByCategory.pending, (state, action) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getProductsByCategory.fulfilled, (state, action) => {
      state.allProducts = action.payload;
      state.loading = false;
      state.error = null;
    });
    builder.addCase(getProductsByCategory.rejected, (state, action) => {
      state.loading = false;
      state.error = action?.error?.message;
      console.log(action);
      return notify("حدث خطأ أثناء تحميل المنتجات", "error");
    });

    builder.addCase(searchProducts.pending, (state, action) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(searchProducts.fulfilled, (state, action) => {
      state.allProducts = action.payload;
      state.loading = false;
      state.error = null;
    });
    builder.addCase(searchProducts.rejected, (state, action) => {
      state.loading = false;
      state.error = action?.error?.message;
      console.log(action);
      return notify("حدث خطأ أثناء البحث في المنتجات", "error");
    });

    builder.addCase(getOneProduct.pending, (state, action) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getOneProduct.fulfilled, (state, action) => {
      state.oneProduct = action.payload;
      state.loading = false;
      state.error = null;
    });
    builder.addCase(getOneProduct.rejected, (state, action) => {
      state.loading = false;
      state.error = action?.error?.message;
      console.log(action);
      return notify("حدث خطأ أثناء تحميل المنتج", "error");
    });

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

    builder.addCase(deleteProduct.pending, (state, action) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(deleteProduct.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      return notify("تم حذف المنتج بنجاح", "success");
    });
    builder.addCase(deleteProduct.rejected, (state, action) => {
      state.loading = false;
      state.error = action?.error?.message;
      return notify("حدث خطأ أثناء حذف المنتج", "error");
    });
  },
});

export default productSlice.reducer;
