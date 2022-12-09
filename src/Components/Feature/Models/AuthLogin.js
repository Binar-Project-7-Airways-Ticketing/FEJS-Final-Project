import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { authConfig } from "../Config";

const initialState = {
  isLoading: false,
  isError: false,
  auth: {
    type: undefined,
    status: false,
    token: undefined,
    data: undefined,
  },
  login: [],
};

export const getLogin = createAsyncThunk("auth/login", async (body) => {
  // const navigate = useNavigate()
  const results = await axios.post(
      `https://cors-anywhere.herokuapp.com/https://bej-ticketing-production.up.railway.app/api/auth/signin`,
    
      {
        headers: {
          "Content-Type": "application/json"
      },
          ...body
      },
   
  )
  console.log(results.data);

  if (!results) {
    throw new Error("Can't login")
  }

  const data = await results.data;
  console.log(data);

  localStorage.setItem(
    "auth",
    JSON.stringify({
      id: data.id,
      token: data.token,
    })
  );

  return data;
});

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: {
    [getLogin.pending]: (state) => {
      state.loading = true;
    },
    [getLogin.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.login = payload.login;
      state.auth = {
        status: true,
        data: payload,
        token: payload.accessToken,
        type: "local",
      };
    },
    [getLogin.rejected]: (state) => {
      state.isLoading = false;
      state.isError = true;
    },
  },
});

export const { reducer } = authSlice;
