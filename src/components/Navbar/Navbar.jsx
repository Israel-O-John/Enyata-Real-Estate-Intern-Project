import React from 'react'
import {Link} from 'react-router-dom'
import Logo from '/src/assets/icons/Logo.svg'
import { IoSearch } from "react-icons/io5";


export const Navbar = () => {
  return (
    <div className='flex w-10/12 mx-auto py-9 justify-between'>
        <Link to='/'>
            <div className='flex items-center gap-2'>
                <img src={Logo} alt="" />
                <p>Real Estate</p>
            </div>
        </Link>
        <div>
            <ul className='flex gap-8'>
                <li className=''><Link to='/'>Home</Link></li>
                <li><Link to='/Property'>Property </Link></li>
                <li><Link to='/About'>About us</Link></li>
                <li><Link to='/Contact'>Contact us</Link></li>
            </ul>
        </div>
            <label class="relative block">
            <span class="sr-only">Search</span>
            <span class="absolute inset-y-0 left-0 flex items-center pl-2">
                <IoSearch />
            </span>
            <input class="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Search for your home" type="text" name="search"/>
        </label>
    </div>
  )
}

export default Navbar