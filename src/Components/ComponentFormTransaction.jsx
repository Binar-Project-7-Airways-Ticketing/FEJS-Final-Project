import React, { useState } from "react";
import { ContactsOutlined } from "@ant-design/icons";

import Select from "react-select";
import { Button } from "antd";
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
          <h3>{token ? props.pass : "Penumpang"}</h3>
        </div>
        <div className="left-content">
          <div className="flex w-full gap-1 mb-2 ">
            <select
              onChange={props.title}
              className="border-brand-gray p-2 border-2 rounded-md w-full"
              type="text"
            >
              <option value="MR">MR</option>
              <option value="MRS">MRS</option>
              <option value="MISS">MISS</option>
              <option value="DR">DR</option>
              <option value="MS">MS</option>
            </select>

            {/* <select
              onChange={props.category}
              className="border-brand-gray p-2 border-2 rounded-md w-full"
              type="text"
            >
              <option value="CHILDREN">CHILDREN</option>
              <option value="ADULTS">ADULTS</option>
              <option value="INFANT">INFANT</option>
            </select> */}
            <Select
              className="w-full"
              value={props.valueCategory}
              onChange={props.category}
              options={category.map((item, key) => ({
                value: item.idCategory,
                price: item.price,
                label: item.nameCategory,
              }))}
            ></Select>
          </div>
          <div className="flex mb-2 w-full">
            <select
              className="border-brand-gray p-2 border-2 rounded-md w-full"
              onChange={props.gender}
              type="text"
              value={props.userGender}
            >
              <option selected>Gender</option>
              <option value="PEREMPUAN">PEREMPUAN</option>
              <option value="PRIA">PRIA</option>
            </select>
          </div>

          <div className="flex mb-2 w-full">
            <div className="textbox !mb-0 h-full border-brand-gray border-2 rounded-md">
              <input
                onChange={props.firstName}
                className="w-full p-2 focus:outline-none text-black placeholder:text-brand-gray"
                type="text"
                placeholder="Firstname"
                value={props.userFirstName}
              />
            </div>
          </div>
          <div className="flex mb-2 w-full">
            <div className="textbox !mb-0 h-full border-brand-gray border-2 rounded-md">
              <input
                onChange={props.lastName}
                className="w-full p-2 focus:outline-none text-black placeholder:text-brand-gray"
                type="text"
                placeholder="Lastname"
                value={props.userLastName}
              />
            </div>
          </div>
          <div className="flex mb-2 w-full">
            <div className="textbox !mb-0 h-full border-brand-gray border-2 rounded-md">
              <input
                onChange={props.birthDay}
                className="w-full p-2 focus:outline-none text-black placeholder:text-brand-gray"
                type="text"
                placeholder="MM/DD/YY birthday"
                value={props.userBirthDay}
              />
            </div>
          </div>
          <div className="flex mb-2 w-full">
            <div className="textbox !mb-0 h-full border-brand-gray border-2 rounded-md">
              <input
                onChange={props.contact}
                className="w-full p-2 focus:outline-none text-black placeholder:text-brand-gray"
                type="number"
                placeholder="Contact Number"
              />
            </div>
          </div>
          <div className="flex mb-2 w-full">
            <div className="textbox !mb-0 h-full border-brand-gray border-2 rounded-md">
              <Select
                className="placeholder:text-black"
                options={props.options}
                value1={props.value}
                onChange={props.country}
                placeholder="Nationality"
              />
            </div>
          </div>
          <div className="">
            <Button
              onClick={props.confirm}
              htmlType="submit"
              className="parent-b w-full justify-center bg-brand-nude mt-1 rounded-md border-2 border-brand-black"
            >
              Confirm
            </Button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}