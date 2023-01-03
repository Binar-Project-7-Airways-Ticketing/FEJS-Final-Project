import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { authConfig } from "../Config";

const initialState = {
  notif: [],
  notifUpdate: [],
  notifCreate: [],
  loadSeat: false,
};

export const createNotif = createAsyncThunk(
  "notif/createNotif",
  async (notifs) => {
    try {
      const notif = await axios.post(
        `${authConfig.baseUrl}/api/notification/create`,
        {
          ...notifs,
        }
      );

      return notif.data;
    } catch (error) {
      console.error(error);
    }
  }
);
export const loadNotif = createAsyncThunk(
  "notif/loadNotif",
  async (notifUser) => {
    const token = localStorage.getItem("token");
    const id = localStorage.getItem("id");
    try {
      const notif = await axios.get(
        `${authConfig.baseUrl}/api/notification/user/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token} `,
          },
        }
      );
      return notif.data;
    } catch (error) {
      console.error(error);
    }
  }
);

export const postSlice = createSlice(
  {
    name: "loadNotif",
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
  },
  {
    name: "createnotif",
    initialState,
    reducers: {},
    extraReducers: {
      [createNotif.pending]: (state) => {
        state.loading = true;
      },
      [createNotif.fulfilled]: (state, { payload }) => {
        state.loading = false;
        state.notifCreate = payload;
      },
      [createNotif.rejected]: (state) => {
        state.loading = false;
      },
    },
  },
);

export default postSlice.reducer;
