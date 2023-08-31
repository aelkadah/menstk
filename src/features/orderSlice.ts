import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { insertDataToken } from "../helpers/insertData";
import notify from "../helpers/notify";

const initialState = {
  loading: false,
  error: null,
  res: [],
};

export const cashOrder = createAsyncThunk(
  "cart/cash",
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
    builder.addCase(cashOrder.pending, (state, action) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(cashOrder.fulfilled, (state, action) => {
      state.res = action?.payload;
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
