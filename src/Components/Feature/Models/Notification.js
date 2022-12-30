import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { authConfig } from "../Config";

const initialState = {
  notif: [],
  notifDetail: [],
  notifCreate: [],
  loadSeat: false,
}

export const createNotif = createAsyncThunk("notif/createNotif", async (notifs) => {
  console.log(notifs);
try {
  const notif = await axios.post(
    `${authConfig.baseUrl}/api/notification/create`,
    {
     
      ...notifs
    }
  );
 
  return notif.data
} catch (error) {
  console.error(error);
}
})
// export const loadNotifDetail = createAsyncThunk(
//   "notifDeatil/loadNotifDetail",
//   async (notifUser) => {
  
//     try {
//       const notif = await axios.get(
//         `${authConfig.baseUrl}/api/notification/${notifUser}`,{
//           headers: {
//             Authorization : `Bearer ${localStorage.getItem("token")}`
//           },
//         }
//       );

//       return notif.data.user;
//     } catch (error) {
//       console.error(error);
//     }
//   }
// );
export const loadNotif = createAsyncThunk(
  "notif/loadNotif",
  async (notifUser) => {
    console.log(notifUser);
    const token = localStorage.getItem("token")
    const id = localStorage.getItem("id")
    try {
      const notif = await axios.get(
        `${authConfig.baseUrl}/api/notification/user/${id}`,{
          headers: {
            'Authorization' : `Bearer ${token} `
          },
        }
        
      );
      console.log(notif);
     return notif.data
    } catch (error) {
      console.error(error);
    }
  }
);

export const postSlice = createSlice(
  {
    name: "loadNotif",
    initialState,
    reducers: {},
    extraReducers: {
      [loadNotif.pending]: (state) => {
        state.loading = true;
      },
      [loadNotif.fulfilled]: (state, { payload }) => {
        state.loading = false;
        state.notif = payload;
      },
      [loadNotif.rejected]: (state) => {
        state.loading = false;
      },
    },
  },
  // {
  //   name: "detailNotif",
  //   initialState,
  //   reducers: {},
  //   extraReducers: {
  //     [loadNotifDetail.pending]: (state) => {
  //       state.loading = true;
  //     },
  //     [loadNotifDetail.fulfilled]: (state, { payload }) => {
  //       state.loading = false;
  //       state.notifDetail = payload;
  //     },
  //     [loadNotifDetail.rejected]: (state) => {
  //       state.loading = false;
  //     },
  //   },
  // },
  {
    name: "createnotif",
    initialState,
    reducers: {},
    extraReducers: {
      [createNotif.pending]: (state) => {
        state.loading = true;
      },
      [createNotif.fulfilled]: (state, { payload }) => {
        state.loading = false;
        state.notifCreate = payload;
      },
      [createNotif.rejected]: (state) => {
        state.loading = false;
      },
    },
    
  },    

);

export default postSlice.reducer;
