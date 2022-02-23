import React from "react";
import { BiTimeFive } from "react-icons/bi";
import { AiOutlineRightCircle } from "react-icons/ai";

const RecentNews = () => {
  return (
    <div className="recent_news" id="news">
      <div className="md:ml-32 ml-16 flex md:flex-row flex-col justify-between md:mr-24">
        <div className="flex flex-col">
          <div className="recent_heading flex mt-16">
            <hr className="heading_line mt-4" />
            <div>
              <h1 className="text-2xl ml-4">Recent News.</h1>
              <div className="meet_para ml-4 mt-3">
                <p className="text-left">
                  More than 22,500 dogs live on the streets of Kathmandu, Nepal,
                  and many suffer from starvation, infected open sores, mange,
                  and other injuries and illnesses.
                </p>
              </div>
            </div>
          </div>
          <div className="news_img1 flex h-[600px]">
            <img
              src="./asset/recent_news1.png"
              className="mt-16 h-[510px] w-[570px] relative"
              alt="img"
              data-aos="fade-down-right"
            />
            <div className="absolute h-[335px] w-[430px] mt-[240px] ml-[140px] bg-white  recent_news_div ">
              <div className="flex flex-row h-[50px] w-[140px] recent_news_time text-white align-center justify-center items-center">
                <BiTimeFive />
                <p className="ml-2 text-sm ">Feb 24, 2019</p>
              </div>

              <div className="mt-16 ml-8">
                <p className=" text-black text-2xl">
                  Five stray dogs found dead in Serampore; some lying ill
                </p>
              </div>
              <div className="mt-6 flex ml-8">
                <AiOutlineRightCircle className="mt-1 view_more" />
                <h2 className="ml-2 text-black">READ MORE</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="news_img2 flex h-[600px]">
            <img
              src="./asset/recent_news2.png"
              className="mt-16 h-[510px] w-[570px] relative"
              alt="img"
              data-aos="fade-down-left"
            />
            <div className="absolute h-[335px] w-[430px] mt-[240px] ml-[140px] bg-white  recent_news_div">
              <div className="flex flex-row h-[50px] w-[140px] recent_news_time text-white align-center justify-center items-center">
                <BiTimeFive />
                <p className="ml-2 text-sm ">Feb 26, 2019</p>
              </div>

              <div className="mt-16 ml-8">
                <p className=" text-black text-2xl">
                  Thousands of street dogs in Mauritius visit paradise KTM’s
                  first ever spay/neuter clinic as
                </p>
              </div>
              <div className="mt-6 flex ml-8">
                <AiOutlineRightCircle className="mt-1 view_more" />
                <h2 className="ml-2 text-black">READ MORE</h2>
              </div>
            </div>
          </div>
          <div className="news_img3 flex h-[600px]">
            <img
              src="./asset/recent_news3.png"
              className="mt-8 h-[510px] w-[570px] relative"
              alt="img"
              data-aos="fade-up-left"
            />
            <div className="absolute h-[303px] w-[430px] mt-[240px] ml-[140px] bg-white  recent_news_div">
              <div className="flex flex-row h-[50px] w-[140px] recent_news_time text-white align-center justify-center items-center">
                <BiTimeFive />
                <p className="ml-2 text-sm ">Feb 20, 2019</p>
              </div>

              <div className="mt-16 ml-8">
                <p className=" text-dark text-2xl">
                  101 Dalmatian Street: Dogs, London landmarks and musical magic
                  ...
                </p>
              </div>
              <div className="mt-6 flex ml-8">
                <AiOutlineRightCircle className="mt-1 view_more" />
                <h2 className="ml-2 text-black">READ MORE</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentNews;
