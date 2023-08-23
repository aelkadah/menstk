import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { insertDataToken } from "../helpers/insertData";
import { deleteData } from "../helpers/deleteData";
import { updateData } from "../helpers/updateData";
import notify from "../helpers/notify";

const initialState = {
  loading: false,
  error: null,
  allAddresses: [],
};

export const addAddress = createAsyncThunk(
  "address/add",
  async (data, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await insertDataToken("/api/v1/addresses", data);
      return res.data;
    } catch (err) {
      if (err.response?.data?.message)
        return rejectWithValue(err.response.data.message);
      else return rejectWithValue(err.message);
    }
  }
);

export const deleteAddress = createAsyncThunk(
  "address/delete",
  async (id, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await deleteData(`/api/v1/addresses/${id}`);
      return res.data;
    } catch (err) {
      if (err.response?.data?.message)
        return rejectWithValue(err.response.data.message);
      else return rejectWithValue(err.message);
    }
  }
);

export const updateAddress = createAsyncThunk(
  "address/update",
  async ([id, data], thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await updateData(`/api/v1/addresses/${id}`, data);
      return res.data;
    } catch (err) {
      if (err.response?.data?.message)
        return rejectWithValue(err.response.data.message);
      else return rejectWithValue(err.message);
    }
  }
);

export const addressSlice = createSlice({
  name: "address",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(addAddress.pending, (state, action) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(addAddress.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      return notify("تم إضافة العنوان بنجاح", "success");
    });
    builder.addCase(addAddress.rejected, (state, action) => {
      state.loading = false;
      state.error = action?.payload;
      console.log(action);
      return notify("حدث خطأ أثناء إضافة العنوان", "error");
    });

    builder.addCase(deleteAddress.pending, (state, action) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(deleteAddress.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      return notify("تم حذف العنوان بنجاح", "success");
    });
    builder.addCase(deleteAddress.rejected, (state, action) => {
      state.loading = false;
      state.error = action?.payload;
      console.log(action);
      return notify("حدث خطأ أثناء حذف العنوان", "error");
    });

    builder.addCase(updateAddress.pending, (state, action) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(updateAddress.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      return notify("تم تعديل العنوان بنجاح", "success");
    });
    builder.addCase(updateAddress.rejected, (state, action) => {
      state.loading = false;
      state.error = action?.payload;
      console.log(action);
      return notify("حدث خطأ أثناء تعديل العنوان", "error");
    });
  },
});

export default addressSlice.reducer;
