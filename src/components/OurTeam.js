import React from "react";
import TeamData from "../apis/TeamData";

const OurTeam = () => {
  return (
    <div className="md:ml-32 ml-16 mb-16" id="our_team">
      <div className="our_team_heading flex mt-16 ">
        <hr className="heading_line mt-4" />
        <div>
          <h1 className="text-2xl ml-4">Our Team.</h1>
          <div className="meet_para ml-4 mt-3">
            <p className="text-left">
              We are not a team because we work together. We are a team because
              we respect, trust and care for each other.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-16 flex md:flex-row flex-col justify-between gap-5 mr-24    ">
        {TeamData.map((member, index) => {
          const {
            person,
            name,
            img,
            description,
            instagram,
            linkedin,
            twitter,
          } = member;

          if (index === 0) {
            return (
              <div key={person} className="mt-8 flex flex-col">
                <img
                  src={img}
                  className="h-[440px] w-[370px]"
                  alt="team member"
                />
                <div className="flex flex-row ">
                  <hr className="heading_line mt-9 " />
                  <p
                    className="flex justify-center text-xl mt-6 ml-4"
                    data-aos="flip-up"
                  >
                    {name}
                  </p>
                </div>

                <p className="mt-6 text-gray-400 w-[360px]">{description}</p>
                <div
                  className="flex md:justify-start justify-center gap-3 mt-6 first_members_icons"
                  data-aos="flip-down"
                >
                  {instagram}
                  {linkedin}
                  {twitter}
                </div>
              </div>
            );
          }
        })}

        {TeamData.map((member, index) => {
          const {
            person,
            name,
            img,
            description,
            instagram,
            linkedin,
            twitter,
          } = member;

          if (index >= 1)
            return (
              <div key={person} className="mt-8 flex flex-col">
                <img
                  src={img}
                  className="h-[440px] w-[370px]"
                  alt="team member"
                />
                <p
                  className="flex justify-center text-xl mt-6"
                  data-aos="flip-up"
                >
                  {name}
                </p>
                <p className="mt-6 text-gray-400 w-[360px]">{description}</p>
                <div
                  className="flex md:justify-start justify-center gap-3 mt-6"
                  data-aos="flip-down"
                >
                  {instagram}
                  {linkedin}
                  {twitter}
                </div>
              </div>
            );
        })}
      </div>
    </div>
  );
};

export default OurTeam;
