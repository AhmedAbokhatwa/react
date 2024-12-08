import React from 'react'
import { FaStar } from 'react-icons/fa'
import { addToCart } from '../redux/cartSlice'
import { useDispatch } from 'react-redux' 
function ProductCart({product}) {
  const dispatch = useDispatch();
  const handleAddCart = (e, product)=>{
      e.stopPropagation();
      e.preventDefault();
      dispatch(addToCart(product))
      console.log('productproduct')
      alert("add Sucessfullyy")  
      
  }

  return (
    <div className='bg-white p-4 shadow rounded relative border transform transition-transform duration-300 hover:scale-105 cursor-pointer'>
      <img className='h-48 w-full object-contain mb-4' src={product.image} alt="" />
      <h3 className='text-x font-semibold'>{product.name}</h3>
      <p className='text-gray-500'>${product.price}</p>
      <div className='flex items-center mt-2'>
      <FaStar className='text-yellow-500'></FaStar>
      <FaStar className='text-yellow-500'></FaStar>
      <FaStar className='text-yellow-500'></FaStar>
      <FaStar className='text-yellow-500'></FaStar>
      <FaStar className='text-yellow-500'></FaStar>

      </div>
      <div className='absolute bottom-4 right-2 flex items-center justify-center w-8 h-8 
      bg-red-600 group
       text-white text-sm rounded-full hover:w-32 hover:bg-red-700 transition-all'
       onClick={(e)=> handleAddCart(e, product)}>
        <span className='group-hover:hidden'>+</span>  
        <span className='hidden group-hover:block'>Add to cart</span>
      </div>      
    </div>
  )
}

export default ProductCart