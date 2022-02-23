import React from "react";
import partners from "../apis/partners";

const Partners = () => {
  return (
    <div className="partners ">
      <div className="md:ml-32 ml-16 md:mr-24 pt-6">
        <div className="partner_heading flex  mt-16 ">
          <hr className="heading_line mt-4" />
          <div>
            <h1 className="text-2xl ml-4">Trusted Partners.</h1>
          </div>
        </div>
        <div
          className="md:mt-8 mt-5 md:ml-0 ml-20 flex flex-col md:flex-row gap-20 justify-between  "
          data-aos="zoom-out-down"
          data-aos-easing="ease-in-out-cubic"
        >
          {partners.map((partner) => {
            const { id, img, name } = partner;
            return (
              <div
                key={id}
                className="bg-white flex flex-col justify-center align-center items-center h-[150px] w-[290px] partners_card"
              >
                <img src={img} className="w-[70px] h-[90px]" alt="" />
                <p className="text-lg mt-4 uppercase font-bold">{name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Partners;
