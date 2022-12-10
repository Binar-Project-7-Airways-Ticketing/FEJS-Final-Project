import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  airport: [],
  loadSeat: false,
};

export const loadAirports = createAsyncThunk("airports/loadairport", async () => {
  try {
    const airports = await axios.get(
      "https://bej-ticketing-production.up.railway.app/api/airport"
    );

    return airports.data
  } catch (error) {
    console.error(error);
  }
});

export const postSlice = createSlice(
    {
      name: "airport",
      initialState,
      reducers: {},
      extraReducers: {
        [loadAirports.pending]: (state) => {
          state.loading = true;
        },
        [loadAirports.fulfilled]: (state, { payload }) => {
          state.loading = false;
          state.airport = payload;
        },
        [loadAirports.rejected]: (state) => {
          state.loading = false;
        },
      },
    }
  );
  
  export default postSlice.reducer;
