import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { insertData } from "../helpers/insertData";
import { updateData, updateDataWithoutToken } from "../helpers/updateData";
import notify from "../helpers/notify";

const initialState = {
  loading: false,
  error: null,
  res: [],
};

export const forgotPassword = createAsyncThunk(
  "user/forgot",
  async (data, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await insertData("/api/v1/auth/forgotPassword", data);
      return res.data;
    } catch (err) {
      if (err.response?.data?.message)
        return rejectWithValue(err.response.data.message);
      else return rejectWithValue(err.message);
    }
  }
);

export const verifyResetCode = createAsyncThunk(
  "user/resetCode",
  async (data, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await insertData("/api/v1/auth/verifyResetCode", data);
      return res.data;
    } catch (err) {
      if (err.response?.data?.message)
        return rejectWithValue(err.response.data.message);
      else return rejectWithValue(err.message);
    }
  }
);

export const resetPassword = createAsyncThunk(
  "user/resetPass",
  async (data, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await updateDataWithoutToken(
        "/api/v1/auth/resetPassword",
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
    builder.addCase(forgotPassword.pending, (state, action) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(forgotPassword.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      return notify("تم إرسال رمز التحقق للبريد الإلكتروني", "success");
    });
    builder.addCase(forgotPassword.rejected, (state, action) => {
      state.loading = false;
      state.error = action?.payload;
      console.log(action);
      return notify("لا يوجد مستخدم بهذا البريد الإلكتروني", "error");
    });

    builder.addCase(verifyResetCode.pending, (state, action) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(verifyResetCode.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      // return notify("", "success");
    });
    builder.addCase(verifyResetCode.rejected, (state, action) => {
      state.loading = false;
      state.error = action?.payload;
      console.log(action);
      return notify("رمز التحقق غير صحيح", "error");
    });

    builder.addCase(resetPassword.pending, (state, action) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(resetPassword.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      return notify("تم إعادة تعيين كلمة السر", "success");
    });
    builder.addCase(resetPassword.rejected, (state, action) => {
      state.loading = false;
      state.error = action?.payload;
      console.log(action);
      return notify("حدث خطأ أثناء إعادة تعيين كلمة السر", "error");
    });

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
