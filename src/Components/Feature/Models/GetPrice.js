import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { authConfig } from "../Config";

const initialState = {

  Price:[],
  loadSeat: false,
};


export const loadPrice = createAsyncThunk("Price/loadPrice", async (Prices) => {

  
  try {
    const Price = await axios.get(
      `${authConfig.baseUrl}/api/flight/price/${Prices}`
    );
    // localStorage.setItem("Price", JSON.stringify(Price.data));
    return Price.data
  } catch (error) {
    console.error(error);
  }
});

export const postSlice = createSlice(

    {
      name: "Price",
      initialState,
      reducers: {},
      extraReducers: {
        [loadPrice.pending]: (state) => {
          state.loading = true;
        },
        [loadPrice.fulfilled]: (state, { payload }) => {
          state.loading = false;
          state.Price = payload;
        },
        [loadPrice.rejected]: (state) => {
          state.loading = false;
        },
      },
    },
  );
  
  export default postSlice.reducer;
