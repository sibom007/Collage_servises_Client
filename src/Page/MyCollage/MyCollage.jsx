import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const MyCollage = () => {
  const [candatedata, setcandatedata] = useState([]);

  useEffect(() => {
    fetch(`https://collage-servises-server.vercel.app/Candidatedata`)
      .then((res) => res.json())
      .then((data) => setcandatedata(data));
  }, []);

  console.log(candatedata);

  return (
    <div className="bg-site">
      <div className="overflow-x-auto">
        <table className="table mt-32">
          {/* head */}
          <thead>
            <tr>
              <th>Picture</th>
              <th>Email</th>
              <th>Subject</th>
              <th>Review</th>
            </tr>
          </thead>
          <tbody>
            {candatedata.map((candatedat) => (
              <tr key={candatedat._id}>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-24 h-24">
                        <img
                          src={candatedat.collegeImage}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-semibold text-xl">
                        {candatedat.name}
                      </div>
                      <div className="font-semibold text-xl">
                        {candatedat.collegeName}
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <p className="font-semibold text-xl">{candatedat.email}</p>
                </td>
                <td>{candatedat.subject}</td>
                <th>
                  <Link to={`/Addtoy/${candatedat._id}`}>
                    <button className="relative border-2 border-gray-800 bg-transparent py-2.5 px-5 font-medium uppercase text-gray-800 transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-blue-500 before:transition-transform before:duration-300 before:content-[''] hover:text-white before:hover:scale-x-100">
                      Review
                    </button>
                  </Link>
                </th>
              </tr>
            ))}
          </tbody>
          {/* foot */}
        </table>
      </div>
    </div>
  );
};

export default MyCollage;
