import React, { useEffect, useRef, useState } from "react";
import Singlecollagecard from "./Singlecollagecard";

const Collagecard = () => {
  const [cards, setcard] = useState([]);
  const [search, setsesrch] = useState("");

  useEffect(() => {
    fetch(`https://collage-servises-server.vercel.app/carddata`)
      .then((res) => res.json())
      .then((data) => setcard(data));
  }, []);
  const Handlersearch = () => {
    fetch(`https://collage-servises-server.vercel.app/carddata/${search}`)
      .then((res) => res.json())
      .then((data) => {
        setcard(data);
      });
  };

  return (
    <>
      <div className="md:flex p-6">
        <div className="form-control mt-28">
          <div className="input-group">
            <input
              type="text"
              onChange={(e) => setsesrch(e.target.value)}
              placeholder="Search…"
              className="input input-bordered"
            />
            <button
              className="btn btn-square hover:bg-transparent "
              onClick={Handlersearch}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 md:gap-5 md:w-[1300px] md:ml-20 md:mt-20 ">
          {cards.map((card) => (
            <Singlecollagecard key={card.id} card={card}></Singlecollagecard>
          ))}
        </div>
      </div>
    </>
  );
};

export default Collagecard;
