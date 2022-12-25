import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { authConfig } from "../Config";

const initialState = {
  updateSeats: [],
  SeatsPlaneCount: [],
  loadSeat: false,
};

export const updateSeats = createAsyncThunk(
  "seasts/updateSeats",
  async (seat) => {
    console.log(typeof seat.id);
    try {
      const updateSeats = await axios.put(
        `${authConfig.baseUrl}/api/seat/update/${seat.id}/${seat.state}`
      );

      return updateSeats.data;
    } catch (error) {
      console.error(error);
    }
  }
);
export const loadSeatsIdPlaneCount = createAsyncThunk(
  "seasts/loadSeatsIdPlaneCount",
  async (idPlane) => {
    try {
      const Seats = await axios.get(
        `${authConfig.baseUrl}/api/seat/plane-detail/${idPlane}`
      );
      return Seats.data;
    } catch (error) {
      console.error(error);
    }
  }
);

export const postSlice = createSlice(
  {
    name: "seatsPlaneCount",
    initialState,
    reducers: {},
    extraReducers: {
      [loadSeatsIdPlaneCount.pending]: (state) => {
        state.loading = true;
      },
      [loadSeatsIdPlaneCount.fulfilled]: (state, { payload }) => {
        state.loading = false;
        state.SeatsPlaneCount = payload;
      },
      [loadSeatsIdPlaneCount.rejected]: (state) => {
        state.loading = false;
      },
    },
  },
  {
    name: "seat",
    initialState,
    reducers: {},
    extraReducers: {
      [updateSeats.pending]: (state) => {
        state.loading = true;
      },
      [updateSeats.fulfilled]: (state, { payload }) => {
        state.loading = false;
        state.updateSeats = payload;
      },
      [updateSeats.rejected]: (state) => {
        state.loading = false;
      },
    },
  }
);

export default postSlice.reducer;
