import React from 'react';
import EmptyCart from '../assets/Images/emptycart.png';
import { useSelector } from 'react-redux';
import { FaTrashAlt } from 'react-icons/fa';

function Cart() {
  const cart = useSelector((state) => state.cart.cartItems); // Correct selector
  console.log("Cart Items:", cart);

  return (
    <div>
      {cart.length > 0 ? (
        <div>
          <h3>Shopping Cart has {cart.length} items</h3>
          <div>
            <div>
              <p>Products</p>
              <div>
                <p>Price</p>
                <p>Quantity</p>
                <p>Subtotal</p>
                <p>Remove</p>
              </div>
              <div>
                {cart.map((product, index) => (
                  <div key={index}>
                    <div>
                      <img src={product.image} alt={product.name} />
                      <div>
                        <h3>{product.name}</h3>
                      </div>
                    </div>
                    <div>
                      <p>${product.price}</p>
                      <div className="flex">
                        <button>-</button>
                        <p>{product.qty}</p>
                        <button>+</button>
                      </div>
                      <p>${(product.price * product.qty).toFixed(2)}</p>
                      <FaTrashAlt />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex justify-center">
          <img src={EmptyCart} alt="Empty Cart" className="h-96" />
        </div>
      )}
    </div>
  );
}

export default Cart;
