import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { authConfig } from "../Config";

const initialState = {
  Booking: [],
  loadSeat: false,
};

export const createBooking = createAsyncThunk("Booking/createBooking", async (Bookings) => {
    // console.log(Bookings);
  try {
    const Booking = await axios.post(
      `${authConfig.baseUrl}/api/booking/create/`,
      {
        ...Bookings
      }
    );
    localStorage.setItem("booking", JSON.stringify(Booking.data.payload.bookingDetails))
    return Booking.data
  } catch (error) {
    console.error(error);
  }
});


export const postSlice = createSlice(
    {
      name: "Booking",
      initialState,
      reducers: {},
      extraReducers: {
        [createBooking.pending]: (state) => {
          state.loading = true;
        },
        [createBooking.fulfilled]: (state, { payload }) => {
          state.loading = false;
          state.Booking = payload;
        },
        [createBooking.rejected]: (state) => {
          state.loading = false;
        },
      },
      
    },    
    
    
  );
  
  export default postSlice.reducer;
