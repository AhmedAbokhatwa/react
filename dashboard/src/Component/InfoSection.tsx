import React from 'react'
import { FaShippingFast,FaHeadset, FaLock, FaTag } from 'react-icons/fa'
import { FaMoneyBill1Wave } from 'react-icons/fa6'

function InfoSection() {
  const InfoItems = [
    {
        icon : <FaShippingFast className='text-3xl text-red-600'/>,
        title : 'Free Shipping',
        desc:'Get your orders delivered with no extral cost'
    },
    {
      icon : <FaHeadset className='text-3xl text-red-600'/>,
      title : 'Support 24/7',
      desc:'We are here assist you any time'
    },
    {
      icon : <FaMoneyBill1Wave className='text-3xl text-red-600'/>,
      title : '30% Cash Back',
      desc:'full refund if you are not satisfied'
    },
    {
      icon : <FaLock className='text-3xl text-red-600'/>,
      title : 'Secure Payment',
      desc:'your payment information is safe with us '
    },
    {
      icon : <FaTag className='text-3xl text-red-600'/>,
      title :'25% Discount',
      desc:'Enjoy the best price on our products'
    }
  ]
  
  return (
  
    <div className='bg-white pb-8 pt-12 '>
      <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4'>
          {InfoItems.map((item,index)=>(
            <div key={index} className='flex flex-col items-center p-4 border rounded-lg shadow
            transform transition-transform duration-300 hover:scale-105 cursor-pointer '>
              {item.icon}
              <h3 className='mt-4 text-x font-semibold'>{item.title}</h3>
              <p className='mt-2 text-gray-600'>{item.desc}</p>
            </div>
          ))}
      </div>
    </div>
  )
}

export default InfoSection