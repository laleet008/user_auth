import React from "react";
import { RiDoubleQuotesR } from "react-icons/ri";

const Testimonials = () => {
  return (
    <div className="md:ml-32 ml-16 md:mr-24 my-20">
      <div className="testimonials_heading flex mt-16 ">
        <hr className="heading_line mt-4" />
        <div>
          <h1 className="text-2xl ml-4">Client Testimonials.</h1>
          <div className="meet_para ml-4 mt-3">
            <p className="text-left">
              People are saying great things about us. ️
            </p>
          </div>
        </div>
      </div>
      <div className="flex md:flex-row flex-col mt-12 justify-between">
        <div>
          <div className="review_div w-[500px]  " data-aos="fade-left">
            <div className="mt-4 ml-4 text-white flex flex-col">
              <div className="flex mt-4">
                <RiDoubleQuotesR className="text-2xl mb-3 flex" />
                <p className="ml-4">
                  Lorem ipsum dolor sit amet constur adipisicing elit sed
                </p>
              </div>
              <p>
                eiusmtempor incid sed dolore magna aliqu enim minim veniam quis
                nostrud exercittion ullamco labo ris nisi aliquip excepteur.
              </p>
            </div>
          </div>
          <div className="triangle"></div>
          <div className="flex gap-4 ml-6">
            <img
              src="./asset/team2.png"
              className="h-[70px] w-[70px] rounded-full"
              alt=""
            />
            <div className="flex flex-col">
              <h2 className="name_testimonials text-xl">Lora Matin</h2>
              <p>web developer\</p>
            </div>
          </div>
        </div>
        <div className="md:mt-0 mt-12">
          <div className="review_div w-[500px]  " data-aos="fade-right">
            <div
              className="mt-4 ml-4 text-white flex flex-col"
              data-aos="fade-right"
            >
              <div className="flex mt-4">
                <RiDoubleQuotesR className="text-2xl mb-3 flex" />
                <p className="ml-4">
                  Lorem ipsum dolor sit amet constur adipisicing elit sed
                </p>
              </div>
              <p>
                eiusmtempor incid sed dolore magna aliqu enim minim veniam quis
                nostrud exercittion ullamco labo ris nisi aliquip excepteur.
              </p>
            </div>
          </div>
          <div className="triangle"></div>
          <div className="flex gap-4 ml-6">
            <img
              src="./asset/team3.png"
              className="h-[70px] w-[70px] rounded-full"
              alt=""
            />
            <div className="flex flex-col">
              <h2 className="name_testimonials text-xl">Sara Martin</h2>
              <p>Admin</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-12">
        <div className=" flex squares_testimonials">
          <div className="testimonials_sq bg-gray-300"></div>
          <div className="testimonials_outer_sq flex justify-center align-center mt-[-4px]">
            <div className="testimonials_sq  testimonials_sq_mid mt-1"></div>
          </div>
          <div className="testimonials_sq bg-gray-300"></div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
