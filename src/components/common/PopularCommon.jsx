import React from 'react'

import poImg from '../../assets/images/Poimages.png'

const PopularCommon = ({poH2}) => {
  return (
    <>

    <div>
        <div className='mb-[10px]'> <img src={poImg} alt="" /></div>
        <div>
            <h2 className='text-[18px] font-medium font-jost text-main'>{poH2}</h2>

            <div className='my-[5px] flex items-center'>
                <p className='text-[14px] font-normal pr-[7px] font-jost text-[#697488]'>Round-trip</p>
                <span className=' inline-block w-[1px] h-[10px] bg-[#DDDDDD] text-[#DDDDDD]'></span>
                <p className='pl-[7px] text-[14px] font-normal font-jost text-[#697488]'>Wed, Jun 1 - Sun, Jun 5</p>
            </div>

            <p className='text-[14px] font-normal font-jost text-[#697488]'>From <span className='text-[16px] font-medium font-jost text-main'>US$72</span></p>




        </div>
    </div>
    
    
    
    
    
    
    
    
    
    
    </>
  )
}

export default PopularCommon