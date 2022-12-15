import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { authConfig } from "../Config";

const initialState = {
  airport: [],
  loadSeat: false,
};

export const loadAirports = createAsyncThunk("airports/loadAirport", async () => {
  try {
    const airports = await axios.get(
      `${authConfig.baseUrl}/api/airport`
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
      
    },    
    
    
  );
  
  export default postSlice.reducer;
