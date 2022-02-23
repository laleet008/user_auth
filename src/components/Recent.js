import React from "react";
import "../App.css";
import { AiOutlineRightCircle } from "react-icons/ai";
import { BiTimeFive } from "react-icons/bi";

const Recent = () => {
  return (
    <div
      className="recent_projects flex flex-col md:flex-row mt-16 "
      id="projects"
    >
      <div className="md:ml-32 ml-16 projects_container flex flex-col mb-8">
        <div className="recent_heading flex mt-16">
          <hr className="heading_line mt-4" />
          <div>
            <h1 className="text-2xl ml-4">Recent Projects.</h1>
            <div className="meet_para ml-4 mt-3">
              <p className="text-left">
                Meet some of the dogs helped by The Grey Muzzle Organization. We
                provide grants and other funding to pay expenses, such as
                medical care, so the wonderful organizations.
              </p>
            </div>
          </div>
        </div>

        <div className=" mt-8 flex" data-aos="zoom-in-up">
          <img src="./asset/recent1.png" className="relative" alt="" />
          <div className="absolute hidden md:block ">
            <span className="the_plus bg-white absolute">+</span>
          </div>
        </div>
        <div className="mt-6 flex " data-aos="zoom-in-up">
          <img src="./asset/recent2.png" className="relative" alt="" />
          <div className="absolute hidden md:block ">
            <span className="the_plus absolute bg-white">+</span>
          </div>
        </div>
      </div>
      <div className="right_side md:ml-20 ml-12 flex flex-col md:mt-36">
        {/* first img to the right side */}

        <div className="showing_features flex text-white " data-aos="fade-left">
          <img src="./asset/recent3.png" className="relative" alt="" />
          <div className="featured_img_container ml-8 absolute mt-24 ">
            <div className="m-6">
              <div className="mt-6">
                <h1 className="featured_para text-2xl">
                  Forbes Features The Grey Muzzle Organization
                </h1>
                <div className="flex flex-row mt-2 text-gray-400">
                  <BiTimeFive />
                  <p className="ml-2 text-sm">Aug 31, 2014</p>
                </div>
                <div className="mt-6">
                  <p className="text-sm text-gray-300">
                    We are thrilled that Forbes has highlighted The Grey Muzzle
                    Organization as one of its "12 Days of Charitable Giving"
                    nonprofits to consider contributing to this holiday season!
                  </p>
                </div>
                <div className="mt-6 flex">
                  <AiOutlineRightCircle className="mt-1 view_more" />
                  <h2 className="ml-2 ">READ MORE</h2>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex" data-aos="fade-left">
          <img src="./asset/recent4.png" className="relative" alt="" />
          <div className="absolute hidden md:block ">
            <span className="the_plus absolute bg-white">+</span>
          </div>
        </div>

        <div className="mt-8 flex ml-2">
          <AiOutlineRightCircle className="mt-1 view_more" />
          <h2 className="ml-2">VIEW MORE PROJECTS</h2>
        </div>
      </div>
    </div>
  );
};

export default Recent;
