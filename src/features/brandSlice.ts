import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getData } from "../helpers/getData";
import { insertDataWithImage } from "../helpers/insertData";
import { deleteData } from "../helpers/deleteData";
import { updateData } from "../helpers/updateData";
import notify from "../helpers/notify";

const initialState = {
  loading: false,
  error: null,
  allBrands: [],
  oneBrand: [],
};

export const getAllBrands = createAsyncThunk(
  "brand/all",
  async ([limit, page], thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await getData(
        `/api/v1/brands?limit=${limit}&page=${page || 1}`
      );
      return res.data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const getOneBrand = createAsyncThunk(
  "brand/one",
  async (id, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await getData(`/api/v1/brands/${id}`);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const createBrand = createAsyncThunk(
  "brand/create",
  async (formData, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await insertDataWithImage("/api/v1/brands", formData);
      return res.data;
    } catch (err) {
      if (err.response?.data?.message)
        return rejectWithValue(err.response.data.message);
      else return rejectWithValue(err.message);
    }
  }
);

export const deleteBrand = createAsyncThunk(
  "brand/delete",
  async (id, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await deleteData(`/api/v1/brands/${id}`);
      return res.data;
    } catch (err) {
      if (err.response?.data?.message)
        return rejectWithValue(err.response.data.message);
      else return rejectWithValue(err.message);
    }
  }
);

export const updateBrand = createAsyncThunk(
  "brand/update",
  async ([id, formData], thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await updateData(`/api/v1/brands/${id}`, formData);
      return res.data;
    } catch (err) {
      if (err.response?.data?.message)
        return rejectWithValue(err.response.data.message);
      else return rejectWithValue(err.message);
    }
  }
);

export const brandSlice = createSlice({
  name: "brand",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllBrands.pending, (state, action) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getAllBrands.fulfilled, (state, action) => {
      state.allBrands = action.payload;
      state.loading = false;
      state.error = null;
    });
    builder.addCase(getAllBrands.rejected, (state, action) => {
      state.loading = false;
      state.error = action?.error?.message;
    });

    builder.addCase(getOneBrand.pending, (state, action) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getOneBrand.fulfilled, (state, action) => {
      state.oneBrand = action.payload;
      state.loading = false;
      state.error = null;
    });
    builder.addCase(getOneBrand.rejected, (state, action) => {
      state.loading = false;
      state.error = action?.error?.message;
    });

    builder.addCase(createBrand.pending, (state, action) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(createBrand.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      return notify("تم إضافة الماركة بنجاح", "success");
    });
    builder.addCase(createBrand.rejected, (state, action) => {
      state.loading = false;
      state.error = action?.error?.message;
      return notify("حدث خطأ أثناء إضافة الماركة", "error");
    });

    builder.addCase(deleteBrand.pending, (state, action) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(deleteBrand.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      return notify("تم حذف الماركة بنجاح", "success");
    });
    builder.addCase(deleteBrand.rejected, (state, action) => {
      state.loading = false;
      state.error = action?.error?.message;
      return notify("حدث خطأ أثناء حذف الماركة", "error");
    });

    builder.addCase(updateBrand.pending, (state, action) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(updateBrand.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      return notify("تم تعديل الماركة بنجاح", "success");
    });
    builder.addCase(updateBrand.rejected, (state, action) => {
      state.loading = false;
      state.error = action?.error?.message;
      return notify("حدث خطأ أثناء تعديل الماركة", "error");
    });
  },
});

export default brandSlice.reducer;
