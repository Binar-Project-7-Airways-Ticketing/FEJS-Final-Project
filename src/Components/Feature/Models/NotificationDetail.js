import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { authConfig } from "../Config";

const initialState = {
  notifDetail: [],
  loadSeat: false,
};

export const loadNotifDetail = createAsyncThunk(
  "notifDeatil/loadNotifDetail",
  async (notifUser) => {
    try {
      const notif = await axios.get(
        `${authConfig.baseUrl}/api/notification/${notifUser}`
      );

      return notif.data;
    } catch (error) {
      console.error(error);
    }
  }
);

export const postSlice = createSlice({
  name: "detailNotif",
  initialState,
  reducers: {},
  extraReducers: {
    [loadNotifDetail.pending]: (state) => {
      state.loading = true;
    },
    [loadNotifDetail.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.notifDetail = payload;
    },
    [loadNotifDetail.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export default postSlice.reducer;
