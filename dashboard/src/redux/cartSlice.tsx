// redux/cartSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],  // The initial state is an empty array
  cartQuantity :0,
  total_qty:0
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setProducts(state, action) {
      // This updates the products state in Redux with the payload (mockData)
      state.cartItems = action.payload;
    },
    addToCart(state,action){
      
      // const newItem = action.payload.id;
      // console.log("new id ",newItem)
      
      const itemIndex = state.cartItems.findIndex((item) => item.id  === action.payload.id)
      // console.log("iii",item)
      console.log('IDX',itemIndex)

      if (itemIndex>=0){
        
        state.cartItems[itemIndex].cartQuantity=
        (state.cartItems[itemIndex].cartQuantity || 0) + 1;
        console.log("eeeee",itemIndex)
      }else{
        
        const temp = {...action.payload, cartQuantity :1}
        state.cartItems.push(temp)
        // console.log("newItem",newItem)
      }
    }
  },
});
export const { addToCart } = cartSlice.actions;
export const { setProducts } = cartSlice.actions;
export default cartSlice.reducer;
