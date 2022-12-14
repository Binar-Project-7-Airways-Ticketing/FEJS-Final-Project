import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { authConfig } from "../Config";

const initialState = {
  notif: [],
  loadSeat: false,
};

export const loadNotif = createAsyncThunk(
  "notif/loadNotif",
  async (notifUser) => {
    try {
      const notif = await axios.get(
        `${authConfig.baseUrl}/api/notification/user/${notifUser}`
      );
  
     return notif.data
    } catch (error) {
      console.error(error);
    }
  }
);

export const postSlice = createSlice({
  name: "notif",
  initialState,
  reducers: {},
  extraReducers: {
    [loadNotif.pending]: (state) => {
      state.loading = true;
    },
    [loadNotif.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.notif = payload;
    },
    [loadNotif.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export default postSlice.reducer;
