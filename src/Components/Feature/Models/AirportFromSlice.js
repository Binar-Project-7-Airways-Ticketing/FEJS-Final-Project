// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";
// import { authConfig } from "../Config";

// const initialState = {
//   cityFrom: [],
//   loadSeat: false,
// };

// export const loadCitiesFrom = createAsyncThunk(
//   "airports/loadCityFrom",
//   async (name) => {
//     try {
//       const cityFrom = await axios.get(
//         `${authConfig.baseUrl}/api/airport/name/${name}`
//       );
//       localStorage.setItem("cityFrom", JSON.stringify(cityFrom.data));

//       return cityFrom.data;
//     } catch (error) {
//       console.error(error);
//     }
//   }
// );

// export const postSlice = createSlice({
//   name: "cityFrom",
//   initialState,
//   reducers: {},
//   extraReducers: {
//     [loadCitiesFrom.pending]: (state) => {
//       state.loading = true;
//     },
//     [loadCitiesFrom.fulfilled]: (state, { payload }) => {
//       state.loading = false;
//       state.cityFrom = payload;
//     },
//     [loadCitiesFrom.rejected]: (state) => {
//       state.loading = false;
//     },
//   },
// });

// export default postSlice.reducer;
