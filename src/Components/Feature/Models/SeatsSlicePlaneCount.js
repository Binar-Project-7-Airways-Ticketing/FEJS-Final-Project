import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { authConfig } from "../Config";

const initialState = {
  SeatsPlaneCount: [],
  loadSeat: false,
};

export const loadSeatsIdPlaneCount = createAsyncThunk(
  "seasts/loadSeatsIdPlaneCount",
  async (idPlane) => {
    try {
      const Seats = await axios.get(
        `${authConfig.baseUrl}/api/seat/plane-detail/${idPlane}`
      );

      // const length = Seats.data.filter(
      //   (item) => item.stateSeat === "AVAILABLE"
      // );

      return Seats.data
    } catch (error) {
      // console.error(error);
    }
  }
);

export const postSlice = createSlice({
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
});

export default postSlice.reducer;
