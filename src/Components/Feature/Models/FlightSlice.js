import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { authConfig } from "../Config";

const initialState = {

  flight:[],
  loadSeat: false,
};


export const loadFlight = createAsyncThunk("flight/loadFlight", async (data) => {
  console.log(data);
  try {
    const flight = await axios.get(
      `${authConfig.baseUrl}/api/flight/${data.from}/${data.to}`
    );
    localStorage.setItem("flight", JSON.stringify(flight.data));
    console.log(flight.data);
    return flight.data
  } catch (error) {
    console.error(error);
  }
});

export const postSlice = createSlice(

    {
      name: "flight",
      initialState,
      reducers: {},
      extraReducers: {
        [loadFlight.pending]: (state) => {
          state.loading = true;
        },
        [loadFlight.fulfilled]: (state, { payload }) => {
          state.loading = false;
          state.flight = payload;
        },
        [loadFlight.rejected]: (state) => {
          state.loading = false;
        },
      },
    },
  );
  
  export default postSlice.reducer;
