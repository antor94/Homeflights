import React from 'react'
import BestPrice from './common/BestPrice'

const Choose = () => {
  return (
    <>
    
    
    <section id='Choose' className='pb-[120px]'>
        <div className="container">
            <div id='Choose-row'>

                {/* ------------- heading */}
                <div className='text-center pb-[40px]'>
                    <h2 className='text-[30px] font-semibold font-jost text-main'>Why Choose Us</h2>
                    <p className='text-[15px] font-normal font-jost text-[#697488]'>These popular destinations have a lot to offer</p>
                </div>

                <BestPrice />

            </div>
        </div>
    </section>
    
    
    
    
    </>
  )
}

export default Choose