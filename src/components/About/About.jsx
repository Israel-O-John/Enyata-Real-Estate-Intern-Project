import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

export const About = () => {
  return (
    <div>
      <Navbar />
      <div className='py-28 px-6'>
        <h1 className='text-center pb-6 font-bold text-white text-6xl'>About Real Estate</h1>
        <p className='text-center text-white text-lg'>
          Real Estate Centre is Nigeria’s number one property website. We are not estate agents but we aim to be the place for Nigerian property seekers to find details of all properties available to buy or rent.

          We have created a significantly more convenient and effective way for property hunters to find their next property: up-to-date property information, available for free, accessible 24 hours a day to anyone with internet access and far more complete in terms of number of properties and depth of detail on each property than through other traditional advertising media.

          Real Estate Centre connects more people with more property than anyone else.

          Real Estate Centre is the clear leading property website with lots of users, advertising members and properties. Our advertisers are property professionals such as estate agents, letting (rental) agents and new homes developers who offer properties within Nigeria for property hunters.
        </p>
      </div>

      <Footer />

    </div>
  )
}


export default About