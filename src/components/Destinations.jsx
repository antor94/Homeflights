import React from "react";
import CommonHead from "./common/CommonHead";
import { Link } from "react-router";
import { GoArrowUpRight } from "react-icons/go";
import DestinationCommon from "./common/DestinationCommon";
import Slider from "react-slick";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const Destinations = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,
    nextArrow: <IoIosArrowForward />,
    prevArrow: <IoIosArrowBack />,
  };
  return (
    <>
      <section id="Destinations">
        <div className="container">
          <div className="flex justify-between pb-[40px] items-center">
            <CommonHead
              comH2={"Top Destinations"}
              comP={"These popular destinations have a lot to offer"}
            />

            <div className="w-[126px] bg-[#3554d115]">
              <Link
                to={"/"}
                className=" rounded-[4px] py-[14px] flex justify-center items-center gap-[13px]  text-[15px] font-medium font-jost text-[#3554D1]"
              >
                More <GoArrowUpRight />
              </Link>
            </div>
          </div>
          <div id="Destinations-row" className=""></div>
        </div>

        <div className="container abc">
            <div className="xyz">
        <div className="slider-container">
          <Slider {...settings}>
            <div>
              <DestinationCommon />
            </div>
            <div>
              <DestinationCommon />
            </div>
            <div>
              <DestinationCommon />
            </div>
            <div>
              <DestinationCommon />
            </div>
            <div>
              <DestinationCommon />
            </div>
            <div>
              <DestinationCommon />
            </div>
          </Slider>
        </div>

            </div>


        </div>


      </section>
    </>
  );
};

export default Destinations;
