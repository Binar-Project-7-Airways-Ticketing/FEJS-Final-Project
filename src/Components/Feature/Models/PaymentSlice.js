import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { authConfig } from "../Config";

const initialState = {
  payment: [],
  loadPayment: false,
};

export const loadPayment = createAsyncThunk("payment/loadPayment", async () => {
  try {
    const payment = await axios.get(`${authConfig.baseUrl}/api/payment`);
    return payment.data;
  } catch (error) {
    console.error(error);
  }
});

export const createPayment = createAsyncThunk(
  "payment/createPayment",
  async (idPassenger, body) => {
    try {
      // membutuhkan tag body, relasi ke pasanger id
      const payment = await axios.post(`${authConfig.baseUrl}/api/payment/create`, {
        idPassenger, 
        ...body
      });
      return payment.data;
    } catch (error) {
      console.error(error);
    }
  }
);

export const updatePayment = createAsyncThunk(
  "payment/updatePayment",
  async (idPayment, idPassenger, body) => {
    try {
      const payment = await axios.put(`${authConfig.baseUrl}/api/payment/update/${idPayment}/passenger/${idPassenger}`, {
        idPassenger,
        ...body
      });
      return payment.data;
    } catch (error) {
      console.error(error);
    }
  }
);

export const loadPaymentById = createAsyncThunk(
  "payment/loadPaymentById",
  async (id) => {
    try {
      const payment = await axios.get(`${authConfig.baseUrl}/api/payment/${id}`);
      return payment.data;
    } catch (error) {
      console.error(error);
    }
  }
);

export const postSlice = createSlice({
  name: "payment",
  initialState,
  reducers: {},
  extraReducers: {
    [loadPayment.pending]: (state) => {
      state.loading = true;
    },
    [loadPayment.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.payment = payload;
    },
    [loadPayment.rejected]: (state) => {
      state.loading = false;
    },
    [createPayment.pending]: (state) => {
      state.loading = true;
    },
    [createPayment.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.payment = payload;
    },
    [createPayment.rejected]: (state) => {
      state.loading = false;
    },
    [updatePayment.pending]: (state) => {
      state.loading = true;
    },
    [updatePayment.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.payment = payload;
    },
    [updatePayment.rejected]: (state) => {
      state.loading = false;
    },
    [loadPaymentById.pending]: (state) => {
      state.loading = true;
    },
    [loadPaymentById.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.payment = payload;
    },
    [loadPaymentById.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export default postSlice.reducer;
