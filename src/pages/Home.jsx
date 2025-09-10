import React from "react";
import Banner from "../components/Banner";
import Choose from "../components/Choose";
import Recommended from "../components/Recommended";
import Download from "../components/Download";
import CommonHead from "../components/common/CommonHead";
import Inspiration from "../components/inspiration";
import Popular from "../components/Popular";

const Home = () => {
  return (
    <>
      <Banner />
      <Choose />
      <Recommended />
      <Popular />
      <Download />
      <Inspiration />
    </>
  );
};

export default Home;
