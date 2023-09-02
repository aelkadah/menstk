import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getData } from "../helpers/getData";
import notify from "../helpers/notify";
import { insertDataToken } from "../helpers/insertData";

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
        `/api/v1/products/${id}/reviews?limit=${limit}&page=${page}`
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
  },
});

export default reviewSlice.reducer;
