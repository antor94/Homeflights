import React from 'react'
import bannerBg from '../assets/images/SLIDER.png'
import { Link } from 'react-router'
import { IoMdArrowDropdown } from "react-icons/io";
import { LuSearch } from "react-icons/lu";

const Banner = () => {
  return (
    <>
    

    <section id='banner' className=' pt-[102px] pb-[330px]  relative'>
  <div   style={{
          background: `URL(${bannerBg})`,
          backgroundRepeat: `no-repeat`,
          backgroundSize: `cover`,
        }} className="w-full h-full z-10 absolute top-0 left-0">

        </div>
        <div className="container">
            <div id='banner-row' className=''>
              {/* ------------ left-side */}
              <div className='pt-[280px]'>

              <h1 className='text-[60px] font-jost font-semibold text-main'>Where do You Want To <span className='text-[#13357B]'>Fly</span></h1>
              <p className='text-[16px] font-normal font-jost text-[#697488]'>Discover amzaing places at exclusive deals</p>

              <div className='flex items-center gap-[30px] mt-[29px] mb-[19px]'>

                <Link to={'/'} className='flex items-center gap-[12px]' >Return <IoMdArrowDropdown /></Link>
                <Link to={'/'} className='flex items-center gap-[12px]' >Economy <IoMdArrowDropdown /></Link>
                <Link to={'/'} className='flex items-center gap-[12px]' >0 Bags <IoMdArrowDropdown /></Link>
          
              </div>

              </div>
                   <div className='w-[1144px] absolute top-[580px] z-300 left-[172px] bg-[#fff] rounded-[4px] flex shadow-[0px_4px_30px_0px_rgba(31,_38,_135,_0.15)]'>

        <div className='flex mt-[27px] mb-[23px] px-[20px]'>

          <div  className='flex'>


          <div className='pr-[70px] border-r h-[40px] ' >
            <h3 className='text-[15px] font-medium font-jost text-main'>Flying From</h3>
                       <input className='text-[15px]  border-none outline-none font-normal font-jost text-[#697488]' type="text" placeholder='City or Airport'/>

          </div>
                <div className='pl-[30px] pr-[70px] border-r h-[40px]'>
            <h3 className='text-[15px] font-medium font-jost text-main'>Flying To</h3>
                        <input className='text-[15px] border-none outline-none  font-normal font-jost text-[#697488]' type="text" placeholder='City or Airport'/>

          </div>

      <div className='pl-[30px]'>
            <h3 className='text-[15px] font-medium font-jost text-main'>Depart</h3>
            <input className='text-[15px] font-normal border-none outline-none  font-jost text-[#697488]' type=" date" placeholder='Mon, 14/03'/>
           
          </div>

      <div className=' pl-[20px] border-l border-r '>
            <h3 className='text-[15px] font-medium font-jost text-main'>Return</h3>
            <input className='text-[15px] font-normal border-none outline-none  font-jost text-[#697488]' type=" date" placeholder='Mon, 14/03'/>
           
          </div>

      <div className='pl-[20px]'>
            <h3 className='text-[15px] font-medium font-jost text-main'>Travellers</h3>
                        <input className='text-[15px] border-none outline-none  font-normal font-jost text-[#697488]' type="number" placeholder='5 Travellers'/>

          </div>


          </div>


         <button className='w-[148px] z-20 text-[15px] font-medium font-jost text-[#fff] flex justify-center rounded-[4px] items-center gap-[10px] bg-[#13357B]'><LuSearch /> Search</button>
 


        </div>





      </div>
            </div>
        </div>
    </section>
    
    
    
    
    
    
    
    </>
  )
}

export default Banner