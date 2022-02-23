import React from "react";
import { BiTimeFive } from "react-icons/bi";
import { AiOutlineRightCircle } from "react-icons/ai";

const Gallery = () => {
  return (
    <div className=" gallery">
      <div className="md:ml-32 ml-16 md:mr-24 flex md:flex-row flex-col justify-between">
        <div className="flex flex-col my-20 ">
          <div className="upcoming_heading flex mt-16 ">
            <hr className="heading_line mt-4" />
            <div>
              <h1 className="text-2xl ml-4">Gallery</h1>
              <div className="meet_para ml-4 mt-3">
                <p className="text-left">
                  We have entered into a national partnership with YandC Store
                  and you will find all of our incredible online content.
                </p>
              </div>
            </div>
          </div>
          <div className="flex mt-12">
            <img
              src="./asset/gallery.jpg"
              className="relative"
              alt=""
              data-aos="fade-zoom-out"
            />
            <div className="flex flex-col absolute text-white ml-16 mt-[170px]">
              <div className="flex   ">
                <BiTimeFive />
                <p className="ml-2 text-sm text-gray-300 ">Feb 24, 2019</p>
              </div>
              <h1 className="text-3xl w-[450px] mt-8">
                Holiday gifts that celebrate old dogs!
              </h1>
              <div className="mt-10 flex ">
                <AiOutlineRightCircle className="mt-1 view_more" />
                <h2 className="ml-2 ">VIEW GALLERY</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="md:mt-28 flex flex-col mb-12">
          <div className="flex mt-12">
            <img
              src="./asset/gallery1.jpg"
              className="relative"
              alt=""
              data-aos="fade-zoom-out"
            />
            <div className="flex flex-col absolute text-white ml-16 mt-[170px]">
              <div className="flex   ">
                <BiTimeFive />
                <p className="ml-2 text-sm text-gray-300 ">Feb 26, 2019</p>
              </div>
              <h1 className="text-3xl w-[450px] mt-8">
                Enter Our #WhyWeLoveOldDogs Contest
              </h1>
              <div className="mt-10 flex ">
                <AiOutlineRightCircle className="mt-1 view_more" />
                <h2 className="ml-2 ">VIEW GALLERY</h2>
              </div>
            </div>
          </div>
          <div className=" flex mt-8 ">
            <AiOutlineRightCircle className="mt-1 view_more" />
            <h2 className="ml-2 text-black">VIEW MORE GALLERIES</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
