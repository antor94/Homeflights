import React from 'react'
import downImg from '../assets/images/downImg.png'
import google from '../assets/images/google.png'
import apple from '../assets/images/apple.png'
import vector from '../assets/images/vector.png'

const Download = () => {
  return (
    <>

    <section id='Download'>
        <div className="container">
            <div id='Download-row' className="bg-[#13367b35] py-[81px] flex justify-center items-center gap-[228px] rounded-[4px]" >

                {/* ------------- left-side */}
                <div>
                    <h2 className='text-[30px] font-semibold font-jost text-main'>Download the App</h2>
                    <div className='w-[470px] mt-[17px] mb-[26px] leading-[30px]'><p className='text-[18px] font-normal font-jost text-main'>Book in advance or last-minute with GoTrip. Receive instant confirmation. Access your booking info offline.</p></div>
                    <div className='flex gap-[30px]'>                                                  
                    <img src={apple} alt="" />
                    <img src={google} alt="" />
                    </div>
                </div>
{/* ------------- right-side */}
<div><img src={downImg} alt="" /></div>

            </div>
        </div>
    </section>



    
    
    
    
    
    
    
    
    
    
    
    
    
    
    </>
  )
}

export default Download