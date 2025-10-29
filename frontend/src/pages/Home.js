import React from "react";

import Banner from "../components/Banner";
import IconsSection from "../components/IconsSection";
import Blog from "../components/common/Blog";


import "./Home.css"

const Home = () => {
  return (
    <>
      <Banner />
      <IconsSection />
      <Blog />
    </>
  );
};

export default Home;
