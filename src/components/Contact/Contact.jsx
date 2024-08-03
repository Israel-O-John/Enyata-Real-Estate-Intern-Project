import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import {Link} from 'react-router-dom'
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";

export const Contact = () => {
  return (
    <div>
      <Navbar />
      <div>
        <h1>
          Feel Free to Contact us
        </h1>
        <div>
          <div>
            <p><Link to='/Contact' className='flex gap-2 items-center text-white pb-3'><FaMapMarkerAlt />371 Agege Motor Rd, Lagos</Link></p>
            <p><Link to='/Contact' className='flex gap-2 items-center text-white pb-3'><FaPhone />+234 (810) 759 5941</Link></p>
            <p><Link to='/Contact' className='flex gap-2 items-center text-white pb-3'><HiOutlineMail />example@mail.com</Link></p>   
          </div>
      </div>
      </div>
      <Footer />

    </div>
  )
}

export default Contact