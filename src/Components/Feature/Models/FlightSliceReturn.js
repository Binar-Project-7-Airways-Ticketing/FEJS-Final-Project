import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { authConfig } from "../Config";

const initialState = {
  flightReturn: [],
  flightDepart: [],
  loadFlight: false,
};

export const loadFlightDepart = createAsyncThunk(
  "flight/loadFlightDepart",
  async (dataFlight) => {
    try {
      const flight = await axios.get(
        `${authConfig.baseUrl}/api/flight/${dataFlight.from}/${dataFlight.to}/date?date=${dataFlight.datefrom}`
      );
      localStorage.setItem("flightDepart", JSON.stringify(flight.data));
      return flight.data;
      
    } catch (error) {
      console.error(error);
    }
    setTimeout(function () {
      window.location.reload(1);
    }, 200);
  }
);

export const loadFlightReturn = createAsyncThunk(
  "flight/loadFlightReturn",
  async (dataFlight) => {
    try {
      const flight = await axios.get(
        `${authConfig.baseUrl}/api/flight/${dataFlight.to}/${dataFlight.from}/date?date=${dataFlight.dateto}`
      );
      
      localStorage.setItem("flightReturn", JSON.stringify(flight.data));
      return flight.data;
    } catch (error) {
      console.error(error);
    }
  }
);

export const postSlice = createSlice(
  {
    name: "flightDepart",
    initialState,
    reducers: {},
    extraReducers: {
      [loadFlightDepart.pending]: (state) => {
        state.loading = true;
      },
      [loadFlightDepart.fulfilled]: (state, { payload }) => {
        state.loading = false;
        state.flightDepart = payload;
      },
      [loadFlightDepart.rejected]: (state) => {
        state.loading = false;
      },
    },
  },
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
  }
);

export default postSlice.reducer;
