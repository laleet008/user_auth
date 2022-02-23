import React, { useState } from "react";
import "../App.css";
import { FaSearch } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  let [isOpen, setIsOpen] = useState(false);

  return (
    <div className="navbar shadow-md w-full top-0 left-0 relative  ">
      <div className="md:flex  bg-white py-4 cursor-pointer justify-between ">
        <div className="flex ml-32">
          <div className="hidden md:flex ">
            <span className="flex">
              <img
                src="./asset/logo.png "
                className="relative first_logo_img"
                alt=""
              />
              <img
                src="./asset/ear.png "
                className="absolute ml-32 left-1.5"
                alt=""
              />

              <img
                src="./asset/vector.png "
                className="absolute ml-32 top-7 left-1.5 border-white"
                alt=""
              />
            </span>
          </div>
          <h1 className="logo_text ml-4 text-lg md:text-xl text-gray-500 ">
            {" "}
            Saltpeter
          </h1>
        </div>
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="text-3xl absolute right-8 cursor-pointer top-4 md:hidden"
        >
          <ion-icon name={isOpen ? "close" : "menu"}></ion-icon>
        </div>

        <ul
          className={`capitalize flex md:flex-row flex-col  nav_items md:pb-0 pb-8 absolute md:static md:mr-24 transition-all md:pl-0 pl-36 duration-500 ease-in ${
            isOpen ? "top-20" : "top-[-490px]"
          }`}
        >
          <NavLink
            className="uppercase nav_elements focus:text-green-400 md:my-0 mt-4 "
            to="/"
          >
            home
          </NavLink>
          <NavLink to="about" className="nav_elements md:my-0 my-2">
            about us +
          </NavLink>
          <NavLink to="news" className="nav_elements md:my-0 my-2">
            news and events +
          </NavLink>
          <NavLink to="gallery" className="nav_elements md:my-0 my-2">
            gallery
          </NavLink>
          <NavLink to="resources" className="nav_elements md:my-0 my-2">
            resources +
          </NavLink>
          <NavLink to="projects" className="nav_elements md:my-0 my-2">
            projects
          </NavLink>
          <NavLink to="team" className="nav_elements md:my-0 my-2">
            contacts
          </NavLink>
          <NavLink to="" className="md:my-0 my-2 flex ">
            <div className="hover:w-[200px] md:flex hidden">
              <input
                type="text"
                placeholder="Search..."
                className="text-gray outline-0 border-0 border-b-2 transition-all ease-in-out duration-300 "
              />
            </div>
            <FaSearch className="mt-1 md:block hidden  " />
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
