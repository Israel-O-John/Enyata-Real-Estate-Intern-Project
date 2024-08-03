import React from 'react'
import {Link} from 'react-router-dom'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoBedOutline } from "react-icons/io5";
import { GiBathtub } from "react-icons/gi";
import { GiHomeGarage } from "react-icons/gi";

import house from '/src/assets/images/house.webp'














const Listings = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
      };
  return (
    <div className='w-3/4 pb-12 m-auto'>
        <div className='mt-20'>
        <Slider {...settings}>
            {data.map((d) => (
                <div className='bg-white h-[370px] text-black max-w-72  rounded-xl'>
                    <div className='rounded-t-xl'>
                        <img src={d.img} className="rounded-t-xl w-80" />
                    </div>
                    <div className='flex flex-col gap-2 p-4'>
                        <h2 className='font-semibold'>
                            {d.name}
                        </h2>
                        <h1 className='font-bold'>{d.amount}</h1>
                        <hr />
                        <div className='flex justify-between'>
                            <div>
                                <p className='flex items-center gap-2'><IoBedOutline />2</p>
                                <p>Bedrooms</p>
                            </div>
                            <div>
                                <p className='flex items-center gap-2'><GiBathtub />2</p>
                                <p>Bathrooms</p>
                            </div>
                            <div>
                                <p className='flex items-center gap-2'><GiHomeGarage />2</p>
                                <p>Garages</p>
                            </div>
                            
                            
                            
                        </div>
                    </div>
                    <div className='flex flex-col items-center'>
                    <Link to='/Property'><button className='text-white font-lg bg-slate-700 px-28 py-2 rounded-b-xl'>Details</button></Link>
                    </div>
                </div>
            ))}
        </Slider>
        </div>
    </div>
  )
}

export default Listings

const data = [
    {
        img: `/src/assets/images/house.webp`,
        name: `Pembroke pine's office`,
        amount: `$15,000`,

    },
    {
        img: `/src/assets/images/house1.jpg`,
        name: `Summer`,
        amount: `$150,000`,

    },
    {
        img: `/src/assets/images/house2.jpg`,
        name: `Winter`,
        amount: `$167,000`,

    },
    {
        img: `/src/assets/images/house3.jpg`,
        name: `Autuum`,
        amount: `$20,000`,

    },
    {
        img: `/src/assets/images/house4.jpg`,
        name: `Rainy`,
        amount: `$1,980,000`,

    },
    {
        img: `/src/assets/images/house2.jpg`,
        name: `Cold`,
        amount: `$16,000`,

    },
    {
        img: `/src/assets/images/house1.jpg`,
        name: `Warm`,
        amount: `$158,000`,

    },
]

// {
//     List.map((item) => (
//         <li className='border'>
//             <img src="" alt="image" />
//             <p>Me now</p>
//             {item}
//             <p>P again</p>
//             </li>
            
//     ))
// }