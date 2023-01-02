import React from "react";
import { Card } from "antd";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import { useState } from "react";
const { Meta } = Card;

export default function ComingServices() {
  const [services, setServices] = useState([
    {
      photo:  "https://images.unsplash.com/photo-1583845112203-29329902332e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      title:"Hotel Booking"
       ,
    },
    {
      title: "Bus ticket booking",
      photo:
        "https://images.unsplash.com/photo-1570125910130-67cb59733d1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    },
    {
      title: "Train ticket booking",
      photo:
        "https://images.unsplash.com/photo-1529179307417-ca83d48bd790?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    },
    {
      title: "Car rental bookings",
      photo:
        "https://images.unsplash.com/photo-1619463061549-e14e1de6c14f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      title: "Concert ticket booking",
      photo:
        "https://images.pexels.com/photos/12262167/pexels-photo-12262167.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
    {
      title: "Cruise ticket booking",
      photo:
        "https://images.unsplash.com/photo-1563829904222-2c743e614282?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    },
  ]);
  return (
    <div>
      <div className="mb-10  text-brand-whiteLight">
        <h5>SERVICES COMING SOON</h5>
        <h2 className=" mb-5">Our services are coming soon</h2>
        <p className="xl:w-3/4 lg:w-full">
          7 - Airways is an airline from Indonesia that is more engaged in
          E-tickets, because we want to help make it easier for people to order
          tickets to travel long distances using planes both domestically and
          abroad. Here are the upcoming services from our website
        </p>
      </div>
      <div>
        <Swiper
          spaceBetween={30}
          slidesPerView={6}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            1920: {
              spaceBetween: 30,
              slidesPerView: 5,
            },
            1440: {
              spaceBetween: 30,
              slidesPerView: 5,
            },
            1024: {
              spaceBetween: 30,
              slidesPerView: 4,
            },
            768: {
              spaceBetween: 20,
              slidesPerView: 3,
            },
            425: {
              spaceBetween: 20,
              slidesPerView: 1,
            },
            360: {
              spaceBetween: 10,
              slidesPerView: 1,
            },
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <div className="w-fit ">
            {services.map((item) => (
              <SwiperSlide>
                <Card
                  hoverable
                  className="md:w-full sm:w-56"
                  cover={
                    <img
                      className="2xl:h-full xl:h-3/4 lg:h-1/2 sm:h-1/4 h-48  "
                      alt="example"
                      src={item.photo}
                    />
                  }
                >
                  <Meta
                    title={item.title}
                    // description="www.instagram.com"
                  />
                </Card>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
    </div>
  );
}
