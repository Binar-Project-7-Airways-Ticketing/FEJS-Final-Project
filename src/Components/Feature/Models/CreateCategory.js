import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { authConfig } from "../Config";

const initialState = {
  Categories: [],
  loadSeat: false,
};

export const createCategories = createAsyncThunk("Categories/createCategories", async (Categories) => {
    console.log(Categories);
  try {
    const CategorY = await axios.post(
      `${authConfig.baseUrl}/api/passenger/create/age-category`,
      {
        ...Categories
      }
    );
   
    return Categories.data
  } catch (error) {
    console.error(error);
  }
});


export const postSlice = createSlice(
    {
      name: "Categories",
      initialState,
      reducers: {},
      extraReducers: {
        [createCategories.pending]: (state) => {
          state.loading = true;
        },
        [createCategories.fulfilled]: (state, { payload }) => {
          state.loading = false;
          state.Categories = payload;
        },
        [createCategories.rejected]: (state) => {
          state.loading = false;
        },
      },
      
    },    
    
    
  );
  
  export default postSlice.reducer;
