import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  seats: [],
  loadSeat: false,
};

export const loadSeats = createAsyncThunk("seasts/loadSeats", async () => {
  try {
    const seats = await axios.get(
      "https://bej-ticketing-production.up.railway.app/api/seat"
    );
    return seats.data
  } catch (error) {
    console.error(error);
  }
});

export const postSlice = createSlice(
    {
      name: "seat",
      initialState,
      reducers: {},
      extraReducers: {
        [loadSeats.pending]: (state) => {
          state.loading = true;
        },
        [loadSeats.fulfilled]: (state, { payload }) => {
          state.loading = false;
          state.seats = payload;
        },
        [loadSeats.rejected]: (state) => {
          state.loading = false;
        },
      },
    }
  );
  
  export default postSlice.reducer;