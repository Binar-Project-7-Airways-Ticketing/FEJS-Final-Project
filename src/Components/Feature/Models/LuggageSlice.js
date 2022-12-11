import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  luggages: [],
  loadLuggage: false,
};

export const loadLuggages = createAsyncThunk("luggages/loadLuggages", async () => {
  try {
    const luggages = await axios.get(
      "https://bej-ticketing-production.up.railway.app/api/luggage"
    );
    return luggages.data
  } catch (error) {
    console.error(error);
  }
});

export const postSlice = createSlice(
    {
      name: "luggage",
      initialState,
      reducers: {},
      extraReducers: {
        [loadLuggages.pending]: (state) => {
          state.loading = true;
        },
        [loadLuggages.fulfilled]: (state, { payload }) => {
          state.loading = false;
          state.luggages = payload;
        },
        [loadLuggages.rejected]: (state) => {
          state.loading = false;
        },
      },
    }
  );
  
  export default postSlice.reducer;