import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getDataTokenWithoutParams } from "../helpers/getData";
import { insertDataToken } from "../helpers/insertData";
import notify from "../helpers/notify";

const initialState = {
  loading: false,
  error: null,
  allOrders: [],
  oneOrder: [],
};

export const getAllOrders = createAsyncThunk(
  "order/all",
  async ([limit, page], thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await getDataTokenWithoutParams(
        `/api/v1/orders?limit=${limit}&page=${page}`
      );
      return res.data;
    } catch (err) {
      if (err.response?.data?.message)
        return rejectWithValue(err.response.data.message);
      else return rejectWithValue(err.message);
    }
  }
);

export const getSpecificOrder = createAsyncThunk(
  "order/specific",
  async (id, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await getDataTokenWithoutParams(`/api/v1/orders/${id}`);
      return res.data;
    } catch (err) {
      if (err.response?.data?.message)
        return rejectWithValue(err.response.data.message);
      else return rejectWithValue(err.message);
    }
  }
);

export const cashOrder = createAsyncThunk(
  "order/cash",
  async ([id, data], thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await insertDataToken(`/api/v1/orders/${id}`, data);
      return res.data;
    } catch (err) {
      if (err.response?.data?.message)
        return rejectWithValue(err.response.data.message);
      else return rejectWithValue(err.message);
    }
  }
);

export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllOrders.pending, (state, action) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getAllOrders.fulfilled, (state, action) => {
      state.allOrders = action?.payload;
      state.loading = false;
      state.error = null;
      // return notify("تم تأكيد الطلبية بنجاح", "success");
    });
    builder.addCase(getAllOrders.rejected, (state, action) => {
      state.loading = false;
      state.error = action?.payload;
      console.log(action);
      return notify("حدث خطأ أثناء تحميل الطلبيات", "error");
    });

    builder.addCase(getSpecificOrder.pending, (state, action) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getSpecificOrder.fulfilled, (state, action) => {
      state.oneOrder = action?.payload;
      state.loading = false;
      state.error = null;
      // return notify("تم تأكيد الطلبية بنجاح", "success");
    });
    builder.addCase(getSpecificOrder.rejected, (state, action) => {
      state.loading = false;
      state.error = action?.payload;
      console.log(action);
      return notify("حدث خطأ أثناء تحميل الطلبية", "error");
    });

    builder.addCase(cashOrder.pending, (state, action) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(cashOrder.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      return notify("تم تأكيد الطلبية بنجاح", "success");
    });
    builder.addCase(cashOrder.rejected, (state, action) => {
      state.loading = false;
      state.error = action?.payload;
      console.log(action);
      return notify("حدث خطأ أثناء تأكيد الطلبية", "error");
    });
  },
});

export default orderSlice.reducer;
