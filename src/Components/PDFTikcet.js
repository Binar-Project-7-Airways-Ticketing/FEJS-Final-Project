import React, { useState, useMemo } from "react";

import { SlPlane } from "react-icons/sl";
import { FaBarcode } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { loadCity } from "./Feature/Models/AirportSlice";
import { Document, Page, Text } from "@react-pdf/renderer";

export default function PDFTicket() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [ticket, setTicket] = useState([]);

  useEffect(() => {
    setTicket(JSON.parse(localStorage.getItem("booking")));
    dispatch(loadCity());
  }, []);

  return (
    <>
      {ticket.map((item, i) => (
        <div key={i} className="py-5 flex">
          <div className=" w-full bg-brand-black h-80 rounded-3xl ">
            <div className="flex justify-between py-5 px-10 items-center">
              <div>
                <h6>BOARDING PASS</h6>
                <h6>7-AIRWAYS</h6>
              </div>
              <SlPlane size={25} />
            </div>
            <div className="bg-brand-whiteLight text-brand-black flex py-2 gap-5 px-8 border-dotted border-r-2 border-brand-black">
              <div className="flex flex-col">
                <FaBarcode className="rotate-90" size={82} />
                <FaBarcode className="rotate-90" size={82} />
              </div>
              <div className="w-full flex flex-col gap-5">
                <div>
                  <h6>NAME</h6>
                  <p>
                    {item.passenger.firstName} {item.passenger.lastName}
                  </p>
                </div>
                <div>
                  <h6>FROM</h6>
                  <p>{item.flight.departureCode}</p>
                </div>
                <div>
                  <h6>TO</h6>
                  <p>{item.flight.arrivalCode}</p>
                </div>
              </div>

              <div className="w-full flex flex-col gap-5">
                <div>
                  <h6>DATE</h6>
                  <p>{item.flight.departureDate}</p>
                </div>
                <div>
                  <h6>GATE</h6>
                  <p>G22E</p>
                </div>
                <div>
                  <h6>FLIGHT NUMBER</h6>
                  <p>{item.flight.flightNumber}</p>
                </div>
              </div>

              <div className="w-full flex flex-col gap-5">
                <div>
                  <h6>TIME</h6>
                  <p>{item.flight.departureTime}</p>
                </div>
                <div>
                  <h6>SEAT</h6>
                  <p>Number {item.seat.numberSeat}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-2/5 bg-brand-black h-80 rounded-3xl ">
            <div className="flex justify-between py-5 px-10 items-center">
              <div>
                <h6>FLIGHT</h6>
                <h6>7-AIRWAYS</h6>
              </div>
              <SlPlane size={25} />
            </div>
            <div className="bg-brand-whiteLight text-brand-black flex flex-col py-2 px-10 gap-5">
              <div className="w-full flex ">
                <div className="w-full">
                  <h6>NAME</h6>
                  <p>
                    {item.passenger.firstName} {item.passenger.lastName}
                  </p>
                </div>
                <div className="w-full">
                  <h6>FROM</h6>
                  <p>{item.flight.departureCode}</p>
                </div>
                <div className="w-full">
                  <h6>TO</h6>
                  <p>{item.flight.arrivalCode}</p>
                </div>
              </div>

              <div className="w-full flex ">
                <div className="w-full">
                  <h6>DATE</h6>
                  <p>{item.flight.departureDate}</p>
                </div>
                <div className="w-full">
                  <h6>TIME</h6>
                  <p>{item.flight.departureTime}</p>
                </div>
                <div className="w-full">
                  <h6>GATE</h6>
                  <p>G22E</p>
                </div>
              </div>
              <div className="w-full flex ">
                <div className="w-full">
                  <h6>SEAT</h6>
                  <p>Number {item.seat.numberSeat}</p>
                </div>
                <div className="w-full">
                  <h6>FLIGHT NUMBER</h6>
                  <p>{item.flight.flightNumber}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

// {/* <div className="bg-brand-yellow">
//         <Navbar />
//         <div className="lg:p-8 md:p-16 sm:py-20 w-full">
//           <div className="booking-container">
//             <div className="booking-left flex flex-col gap-5">
//               <div className="parent-a w-full bg-brand-nude p-6 rounded-md border-2 border-brand-black">
//                 <div className="block justify-center">
//                   <h3 className="flex justify-center p-4 text-2xl font-bold text-red-700">
//                     Booking Pending
//                   </h3>
//                   <p className="flex justify-center p-2">
//                     Please Note Booking is in Pending only, will be Confirmed
//                     Only after receiving the Payment
//                   </p>
//                 </div>
//                 <div className="flex justify-center p-4">
//                   <span className="bg-brand-gray items-center text-center rounded-full w-[30%]">
//                     Flight PNR : QWSA876
//                   </span>
//                 </div>
//                 <div className="block justify-center items-center text-center">
//                   <p className="p-4">Thanks for choosing 7-Airways</p>
//                   <p>
//                     Ticket Deadline :<span>16 December 2022</span>
//                   </p>
//                   <div className="p-2 mb-4">
//                     <p>
//                       This voucher code is only usable after your payment for
//                       this booking.
//                     </p>
//                   </div>
//                 </div>
//                 <div className="border-t border-brand-gray">
//                   <div className="flex justify-center mt-4 p-2">
//                     <div className="bg-brand-gray items-center text-center rounded-sm w-[50%] p-2">
//                       <p>ATM PaymentCode: 1880142509194</p>
//                     </div>
//                   </div>
//                   <div className="flex justify-center items-center text-center mt-4 p-2">
//                     <p>
//                       Please Pay for your ticket within 10 hours to avoid the
//                       auto cancellation and bring your payment code to any
//                       nearest ATM or ALFA group counter (Alfamart, Alfamidi,
//                       Alfaexpress and Lawson) or Indomaret.
//                     </p>
//                   </div>
//                   <div className="flex justify-center items-center text-center mt-4 p-2">
//                     <p className="text-red-800 font-semibold">
//                       Total amount payable at an Indonesian ATM : IDR 2,516,400
//                     </p>
//                   </div>
//                   <div className="flex justify-center mt-2 p-2">
//                     <div className="bg-brand-gray items-center text-center rounded-sm w-[50%] p-2">
//                       <p>ATM PaymentCode: 1880142509194</p>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="flex justify-center items-center text-center mt-4 p-2">
//                   <h3 className="font-semibold">
//                     We accept payment from the :
//                   </h3>
//                 </div>
//                 <div>
//                   <div className="grid grid-cols-3 gap-4 p-2 mt sm:grid-cols-2">
//                     <div
//                       onClick={dana}
//                       className="flex justify-start mt-2 border-2 border-brand-gray rounded-md p-2"
//                     >
//                       <img
//                         src={bri}
//                         style={{
//                           width: "70px",
//                           height: "70px",
//                         }}
//                       ></img>
//                       <h3 className="p-6 text-black text-bold">BRI</h3>
//                     </div>
//                     <div
//                       onClick={dana}
//                       className="flex justify-start mt-2 border-2 border-brand-gray rounded-md p-2"
//                     >
//                       <img
//                         src={bca}
//                         style={{
//                           width: "70px",
//                           height: "70px",
//                         }}
//                       ></img>
//                       <h3 className="p-6 text-black text-bold">BCA</h3>
//                     </div>
//                     <div
//                       onClick={dana}
//                       className="flex justify-start mt-2 border-2 border-brand-gray rounded-md p-2"
//                     >
//                       <img
//                         src={mandiri}
//                         style={{
//                           width: "70px",
//                           height: "70px",
//                         }}
//                       ></img>
//                       <h3 className="p-6 text-black text-bold">Mandiri</h3>
//                     </div>
//                     <div
//                       onClick={dana}
//                       className="flex justify-start mt-2 border-2 border-brand-gray rounded-md p-2"
//                     >
//                       <img
//                         src={bni}
//                         style={{
//                           width: "70px",
//                           height: "70px",
//                         }}
//                       ></img>
//                       <h3 className="p-6 text-black text-bold">BNI</h3>
//                     </div>
//                     <div
//                       onClick={dana}
//                       className="flex justify-start mt-2 border-2 border-brand-gray rounded-md p-2"
//                     >
//                       <img
//                         src={ovo}
//                         style={{
//                           width: "70px",
//                           height: "70px",
//                         }}
//                       ></img>
//                       <h3 className="p-6 text-black text-bold">OVO</h3>
//                     </div>
//                     <div
//                       onClick={dana}
//                       className="flex justify-start mt-2 border-2 border-brand-gray rounded-md p-2"
//                     >
//                       <img
//                         src={danaa}
//                         style={{
//                           width: "70px",
//                           height: "70px",
//                         }}
//                       ></img>
//                       <h3 className="p-6 text-black text-bold">Dana</h3>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="flex flex-col gap-5 bg-brand-whiteLight p-4  ">
//                 <h6>Your Itinerary </h6>
//                 <div className="flex gap-5 items-center">
//                   <div className="bg-brand-yellow w-14 h-14 rounded-full flex items-center justify-center text-brand-whiteLight">
//                     <MdFlightTakeoff size={30} />
//                   </div>
//                   <h5>Your Departure Flight</h5>
//                 </div>
//                 <div className="flex flex-col bg-brand-gray p-3 text-brand-whiteLight gap-3 ">
//                   <div className="flex border-dotted border-b-2 border-brand-black pb-3 ">
//                     <div className="flex flex-col items-center w-full gap-0 ">
//                       <p>Depart</p>
//                       <h4>09:00</h4>
//                       <p>Jakarta, Soekarno-Hatta</p>
//                     </div>
//                     <div className="flex items-center justify-center">
//                       <MdKeyboardArrowRight  size={70} />
//                     </div>
//                     <div className="flex flex-col items-center w-full gap-0 ">
//                       <p>Arrival</p>
//                       <h4>10:30</h4>
//                       <p>Singapura, Changi</p>
//                     </div>
//                     <div className="w-full">
//                       <p>Departure Date</p>
//                       <p>Flight</p>
//                       <p>Duration</p>
//                     </div>
//                   </div>

//                   <div className="flex flex-col pl-5 w-full gap-0 ">
//                     <h6>Mr. Jhon Dhe</h6>
//                     <h4>09:00</h4>
//                     <p>Jakarta, Soekarno-Hatta</p>
//                   </div>
//                 </div>
//                 <div className="flex gap-5 items-center">
//                   <div className="bg-brand-yellow w-14 h-14 rounded-full flex items-center justify-center text-brand-whiteLight">
//                     <MdFlightLand size={30} />
//                   </div>
//                   <h5>Your Return Flight</h5>
//                 </div>
//                 <div className="flex flex-col bg-brand-gray p-3 text-brand-whiteLight gap-3 ">
//                   <div className="flex border-dotted border-b-2 border-brand-black pb-3 ">
//                     <div className="flex flex-col items-center w-full gap-0 ">
//                       <p>Depart</p>
//                       <h4>10:30</h4>
//                       <p>Singapura, Changi</p>
//                     </div>
//                     <div className="flex items-center justify-center">
//                       <MdKeyboardArrowRight  size={70} />
//                     </div>
//                     <div className="flex flex-col items-center w-full gap-0 ">
//                       <p>Arrival</p>
//                       <h4>12:00</h4>
//                       <p>Jakarta, Soekarno-Hatta</p>
//                     </div>
//                     <div className="w-full">
//                       <p>Departure Date</p>
//                       <p>Flight</p>
//                       <p>Duration</p>
//                     </div>
//                   </div>

//                   <div className="flex flex-col pl-5 w-full gap-0 ">
//                     <h6>Mr. Jhon Dhe</h6>
//                     <h4>09:00</h4>
//                     <p>Jakarta, Soekarno-Hatta</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="booking-right">
//               <div className="w-full">
//                 <div className="parent-a w-full bg-brand-whiteLight p-6 rounded-md border-2 border-brand-black sm:mt-8">
//                   <div className="w-full bg-brand-black text-white p-2 mb-4 gap-4 rounded-md">
//                     <h3 className="text-[20px] font-semibold mb-2">
//                       Penerbangan
//                     </h3>
//                   </div>
//                   <div className="py-2">
//                     <div className="flex w-full gap-8 mb-2 p-2 ">
//                       <div className="flex w-full gap-4">
//                         <h3>Jakarta</h3>
//                         <span>
//                           <ArrowRightOutlined />
//                         </span>
//                         <h3>Singapore</h3>
//                       </div>
//                       <div>
//                         <button className="text-blue-600" onClick={showModal}>
//                           Detail
//                         </button>
//                       </div>
//                       <Modal
//                         title="Flight Detail"
//                         open={isModalOpen}
//                         onOk={handleOk}
//                         onCancel={handleCancel}
//                         footer={[null]}
//                       >
//                         <div className="wrap-modal-detail-flight">
//                           <div className="title-detail-flight">
//                             <p>Jakarta to Singapore</p>
//                             <p>Saturday, Nov 26</p>
//                           </div>
//                           <div className="modal-detail-flight">
//                             <div className="airports">
//                               <div>
//                                 <p>Jakarta</p>
//                                 <p>Soekarno-Hatta International Airports</p>
//                               </div>
//                               <div>
//                                 <p>NO PESAWAT</p>
//                                 <p>Flight by 7-Airways</p>
//                               </div>
//                               <div>
//                                 <p>Singapore</p>
//                                 <p>Changi International Airports</p>
//                               </div>
//                             </div>

//                             <div className="modal-logo">
//                               <div className="circle">
//                                 <BsCircle />
//                               </div>
//                               <div className="wrap-logo">
//                                 <img
//                                   src={logo}
//                                   style={{
//                                     width: "90px",
//                                     height: "90px",
//                                     borderRadius: "100%",
//                                     border: "1px solid black",
//                                   }}
//                                 ></img>
//                               </div>
//                               <div className="circle">
//                                 <BsCircle />
//                               </div>
//                             </div>
//                             <div className="modal-time">
//                               <p>10:30</p>
//                               <p>2h 10m</p>
//                               <p>14:40</p>
//                             </div>
//                           </div>
//                           <div>
//                             <h6>Passenger</h6>
//                             <p>Adults, Childs, Infant</p>
//                           </div>
//                           <div>
//                             <h6>Luggage</h6>
//                             <p>{bagasi}</p>
//                           </div>
//                           <div>
//                             <h6>Number Seats</h6>
//                             <p></p>
//                           </div>
//                         </div>
//                       </Modal>
//                     </div>
//                     <div className="w-full my-[2rem] border-2 border-brand-gray p-2">
//                       <h3 className="text-[20px] text-black mb-4">
//                         Kebijakan Tiket
//                       </h3>
//                       <div className="flex justify-start items-center mb-4 gap-4">
//                         <span>
//                           <DollarCircleOutlined />
//                         </span>
//                         <p className="mt-2">Bisa Refund</p>
//                       </div>
//                       <div className="flex justify-start items-center mb-4 gap-4">
//                         <span>
//                           <ScheduleOutlined />
//                         </span>
//                         <p className="mt-2">Bisa Rescedhule</p>
//                       </div>
//                     </div>
//                     <div className="flex justify-end w-full my-[2rem]">
//                       <div>
//                         <h3 className="text-[16px] text-black mb-4 font-semibold">
//                           Total Pembayaran
//                         </h3>
//                         <span className="w-full">Rp. 0,-</span>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <Footer />
//       </div> */}
