import React from 'react'
import CommonHead from './common/CommonHead'
import { Link } from 'react-router'
import { GoArrowUpRight } from "react-icons/go";
import RecommendedCommon from './common/RecommendedCommon';

const Recommended = () => {
  return (
    <>


    <section id='Recommended' className='pb-[120px]'>
        <div className="container">
            <div className='flex justify-between items-center'>
            <CommonHead comH2={'Recommended Flights'} comP={'Interdum et malesuada fames ac ante ipsum'} />

            <div className='w-[126px] bg-[#3554d115]'>

            <Link to={'/'} className=' rounded-[4px] py-[14px] flex justify-center items-center gap-[13px]  text-[15px] font-medium font-jost text-[#3554D1]' >More <GoArrowUpRight /></Link>
            </div>


            </div>
            <div id='Recommended-row'>
                <div  className='flex flex-col gap-[30px] mt-[40px]'>

                <RecommendedCommon />
                <RecommendedCommon />
                <RecommendedCommon />
                <RecommendedCommon />

                </div>

            </div>
        </div>
    </section>
    
    
    
    
    
    
    
    
    </>
  )
}

export default Recommended