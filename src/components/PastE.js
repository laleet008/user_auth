import React from "react";
import PastEvent from "../apis/past";
import { AiOutlineRightCircle } from "react-icons/ai";

const PastE = () => {
  return (
    <div className="md:ml-32 ml-16 my-16 md:mr-24 ">
      <h1 className="text-2xl">Past Events</h1>
      <div className="flex md:flex-row flex-col gap-5 mt-4 justify-between  ">
        {PastEvent.map((event) => {
          const { id, img, title } = event;

          return (
            <div
              className="flex flex-col past_card"
              key={id}
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1000"
            >
              <img
                src={img}
                className="md:h-[230px] md:w-[280px]"
                alt="pastEImg"
              />
              <h1 className="w-[248px] text-2xl my-4 mx-4">{title}</h1>
            </div>
          );
        })}
      </div>
      <div className="mt-6 flex ml-8 md:justify-end">
        <AiOutlineRightCircle className="mt-1 view_more" />
        <h2 className="ml-2 text-black">VIEW MORE EVENTS</h2>
      </div>
    </div>
  );
};

export default PastE;
