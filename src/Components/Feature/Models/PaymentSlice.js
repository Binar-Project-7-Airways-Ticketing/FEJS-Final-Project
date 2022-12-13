import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { authConfig } from "../Config";

const initialState = {
  payment: [],
  loadPayment: false,
};

export const loadPayment = createAsyncThunk("payment/loadPayment", async () => {
  try {
    const payment = await axios.get(
        `${authConfig.baseUrl}/api/payment`
    );
    return payment.data
    console.log('payment', payment)
  } catch (error) {
    console.error(error);
  }
});


export const postSlice = createSlice(
    {
      name: "payment",
      initialState,
      reducers: {},
      extraReducers: {
        [loadPayment.pending]: (state) => {
          state.loading = true;
        },
        [loadPayment.fulfilled]: (state, { payload }) => {
          state.loading = false;
          state.payment = payload;
        },
        [loadPayment.rejected]: (state) => {
          state.loading = false;
        },
      },
    }
  );
  
  export default postSlice.reducer;