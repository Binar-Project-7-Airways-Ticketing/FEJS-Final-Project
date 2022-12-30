import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { authConfig } from "../Config";

const initialState = {
  BookingDepart: [],
  BookingReturn: [],
  loadSeat: false,
};

export const createBookingDepart = createAsyncThunk("Booking/createBooking", async (Bookings) => {
    console.log(Bookings);
  try {
    const Booking = await axios.post(
      `${authConfig.baseUrl}/api/booking/create/`,
      {
        ...Bookings
      }
    );
    localStorage.setItem("bookingDepart", JSON.stringify(Booking.data.payload.bookingDetails))
    localStorage.setItem("idBookingDepart", JSON.stringify(Booking.data.payload.idBooking))
    return Booking.data
  } catch (error) {
    console.error(error);
  }
});
export const createBookingReturn = createAsyncThunk("Booking/createBooking", async (Bookings) => {
    console.log(Bookings);
  try {
    const Booking = await axios.post(
      `${authConfig.baseUrl}/api/booking/create/`,
      {
        ...Bookings
      }
    );
    localStorage.setItem("bookingReturn", JSON.stringify(Booking.data.payload.bookingDetails))
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
        [createBookingDepart.pending]: (state) => {
          state.loading = true;
        },
        [createBookingDepart.fulfilled]: (state, { payload }) => {
          state.loading = false;
          state.BookingDepart = payload;
        },
        [createBookingDepart.rejected]: (state) => {
          state.loading = false;
        },
      },
      
    },    
    // {
    //   name: "Booking",
    //   initialState,
    //   reducers: {},
    //   extraReducers: {
    //     [createBookingReturn.pending]: (state) => {
    //       state.loading = true;
    //     },
    //     [createBookingReturn.fulfilled]: (state, { payload }) => {
    //       state.loading = false;
    //       state.BookingReturn = payload;
    //     },
    //     [createBookingReturn.rejected]: (state) => {
    //       state.loading = false;
    //     },
    //   },
      
    // },    
    
    
  );
  
  export default postSlice.reducer;
