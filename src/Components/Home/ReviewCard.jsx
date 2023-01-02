import React from "react";
import { Carousel } from "antd";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import { useState } from "react";

export default function ReviewCard() {
  const [review, setReview] = useState([
    {
      name: "David Mc.Ghallan",
      photo:
        "https://images.unsplash.com/photo-1529637879217-0299271b651f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    },
    {
      name: "David Mc.Ghallan",
      photo:
        "https://images.unsplash.com/photo-1529637879217-0299271b651f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    },
    {
      name: "David Mc.Ghallan",
      photo:
        "https://images.unsplash.com/photo-1529637879217-0299271b651f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    },
    {
      name: "David Mc.Ghallan",
      photo:
        "https://images.unsplash.com/photo-1529637879217-0299271b651f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    },
    {
      name: "David Mc.Ghallan",
      photo:
        "https://images.unsplash.com/photo-1529637879217-0299271b651f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    },
    {
      name: "David Mc.Ghallan",
      photo:
        "https://images.unsplash.com/photo-1529637879217-0299271b651f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    },
    {
      name: "David Mc.Ghallan",
      photo:
        "https://images.unsplash.com/photo-1529637879217-0299271b651f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    },
  ]);
  return (
    <>
      <div className="rounded-2xl">
        <div className="flex flex-col w-full gap-10 text-brand-whiteLight">
          <div>
            <h5>EXPERIENCE</h5>
            <h2 className=" mb-2 ">Our client Shared Their Experience</h2>
            <p className="xl:w-1/2">
              The story of your experience is the biggest thing for us so that
              we can develop our website to be better
            </p>
          </div>
          <div>
            <Swiper
              spaceBetween={30}
              slidesPerView={4}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              breakpoints={{
                1920: {
                  spaceBetween: 10,
                  slidesPerView: 5,
                },
                1440: {
                  spaceBetween: 10,
                  slidesPerView: 4,
                },
                1024: {
                  spaceBetween: 10,
                  slidesPerView: 3,
                },
                768: {
                  spaceBetween: 10,
                  slidesPerView: 2,
                },
                425: {
                  spaceBetween: 10,
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
              <div className="flex w-full gap-5">
                {review.map((item) => (
                  <SwiperSlide>
                    <div className="md:flex md:flex-col w-full gap-5 sm:flex sm:flex-row text-brand-black bg-brand-whiteLight p-5 rounded-2xl">
                      <div className="md:flex md:flex-row gap-5 sm:flex sm:flex-col-reverse">
                        <img
                          alt=""
                          style={{
                            borderRadius: "50px",
                            width: "70px",
                            height: "70px",
                          }}
                          src={item.photo}
                        ></img>
                        <h6>{item.name}</h6>
                      </div>
                      <p>
                        Economy airplanes have wider seats than other economy
                        planes. the plane is rather relieved and comfortable.
                        Apart from being affordable, 7-airways also offers the
                        best quality in its class. Passengers are welcome to
                        board the plane early. There is no time delay at all.
                        Even though at the same time there were two flights that
                        experienced quite a long delay.
                      </p>
                    </div>
                  </SwiperSlide>
                ))}
              </div>
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
}
