import React from "react";
import { Carousel } from "antd";

export default function ReviewCard() {
  return (
    <>
      <div className="bg-brand-choco rounded-2xl">
        <div className="flex flex-col w-full p-5">
          <h2 className=" text-brand-whiteLight">
            Our client Shared Their Experience
          </h2>

          <div>
            <div className="flex w-full">
              <p className="w-1/2 text-brand-whiteLight">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere
                adipisci est repellat explicabo dicta obcaecati vitae ex id
                architecto fugiat veritatis nisi ratione perspiciatis reiciendis
                delectus iusto, itaque ad quasi, sunt hic neque consectetur
                recusandae ducimus laudantium. Recusandae minima fuga
                perspiciatis! Ipsum aliquam est voluptatibus facilis nesciunt
                iure. Dolores debitis doloremque saepe hic aliquid temporibus
                facere. A dolore ad sed blanditiis nesciunt incidunt nisi
                magnam, impedit inventore commodi optio cumque assumenda,
                reiciendis voluptatum sit sunt, cum qui repudiandae ab
                veritatis?
              </p>
              <div className="img-review">
                <img src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
