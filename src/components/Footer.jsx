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
    
    <footer id='footer' className='bg-[#13357B] '>
        <div className="container">
            <div id='footer-row' className='pt-[60px] pb-[150px] flex justify-center gap-[259px]'>

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
                    <h2 className='text-[16px] font-medium font-jost text-[#fff]'>Get Updates & More</h2>
                    <div className='w-[629px] bg-[#fff] rounded-[4px] pl-[23px] mt-[11px] mb-[60px] '>
                        <input className='w-[85%] py-[18px] border-none outline-none ' type="email" placeholder='Your Email' />
                        <Link to={'/'} className='text-[15px] font-medium font-jost text-main underline' >Subscribe</Link>
                    </div>

                    <div className='flex gap-[80px]'>


                    <div>
                        <h3 className='text-[16px] font-medium font-jost text-[#fff]'>Company</h3>
                        <div  className='mt-[22px]'>
                            <ul className='flex flex-col gap-[15px]'>
                                <li><Link to={'/'}  className='text-[15px] font-normal font-jost text-[#fff]'>About Us</Link></li>
                                <li><Link to={'/'} className='text-[15px] font-normal font-jost text-[#fff]' >Careers</Link></li>
                                <li><Link to={'/'} className='text-[15px] font-normal font-jost text-[#fff]' >Blog</Link></li>
                                <li><Link to={'/'} className='text-[15px] font-normal font-jost text-[#fff]' >Press</Link></li>
                                <li><Link to={'/'} className='text-[15px] font-normal font-jost text-[#fff]' >Gift Cards</Link></li>
                                <li><Link to={'/'} className='text-[15px] font-normal font-jost text-[#fff]' >Magazine</Link></li>
                        
                            </ul>
                        </div>
                    </div>
                    <div>
                        <h3 className='text-[16px] font-medium font-jost text-[#fff]'>Support</h3>
                        <div  className='mt-[22px]'>
                            <ul className='flex flex-col gap-[15px]'>
                                <li><Link to={'/'}  className='text-[15px] font-normal font-jost text-[#fff]'>Contact</Link></li>
                                <li><Link to={'/'} className='text-[15px] font-normal font-jost text-[#fff]' >Legal Notice</Link></li>
                                <li><Link to={'/'} className='text-[15px] font-normal font-jost text-[#fff]' >Privacy Policy</Link></li>
                                <li><Link to={'/'} className='text-[15px] font-normal font-jost text-[#fff]' >Terms and Conditions</Link></li>
                                <li><Link to={'/'} className='text-[15px] font-normal font-jost text-[#fff]' >Sitemap</Link></li>
                        
                            </ul>
                        </div>
                    </div>
                    <div>
                        <h3 className='text-[16px] font-medium font-jost text-[#fff]'>Oter Services</h3>
                        <div  className='mt-[22px]'>
                            <ul className='flex flex-col gap-[15px]'>
                                <li><Link to={'/'}  className='text-[15px] font-normal font-jost text-[#fff]'>Car hire</Link></li>
                                <li><Link to={'/'} className='text-[15px] font-normal font-jost text-[#fff]' >Activity Finder</Link></li>
                                <li><Link to={'/'} className='text-[15px] font-normal font-jost text-[#fff]' >Tour List</Link></li>
                                <li><Link to={'/'} className='text-[15px] font-normal font-jost text-[#fff]' >Flight finder</Link></li>
                                <li><Link to={'/'} className='text-[15px] font-normal font-jost text-[#fff]' >Cruise Ticket</Link></li>
                                <li><Link to={'/'} className='text-[15px] font-normal font-jost text-[#fff]' >Holiday Rental</Link></li>
                                <li><Link to={'/'} className='text-[15px] font-normal font-jost text-[#fff]' >Travel Agents</Link></li>
                        
                            </ul>
                        </div>
                    </div>
                    </div>













                </div>

            </div>
        </div>
    </footer>
    
    
    
    
    </>
  )
}

export default Footer