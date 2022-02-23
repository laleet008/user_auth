import React, { useState } from "react";
import { FaAngleRight, FaTwitter, FaLinkedin, FaYoutube } from "react-icons/fa";
import { AiFillFacebook } from "react-icons/ai";
import { HiArrowUp } from "react-icons/hi";

const Footer = () => {
  const [arrowVisible, setArrowVisible] = useState(false);

  const topButtonVisibility = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 400) {
      setArrowVisible(true);
    } else if (scrolled <= 400) {
      setArrowVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", topButtonVisibility);

  return (
    <div className="footer mt-20 " id="footer">
      <div className="pt-16 md:ml-32 ml-16 md:mr-24 text-white flex justify-between relative md:flex-row flex-col md:gap-0 gap-8">
        <div className="" data-aos="fade-left" data-aos-duration="500">
          <div className="flex  relative ">
            <span className="flex">
              <img
                src="./asset/logo.png "
                className="relative first_logo_img"
                alt=""
              />
              <img
                src="./asset/ear.png "
                className="absolute  left-1.5"
                alt=""
              />

              <img
                src="./asset/vector.png "
                className="absolute  top-3 left-1.5 border-white"
                alt=""
              />
            </span>
            <h1 className="logo_text ml-4 text-xl text-gray-400"> Saltpeter</h1>
          </div>
          <div className="flex flex-col mt-8 gap-1">
            <p>
              Address:
              <span className="text-gray-400 ml-3">
                Double Standard, Lalitpur,Nepal.
              </span>
            </p>
            <p>
              Phone: <span className="text-gray-400 ml-3">+1 234 567 8900</span>
            </p>
            <p>
              Email:{" "}
              <span className="text-gray-400 ml-3">info@ngodistro.com</span>
            </p>
          </div>
        </div>
        <div
          className="mt-5 flex flex-col"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <h1 className="text-xl">About</h1>
          <div className="flex flex-col text-gray-300">
            <a href="#" className="mt-3 ">
              Saltpeater
            </a>
            <a href="#our_team">Our team</a>
            <a href="#footer">Contact</a>
            <a href="#">Careers</a>
            <a href="#">Sitemap</a>
          </div>
        </div>
        <div
          className="mt-5 flex flex-col"
          data-aos="fade-down"
          data-aos-duration="1500"
        >
          <h1 className="text-xl">Resources</h1>
          <div className="flex flex-col text-gray-300">
            <a href="#events" className="mt-3 ">
              Research & Reports
            </a>
            <a href="#projects">Projects</a>
            <a href="#news">News and Events</a>
          </div>
        </div>

        <div
          className="mt-5 flex flex-col mb-16 mr-32"
          data-aos="fade-right"
          data-aos-duration="2000"
        >
          <h1 className="text-xl">Newsletter</h1>
          <div className="flex relative mt-3">
            <input
              type="text"
              className="rounded-full absolute h-12 w-[250px] outline-0 pl-4"
              placeholder="Email"
            />
            <div
              className="input_button_footer absolute text-black left-[205px] h-8 mt-2 w-8 rounded-full
            "
            >
              <FaAngleRight className="text-white ml-2 mt-2 " />
            </div>
          </div>
        </div>
        <div
          className="absolute flex flex-col justify-end align-end md:ml-[1330px] md:mt-[140px] ml-[500px] mt-[580px]"
          data-aos="zoom-in"
          data-aos-duration="2000"
        >
          <HiArrowUp
            className="ml-2 text-xl cursor-pointer"
            onClick={scrollToTop}
            style={{ display: arrowVisible ? "inline" : "none" }}
          />
          <p className="rotate-[-90deg] mt-3 text-xl text-gray-400">TOP</p>
        </div>
      </div>

      <div className="lower_footer mt-8 ">
        <div className="md:ml-32 ml-16 md:mr-24 flex  md:flex-row flex-col md:gap-0 gap-8 justify-between text-white py-7">
          <div>
            <h2>Designed by Y & C | All Rights Reserved ©YIPL 2019</h2>
          </div>

          <div className="flex">
            <h2 className="text-xl">Follow us :</h2>

            <div className="flex mt-1    ml-8 text-xl gap-4">
              <FaTwitter />
              <FaLinkedin />
              <AiFillFacebook />
              <FaYoutube />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
