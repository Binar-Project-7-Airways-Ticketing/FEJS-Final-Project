import { configureStore } from "@reduxjs/toolkit";
import { reducer as authLoginReducer } from "./Models/AuthLogin";
import { reducer as authRegisterReducer } from "./Models/AuthRegister";
import seats from "../Feature/Models/SeatsSlice"
import luggages from "../Feature/Models/LuggageSlice"
import airports from "../Feature/Models/AirpostSlice"
import flights from "../Feature/Models/FlightSlice"
import citiesFrom from "../Feature/Models/AirportFromSlice"
import citiesTo from "../Feature/Models/AirportToSlice"
import notifs from "../Feature/Models/Notification"
import detailsNotif from "../Feature/Models/NotificationDetail"

export const store = configureStore({
    reducer: {
        authLogin: authLoginReducer,
        authRegister: authRegisterReducer,
        seat: seats,
        luggage: luggages,
        airport: airports,
        flight:flights,
        cityFrom:citiesFrom,
        cityTo:citiesTo,
        notif:notifs,
        detailNotif:detailsNotif
    }
})