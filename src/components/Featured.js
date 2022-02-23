import React from "react";
import {
  FaChevronRight,
  FaChevronLeft,
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa";
import { BiTimeFive } from "react-icons/bi";
import { AiOutlineRightCircle } from "react-icons/ai";

const Featured = () => {
  return (
    <div className="flex  md:mt-0 mt-[300px] text-white featured ">
      <img
        src="./asset/bg.jpg"
        className="min-h-full min-w-full  md:relative"
        alt="bg"
      />
      <div
        className="featured_container absolute hidden md:block  "
        data-aos="fade-down"
      >
        <div className="m-6 ">
          <div className="flex mt-6 justify-between ">
            <h1 className="featured_title text-3xl">Featured Posts</h1>
            <div className="mt-1 text-xl  flex ">
              <FaChevronLeft />
              <FaChevronRight className="ml-4" />
            </div>
          </div>
          <hr className="mt-2 relative line" />
          <div className="mt-6">
            <p className="featured_para">
              Researchers explore impact of obesity on dog’s health
            </p>
            <div className="flex flex-row mt-2 text-gray-300">
              <BiTimeFive />
              <p className="ml-2 text-sm">Aug 31, 2014</p>
            </div>
            <div className="mt-6">
              <p>
                We are thrilled that Forbes has highlighted The Grey Muzzle
                Organization as one of its "12 Days of Charitable Giving"
                nonprofits to consider contributing to this holiday season!
              </p>
            </div>
            <div className="mt-6 flex">
              <AiOutlineRightCircle className="mt-1" />
              <h2 className="ml-2">READ MORE</h2>
            </div>
          </div>
        </div>
      </div>

      <div className="follow_us absolute flex" data-aos="fade-right">
        <h1>Follow us on:</h1>
        <div className="icon_container flex ml-3 mt-2">
          <FaTwitter />
          <FaLinkedin />
          <FaFacebookF />
          <FaYoutube />
        </div>
      </div>

      <ul className="absolute ellipses flex" data-aos="flip-up">
        <div className="ellipse"></div>
        <div className="ellipse bg-white"></div>
        <div className="ellipse"></div>
        <div className="ellipse"></div>
      </ul>
    </div>
  );
};

export default Featured;
