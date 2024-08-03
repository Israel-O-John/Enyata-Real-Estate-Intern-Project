import React from 'react'
import {Link} from 'react-router-dom'
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";
import { FaRegCopyright } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";







const Footer = () => {
  return (
    <div className='pt-16 pb-6 px-16 bg-slate-800'>
        <div className='flex justify-between pb-14'>
            <div>
                <h3 className='pb-6 text-white'>Opening hours</h3>
                <div>
                    <p className='pb-3 text-white'>Mon-Fri 08:00AM - 06:00PM</p>
                    <p className='pb-3 text-white'>Sat-Sun 09:00AM - 04:00PM</p>
                </div>
            </div>
            <div>
                <h3 className='pb-6 text-white'>Find Us</h3>
                <div>
                    <p><Link to='/Contact' className='flex gap-2 items-center text-white pb-3'><FaMapMarkerAlt />371 Agege Motor Rd, Lagos</Link></p>
                    <p><Link to='/Contact' className='flex gap-2 items-center text-white pb-3'><FaPhone />+234 (810) 759 5941</Link></p>
                    <p><Link to='/Contact' className='flex gap-2 items-center text-white pb-3'><HiOutlineMail />example@mail.com</Link></p>
                </div>
            </div>
            <div>
                <h3 className='pb-6 text-white'>Links</h3>
                <div>
                    <p className='pb-3 text-white'><Link to='/'>Home</Link></p>
                    <p className='pb-3 text-white'><Link to='/Property'>Property</Link></p>
                    <p className='pb-3 text-white'><Link to='/About'>About us</Link></p>
                    <p className='pb-3 text-white'><Link to='/Contact'>Contact us</Link></p>
                </div>
            </div>
            <div>
                <h3  className='pb-6 text-white'>Newsletter</h3>
                <div>
                    <p className='pb-3 text-white'>Subscribe to our newsletter</p>
                    <div className='relative max-w-72'>
                        <input type="text" className='border pr-24 pl-2 rounded-md focus:outline-none hadow-sm focus:border-sky-500 py-1' placeholder='Your email'/>
                        <button className='absolute text-white right-3 top-1 px-2 rounded-lg bg-slate-700 py-0'>Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
        <hr/>
        <div className='flex justify-between pt-5 items-center'>
            <p className='flex items-center text-white'><FaRegCopyright /> Copyright Real Estate 2024, Design by Figma.Guru</p>
            <div className='flex gap-4'>
                <Link to='https://www.facebook.com'><FaFacebookSquare className='text-white'/></Link>
                <Link to='https://twitter.com/login'><FaSquareTwitter className='text-white'/></Link>
                <Link to='https://www.instagram.com'><FaSquareInstagram className='text-white'/></Link>

            </div>
        </div>
    </div>
  )
}

export default Footer