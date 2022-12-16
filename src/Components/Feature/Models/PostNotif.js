import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { authConfig } from "../Config";

const initialState = {
  notif: [],
  loadSeat: false,
};

export const createNotif = createAsyncThunk("notif/createNotif", async (id) => {
    console.log(id);
  try {
    const notif = await axios.post(
      `${authConfig.baseUrl}/api/notification/create`,
      {
        user:id,
        title:"LOGIN",
        message: "Login Berhasil, silahkan pesan penerbangan dengan harga bersahabat",
        category:"PRIA"
      }
    );
   
    return notif.data
  } catch (error) {
    console.error(error);
  }
});


export const postSlice = createSlice(
    {
      name: "notif",
      initialState,
      reducers: {},
      extraReducers: {
        [createNotif.pending]: (state) => {
          state.loading = true;
        },
        [createNotif.fulfilled]: (state, { payload }) => {
          state.loading = false;
          state.notif = payload;
        },
        [createNotif.rejected]: (state) => {
          state.loading = false;
        },
      },
      
    },    
    
    
  );
  
  export default postSlice.reducer;
