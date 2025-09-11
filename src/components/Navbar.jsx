import React from 'react'
import { Link } from 'react-router'
import logo from '../assets/images/logo.png'

const Navbar = () => {
  return (
    <>


    <nav id='navbar' className='pt-[30px]  absolute top-0 left-0 w-full '>
        <div className="container">
            <div id='navbar-row' className='flex z-50 justify-between items-center'>

                {/* ---------------- logo */}
                <Link to={'/'} ><img src={logo} alt="main-logo" /></Link>


                {/* ----------- nav-items */}
                <div>
                    <ul className='flex gap-[20px] items-center '>
                        <li><Link to={'/'}  className='text-[15px] font-medium font-jost  text-[#0F294D]'  >Home</Link></li>
                        <li><Link to={'/'}  className='text-[15px] font-medium font-jost  text-[#0F294D]'  >Categories</Link></li>
                        <li><Link to={'/'} className='text-[15px] font-medium font-jost  text-[#0F294D]'   >Destination</Link></li>
                        <li><Link to={'/'}  className='text-[15px] font-medium font-jost  text-[#0F294D]'  >Blog</Link></li>
                        <li><Link to={'/'}  className='text-[15px] font-medium font-jost  text-[#0F294D]'  >Pages</Link></li>
                        <li><Link to={'/'}  className='text-[15px] font-medium font-jost  text-[#0F294D]'  >Contact</Link></li>
                    </ul>
                </div>


                {/* --------------- button */}

                <div className='flex gap-[20px] items-center'>
                    <button className='w-[170px] border border-[#13357B] text-[14px] font-normal font-jost hover:bg-[#13357B] rounded-[4px] py-[15px] duration-[.4s] hover:text-[#fff] text-[#13357B]'>Become An Expert</button>
                    <Link to={'/'} className='w-[170px] text-center border border-[#13357B] text-[14px] font-normal font-jost hover:bg-[#13357B] rounded-[4px] py-[15px] duration-[.4s] hover:text-[#fff] text-[#13357B]'>Sign In / Register</Link>
                </div>

            </div>
        </div>
    </nav>



    
    
    
    
    
    
    
    </>
  )
}

export default Navbar