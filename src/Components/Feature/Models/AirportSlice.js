import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { authConfig } from "../Config";

const initialState = {
  cityFrom: [],
  airport: [],
  cityTo: [],
  city: [],
  loadSeat: false,
};

export const loadAirports = createAsyncThunk("airports/loadAirport", async () => {
  try {
    const airports = await axios.get(
      `${authConfig.baseUrl}/api/airport`
    );
   
    return airports.data
  } catch (error) {
    console.error(error);
  }
});
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
export const loadCitiesFrom = createAsyncThunk(
  "airports/loadCityFrom",
  async (name) => {
    try {
      const cityFrom = await axios.get(
        `${authConfig.baseUrl}/api/airport/name/${name}`
      );
      localStorage.setItem("cityFrom", JSON.stringify(cityFrom.data));
   
      return cityFrom.data;
    } catch (error) {
      console.error(error);
    }
    setTimeout(function () {
      window.location.reload(1);
    }, 5000);
 
  }
  
);
export const loadCity = createAsyncThunk(
  "airports/loadCityFrom",
  async (name) => {
    try {
      const cityFrom = await axios.get(
        `${authConfig.baseUrl}/api/airport/code/${name}`
      );
      localStorage.setItem("city", JSON.stringify(cityFrom.data));

      return cityFrom.data;
    } catch (error) {
      console.error(error);
    }
    setTimeout(function () {
      window.location.reload(1);
    }, 200);
  }
);


export const postSlice = createSlice(
  {
    name: "airport",
    initialState,
    reducers: {},
    extraReducers: {
      [loadAirports.pending]: (state) => {
        state.loading = true;
      },
      [loadAirports.fulfilled]: (state, { payload }) => {
        state.loading = false;
        state.airport = payload;
      },
      [loadAirports.rejected]: (state) => {
        state.loading = false;
      },
    },
    
  },    
  {
    name: "cityFrom",
    initialState,
    reducers: {},
    extraReducers: {
      [loadCitiesFrom.pending]: (state) => {
        state.loading = true;
      },
      [loadCitiesFrom.fulfilled]: (state, { payload }) => {
        state.loading = false;
        state.cityFrom = payload;
      },
      [loadCitiesFrom.rejected]: (state) => {
        state.loading = false;
      },
    },
  },
  {
    name: "citTo",
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
  },
  {
    name: "city",
    initialState,
    reducers: {},
    extraReducers: {
      [loadCity.pending]: (state) => {
        state.loading = true;
      },
      [loadCity.fulfilled]: (state, { payload }) => {
        state.loading = false;
        state.city = payload;
      },
      [loadCity.rejected]: (state) => {
        state.loading = false;
      },
    },
  },
    
    
    
  );
  
  export default postSlice.reducer;
