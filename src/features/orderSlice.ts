import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getDataToken, getDataTokenWithoutParams } from "../helpers/getData";
import { insertDataToken } from "../helpers/insertData";
import { updateData } from "../helpers/updateData";
import notify from "../helpers/notify";
import { getDataTokenWithoutParams } from "./../helpers/getData";

const initialState = {
  loading: false,
  error: null,
  allOrders: [],
  oneOrder: [],
  creditRes: [],
};

export const getAllOrders = createAsyncThunk(
  "order/all",
  async ([limit, page], thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await getDataTokenWithoutParams(
        `/api/v1/orders?limit=${limit}&page=${page || 1}`
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

export const creditOrder = createAsyncThunk(
  "order/credit",
  async ([id, data], thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await getDataToken(
        `/api/v1/orders/checkout-session/${id}`,
        data
      );
      return res.data;
    } catch (err) {
      if (err.response?.data?.message)
        return rejectWithValue(err.response.data.message);
      else return rejectWithValue(err.message);
    }
  }
);

export const updateOrderToPaid = createAsyncThunk(
  "order/updateToPaid",
  async (id, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await updateData(`/api/v1/orders/${id}/pay`);
      return res.data;
    } catch (err) {
      if (err.response?.data?.message)
        return rejectWithValue(err.response.data.message);
      else return rejectWithValue(err.message);
    }
  }
);

export const updateOrderToDelivered = createAsyncThunk(
  "order/updateToDelivered",
  async (id, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await updateData(`/api/v1/orders/${id}/deliver`);
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

    builder.addCase(creditOrder.pending, (state, action) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(creditOrder.fulfilled, (state, action) => {
      state.creditRes = action?.payload;
      state.loading = false;
      state.error = null;
      return;
    });
    builder.addCase(creditOrder.rejected, (state, action) => {
      state.loading = false;
      state.error = action?.payload;
      console.log(action);
      return notify("حدث خطأ أثناء تأكيد الطلبية", "error");
    });

    builder.addCase(updateOrderToPaid.pending, (state, action) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(updateOrderToPaid.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      return notify("تم دفع المبلغ المستحق للطلبية", "success");
    });
    builder.addCase(updateOrderToPaid.rejected, (state, action) => {
      state.loading = false;
      state.error = action?.payload;
      console.log(action);
      return notify("حدث خطأ أثناء دفع المبلغ المستحق", "error");
    });

    builder.addCase(updateOrderToDelivered.pending, (state, action) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(updateOrderToDelivered.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      return notify("تم توصيل الطلبية", "success");
    });
    builder.addCase(updateOrderToDelivered.rejected, (state, action) => {
      state.loading = false;
      state.error = action?.payload;
      console.log(action);
      return notify("حدث خطأ أثناء تحديث حالة التوصيل", "error");
    });
  },
});

export default orderSlice.reducer;
