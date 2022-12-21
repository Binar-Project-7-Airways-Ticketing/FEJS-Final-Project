import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { authConfig } from "../Config";

const initialState = {
  pagination: [],
  loadPagination: false,
};

export const loadPagination = createAsyncThunk("pagination/loadPagination", 
async (size, page) => {
  try {
    const pagination = await axios.get(
        `${authConfig.baseUrl}/api/flight/paging/${size}/${page}`
    );

    return pagination.data
  } catch (error) {
    console.error(error);
  }
});

export const postSlice = createSlice(
    {
      name: "pagination",
      initialState,
      reducers: {},
      extraReducers: {
        [loadPagination.pending]: (state) => {
          state.loading = true;
        },
        [loadPagination.fulfilled]: (state, { payload }) => {
          state.loading = false;
          state.pagination = payload;
        },
        [loadPagination.rejected]: (state) => {
          state.loading = false;
        },
      },
    }
  );
  
  export default postSlice.reducer;