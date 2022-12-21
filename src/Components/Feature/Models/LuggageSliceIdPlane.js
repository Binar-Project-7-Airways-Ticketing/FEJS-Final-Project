import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {

  luggagesPlane: [],
  loadLuggage: false,
};


export const loadLuggagesIdPlane = createAsyncThunk("luggages/loadLuggagesIdPlane", async (idPlane) => {

  try {
    const luggagesId = await axios.get(
      `https://bej-ticketing-production.up.railway.app/api/luggage/plane-detail/${idPlane}`
    );

    return luggagesId.data
  } catch (error) {
    console.error(error);
  }
});

export const postSlice = createSlice(
    
    {
      name: "luggagePlane",
      initialState,
      reducers: {},
      extraReducers: {
        [loadLuggagesIdPlane.pending]: (state) => {
          state.loading = true;
        },
        [loadLuggagesIdPlane.fulfilled]: (state, { payload }) => {
          state.loading = false;
          state.luggagesPlane = payload;
        },
        [loadLuggagesIdPlane.rejected]: (state) => {
          state.loading = false;
        },
      },
    },
  );
  
  export default postSlice.reducer;