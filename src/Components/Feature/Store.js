import { configureStore } from "@reduxjs/toolkit";
import { reducer as authLoginReducer } from "./Models/AuthLogin";
import { reducer as authRegisterReducer } from "./Models/AuthRegister";
import seats from "../Feature/Models/SeatsSlice"
import luggages from "../Feature/Models/LuggageSlice"
import airports from "../Feature/Models/AirpostSlice"

export const store = configureStore({
    reducer: {
        authLogin: authLoginReducer,
        authRegister: authRegisterReducer,
        seat: seats,
        luggage: luggages,
        airport: airports,
    }
})