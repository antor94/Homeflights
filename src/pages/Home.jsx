import React from "react";
import Banner from "../components/Banner";
import Choose from "../components/Choose";
import Recommended from "../components/Recommended";
import Download from "../components/Download";
import CommonHead from "../components/common/CommonHead";
import Popular from "../components/Popular";
import Destinations from "../components/Destinations";
import Customers from "../components/Customers";
import Inspiration from "../components/Inspi";

const Home = () => {
  return (
    <>
      <Banner />
      <Choose />
      <Recommended />
      <Customers />
      <Destinations />
      <Popular />
      <Download />
      <Inspiration />
   

  
     
    </>
  );
};

export default Home;
