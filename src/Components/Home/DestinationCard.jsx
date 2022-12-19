import React from "react";
import { Card, Empty } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { loadAirports } from "../Feature/Models/AirpostSlice";
const { Meta } = Card;
export default function Destination() {
  const { airport } = useSelector((state) => state.airport);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadAirports());
  });
  return (
    <div className="flex flex-col h-full w-full">
      <div>
        <h5>EXPLORE</h5>
        <h2 className=" text-brand-black md:mb-10 sm:mb-5">
          Explore your travel destination
        </h2>
      </div>
      <div className="flex md:flex-row sm:flex-col w-full sm:gap-2 ">
        <div className="xl:w-3/5 h-full md:w-full ">
          {airport
            .filter((item) => item.idAirport === 1)
            .map((item) => (
              <Card
                hoverable
                className="w-full "
                cover={<img alt="example" src={item.urlPhoto} />}
              >
                <Meta title={item.city} description="Destinasi wisata" />
              </Card>
            ))}
        </div>
        <div className="h-fit w-full xl:grid xl:gap-2 xl:grid-cols-3 lg:w-full lg:grid lg:grid-cols-2 md:w-1/2 md:grid md:gap-y-10 md:gap-x-2 md:grid-cols-1 sm:grid sm:grid-cols-2 sm:gap-2">
          <div className="w-full">
            {airport
              .filter((item) => item.idAirport === 2)
              .map((item) => (
                <Card
                  hoverable
                  style={{
                    width: "100%",
                  }}
                  cover={
                    <img
                      className="2xl:h-72 h-56"
                      alt="example"
                      src={item.urlPhoto}
                    ></img>
                  }
                >
                  <Meta title={item.city} description="Destinasi wisata" />
                </Card>
              ))}
          </div>
          <div className="w-full">
            {airport
              .filter((item) => item.idAirport === 5)
              .map((item) => (
                <Card
                  hoverable
                  style={{
                    width: "100%",
                  }}
                  cover={
                    <img
                      className="2xl:h-72 h-56"
                      alt="example"
                      src={item.urlPhoto}
                    ></img>
                  }
                >
                  <Meta title={item.city} description="Destinasi wisata" />
                </Card>
              ))}
          </div>

          {airport.slice(0, 4).map((item) => (
            <div className="w-full lg:hidden xl:block md:hidden">
              <Card
                hoverable
                style={{
                  width: "100%",
                }}
                cover={
                  item.urlPhoto === null ? (
                    <div className="2xl:h-72 h-56">
                      <Empty />
                    </div>
                  ) : (
                    <img
                      className="2xl:h-72 h-56"
                      alt="example"
                      src={item.urlPhoto}
                    ></img>
                  )
                }
              >
                <Meta title={item.city} description="Destinasi wisata" />
              </Card>
            </div>
          ))}

          {airport.slice(0, 2).map((item) => (
            <div className="xl:hidden w-full sm:hidden">
              <Card
                hoverable
                style={{
                  width: "100%",
                }}
                cover={
                  item.urlPhoto === null ? (
                    <div className="2xl:h-72 h-56">
                      <Empty />
                    </div>
                  ) : (
                    <img
                      className="2xl:h-72 h-56"
                      alt="example"
                      src={item.urlPhoto}
                    ></img>
                  )
                }
              >
                <Meta title={item.city} description="Destinasi wisata" />
              </Card>
            </div>
          ))}
        </div>
      </div>
      <div className="xl:hidden lg:flex gap-2 md:hidden">
        {airport.slice(2, 4).map((item) => (
          <div className="xl:hidden w-full sm:hidden">
            <Card
              hoverable
              style={{
                width: "100%",
              }}
              cover={
                item.urlPhoto === null ? (
                  <div className="2xl:h-72 h-56">
                    <Empty />
                  </div>
                ) : (
                  <img
                    className="2xl:h-72 h-56"
                    alt="example"
                    src={item.urlPhoto}
                  ></img>
                )
              }
            >
              <Meta title={item.city} description="Destinasi wisata" />
            </Card>
          </div>
        ))}
      </div>
      <div className="xl:hidden md:flex gap-2 lg:hidden">
        {airport.slice(0, 2).map((item) => (
          <div className="xl:hidden w-full sm:hidden">
            <Card
              hoverable
              style={{
                width: "100%",
              }}
              cover={
                item.urlPhoto === null ? (
                  <div className="2xl:h-72 h-56">
                    <Empty />
                  </div>
                ) : (
                  <img
                    className="2xl:h-72 h-56"
                    alt="example"
                    src={item.urlPhoto}
                  ></img>
                )
              }
            >
              <Meta title={item.city} description="Destinasi wisata" />
            </Card>
          </div>
        ))}
      </div>
      <div className="xl:hidden md:flex gap-2 lg:hidden">
        {airport.slice(2, 4).map((item) => (
          <div className="xl:hidden sm:hidden w-full">
            <Card
              hoverable
              style={{
                width: "100%",
              }}
              cover={
                item.urlPhoto === null ? (
                  <div className="2xl:h-72 h-56">
                    <Empty />
                  </div>
                ) : (
                  <img
                    className="2xl:h-72 h-56"
                    alt="example"
                    src={item.urlPhoto}
                  ></img>
                )
              }
            >
              <Meta title={item.city} description="Destinasi wisata" />
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}
