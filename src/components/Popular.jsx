import React from 'react'
import poImmg from '../assets/images/Poimages.png'
import PopularCommon from './common/PopularCommon'
import { GoArrowUpRight } from 'react-icons/go'
import CommonHead from './common/CommonHead'
import { Link } from 'react-router'
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

const Popular = () => {

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1, 
       nextArrow: <IoIosArrowBack />,
    prevArrow: <IoIosArrowForward />
  }



  return (
    <>

    <section id='popular' className='pb-[120px]'>
      <div className="container">
          <div className="flex justify-between pb-[40px] items-center">
            <CommonHead
              comH2={"Popular Routes"}
              comP={"Interdum et malesuada fames ac ante ipsum"}
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
        <div id='popular-row'>
              <div className="slider-container">
      <Slider {...settings}>
        <div>
             <PopularCommon poH2={'Istanbul - New York'} />
        </div>
        <div>
              <PopularCommon poH2={'Istanbul - New York'} />
        </div>
        <div>
       <PopularCommon poH2={'Istanbul - New York'} />
        </div>
        <div>
            <PopularCommon poH2={'Istanbul - New York'} />
        </div>
        
        

      </Slider>
    </div>


        </div>
      </div>
    </section>
    
    
    
    
    </>
  )
}

export default Popular