import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { authConfig } from "../Config";

const initialState = {

  flightReturn:[],
  loadSeat: false,
};


export const loadFlightReturn = createAsyncThunk("flight/loadFlightReturn", async (dataFlight) => {
  console.log(dataFlight);
  try {
    const flight = await axios.get(
      `${authConfig.baseUrl}/api/flight/${dataFlight.to}/${dataFlight.from}/date?date=${dataFlight.dateto}`
    );
    localStorage.setItem("flightReturn", JSON.stringify(flight.data));
    console.log(flight)
    return flight
  } catch (error) {
    console.error(error);
  }
});

export const postSlice = createSlice(

    {
      name: "flightReturn",
      initialState,
      reducers: {},
      extraReducers: {
        [loadFlightReturn.pending]: (state) => {
          state.loading = true;
        },
        [loadFlightReturn.fulfilled]: (state, { payload }) => {
          state.loading = false;
          state.flightReturn = payload;
        },
        [loadFlightReturn.rejected]: (state) => {
          state.loading = false;
        },
      },
    },
  );
  
  export default postSlice.reducer;
