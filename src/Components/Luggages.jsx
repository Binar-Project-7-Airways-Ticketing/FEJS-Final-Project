import  Select  from 'react-select'
import React, { useState } from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadLuggagesIdPlane } from './Feature/Models/LuggageSliceIdPlane';

export default function Luggages(props) {
const dispatch = useDispatch()

    const { luggagesPlane } = useSelector((state) => state.luggagePlane);
    const [classFlight, setClassFlight] = useState("");
    const [bagasi, setBagasi] = useState("");

    const handleChange = (values) => {
        console.log(values);
        setBagasi(values.price);
      };

    useEffect(()=>{
        const departFl = JSON.parse(localStorage.getItem("depart"));
        dispatch(loadLuggagesIdPlane(departFl.plane.idPlane));
    },[luggagesPlane])
  return (
    <Select
    className="w-full"
    // value={bagasi}
    onChange={props.handleChange}
    options={
      luggagesPlane &&
      luggagesPlane
        // .filter(
        //   (item) =>
        //     item.planeDetails.planeClass ===
        //     classFlight.class
        // )
        .map((item, key) => ({
          key: item.idLuggage,
          price: item.price,
          label: (
            <div className="flex w-full sm:justify-between md:justify-end">
              <div>+{item.capacity}kg</div>
              <div>
                Rp.
                {item.price
                  .toString()
                  .replace(
                    /(\d)(?=(\d\d\d)+(?!\d))/g,
                    "$1."
                  )}
              </div>
            </div>
          ),
        }))
    }
  ></Select>
  )
}
