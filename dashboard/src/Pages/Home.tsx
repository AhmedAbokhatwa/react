import React from 'react'
import { Cateigories  } from '../Component/MockData'
import HeroImage from '../assets/Images/shopping-background.png'
import InfoSection from '../Component/InfoSection'
import CategorySection from '../Component/CategorySection'
function Home() {
  return (
    <div className='bg-white mt-2 px-4 ms:px-12 lg:px-14'>
      <div className='container mx-auto py-4 flex flex-col md:flex-row space-x-2'>
        <div className='w-full md:w-3/12' >
            <div className='bg-red-600 text-white text-x 
            font-bold px-2 p-y-2.5'>Shop by Categories</div>
            <ul className=' space-y-1 bg-gray-100 p-2 border'>
              {Cateigories.map((cat,index)=>(
                <li key={index} className='flex items-center text-x font-medium'>
                  <div className='w-2 h-2 border border-red-500 rounded-full mr-2'></div>
                  {cat}
                </li>
              ))}
            </ul>
        </div>

        <div className='w-full md:w-9/12 mt-8 md:mt-0 h-96 relative'>
              <img src={HeroImage} alt="" className='h-full w-full' />
              <div className='absolute top-10 left-8' >
                <p className='text-gray-600 mb-1'>Smart Shop Build With A.Abu-Khatwa</p>
                {/* <h2 className='text-xl md:text-xl'>Welocome to U in Smart Shop</h2> */}
                <p className='text-xl mt-1.5 font-bold text-gray-800' >1 Millions Products</p>
                <button className='bg-red-600 px-8 py-1.5 text-white font-b mt-2 hover:bg-red-700 transform 
                transition-transform duration-300 hover:scale-105'>Shop Now </button>

              </div>

        </div>
        
      </div>
      <InfoSection/>
      <CategorySection/>
    </div>
    
  )
}

export default Home