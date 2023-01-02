import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { authConfig } from "../Config";

const initialState = {
  paginationReturn: [],
  DepartReturn: false,
};

export const DepartReturn = createAsyncThunk(
  "pagination/loadPagination",
  async (payload) => {
    const pages = payload.flight[0]
    try {
      const paginationReturn = await axios.get(
        `${authConfig.baseUrl}/api/flight/paging/${3}/${payload.page}?departure-code=${pages.departureCode}&arrival-code=${pages.arrivalCode}&date=${pages.departureDate}`
      );
      localStorage.setItem("page1", paginationReturn.data.totalPages);
      localStorage.setItem("number1", paginationReturn.data.number);

      return paginationReturn.data.content;
    } catch (error) {
      console.error(error);
    }
  }
);

export const postSlice = createSlice({
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
});

export default postSlice.reducer;
