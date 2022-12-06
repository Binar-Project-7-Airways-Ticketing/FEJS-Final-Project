import React from "react";
import { Card } from "antd";
const { Meta } = Card;

export default function ComingServices() {
  return (
    <div className="h-fit">
      <div className="mb-10  text-brand-whiteLight">
        <h2 className=" mb-5">
          Our services are coming soon
        </h2>
        <p className="xl:w-3/4 lg:w-full">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente,
          molestiae eaque dignissimos, nemo assumenda quam voluptatem maiores
          corporis quaerat numquam odio! Culpa qui, soluta quisquam dolorum
          architecto illo aperiam quibusdam quos cum consectetur delectus minus
          dicta doloribus magni incidunt tempora, veritatis ad quam quo
          asperiores. Itaque quae ipsum id earum.
        </p>
      </div>
      <div className="grid 2xl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-3 w-full gap-10">
        <div className="w-full">
          <Card
            hoverable
            style={{
              width: "100%",
            }}
            cover={
              <img
                style={{ height: "100%" }}
                alt="example"
                src="https://images.unsplash.com/photo-1583845112203-29329902332e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
              />
            }
          >
            <Meta title="Europe Street beat" description="www.instagram.com" />
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
                style={{ height: "100%" }}
                alt="example"
                src="https://images.unsplash.com/photo-1570125910130-67cb59733d1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
              />
            }
          >
            <Meta title="Europe Street beat" description="www.instagram.com" />
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
                style={{ height: "100%" }}
                alt="example"
                src="https://images.unsplash.com/photo-1529179307417-ca83d48bd790?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
              />
            }
          >
            <Meta title="Europe Street beat" description="www.instagram.com" />
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
                style={{ height: "100%" }}
                alt="example"
                src="https://images.unsplash.com/photo-1619463061549-e14e1de6c14f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
              />
            }
          >
            <Meta title="Europe Street beat" description="www.instagram.com" />
          </Card>
        </div>
        {/* <div className="w-full">
          <Card
            hoverable
            style={{
              width: "100%",
            }}
            cover={
              <img
                style={{ height: "100%" }}
                alt="example"
                src="https://images.unsplash.com/photo-1529179307417-ca83d48bd790?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
              />
            }
          >
            <Meta title="Europe Street beat" description="www.instagram.com" />
          </Card>
        </div> */}
      </div>
    </div>
  );
}
