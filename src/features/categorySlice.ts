import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getData } from "../helpers/getData";
import { insertDataWithImage } from "../helpers/insertData";
import { deleteData } from "../helpers/deleteData";
import { updateData } from "../helpers/updateData";
import notify from "../helpers/notify";

const initialState = {
  loading: false,
  error: null,
  allCategories: [],
};

export const getAllCategories = createAsyncThunk(
  "category/all",
  async ([limit, page], thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await getData(
        `/api/v1/categories?limit=${limit}&page=${page}`
      );
      return res.data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const createCategory = createAsyncThunk(
  "category/create",
  async (formData, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await insertDataWithImage("/api/v1/categories", formData);
      return res.data;
    } catch (err) {
      if (err.response?.data?.message)
        return rejectWithValue(err.response.data.message);
      else return rejectWithValue(err.message);
    }
  }
);

export const deleteCategory = createAsyncThunk(
  "category/delete",
  async (id, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await deleteData(`/api/v1/categories/${id}`);
      return res.data;
    } catch (err) {
      if (err.response?.data?.message)
        return rejectWithValue(err.response.data.message);
      else return rejectWithValue(err.message);
    }
  }
);

export const updateCategory = createAsyncThunk(
  "category/update",
  async ([id, formData], thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await updateData(`/api/v1/categories/${id}`, formData);
      return res.data;
    } catch (err) {
      if (err.response?.data?.message)
        return rejectWithValue(err.response.data.message);
      else return rejectWithValue(err.message);
    }
  }
);

export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(getAllCategories.pending, (state, action) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getAllCategories.fulfilled, (state, action) => {
      state.allCategories = action.payload;
      state.loading = false;
      state.error = null;
    });
    builder.addCase(getAllCategories.rejected, (state, action) => {
      state.loading = false;
      state.error = action?.error?.message;
    });

    builder.addCase(createCategory.pending, (state, action) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(createCategory.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      return notify("تم إضافة التصنيف بنجاح", "success");
    });
    builder.addCase(createCategory.rejected, (state, action) => {
      state.loading = false;
      state.error = action?.error?.message;
      return notify("حدث خطأ أثناء إضافة التصنيف", "error");
    });

    builder.addCase(deleteCategory.pending, (state, action) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(deleteCategory.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      return notify("تم حذف التصنيف بنجاح", "success");
    });
    builder.addCase(deleteCategory.rejected, (state, action) => {
      state.loading = false;
      state.error = action?.error?.message;
      return notify("حدث خطأ أثناء حذف التصنيف", "error");
    });

    builder.addCase(updateCategory.pending, (state, action) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(updateCategory.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      return notify("تم تعديل التصنيف بنجاح", "success");
    });
    builder.addCase(updateCategory.rejected, (state, action) => {
      state.loading = false;
      state.error = action?.error?.message;
      return notify("حدث خطأ أثناء تعديل التصنيف", "error");
    });
  },
});

export default categorySlice.reducer;
