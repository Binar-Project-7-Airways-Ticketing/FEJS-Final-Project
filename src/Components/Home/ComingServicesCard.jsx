import React from 'react'
import { Card } from "antd";
const { Meta } = Card;

export default function ComingServices() {
  return (
    <>
    <h2 className="w-1/2 text-brand-whiteLight mb-10" >Our services are coming soon</h2>
        <div className="flex w-full gap-10">
          {/* <div className="w-full"> */}
          <Card
            hoverable
            style={{
              width: "100%",
            }}
            cover={
              <img
                alt="example"
                src="https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              />
            }
          >
            <Meta title="Europe Street beat" description="www.instagram.com" />
          </Card>

          <Card
            hoverable
            style={{
              width: "100%",
            }}
            cover={
              <img
                alt="example"
                src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
              />
            }
          >
            <Meta title="Europe Street beat" description="www.instagram.com" />
          </Card>

          <Card
            hoverable
            style={{
              width: "100%",
            }}
            cover={
              <img
                alt="example"
                src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
              />
            }
          >
            <Meta title="Europe Street beat" description="www.instagram.com" />
          </Card>
          {/* </div> */}
        </div>
    </>
  )
}
