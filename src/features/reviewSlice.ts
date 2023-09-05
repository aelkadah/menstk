import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getData } from "../helpers/getData";
import notify from "../helpers/notify";
import { insertDataToken } from "../helpers/insertData";
import { deleteData } from "../helpers/deleteData";
import { updateData } from "../helpers/updateData";

const initialState = {
  loading: false,
  error: null,
  allReviews: [],
  oneReview: [],
};

export const getAllReviews = createAsyncThunk(
  "review/all",
  async ([id, limit, page], thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await getData(
        `/api/v1/products/${id}/reviews?limit=${limit}&page=${page || 1}`
      );
      return res.data;
    } catch (err) {
      if (err.response?.data?.message)
        return rejectWithValue(err.response.data.message);
      else return rejectWithValue(err.message);
    }
  }
);

export const createReview = createAsyncThunk(
  "review/create",
  async ([id, data], thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await insertDataToken(`/api/v1/products/${id}/reviews`, data);
      return res.data;
    } catch (err) {
      if (err.response?.data?.message)
        return rejectWithValue(err.response.data.message);
      else return rejectWithValue(err.message);
    }
  }
);

export const updateReview = createAsyncThunk(
  "review/update",
  async ([id, data], thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await updateData(`/api/v1/reviews/${id}`, data);
      return res.data;
    } catch (err) {
      if (err.response?.data?.message)
        return rejectWithValue(err.response.data.message);
      else return rejectWithValue(err.message);
    }
  }
);

export const deleteReview = createAsyncThunk(
  "review/delete",
  async (id, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await deleteData(`/api/v1/reviews/${id}`);
      return res.data;
    } catch (err) {
      if (err.response?.data?.message)
        return rejectWithValue(err.response.data.message);
      else return rejectWithValue(err.message);
    }
  }
);

export const reviewSlice = createSlice({
  name: "review",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllReviews.pending, (state, action) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getAllReviews.fulfilled, (state, action) => {
      state.allReviews = action?.payload;
      state.loading = false;
      state.error = null;
    });
    builder.addCase(getAllReviews.rejected, (state, action) => {
      state.loading = false;
      state.error = action?.payload;
      console.log(action);
      return notify("حدث خطأ أثناء تحميل التقييمات", "error");
    });

    builder.addCase(createReview.pending, (state, action) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(createReview.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      return notify("تم إضافة التقييم بنجاح", "success");
    });
    builder.addCase(createReview.rejected, (state, action) => {
      state.loading = false;
      state.error = action?.payload;
      if (action?.payload == "Request failed with status code 400")
        return notify("تمت إضافة تقييم من قبل على هذا المنتج", "error");
      else {
        console.log(action);
        return notify("حدث خطأ أثناء إضافة التقييم", "error");
      }
    });

    builder.addCase(updateReview.pending, (state, action) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(updateReview.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      return notify("تم تعديل التقييم بنجاح", "success");
    });
    builder.addCase(updateReview.rejected, (state, action) => {
      state.loading = false;
      state.error = action?.payload;
      console.log(action);
      return notify("حدث خطأ أثناء تعديل التقييم", "error");
    });

    builder.addCase(deleteReview.pending, (state, action) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(deleteReview.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      return notify("تم حذف التقييم بنجاح", "success");
    });
    builder.addCase(deleteReview.rejected, (state, action) => {
      state.loading = false;
      state.error = action?.payload;
      console.log(action);
      return notify("حدث خطأ أثناء حذف التقييم", "error");
    });
  },
});

export default reviewSlice.reducer;
