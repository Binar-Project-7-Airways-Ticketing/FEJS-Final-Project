import React from "react";
import { Card } from "antd";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
const { Meta } = Card;

export default function ComingServices() {
  return (
    <div>
      <div className="mb-10  text-brand-whiteLight">
        <h5>SERVICES COMING SOON</h5>
        <h2 className=" mb-5">Our services are coming soon</h2>
        <p className="xl:w-3/4 lg:w-full">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente,
          molestiae eaque dignissimos, nemo assumenda quam voluptatem maiores
          corporis quaerat numquam odio! Culpa qui, soluta quisquam dolorum
          architecto illo aperiam quibusdam quos cum consectetur delectus minus
          dicta doloribus magni incidunt tempora, veritatis ad quam quo
          asperiores. Itaque quae ipsum id earum.
        </p>
      </div>
      <div >
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
              slidesPerView: 2,
            },
            375: {
              spaceBetween: 10,
              slidesPerView: 2,
            },
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <div className="w-full ">
            <SwiperSlide>
              <Card
                hoverable
                style={{
                  width: "100%",
                }}
                cover={
                  <img
                    className="2xl:h-full xl:h-3/4 lg:h-1/2 sm:h-1/4 h-48  "
                    alt="example"
                    src="https://images.unsplash.com/photo-1583845112203-29329902332e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                  />
                }
              >
                <Meta
                  title="Europe Street beat"
                  description="www.instagram.com"
                />
              </Card>
            </SwiperSlide>

            <SwiperSlide>
              <Card
                hoverable
                style={{
                  width: "100%",
                }}
                cover={
                  <img
                    className="2xl:h-full xl:h-3/4 lg:h-1/2 sm:h-1/4 h-48"
                    alt="example"
                    src="https://images.unsplash.com/photo-1570125910130-67cb59733d1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                  />
                }
              >
                <Meta
                  title="Europe Street beat"
                  description="www.instagram.com"
                />
              </Card>
            </SwiperSlide>

            <SwiperSlide>
              <Card
                hoverable
                style={{
                  width: "100%",
                }}
                cover={
                  <img
                    className="2xl:h-full xl:h-3/4 lg:h-1/2 sm:h-1/4 h-48"
                    alt="example"
                    src="https://images.unsplash.com/photo-1529179307417-ca83d48bd790?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                  />
                }
              >
                <Meta
                  title="Europe Street beat"
                  description="www.instagram.com"
                />
              </Card>
            </SwiperSlide>

            <SwiperSlide>
              <Card
                hoverable
                style={{
                  width: "100%",
                }}
                cover={
                  <img
                    className="2xl:h-full xl:h-3/4 lg:h-1/2 sm:h-1/4 h-48"
                    alt="example"
                    src="https://images.unsplash.com/photo-1619463061549-e14e1de6c14f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                  />
                }
              >
                <Meta
                  title="Europe Street beat"
                  description="www.instagram.com"
                />
              </Card>
            </SwiperSlide>

            <SwiperSlide>
              <Card
                hoverable
                style={{
                  width: "100%",
                }}
                cover={
                  <img
                    className="2xl:h-full xl:h-3/4 lg:h-1/2 sm:h-1/4 h-48"
                    alt="example"
                    src="https://images.pexels.com/photos/12262167/pexels-photo-12262167.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                  />
                }
              >
                <Meta
                  title="Europe Street beat"
                  description="www.instagram.com"
                />
              </Card>
            </SwiperSlide>

            <SwiperSlide>
              <Card
                hoverable
                style={{
                  width: "100%",
                }}
                cover={
                  <img
                    className="2xl:h-full xl:h-3/4 lg:h-1/2 sm:h-1/4 h-48"
                    alt="example"
                    src="https://images.unsplash.com/photo-1563829904222-2c743e614282?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                  />
                }
              >
                <Meta
                  title="Europe Street beat"
                  description="www.instagram.com"
                />
              </Card>
            </SwiperSlide>
          </div>
        </Swiper>
      </div>
    </div>
  );
}
