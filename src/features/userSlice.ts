import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { updateData } from "../helpers/updateData";
import notify from "../helpers/notify";

const initialState = {
  loading: false,
  error: null,
  res: [],
};

export const updatePassword = createAsyncThunk(
  "user/updatePass",
  async (data, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await updateData("/api/v1/users/changeMyPassword", data);
      return res;
    } catch (err) {
      if (err.response?.data?.message)
        return rejectWithValue(err.response.data.message);
      else return rejectWithValue(err.message);
    }
  }
);

export const updateUserData = createAsyncThunk(
  "user/updateData",
  async (data, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await updateData("/api/v1/users/updateMe", data);
      return res;
    } catch (err) {
      if (err.response?.data?.message)
        return rejectWithValue(err.response.data.message);
      else return rejectWithValue(err.message);
    }
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(updatePassword.pending, (state, action) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(updatePassword.fulfilled, (state, action) => {
      state.res = action?.payload;
      localStorage.setItem("token", state?.res?.token);
      state.loading = false;
      state.error = null;
      return notify("تم إعادة تعيين كلمة السر بنجاح", "success");
    });
    builder.addCase(updatePassword.rejected, (state, action) => {
      state.loading = false;
      state.error = action?.payload;
      console.log(action);
      return notify("حدث خطأ أثناء إعادة تعيين كلمة السر", "error");
    });

    builder.addCase(updateUserData.pending, (state, action) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(updateUserData.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      return notify("تم تحديث بياناتك بنجاح", "success");
    });
    builder.addCase(updateUserData.rejected, (state, action) => {
      state.loading = false;
      state.error = action?.payload;
      console.log(action);
      return notify("حدث خطأ أثناء تحديث بياناتك", "error");
    });
  },
});

export default userSlice.reducer;
