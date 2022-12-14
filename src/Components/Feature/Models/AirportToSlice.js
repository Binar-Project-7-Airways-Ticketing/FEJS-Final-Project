import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { authConfig } from "../Config";

const initialState = {
  cityTo: [],
  loadSeat: false,
};

export const loadCitiesTo = createAsyncThunk(
  "airports/loadCity",
  async (name) => {
    try {
      const cityTo = await axios.get(
        `${authConfig.baseUrl}/api/airport/name/${name}`
      );
      localStorage.setItem("cityTo", JSON.stringify(cityTo.data));
      return cityTo.data;
    } catch (error) {
      console.error(error);
    }
  }
);

export const postSlice = createSlice({
  name: "city",
  initialState,
  reducers: {},
  extraReducers: {
    [loadCitiesTo.pending]: (state) => {
      state.loading = true;
    },
    [loadCitiesTo.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.cityTo = payload;
    },
    [loadCitiesTo.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export default postSlice.reducer;
