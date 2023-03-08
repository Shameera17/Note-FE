import { createSlice } from "@reduxjs/toolkit";
const initState = { value: { username: "" } };
const authSlice = createSlice({
  name: "user",
  initialState: initState,
  reducers: {
    login: (state, action) => {
      state.value = action.payload;
    },
    logout: (state) => {
      state = initState;
    },
  },
});

export const { login, logout } = authSlice.actions;
export const authReducers = authSlice.reducer;
