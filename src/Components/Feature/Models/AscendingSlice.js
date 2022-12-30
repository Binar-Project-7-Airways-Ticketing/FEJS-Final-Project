import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { authConfig } from "../Config";

const initialState = {
  AscendingBooking: [],
  Depart: false,
};

export const AscendingBooking = createAsyncThunk(
  "pagination/loadPagination",
  async (payload) => {
    try {
      console.log("SIZE", payload.page);
      const code = JSON.parse(localStorage.getItem("flightDepart"));
      const page = 1;
      const ascending = await axios.get(
        `${authConfig.baseUrl}/api/flight/paging/ascend/1/
          2
        ?departure-code=HLP&arrival-code=DPS&date=12/30/2022`
      );
      localStorage.setItem("page2", ascending.data.totalPages);
      localStorage.setItem("number2", ascending.data.number);
      return ascending.data.content;
    } catch (error) {
      console.error(error);
    }
  }
);

export const postSlice = createSlice({
  name: "ascending",
  initialState,
  reducers: {},
  extraReducers: {
    [AscendingBooking.pending]: (state) => {
      state.loading = true;
    },
    [AscendingBooking.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.AscendingBooking = payload;
    },
    [AscendingBooking.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export default postSlice.reducer;
