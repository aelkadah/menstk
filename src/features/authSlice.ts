import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import notify from "../helpers/notify";
import { insertData } from "../helpers/insertData";

const initialState = {
  loading: false,
  error: null,
  user: [],
};

export const registerUser = createAsyncThunk(
  "auth/register",
  async (data, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await insertData("/api/v1/auth/signup", data);
      return res.data;
    } catch (err) {
      if (err.response?.data?.message)
        return rejectWithValue(err.response.data.message);
      else return rejectWithValue(err.message);
    }
  }
);

export const loginUser = createAsyncThunk(
  "auth/login",
  async (data, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await insertData("/api/v1/auth/login", data);
      return res.data;
    } catch (err) {
      if (err.response?.data?.message)
        return rejectWithValue(err.response.data.message);
      else return rejectWithValue(err.message);
    }
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      localStorage.removeItem("token");
      state.user = null;
      state.error = null;
      state.loading = false;
      return notify("تم تسجيل الخروج", "success");
    },
  },
  extraReducers: (builder) => {
    builder.addCase(registerUser.pending, (state, action) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(registerUser.fulfilled, (state, action) => {
      state.user = action.payload;
      state.loading = false;
      state.error = null;
      localStorage.setItem("token", state?.user?.token);
      return notify("تم إنشاء الحساب بنجاح", "success");
    });
    builder.addCase(registerUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action?.payload;
      console.log(action);
      return notify("حدث خطأ أثناء إنشاء الحساب", "error");
    });

    builder.addCase(loginUser.pending, (state, action) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.user = action.payload;
      state.loading = false;
      state.error = null;
      localStorage.setItem("token", state?.user?.token);
      return notify("تم تسجيل الدخول بنجاح", "success");
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action?.payload;
      if (action?.payload == "Incorrect email or password")
        return notify("خطأ في البريد الإلكتروني أو كلمة السر", "error");
      else {
        console.log(action);
        return notify("حدث خطأ أثناء تسجيل الدخول", "error");
      }
    });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
