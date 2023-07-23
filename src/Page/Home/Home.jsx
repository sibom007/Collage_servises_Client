import React from "react";
import Collagegraduat from "./Collegegraduate/Collagegraduat";
import Banner from "./Banner/Banner";
import Collagecard from "./Collagecard/collagecard";
import Review from "../Home/Review/Review";

const Home = () => {
  return (
    <div className="bg-site">
      <Banner />
      <Collagecard />

      <Review />

      <Collagegraduat />
      
    </div>
  );
};

export default Home;
