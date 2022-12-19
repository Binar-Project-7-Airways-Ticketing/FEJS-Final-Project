import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { authConfig } from "../Config";

const initialState = {
  Passenger: [],
  loadSeat: false,
};

export const createPassenger = createAsyncThunk("Passenger/createPassenger", async (Passengers) => {
    console.log(Passengers);
  try {
    const Passenger = await axios.post(
      `${authConfig.baseUrl}/api/passenger/create/passenger`,
      {
        ...Passengers
      }
    );
   
    return Passenger.data
  } catch (error) {
    console.error(error);
  }
});


export const postSlice = createSlice(
    {
      name: "Passenger",
      initialState,
      reducers: {},
      extraReducers: {
        [createPassenger.pending]: (state) => {
          state.loading = true;
        },
        [createPassenger.fulfilled]: (state, { payload }) => {
          state.loading = false;
          state.Passenger = payload;
        },
        [createPassenger.rejected]: (state) => {
          state.loading = false;
        },
      },
      
    },    
    
    
  );
  
  export default postSlice.reducer;
