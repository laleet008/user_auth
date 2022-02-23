import React from "react";

import { AiOutlineRightCircle } from "react-icons/ai";

const Meet = () => {
  return (
    <div className="meet_dogs flex md:flex-row flex-col md:mt-16 md:ml-32 ml-16 ">
      <div
        className="content mt-16"
        data-aos="fade-right"
        data-aos-offset="100"
        data-aos-easing="ease-in-sine"
      >
        <div className="heading-meet flex  ">
          <hr className="heading_line mt-4" />
          <div className="main_content">
            <h1 className="text-2xl ml-4">Meet the dogs</h1>
            <div className="meet_para ml-4 mt-6">
              <p className="text-left">
                Meet some of the dogs helped by The Grey Muzzle Organization. We
                provide grants and other funding to pay expenses, such as
                medical care, so the wonderful organizations that give these
                dogs a second chance can focus on their care.
              </p>
            </div>
            <div className="mt-6 flex ml-4">
              <AiOutlineRightCircle className="mt-1 view_more" />
              <h2 className="ml-2">READ MORE</h2>
            </div>
          </div>
        </div>
      </div>
      <div
        className="md:ml-40 mt-4 md:mt-0 "
        data-aos="fade-left"
        data-aos-offset="400"
        data-aos-duration="300"
      >
        <img src="./asset/meet-the-dog.png" alt="" />
      </div>
    </div>
  );
};

export default Meet;
