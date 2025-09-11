import React from 'react'
import insImg from '../../assets/images/inspirationImg.png'

const InspirationCommon = ({insH2 }) => {
  return (
    <>

        <div>
            <div><img src={insImg} alt="" /></div>
            <div>
                <div className='w-[410px] pt-[20px] pb-[5px]'>
                <h3 className='text-[18px] font-medium font-jost text-main'>{insH2}</h3>

                </div>
                <p className='text-[15px] font-normal font-jost text-[#697488]'>April 06, 2022</p>
            </div>

        </div>







    </>
  )
}

export default InspirationCommon