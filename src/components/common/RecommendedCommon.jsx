import React from 'react'
import recoImg from '../../assets/images/Surfac.png'
import timer from '../../assets/images/timer.png'
import { Link } from 'react-router'
import { GoArrowUpRight } from 'react-icons/go'

const RecommendedCommon = () => {
  return (
    <div className=' rounded-[4px] border border-[#DDDDDD] hover:bg-[#3554d10f] duration-[.3s]'>


        <div  className='flex justify-between pl-[29px] pr-[35px]'>

            <div className='flex items-center gap-[25px] my-[27px]'>
                <img src={recoImg} alt="" />
                <div className='flex'>
                <div>
                    <p className='text-[16px] font-medium font-jost text-main'>14:00</p>
                    <p className='text-[15px] font-normal font-jost text-[#697488]'>SAW</p>
                </div>
                <div className='pl-[25px] pr-[20px]'><img src={timer} alt="" /></div>
                   <div>
                    <p className='text-[16px] font-medium font-jost text-main'>14:00</p>
                    <p className='text-[15px] font-normal font-jost text-[#697488]'>SAW</p>
                </div>
            </div>
                </div>

                        <div className='flex items-center gap-[25px] my-[27px]'>
                <img src={recoImg} alt="" />
                <div className='flex'>
                <div>
                    <p className='text-[16px] font-medium font-jost text-main'>14:00</p>
                    <p className='text-[15px] font-normal font-jost text-[#697488]'>SAW</p>
                </div>
                <div className='pl-[25px] pr-[20px]'><img src={timer} alt="" /></div>
                   <div>
                    <p className='text-[16px] font-medium font-jost text-main'>14:00</p>
                    <p className='text-[15px] font-normal font-jost text-[#697488]'>SAW</p>
                </div>
            </div>
                </div>

                <div className='flex items-center gap-[23px]'>
                    <div>

              
                        <h2 className='text-[18px] font-medium font-jost text-main'>US$934</h2>
                        <p className='text-[15px] font-normal font-jost text-[#697488]'>16 deals</p>
                 
                    </div>
                        <div className='w-[159px] bg-[#3554d115]'>

            <Link to={'/'} className=' rounded-[4px] py-[14px] flex justify-center items-center gap-[13px]  text-[15px] font-medium font-jost text-[#3554D1]' >More <GoArrowUpRight /></Link>
            </div>

                </div>
















        </div>










    </div>
  )
}

export default RecommendedCommon