import React from 'react'
import bannerBg from '../assets/images/SLIDER.png'
import { Link } from 'react-router'
import { IoMdArrowDropdown } from "react-icons/io";
import { LuSearch } from "react-icons/lu";

const Banner = () => {
  return (
    <>
    

    <section style={{ background: `URL(${bannerBg})`,  backgroundRepeat: `no-repeat`,  backgroundSize: `cover`, }}  id='banner'>


      <div className='w-[1064px] bg-[#fff] rounded-[4px] shadow-[0px_4px_30px_0px_rgba(31,_38,_135,_0.15)]'>

        <div>

          <div>
            <h3>Flying From</h3>
                       <input type="text" placeholder='City or Airport'/>

          </div>
                <div>
            <h3>Flying To</h3>
                        <input type="text" placeholder='City or Airport'/>

          </div>

      <div>
            <h3>Depart</h3>
            <input type=" date" placeholder='Mon, 14/03'/>
           
          </div>

      <div>
            <h3>Return</h3>
            <input type=" date" placeholder='Mon, 14/03'/>
           
          </div>

      <div>
            <h3>Travellers</h3>
                        <input type="number" placeholder='5 Travellers'/>

          </div>

         <button className='w-[148px] bg-[#13357B]'><LuSearch /> Search</button>
 




        </div>



      </div>




        <div className="container">




            <div id='banner-row'>


              {/* ------------ left-side */}
              <h1>Where do You Want To Fly</h1>
              <p>Discover amzaing places at exclusive deals</p>

              <div>

                <Link to={'/'} >Return <IoMdArrowDropdown /></Link>
                <Link to={'/'} >Economy <IoMdArrowDropdown /></Link>
                <Link to={'/'} >0 Bags <IoMdArrowDropdown /></Link>
          
              </div>

                
            </div>
        </div>
    </section>
    
    
    
    
    
    
    
    </>
  )
}

export default Banner