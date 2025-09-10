import React from "react";
import Banner from "../components/Banner";
import Choose from "../components/Choose";
import Recommended from "../components/Recommended";
import Download from "../components/Download";
import CommonHead from "../components/common/CommonHead";
import Inspiration from "../components/inspiration";

const Home = () => {
  return (
    <>
      <Banner />
      <Choose />
      <Recommended />
      <Download />
      <Inspiration />
    </>
  );
};

export default Home;
