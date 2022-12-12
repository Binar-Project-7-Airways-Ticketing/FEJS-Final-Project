import React from "react";
import { Card } from "antd";
const { Meta } = Card;
export default function Destination() {
  return (
    <div className="flex flex-col h-full w-full">
      <div>
        <h5>EXPLORE</h5>
        <h2 className=" text-brand-black md:mb-10 sm:mb-5">
          Explore your travel destination
        </h2>
      </div>
      <div className="flex lg:flex-row sm:flex-col w-full h-fit gap-5">
        <div className="w-full ">
          <Card
            hoverable
            style={{
              width: "100%",
              // height: "500px",
            }}
            cover={
              <img
                style={{ height: "600px" }}
                className="lg:w-full"
                alt="example"
                src="https://images.pexels.com/photos/1123982/pexels-photo-1123982.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              />
            }
          >
            <Meta title="Europe Street beat" description="www.instagram.com" />
          </Card>
        </div>
        <div className="grid xl:grid-cols-3 xl:w-full lg:w-3/5 h-fit gap-5 lg:grid-cols-2 md:grid-cols-3 sm:grid-cols-2">
          <div className="w-full">
            <Card
              hoverable
              style={{
                width: "100%",
              }}
              cover={
                <img
                  className="xl:h-60 lg:h-32"
                  alt="example"
                  src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                />
              }
            >
              <Meta
                title="Europe Street beat"
                description="www.instagram.com"
              />
            </Card>
          </div>
          <div className="w-full">
            <Card
              hoverable
              style={{
                width: "100%",
              }}
              cover={
                <img
                  className="xl:h-60 lg:h-32"
                  alt="example"
                  src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                />
              }
            >
              <Meta
                title="Europe Street beat"
                description="www.instagram.com"
              />
            </Card>
          </div>
          <div className="w-full">
            <Card
              hoverable
              style={{
                width: "100%",
              }}
              cover={
                <img
                  className="xl:h-60 lg:h-32"
                  alt="example"
                  src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                />
              }
            >
              <Meta
                title="Europe Street beat"
                description="www.instagram.com"
              />
            </Card>
          </div>
          <div className="w-full">
            <Card
              hoverable
              style={{
                width: "100%",
              }}
              cover={
                <img
                  className="xl:h-60 lg:h-32"
                  alt="example"
                  src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                />
              }
            >
              <Meta
                title="Europe Street beat"
                description="www.instagram.com"
              />
            </Card>
          </div>
          <div className="w-full">
            <Card
              hoverable
              style={{
                width: "100%",
              }}
              cover={
                <img
                  className="xl:h-60 lg:h-32"
                  alt="example"
                  src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                />
              }
            >
              <Meta
                title="Europe Street beat"
                description="www.instagram.com"
              />
            </Card>
          </div>
          <div className="w-full">
            <Card
              hoverable
              style={{
                width: "100%",
              }}
              cover={
                <img
                  className="xl:h-60 lg:h-32"
                  alt="example"
                  src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                />
              }
            >
              <Meta
                title="Europe Street beat"
                description="www.instagram.com"
              />
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
