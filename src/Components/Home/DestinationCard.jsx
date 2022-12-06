import React from "react";
import { Card } from "antd";
const { Meta } = Card;
export default function Destination() {
  return (
    <div className="flex flex-col h-screen w-full">
      <h2 className=" text-brand-black pb-10">
        Explore your travel destination
      </h2>
      <div className="flex w-full h-full gap-10">
        <div className="grid xl:grid-cols-3 w-full h-fit gap-5 lg:grid-cols-2">
          <div className="w-full">
            <Card
              hoverable
              style={{
                width: "100%",
              }}
              cover={
                <img
                  className="h-60"
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
                  className="h-60"
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
                  className="h-60"
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
                  className="h-60"
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
                  className="h-60"
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
                  className="h-60"
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
        <div className="w-full">
          <Card
            hoverable
            style={{
              width: "100%",
              height: "500px",
            }}
            cover={
              <img
                style={{ height: "600px" }}
                alt="example"
                src="https://images.pexels.com/photos/1123982/pexels-photo-1123982.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              />
            }
          >
            <Meta title="Europe Street beat" description="www.instagram.com" />
          </Card>
        </div>
      </div>
    </div>
  );
}
