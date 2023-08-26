import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getData } from "../helpers/getData";
import { insertDataToken } from "../helpers/insertData";
import { updateData } from "../helpers/updateData";
import { deleteData } from "../helpers/deleteData";
import notify from "../helpers/notify";

const initialState = {
  loading: false,
  error: null,
  subs: [],
  oneSub: [],
};

export const getSubsOfCat = createAsyncThunk(
  "subcategory/catSubs",
  async (id, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await getData(`/api/v1/categories/${id}/subcategories`);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const getOneSubCategory = createAsyncThunk(
  "subcategory/one",
  async (id, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await getData(`/api/v1/subcategories/${id}`);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const createSubCategory = createAsyncThunk(
  "subcategory/create",
  async (data, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await insertDataToken("/api/v1/subcategories", data);
      return res.data;
    } catch (err) {
      if (err.response?.data?.message)
        return rejectWithValue(err.response.data.message);
      else return rejectWithValue(err.message);
    }
  }
);

export const deleteSubCategory = createAsyncThunk(
  "subcategory/delete",
  async (id, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await deleteData(`/api/v1/subcategories/${id}`);
      return res.data;
    } catch (err) {
      if (err.response?.data?.message)
        return rejectWithValue(err.response.data.message);
      else return rejectWithValue(err.message);
    }
  }
);

export const updateSubCategory = createAsyncThunk(
  "subcategory/update",
  async ([id, data], thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await updateData(`/api/v1/subcategories/${id}`, data);
      return res.data;
    } catch (err) {
      if (err.response?.data?.message)
        return rejectWithValue(err.response.data.message);
      else return rejectWithValue(err.message);
    }
  }
);

export const subcategorySlice = createSlice({
  name: "subcategory",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(getSubsOfCat.pending, (state, action) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getSubsOfCat.fulfilled, (state, action) => {
      state.subs = action.payload;
      state.loading = false;
      state.error = null;
    });
    builder.addCase(getSubsOfCat.rejected, (state, action) => {
      state.loading = false;
      state.error = action?.error?.message;
      console.log(action);
    });

    builder.addCase(getOneSubCategory.pending, (state, action) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getOneSubCategory.fulfilled, (state, action) => {
      state.oneSub = action.payload;
      state.loading = false;
      state.error = null;
    });
    builder.addCase(getOneSubCategory.rejected, (state, action) => {
      state.loading = false;
      state.error = action?.error?.message;
      console.log(action);
    });

    builder.addCase(createSubCategory.pending, (state, action) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(createSubCategory.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      return notify("تم إضافة التصنيف الفرعي بنجاح", "success");
    });
    builder.addCase(createSubCategory.rejected, (state, action) => {
      state.loading = false;
      state.error = action?.error?.message;
      console.log(action);
      return notify("حدث خطأ أثناء إضافة التصنيف الفرعي", "error");
    });

    builder.addCase(deleteSubCategory.pending, (state, action) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(deleteSubCategory.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      return notify("تم حذف التصنيف الفرعي بنجاح", "success");
    });
    builder.addCase(deleteSubCategory.rejected, (state, action) => {
      state.loading = false;
      state.error = action?.error?.message;
      return notify("حدث خطأ أثناء حذف التصنيف الفرعي", "error");
    });

    builder.addCase(updateSubCategory.pending, (state, action) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(updateSubCategory.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      return notify("تم تعديل التصنيف الفرعي بنجاح", "success");
    });
    builder.addCase(updateSubCategory.rejected, (state, action) => {
      state.loading = false;
      state.error = action?.error?.message;
      return notify("حدث خطأ أثناء تعديل التصنيف الفرعي", "error");
    });
  },
});

export default subcategorySlice.reducer;
