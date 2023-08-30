import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getDataTokenWithoutParams } from "../helpers/getData";
import notify from "../helpers/notify";
import { insertDataToken } from "../helpers/insertData";
import { deleteData } from "../helpers/deleteData";
import { updateData } from "../helpers/updateData";

const initialState = {
  loading: false,
  error: null,
  allCoupons: [],
};

export const getAllCoupons = createAsyncThunk(
  "coupon/all",
  async (data, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await getDataTokenWithoutParams(`/api/v1/coupons`);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const createCoupon = createAsyncThunk(
  "coupon/create",
  async (data, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await insertDataToken(`/api/v1/coupons`, data);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const updateCoupon = createAsyncThunk(
  "coupon/update",
  async ([id, data], thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await updateData(`/api/v1/coupons/${id}`, data);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const deleteCoupon = createAsyncThunk(
  "coupon/delete",
  async (id, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await deleteData(`/api/v1/coupons/${id}`);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const couponSlice = createSlice({
  name: "coupon",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllCoupons.pending, (state, action) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getAllCoupons.fulfilled, (state, action) => {
      state.allCoupons = action.payload;
      state.loading = false;
      state.error = null;
    });
    builder.addCase(getAllCoupons.rejected, (state, action) => {
      state.loading = false;
      state.error = action?.error?.message;
      console.log(action);
      return notify("حدث خطأ أثناء تحميل كوبونات الخصم", "error");
    });

    builder.addCase(createCoupon.pending, (state, action) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(createCoupon.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      return notify("تم إضافة كوبون الخصم", "success");
    });
    builder.addCase(createCoupon.rejected, (state, action) => {
      state.loading = false;
      state.error = action?.error?.message;
      console.log(action);
      return notify("حدث خطأ أثناء إضافة الخصم", "error");
    });

    builder.addCase(updateCoupon.pending, (state, action) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(updateCoupon.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      return notify("تم تعديل كوبون الخصم", "success");
    });
    builder.addCase(updateCoupon.rejected, (state, action) => {
      state.loading = false;
      state.error = action?.error?.message;
      console.log(action);
      return notify("حدث خطأ أثناء تعديل كوبون الخصم", "error");
    });

    builder.addCase(deleteCoupon.pending, (state, action) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(deleteCoupon.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      return notify("تم حذف كوبون الخصم", "success");
    });
    builder.addCase(deleteCoupon.rejected, (state, action) => {
      state.loading = false;
      state.error = action?.error?.message;
      console.log(action);
      return notify("حدث خطأ أثناء حذف كوبون الخصم", "error");
    });
  },
});

export default couponSlice.reducer;
