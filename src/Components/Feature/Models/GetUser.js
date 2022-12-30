import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { authConfig } from "../Config";

const initialState = {
  users: [],
  loadSeat: false,
};

export const loadUser = createAsyncThunk("user/loadUser", async (users) => {
  try {
    const user = await axios.get(`${authConfig.baseUrl}/api/user/${users}`, 
    );
    return user.data;
  } catch (error) {
    console.error(error);
  }
});

export const postSlice = createSlice({
  name: "User",
  initialState,
  reducers: {},
  extraReducers: {
    [loadUser.pending]: (state) => {
      state.loading = true;
    },
    [loadUser.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.users = payload;
    },
    [loadUser.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export default postSlice.reducer;
