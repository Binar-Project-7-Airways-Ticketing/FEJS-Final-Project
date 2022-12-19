import React from "react";
import { Carousel } from "antd";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";

export default function ReviewCard() {
  return (
    <>
      <div className="rounded-2xl">
        <div className="flex flex-col w-full gap-10 text-brand-whiteLight">
          <div>
            <h5>EXPERIENCE</h5>
            <h2 className=" mb-2 ">Our client Shared Their Experience</h2>
            <p className="xl:w-1/2">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis
              iure cum minus vel repellendus a voluptates architecto sit fugiat
              voluptatem! Quia adipisci, id eaque nisi pariatur repellendus.
              Expedita, maiores doloribus?
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
                  slidesPerView: 6,
                },
                1440: {
                  spaceBetween: 10,
                  slidesPerView: 5,
                },
                1024: {
                  spaceBetween: 10,
                  slidesPerView: 4,
                },
                768: {
                  spaceBetween: 10,
                  slidesPerView: 3,
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
                <SwiperSlide>
                  <div className="flex w-full  gap-5  text-brand-black bg-brand-whiteLight p-5 rounded-2xl">
                    <img
                      style={{
                        borderRadius: "50px",
                        width: "70px",
                        height: "70px",
                      }}
                      src="https://images.pexels.com/photos/4050350/pexels-photo-4050350.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    ></img>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Eligendi ratione dignissimos, nam aliquam sed voluptates
                      nobis doloribus officiis et aperiam eos earum facere
                      labore, obcaecati quidem cum nostrum facilis unde?
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="flex w-full  gap-5  text-brand-black bg-brand-whiteLight p-5 rounded-2xl">
                    <img
                      style={{
                        borderRadius: "50px",
                        width: "70px",
                        height: "70px",
                      }}
                      src="https://images.pexels.com/photos/4050350/pexels-photo-4050350.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    ></img>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Eligendi ratione dignissimos, nam aliquam sed voluptates
                      nobis doloribus officiis et aperiam eos earum facere
                      labore, obcaecati quidem cum nostrum facilis unde?
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="flex w-full  gap-5  text-brand-black bg-brand-whiteLight p-5 rounded-2xl">
                    <img
                      style={{
                        borderRadius: "50px",
                        width: "70px",
                        height: "70px",
                      }}
                      src="https://images.pexels.com/photos/4050350/pexels-photo-4050350.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    ></img>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Eligendi ratione dignissimos, nam aliquam sed voluptates
                      nobis doloribus officiis et aperiam eos earum facere
                      labore, obcaecati quidem cum nostrum facilis unde?
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="flex w-full  gap-5  text-brand-black bg-brand-whiteLight p-5 rounded-2xl">
                    <img
                      style={{
                        borderRadius: "50px",
                        width: "70px",
                        height: "70px",
                      }}
                      src="https://images.pexels.com/photos/4050350/pexels-photo-4050350.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    ></img>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Eligendi ratione dignissimos, nam aliquam sed voluptates
                      nobis doloribus officiis et aperiam eos earum facere
                      labore, obcaecati quidem cum nostrum facilis unde?
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="flex w-full  gap-5  text-brand-black bg-brand-whiteLight p-5 rounded-2xl">
                    <img
                      style={{
                        borderRadius: "50px",
                        width: "70px",
                        height: "70px",
                      }}
                      src="https://images.pexels.com/photos/4050350/pexels-photo-4050350.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    ></img>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Eligendi ratione dignissimos, nam aliquam sed voluptates
                      nobis doloribus officiis et aperiam eos earum facere
                      labore, obcaecati quidem cum nostrum facilis unde?
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="flex w-full  gap-5  text-brand-black bg-brand-whiteLight p-5 rounded-2xl">
                    <img
                      style={{
                        borderRadius: "50px",
                        width: "70px",
                        height: "70px",
                      }}
                      src="https://images.pexels.com/photos/4050350/pexels-photo-4050350.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    ></img>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Eligendi ratione dignissimos, nam aliquam sed voluptates
                      nobis doloribus officiis et aperiam eos earum facere
                      labore, obcaecati quidem cum nostrum facilis unde?
                    </p>
                  </div>
                </SwiperSlide>
              </div>
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
}
