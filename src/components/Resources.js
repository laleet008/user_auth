import React from "react";
import resources from "../apis/resources";
import { AiOutlineRightCircle } from "react-icons/ai";

const Resources = () => {
  return (
    <div className="md:ml-32 md:mr-24 ml-16 resources md:pt-16">
      <div className="flex justify-between flex-col md:flex-row">
        <div className="flex flex-col">
          <div className="resources_heading flex mt-16 ">
            <hr className="heading_line mt-4" />
            <div>
              <h1 className="text-2xl ml-4">Resources.</h1>
              <div className="meet_para ml-4 mt-3">
                <p className="text-left">
                  Below are some resources for people who care about animals or
                  have pets.️
                </p>
              </div>
            </div>
          </div>
          <div className=" bg-white">
            {resources.map((resource, index) => {
              const { id, img, title, date, description, icon } = resource;
              if (index <= 1) {
                return (
                  <div
                    key={id}
                    className="mt-8 flex flex-col gap-5 resource_container"
                  >
                    <div className="flex gap-5 p-4">
                      <div className="flex">
                        <div className="bg_box h-[185px] w-[155px]  relative mt-4"></div>
                        <div className="absolute ml-4">
                          <img
                            src={img}
                            alt="resources_img  h-[190px ] w-[160px] "
                            data-aos="flip-left"
                          />
                        </div>
                      </div>

                      <div className="w-[390px] ml-4">
                        <h1 className="text-xl">{title}</h1>
                        <p className="text-gray-400 text-sm my-3">{date}</p>
                        <p className="text-gray-500 ">{description}</p>
                        <div className="flex mt-4">
                          <p className="download_resources">Download</p>{" "}
                          <img
                            src={icon}
                            className="mt-1 ml-3 h-[14px] w-[16px]"
                            alt="icon"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }
            })}
          </div>
        </div>
        {/* right side */}
        <div className="flex flex-col md:mt-8 mt-16">
          <ul className="resource_nav flex md:ml-20 justify-between">
            <li className="resource_nav_el">All</li>
            <li className="resource_nav_el">Training</li>
            <li className="resource_nav_el">Health & Wellness</li>
            <li className="resource_nav_el">Home Remedies</li>
            <li className="resource_nav_el">Street Story</li>
          </ul>
          <div className=" bg-white">
            {resources.map((resource, index) => {
              const { id, img, title, date, description, icon } = resource;
              if (index > 1) {
                return (
                  <div
                    key={id}
                    className="mt-8 flex flex-col gap-5 resource_container"
                  >
                    <div className="flex gap-5 p-4">
                      <div className="flex">
                        <div className="bg_box h-[195px] w-[160px]  relative mt-4"></div>
                        <div className="absolute ml-4">
                          <img
                            src={img}
                            alt="resources_img  h-[190px ] w-[160px] "
                            data-aos="flip-left"
                          />
                        </div>
                      </div>

                      <div className="w-[390px] ml-4 mt-3">
                        <h1 className="text-xl">{title}</h1>
                        <p className="text-gray-400 text-sm my-3">{date}</p>
                        <p className="text-gray-500 ">{description}</p>
                        <div className="flex mt-4">
                          <p className="download_resources">Download</p>{" "}
                          <img
                            src={icon}
                            className="mt-1 ml-3 h-[14px] w-[16px]"
                            alt="icon"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }
            })}
          </div>
          <div className="mt-8 flex ml-2">
            <AiOutlineRightCircle className="mt-1 view_more" />
            <h2 className="ml-2">VIEW MORE RESOURCES</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resources;
