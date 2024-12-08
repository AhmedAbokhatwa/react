// import React from 'react';
// import { FaSearch, FaShoppingCart ,FaUser} from 'react-icons/fa';
// import { useSelector } from 'react-redux';
// import {Link} from 'react-router-dom'
// import { Span } from './CustomComponents';

// function Navbar(){
//   const products = useSelector(state => state.cart.cartItems)
//     // console.log("pppppppp",products)
//     return(
//       <nav className='bg-white shadow-md'>
//         <div className='container mx-auto px-4 md:px-16 lg:px-24 py-4 flex justify-between items-center'>
//             <div className='text-lg font-bold'>
//               <Link to="/">e-shop</Link>
//             </div>
//             <div className='relative flex-1 mx-4'>
//               <form action="">
//                 <input type="text" placeholder='Search Product' className='w-full border py-2 px-4'/>
//                 <FaSearch className='absolute top-3 right-3 text-red-500'>  </FaSearch >
//               </form>
//             </div>
//             <div className='flex items-center space-x-4 '>
//               <Link to="/cart" className='relative'>
//               <FaShoppingCart className='text-lg' />
//               {products.length > 0 && 
//               (<span className='absolute bottom-2 text-xs w-4 left-4 bg-red-600 rounded-full 
//               flex justify-center items-center text-white '>{products.length}</span>)}
//               </Link>
//               <button className='hidden md:block'>
//                 Login | Register
//               </button>
//               <button className='block md:hidden'>
//                 <FaUser></FaUser>
//               </button>
//             </div>
//         </div>
//         <div className='flex items-center justify-center space-x-10 py-4 text-sm font-bold'>
//           <Link to = "/shop" className='hover:underline'>Shop</Link>
//           <Link to = "/" className='hover:underline'>Home</Link>
//           <Link to = "/" className='hover:underline'>Contact</Link>
//           <Link to = "/" className='hover:underline'>About</Link>

//         </div>
//       </nav>
//     );
// }
// export default Navbar;
import React from 'react';
import { FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Navbar() {
  const products = useSelector((state) => state.cart.cartItems); // Get cart items from Redux state

  // Calculate the total quantity, ensuring cartQuantity is a number
  const totalQuantity = products.reduce((acc, product) => {
    // Ensure cartQuantity is treated as a number
    const quantity = isNaN(product.cartQuantity) ? 0 : Number(product.cartQuantity);
    return acc + quantity;
  }, 0);

  // console.log('Total Quantity:', totalQuantity);  // Debugging the totalQuantity calculation

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 md:px-16 lg:px-24 py-4 flex justify-between items-center">
        {/* Brand */}
        <div className="text-lg font-bold">
          <Link to="/">e-shop</Link>
        </div>

        {/* Search Bar */}
        <div className="relative flex-1 mx-4">
          <form action="" className="relative">
            <input
              type="text"
              placeholder="Search Product"
              className="w-full border py-2 px-4"
            />
            <FaSearch className="absolute top-3 right-3 text-red-500" />
          </form>
        </div>

        {/* Icons and Links */}
        <div className="flex items-center space-x-4">
          {/* Cart Icon */}
          <Link to="/cart" className="relative">
            <FaShoppingCart className="text-lg" />
            {totalQuantity > 0 && (
              <span
                className="absolute bottom-2 left-4 text-xs w-4 h-4 bg-red-600 rounded-full 
                flex justify-center items-center text-white"
              >
                {totalQuantity}
              </span>
            )}
          </Link>

          {/* Login/Register Buttons */}
          <button className="hidden md:block">Login | Register</button>
          <button className="block md:hidden">
            <FaUser />
          </button>
        </div>
      </div>

      {/* Navigation Links */}
      <div className="flex items-center justify-center space-x-10 py-4 text-sm font-bold">
        <Link to="/shop" className="hover:underline">
          Shop
        </Link>
        <Link to="/" className="hover:underline">
          Home
        </Link>
        <Link to="/" className="hover:underline">
          Contact
        </Link>
        <Link to="/" className="hover:underline">
          About
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
