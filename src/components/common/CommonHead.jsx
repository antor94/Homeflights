import React from 'react'

const CommonHead = ({comH2 , comP}) => {
  return (
    <>
    

<div>
    <h2 className='text-[30px] font-semibold font-jost text-main'>{comH2}</h2>
    <p className='text-[16px] font-normal font-jost text-[#697488]'>{comP}</p>

    
    </div>
    
    
    </>
  )
}

export default CommonHead