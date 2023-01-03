import Select from "react-select";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadLuggagesIdPlane } from "./Feature/Models/LuggageSliceIdPlane";

export default function Luggages(props) {
  const dispatch = useDispatch();

  const { luggagesPlane } = useSelector((state) => state.luggagePlane);

  useEffect(() => {
    const departFl = JSON.parse(localStorage.getItem("depart"));
    dispatch(loadLuggagesIdPlane(departFl.plane.idPlane));
  }, [dispatch]);
  return (
    <Select
      className="w-full"
      onChange={props.handleChange}
      options={
        luggagesPlane &&
        luggagesPlane.map((item, key) => ({
          key: item.idLuggage,
          price: item.price,
          item: item,
          label: (
            <div className="flex w-full sm:justify-between md:justify-end">
              <div>+{item.capacity}kg</div>
              <div>
                Rp.
                {item.price
                  .toString()
                  .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.")}
              </div>
            </div>
          ),
        }))
      }
    ></Select>
  );
}
