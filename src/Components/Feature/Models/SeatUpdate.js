import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { authConfig } from "../Config";

const initialState = {
  updateSeats: [],
  loadSeat: false,
};

export const updateSeats = createAsyncThunk("seasts/updateSeats", async (seat) => {
    console.log(typeof seat.id);
    try {
        const updateSeats = await axios.put(
          `${authConfig.baseUrl}/api/seat/update/${seat.id}/${seat.state}`
        );
     
   
        return updateSeats.data
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