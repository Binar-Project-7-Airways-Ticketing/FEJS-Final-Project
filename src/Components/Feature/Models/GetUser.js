import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { authConfig } from "../Config";

const initialState = {

  user:[],
  loadSeat: false,
};


export const loadUser = createAsyncThunk("user/loadUser", async (users) => {
  
  
  try {
    const user = await axios.get(
      `${authConfig.baseUrl}/api/user/${users}`
    );
    // localStorage.setItem("User", JSON.stringify(user.data));
    
    return user.data
  } catch (error) {
    console.error(error);
  }
});

export const postSlice = createSlice(

    {
      name: "User",
      initialState,
      reducers: {},
      extraReducers: {
        [loadUser.pending]: (state) => {
          state.loading = true;
        },
        [loadUser.fulfilled]: (state, { payload }) => {
          state.loading = false;
          state.user = payload;
        },
        [loadUser.rejected]: (state) => {
          state.loading = false;
        },
      },
    },
  );
  
  export default postSlice.reducer;