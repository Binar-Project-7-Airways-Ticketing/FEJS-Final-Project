import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { authConfig } from "../Config";

const initialState = {
  pagination: [],
  Depart: false,
};

export const Depart = createAsyncThunk("pagination/loadPagination", 
async (payload) => {
  const pages = payload.flight[0]
  try {
    const pagination = await axios.get(
        `${authConfig.baseUrl}/api/flight/paging/${3}/${payload.page}?departure-code=${pages.departureCode}&arrival-code=${pages.arrivalCode}&date=${pages.departureDate}`
    );
    localStorage.setItem("page", pagination.data.totalPages);
    localStorage.setItem("number", pagination.data.number)
    return pagination.data.content
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
        [Depart.pending]: (state) => {
          state.loading = true;
        },
        [Depart.fulfilled]: (state, { payload }) => {
          state.loading = false;
          state.pagination = payload;
        },
        [Depart.rejected]: (state) => {
          state.loading = false;
        },
      },
    }
  );
  
  export default postSlice.reducer;