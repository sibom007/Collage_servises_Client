import React from "react";
import { Link } from "react-router-dom";

const Singlecollagecard = ({ card }) => {
  const {
    _id,
    collegeImage,
    events,
    researchHistory,
    sports,
    collegeName,
    admissionDates,
  } = card;

  return (
    <div>
      <div className="card md:w-96  bg-transparent shadow-xl hover:mt-10 duration-700 hover:bg-[#c4d9ea]">
        <figure className="px-10 pt-10">
          <img
            src={collegeImage}
            alt="Shoes"
            className="rounded-xl w-[340px] h-[240px]"
          />
        </figure>

        <div className="card-body items-center text-center text-white">
          <h2 className="card-title">{collegeName}</h2>
          <p>
            <span className="font-semibold">Admission Dates:</span>
            {admissionDates}
          </p>
          <p>
            <span className="text-xl">Event :</span> {card.events[0].eventName}{" "}
            {card.events[0].date}
          </p>

          <div className="card-actions ml-44">
            <Link to={`/Detailsdata/${_id}`}>
              <button className="shadow-lg border-yellow-700 border-b-4 bg-orange-500 p-2 rounded hover:bg-orange-700 ">
                {" "}
                View Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Singlecollagecard;
