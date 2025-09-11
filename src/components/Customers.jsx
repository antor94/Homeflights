import React from 'react'
import { FaStar } from "react-icons/fa";

const Customers = () => {
  return (
    <>
    
    <section id='Customers' className='bg-[#13357B] '>
        <div className="container">
            <div id='Customers-row' className='py-[120px] flex justify-center gap-[140px]' >


                {/* ----------- left-side */}
                <div>
                
                    <div className='w-[353px]'><h2 className='text-[30px] font-semibold font-jost text-white'>What our customers are saying us?</h2></div>
                    <div className='w-[520px] mt-[20px] mb-[60px]'><p className='text-[16px] font-normal font-jost text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas varius tortor nibh, sit amet tempor nibh finibus et. Aenean eu enim justo.</p></div>

                    <div className='flex gap-[124px]'>
                        <div>
                            <h2 className='text-[30px] font-jost font-semibold text-[#fff]'>13m+</h2>
                            <p className='text-[18px] font-medium font-jost text-white'>Happy People</p>
                        </div>
                              <div>
                            <h2 className='text-[30px] font-jost font-semibold text-[#fff]'>4.88</h2>
                            <p className='text-[18px] font-medium font-jost text-white'>Overall rating</p>
                            <div className='flex  items-center gap-[7px] mt-[9px]'>
                                <FaStar className='text-[#fff]' />
                                <FaStar className='text-[#fff]' />
                                <FaStar className='text-[#fff]' />
                                <FaStar className='text-[#fff]' />
                                <FaStar className='text-[#fff]' />

                            </div>
                        </div>




                    </div>





                </div>

                {/* ----------- right-side */}
                <div>
                    <div className='flex items-center gap-[30px]'>
                        <div className='w-[80px] h-[80px] bg-white rounded-full'><img src="" alt="" /></div>
                        <div>
                            <h2 className='text-[16px] font-medium font-jost text-white'>Annette Black</h2>
                            <p className='text-[15px] font-normal font-jost text-white'>UX / UI Designer</p>
                        </div>
                    </div>
                    <div className='w-[633px] mt-[30px ]'><p className='text-[18px] font-medium font-jost text-white'>The place is in a great location in Gumbet. The area is safe and beautiful. The apartment was comfortable and the host was kind and responsive to our requests.</p></div>
                </div>





            </div>
        </div>
    </section>
    
    
    
    
    
    </>
  )
}

export default Customers