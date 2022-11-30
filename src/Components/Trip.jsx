import React, { useState } from "react";
import { Dropdown, Space, DatePicker, Form, Input, Button, Radio } from "antd";
import { DownOutlined } from "@ant-design/icons";

export default function Trip() {
  const [value, setValue] = useState("Return")
  const submit =(e)=>{
    setValue(e.target.innerText)
  }
  const items = [
    {
      label: <p onClick={submit}>Return</p>,
      key: "0",
    },
    {
      label: <p onClick={submit}>One Way</p>,
      key: "1",
    }
  ];
  return (
    <div>
      <Form.Item
        name="trip"
        rules={[
          {
            required: true,
            message: "Cannot empty",
          },
        ]}
      >
        <div className="inpt-trip">
          <Dropdown
            menu={{
              items,
            }}
            trigger={["click"]}
          >
            <a onClick={(e) => e.preventDefault()}>
              <Space style={{width:"100%"}}>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <div style={{display:"flex",width:"100%", gap:"15px", alignItems:"center"}}>
                    <p style={{width:"100%"}}>Trip</p>
                    <DownOutlined style={{width:"100%"}} />
                  </div>
                  
                </div>
              </Space>
            </a>
          </Dropdown>
          <Input onChange={(e)=> setValue(e.target.value)}  value={value}></Input>
        </div>
      </Form.Item>
    </div>
  );
}
