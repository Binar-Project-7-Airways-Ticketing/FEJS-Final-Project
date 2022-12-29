import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { authConfig } from "../Config";

const initialState = {
  pagination: [],
  paginationReturn: [],
  Depart: false,
  DepartReturn: false,
};

export const Depart = createAsyncThunk("pagination/loadPagination", 
async (payload) => {
  try {
    console.log("SIZE", payload.page)
    const code = JSON.parse(localStorage.getItem("flightDepart"));
    const page = 1;
    // console.log(code[0].departureCode)
    const pagination = await axios.get(
        `${authConfig.baseUrl}/api/flight/paging/${3}/${payload.page}?departure-code=${payload.flight.departureCode}&arrival-code=${payload.flight.arrivalCode}&date=${payload.flight.departureDate}`
    );
    localStorage.setItem("page", pagination.data.totalPages);
    localStorage.setItem("number", pagination.data.number)
    return pagination.data.content
  } catch (error) {
    console.error(error);
  }
});

export const DepartReturn = createAsyncThunk("pagination/loadPagination", 
async (payload) => {
  try {
    console.log("SIZE", payload.page)
    const code = JSON.parse(localStorage.getItem("flightReturn"));
    const page = 1;
    // console.log(code[0].departureCode)
    const paginationReturn = await axios.get(
        `${authConfig.baseUrl}/api/flight/paging/${3}/${payload.page}?departure-code=${payload.flight.departureCode}&arrival-code=${payload.flight.arrivalCode}&date=${payload.flight.departureDate}`
    );
    localStorage.setItem("page", paginationReturn.data.totalPages);
    localStorage.setItem("number", paginationReturn.data.number)
    console.log(paginationReturn.data.content)
    return paginationReturn.data.content
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
    },
    {
      name: "paginationReturn",
      initialState,
      reducers: {},
      extraReducers: {
        [DepartReturn.pending]: (state) => {
          state.loading = true;
        },
        [DepartReturn.fulfilled]: (state, { payload }) => {
          state.loading = false;
          state.paginationReturn = payload;
        },
        [DepartReturn.rejected]: (state) => {
          state.loading = false;
        },
      },
    }
  );
  
  export default postSlice.reducer;