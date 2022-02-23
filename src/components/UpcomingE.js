import React from "react";
import UpcomingEvent from "../apis/upcoming";

const UpcomingE = () => {
  return (
    <div className="md:ml-32 ml-16 " id="events">
      <div className="upcoming_heading flex mt-16 ">
        <hr className="heading_line mt-4" />
        <div>
          <h1 className="text-2xl ml-4">Upcoming Events.</h1>
          <div className="meet_para ml-4 mt-3">
            <p className="text-left">
              We have a host of wonderful events lined up for the year ahead
              that help raise funds and awareness for Street Dogs. We look
              forward to meeting you.
            </p>
          </div>
        </div>
      </div>
      <div className=" flex md:flex-row flex-col justify-between md:mr-28  ">
        {UpcomingEvent.map((curElem) => {
          const { id, title, img, date, day, month, category } = curElem;

          return (
            <div
              key={id}
              className="upcoming_card_wrapper flex  flex-col mt-8  "
            >
              <div className="flex">
                <img
                  src={img}
                  className="relative"
                  alt="img"
                  data-aos="zoom-out"
                />
                <div className="date_card absolute bg-white h-[50px] w-[50px] flex  align-center justify-center flex-col ml-4 mt-4">
                  <p>{day}</p>
                  <p className="uppercase">{month}</p>
                </div>
              </div>
              <div
                className="upcoming_content mt-4"
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="900"
              >
                <p className="text-gray-400 ml-4">{date}</p>
                <h1 className="text-2xl mt-4 ml-4">{title}</h1>
                <hr className="upcoming_line mt-8" />
                <div className="upcoming_categories text-cyan-600 mt-4 ml-8">
                  <p>{category}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UpcomingE;
