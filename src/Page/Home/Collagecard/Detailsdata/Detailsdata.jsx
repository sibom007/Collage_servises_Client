import { useLoaderData } from "react-router-dom";

const Detailsdata = () => {
  const Singledata = useLoaderData();
  const {
    _id,
    collegeImage,
    events,
    researchHistory,
    sports,
    collegeName,
    admissionDates,
  } = Singledata;

  console.log(Singledata);

  return (
    <div className="bg-[#cccccc] md:flex justify-evenly">
      <div className="md:mt-80 mb-60 ml-6">
        <h1 className="text-4xl font-semibold mb-3">{collegeName}</h1>
        <h1 className="text-xl font-semibold">
          {Singledata.events[0].eventName}
          {events[0].date}
        </h1>
        <h1 className="text-xl font-semibold">{admissionDates}</h1>

        {/* clofce digien */}
        <div
          tabIndex={0}
          className="collapse collapse-arrow border border-base-300 bg-base-200 w-9/12"
        >
          <div className="collapse-title text-xl font-medium">
            Researc hHistory of The collage
          </div>
          <div className="collapse-content">
            <p>{researchHistory.keyAchievements}</p>
          </div>
        </div>
        {/* sport */}
        <div
          tabIndex={0}
          className="collapse collapse-arrow border border-base-300 bg-base-200 mt-2 w-9/12"
        >
          <div className="collapse-title text-xl font-medium">
            Sport of Collage
          </div>
          <div className="collapse-content">
            <p>{sports.varsityTeams}</p>
          </div>
        </div>
      </div>

      <div>
        <img
          className="md:mt-52 w-[820px] h-[520px] mr-16  border-4 rounded shadow"
          src={collegeImage}
          alt=""
        />
      </div>
    </div>
  );
};

export default Detailsdata;
