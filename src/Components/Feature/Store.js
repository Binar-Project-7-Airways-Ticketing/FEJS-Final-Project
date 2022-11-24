import { configureStore } from "@reduxjs/toolkit";
import { reducer as authLoginReducer } from "./Models/AuthLogin";
import { reducer as authRegisterReducer } from "./Models/AuthRegister";

export const store = configureStore({
    reducer: {
        authLogin: authLoginReducer,
        authRegister: authRegisterReducer,
    }
})