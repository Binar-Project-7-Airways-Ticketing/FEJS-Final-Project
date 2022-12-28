import { configureStore } from "@reduxjs/toolkit";
import { reducer as authLoginReducer } from "./Models/AuthLogin";
import { reducer as authRegisterReducer } from "./Models/AuthRegister";
import seatsPlaneCount from "./Models/Seat";
import airports from "./Models/AirportSlice";
import flightsOneWays from "./Models/FlightSliceReturn";
import flightsReturns from "./Models/FlightSliceReturn";
import citiesFrom from "../Feature/Models/AirportSlice";
import citiesTo from "../Feature/Models/AirportSlice";
import notifs from "../Feature/Models/Notification";
import detailsNotif from "../Feature/Models/Notification";
import getUser from "../Feature/Models/GetUser";
import getPrice from "./Models/GetPrice";
import luggagesPlane from "./Models/LuggageSliceIdPlane";
import category from "./Models/GetCategory";
import ticket from "./Models/GetTicket";
import booking from "./Models/CreateBooking"
import city from "./Models/AirportSlice"

export const store = configureStore({
  reducer: {
    authLogin: authLoginReducer,
    authRegister: authRegisterReducer,
    airport: airports,
    flightOneWay: flightsOneWays,
    flightReturn: flightsReturns,
    cityFrom: citiesFrom,
    cityTo: citiesTo,
    notif: notifs,
    detailNotif: detailsNotif,
    getUser: getUser,
    getPrice: getPrice,
    luggagePlane: luggagesPlane,
    seatsPlaneCount: seatsPlaneCount,
    category: category,
    ticket:ticket,
    booking:booking,
    city:city
  },
});
