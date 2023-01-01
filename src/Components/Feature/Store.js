import { configureStore } from "@reduxjs/toolkit";
import { reducer as authLoginReducer } from "./Models/AuthLogin";
import { reducer as authRegisterReducer } from "./Models/AuthRegister";
import seatsPlaneCount from "./Models/Seat";
import airports from "./Models/AirportSlice";
import flightDepart from "./Models/FlightSliceReturn";
import flightReturn from "./Models/FlightSliceReturn";
import cityFrom from "../Feature/Models/AirportSlice";
import cityTo from "../Feature/Models/AirportSlice";
import notifs from "../Feature/Models/Notification";
import detailsNotif from "../Feature/Models/Notification";
import getUser from "../Feature/Models/GetUser";
import getPrice from "./Models/GetPrice";
import luggagesPlane from "./Models/LuggageSliceIdPlane";
import category from "./Models/GetCategory";
import ticket from "./Models/GetTicket";
import booking from "./Models/CreateBooking"
import city from "./Models/AirportSlice"
import pagination from "./Models/PaginationSlice";
import paginationReturn from "./Models/PaginationReturnSlice";
import ascending from "./Models/AscendingSlice";

export const store = configureStore({
  reducer: {
    authLogin: authLoginReducer,
    authRegister: authRegisterReducer,
    airport: airports,
    flightDepart: flightDepart,
    flightReturn: flightReturn,
    cityFrom: cityFrom,
    cityTo: cityTo,
    notif: notifs,
    detailNotif: detailsNotif,
    getUser: getUser,
    getPrice: getPrice,
    luggagePlane: luggagesPlane,
    seatsPlaneCount: seatsPlaneCount,
    category: category,
    ticket:ticket,
    booking:booking,
    city:city,
    pagination: pagination,
    paginationReturn: paginationReturn,
    ascending: ascending,
  },
});
