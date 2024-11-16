import React from 'react'

function Shop() {
  return (
    <div className=" mx-auto py-12">
    <h2 className='text-2xl font-bold mb-6 text-center'>Top Sales</h2>
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 cursor-pointer'>
    {products.length > 0 ? (
        products.slice(0, 5).map((product, index) => (
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