import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductCart from '../Component/ProductCart'
import { setProducts } from '../redux/productSlice';
import { Cateigories, mockData  } from '../Component/MockData'
function Shop() {
  const dispatch = useDispatch()
  const products = useSelector(state => state.cart.products) 
  useEffect(() => {
    // console.log('Dispatching setProducts with mockData:', mockData);
    dispatch(setProducts(mockData));
  }, [dispatch]);
  
  // console.log('products:', products);
  return (
    <div className=" mx-auto py-12 px-4 md:px-16 lg:px-24">
    <h2 className='text-2xl font-bold mb-6 text-center'>The Shop</h2>
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 cursor-pointer'>
    {products.length > 0 ? (
        products.slice(0, 10).map((product, index) => (
           // Display the product name or other properties
           <ProductCart product={product}/>
        ))
      ) : (<p>No products available</p>)
    }

    </div> 
  </div>
  )
}

export default Shop