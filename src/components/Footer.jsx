import React from 'react'
import footerImg from '../assets/images/footerlogo.png'
import footerImg1 from '../assets/images/footerApple.png'
import footerImg2 from '../assets/images/footerGoogle.png'
import { Link } from 'react-router'
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";


const Footer = () => {
  return (
    <>
    
    <section id='footer' className='bg-[#13357B] '>
        <div className="container">
            <div id='footer-row' className='pt-[60px] pb-[150px]'>

                {/* ------------ left-side */}
                <div>
                    <Link to={'/'} ><img src={footerImg} alt="footer-img" /></Link>

                    <div className='flex gap-[107px] mt-[31px] mb-[60px]'>
                        <div className='flex flex-col gap-[10px]'>
                            <p className='text-[14px] font-normal font-jost text-[#fff]'>Toll Free Customer Care</p>
                            <h3 className='text-[18px] font-medium font-jost text-[#fff]'>+(1) 123 456 7890</h3>
                        </div>
                          <div className='flex flex-col gap-[10px]'>
                            <p className='text-[14px] font-normal font-jost text-[#fff]'>Need live support?</p>
                            <h3 className='text-[18px] font-medium font-jost text-[#fff]'>hi@gotrip.com</h3>
                        </div>
                    </div>

                    <div>
                        <h3 className='text-[16px] font-medium font-jost text-[#fff]'>Your all-in-one travel app</h3>
                        <div className='flex gap-[20px] mt-[13px]'>
                            <img src={footerImg1} alt="" />
                            <img src={footerImg2} alt="" />
                    </div>
                        </div>
                    <div className='mt-[60px] '>
                        <h3 className='text-[16px] font-medium font-jost text-[#fff]'>Follow us on social media</h3>

                        {/* ---------- icons */}
                        <div className='flex gap-[37px] mt-[20px]'>

                            <div className='hover:bg-[#ffffff0d] hover:w-[40px] hover:h-[40px] rounded-[40px] flex justify-center items-center duration-[.4s]'><Link to={'/'}  className='text-[15px] text-[#fff]  '  ><FaFacebookF /></Link></div>
                            <div className='hover:bg-[#ffffff0d] hover:w-[40px] hover:h-[40px] rounded-[40px] flex justify-center items-center duration-[.4s]'><Link to={'/'}  className='text-[15px] text-[#fff] '  ><FaTwitter /></Link></div>
                            <div className='hover:bg-[#ffffff0d] hover:w-[40px] hover:h-[40px] rounded-[40px] flex justify-center items-center duration-[.4s]'><Link to={'/'}  className='text-[15px]   text-[#fff]'  ><FaInstagram /></Link></div>
                            <div className='hover:bg-[#ffffff0d] hover:w-[40px] hover:h-[40px] rounded-[40px] flex justify-center items-center duration-[.4s]'><Link to={'/'}   className='text-[15px] text-[#fff] ' ><FaLinkedinIn /></Link></div>

                        </div>
                    </div>


















                </div>

                {/* ----------- right-side */}
                <div>
                    <h2>Get Updates & More</h2>
                    <div>
                        <input type="text" placeholder='Your Email' />
                        <Link to={'/'} ></Link>
                    </div>

                    <div>
                        <h3 className='text-[16px] font-medium font-jost text-[#fff]'>Company</h3>
                        <div>
                            <ul>
                                <li><Link to={'/'}  className='text-[15px] font-normal font-jost text-[#fff]'>About Us</Link></li>
                                <li><Link to={'/'} className='text-[15px] font-normal font-jost text-[#fff]' >Careers</Link></li>
                                <li><Link to={'/'} className='text-[15px] font-normal font-jost text-[#fff]' >Blog</Link></li>
                                <li><Link to={'/'} className='text-[15px] font-normal font-jost text-[#fff]' >Press</Link></li>
                                <li><Link to={'/'} className='text-[15px] font-normal font-jost text-[#fff]' >Gift Cards</Link></li>
                                <li><Link to={'/'} className='text-[15px] font-normal font-jost text-[#fff]' >Magazine</Link></li>
                        
                            </ul>
                        </div>
                    </div>












                </div>

            </div>
        </div>
    </section>
    
    
    
    
    </>
  )
}

export default Footer