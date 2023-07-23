import React from "react";
import { Link } from "react-router-dom";

const Dynimickcollagedata = ({ Collagesdat }) => {
  console.log(Collagesdat);
  const {
    _id,
    collegeImage,
    events,
    researchHistory,
    sports,
    collegeName,
    admissionDates,
  } = Collagesdat;

  return (
    <div>
      <div className="hero  border-8 rounded hover:bg-[#cccccc] hover:bg-opacity-70 duration-500 ">
        <div className="hero-content flex-col h-72 rounded lg:flex-row">
          <figure>
            <img
              src={collegeImage}
              className="max-w-sm rounded-lg w-[150px] h-20 mt-10 shadow-2xl md:w-[230px] md:h-[220px]"
            />
          </figure>
          <div className="mb-10">
            <h1 className="md:text-3xl font-bold md:mt-16">
              College Name{collegeName}
            </h1>
            <p className="font-semibold md:mt-2">{admissionDates}</p>
            <p className="font-semibold md:mt-2">
              {researchHistory.keyAchievements}
            </p>
            <p className="font-semibold md:mt-2">{sports.varsityTeams}</p>

            <div className="flex">
              <Link to={`/Detailsdata/${_id}`}>
                <button className="relative border-2 border-gray-800 bg-transparent md:py-2.5 px-5 font-medium uppercase text-gray-800 transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-orange-400 before:transition-transform before:duration-300 before:content-[''] hover:text-white before:hover:scale-x-100 md:mt-2">
                  {" "}
                  View Details
                </button>
              </Link>
              <Link to={`/Admision/${_id}`}>
                <button className="relative border-2 border-gray-800 bg-transparent md:py-2.5 px-5 font-medium uppercase text-gray-800 transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-orange-400 before:transition-transform before:duration-300 before:content-[''] hover:text-white before:hover:scale-x-100 md:mt-2 ml-5">
                  {" "}
                  Admission Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dynimickcollagedata;
