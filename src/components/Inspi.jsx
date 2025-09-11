import React from 'react'
import CommonHead from './common/CommonHead'
import InspirationCommon from './common/InsPiCommon'



const Inspiration = () => {
  return (
    <>
    
    
    <section id='inspiration' className='py-[120px]'>
        <div className="container">
            <div className='text-center'>
            <CommonHead comH2={'Get inspiration for your next trip'} comP={'Interdum et malesuada fames'} />

            </div>
            <div id='inspiration-row' className='flex justify-center gap-[30px] mt-[40px]'>
              <InspirationCommon insH2={'10 European ski destinations you should visit this winter'} />
              <InspirationCommon insH2={'Booking travel during Corona: good advice in an uncertain time'} />
              <InspirationCommon insH2={'Where can I go? 5 amazing countries that are open right now'} />

            </div>
        </div>
    </section>
    
    
    
    
    
    
    
    
    
    </>
  )
}

export default Inspiration