import React, { useState } from "react";
import { ContactsOutlined } from "@ant-design/icons";

import Select from "react-select";
import { Button, Input, DatePicker } from "antd";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadCategory } from "./Feature/Models/GetCategory";

export default function ComponentFormTransaction(props) {
  const dispatch = useDispatch();
  const [token, setToken] = useState(false);
  const { category } = useSelector((state) => state.category);

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("token"));
    dispatch(loadCategory());
    setToken(token);
  }, [category]);
  return (
    <React.Fragment>
      <div className="parent-b w-full bg-brand-nude p-6 mb-6 rounded-md border-2 border-brand-black">
        <div className="left-header">
          <span>
            <ContactsOutlined />
          </span>
          <h3>{token ? "Pemesan" : props.penumpang}</h3>
        </div>

        <div className="left-content">
          <div className="flex w-full gap-1 mb-2 ">
            <Select
              className="border-brand-gray border-2 rounded-md w-full"
              type="text"
              defaultValue="MR"
              onChange={props.handleChangeUserTitle}
              options={[
                {
                  value: "MR",
                  label: "MR",
                },
                {
                  value: "MRS",
                  label: "MRS",
                },
                {
                  value: "MISS",
                  label: "MISS",
                },
                {
                  value: "DR",
                  label: "DR",
                },
                {
                  value: "MS",
                  label: "MS",
                },
              ]}
            ></Select>

            <Select
              className="border-brand-gray border-2 rounded-md w-full h-full"
              type="text"
              placeholder="Category"
              onChange={props.handleChangeCategory}
              options={category.map((item, key) => ({
                value: item.idCategory,
                price: item.price,
                label: item.nameCategory,
              }))}
            ></Select>

            <Select
              onChange={props.handleChangeGender}
              className="border-brand-gray border-2 rounded-md w-full h-full"
              placeholder="gender"
              type="text"
              options={[
                {
                  value: "PEREMPUAN",
                  label: "PEREMPUAN",
                },
                {
                  value: "PRIA",
                  label: "PRIA",
                },
              ]}
            ></Select>
          </div>
          <div className="flex mb-2 w-full">
            <div className="textbox flex !mb-0 h-full gap-1">
              <Input
               
                onChange={props.handleChangeFirstName}
                className=" sm:w-full p-2 focus:outline-none text-black placeholder:text-brand-gray  border-brand-gray border-2 rounded-md"
                type="text"
                placeholder="Firstname"
              />

              <Input
               
                onChange={props.handleChangeLastName}
                className=" sm:w-full p-2 focus:outline-none text-black placeholder:text-brand-gray  border-brand-gray border-2 rounded-md"
                type="text"
                placeholder="Lastname"
              />
            </div>
          </div>
          <div className="flex w-full gap-1 mb-2 ">
            <DatePicker
              className="bg-brand-black sm:p-2 border-brand-gray border-2 rounded-md w-full"
              format={props.dateFormat}
              onChange={props.handleChangeBirtday}
              placeholder="Birthday"
            />

            <Input
             
              onChange={props.handleChangePassport}
              className=" border-brand-gray border-2 rounded-md w-full"
              type="number"
              placeholder="Passport"
            />
          </div>
          <div className="flex w-full gap-1 mb-2 ">
            <Select
              onChange={props.handleChangeNationality}
              className="border-brand-gray border-2 rounded-md w-full placeholder:text-black"
              options={props.options}
              value1={props.value}
              placeholder="Nationality"
            />

            <Select
              onChange={props.handleChangeSpecialRequest}
              className="border-brand-gray border-2 rounded-md w-full h-full"
              placeholder="request"
              type="text"
              options={[
                {
                  value: "WHEELCHAIR",
                  label: "WHEELCHAIR",
                },
                {
                  value: "NONE",
                  label: "NONE",
                },
              ]}
            ></Select>
          </div>

          <div className="flex mb-2 w-1/2">
            <div className="textbox !mb-0 h-full border-brand-gray border-2 rounded-md">
              <Input
               
                onChange={props.handleChangeContactNumber}
                className=" sm:w-full p-2 focus:outline-none text-black placeholder:text-brand-gray"
                type="number"
                placeholder="Contact Number"
              />
            </div>
          </div>

          <div className=""></div>
        </div>

        <Button
          onClick={props.pay}
          htmlType="submit"
          className="bg-brand-yellow text-brand-whiteLight rounded-md "
        >
          Confirm
        </Button>
      </div>
    </React.Fragment>
  );
}
