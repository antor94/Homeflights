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
                        <div className='flex gap-[37px] mt-[14px]'>

                            <div className='hover:bg-[#ffffff0d] hover:w-[40px] hover:h-[40px] rounded-[40px] flex justify-center items-center duration-[.4s]'><Link to={'/'}  className='text-[15px] text-[#fff]  '  ><FaFacebookF /></Link></div>
                            <div className='hover:bg-[#ffffff0d] hover:w-[40px] hover:h-[40px] rounded-[40px] flex justify-center items-center duration-[.4s]'><Link to={'/'}  className='text-[15px] text-[#fff] hover:bg-[#fff] hover:w-[40px] hover:h-[40px] rounded-[40px] '  ><FaTwitter /></Link></div>
                            <div className='hover:bg-[#ffffff0d] hover:w-[40px] hover:h-[40px] rounded-[40px] flex justify-center items-center duration-[.4s]'><Link to={'/'}  className='text-[15px] text-[#fff] hover:bg-[#fff] hover:w-[40px] hover:h-[40px] rounded-[40px] '  ><FaInstagram /></Link></div>
                            <div className='hover:bg-[#ffffff0d] hover:w-[40px] hover:h-[40px] rounded-[40px] flex justify-center items-center duration-[.4s]'><Link to={'/'}   className='text-[15px] text-[#fff] hover:bg-[#fff] hover:w-[40px] hover:h-[40px] rounded-[40px] ' ><FaLinkedinIn /></Link></div>

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