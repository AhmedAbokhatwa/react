import React from 'react'
import EmptyCart from '../assets/Images/emptycart.png'
import { useSelector } from 'react-redux'
function Cart() {
  const cart = useSelector(state=> state.cart)
  return (
    <div>{cart.products.length > 0 ? 
    <div>
      <h3>Shopping Cart</h3>
    </div>
      :
      <div className='flex justify-center'>
        <img src={EmptyCart} alt="Empty Cart" className='h-96' />
      </div> }
    </div>
  )
}

export default Cart