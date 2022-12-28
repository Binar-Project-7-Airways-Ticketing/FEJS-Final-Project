import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { authConfig } from "../Config";

const initialState = {
  Ticket: [],
  loadSeat: false,
};

export const loadTicket = createAsyncThunk("Ticket/loadTicket", async (idBooking) => {
  try {
    const Ticket = await axios.get(`${authConfig.baseUrl}/api/ticket/${idBooking}`);

    return Ticket.data;
  } catch (error) {
    console.error(error);
  }
});

export const postSlice = createSlice({
  name: "Ticket",
  initialState,
  reducers: {},
  extraReducers: {
    [loadTicket.pending]: (state) => {
      state.loading = true;
    },
    [loadTicket.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.Ticket = payload;
    },
    [loadTicket.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export default postSlice.reducer;
