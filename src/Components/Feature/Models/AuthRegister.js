import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { authConfig } from "../Config";

const initialState = {
  isLoading: false,
  isError: false,
  authRegister: {
    type: undefined,
    status: false,
    token: undefined,
    data: undefined,
  },
  register: [],
};

export const getRegister = createAsyncThunk(
  "authRegister/register",
  async (body) => {
    console.log(body);
    const results = await axios.post(`${authConfig.baseUrl}/api/auth/signup`, {
      headers: {
        "Content-Type": "application/json",
      },
      ...body,
    });

    if (!results) {
      throw new Error("Can't login");
    }

    const data = await results.data;
    return data;
  }
);

export const authRegisterSlice = createSlice({
  name: "authRegister",
  initialState,
  extraReducers: {
    [getRegister.pending]: (state) => {
      state.loading = true;
    },
    [getRegister.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.register = payload.register;
      state.authRegister = {
        status: true,
        data: payload,
        type: "local",
      };
    },
    [getRegister.rejected]: (state) => {
      state.isLoading = false;
      state.isError = true;
    },
  },
});

export const { reducer } = authRegisterSlice;
