import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
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
  const results = await axios.post(`${authConfig.baseUrl}/api/auth/signin`, {
    headers: {
      "Content-Type": "application/json",
    },
    ...body,
  });

  if (!results) {
    throw new Error("Can't login");
  }

  const data = await results.data;
  console.log(data);

  localStorage.setItem(
    "token",
    JSON.stringify({
      token: data.token,
    })
  );
  localStorage.setItem("idUser", JSON.stringify(data.id));
  console.log(data);
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
