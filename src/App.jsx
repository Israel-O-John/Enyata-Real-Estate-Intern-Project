import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Estate from '/src/assets/images/Estate.webp'
import Footer from './components/Footer/Footer'
import Listings from './components/Listings/Listings'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <div className='  w-10/12 relative justify-center flex flex-col mx-auto py-48 rounded-xl items-center text-center'>
        <div className='w-full h-full rounded-xl z-20 absolute cover'>
          <div className='bg-black/40 absolute z-10 w-full h-full'></div>
          <img src={Estate} alt="" className='w-full rounded-xl h-full'/>
        </div>
        <div className='relative mx-auto items-center flex flex-col z-30'>
          <h1 className='font-bold text-white text-6xl pb-5' >Find a Home that suits your lifestyle.</h1>
          <p className='text-base text-white max-w-3xl '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus cumque, iusto, officiis delectus voluptates labore maxime amet, eligendi unde est quisquam similique enim odio nostrum saepe vel quos assumenda optio!</p>
       </div>
      </div>
      <Listings />
      <Footer />
    </>
  )
}

export default App


// bg-[url("src/assets/images/Estate.webp")] 