import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {

  category: [],
  loadLuggage: false,
};


export const loadCategory = createAsyncThunk("luggages/loadCategory", async () => {

  try {
    const category = await axios.get(
      `https://bej-ticketing-production.up.railway.app/api/passenger/age-category`
    )
    
    return category.data
  } catch (error) {
    console.error(error);
  }
});

export const postSlice = createSlice(
    
    {
      name: "category",
      initialState,
      reducers: {},
      extraReducers: {
        [loadCategory.pending]: (state) => {
          state.loading = true;
        },
        [loadCategory.fulfilled]: (state, { payload }) => {
          state.loading = false;
          state.category = payload;
        },
        [loadCategory.rejected]: (state) => {
          state.loading = false;
        },
      },
    },
  );
  
  export default postSlice.reducer;