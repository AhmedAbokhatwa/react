// redux/cartSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],  // The initial state is an empty array
  totalPrice :0,
  total_qty:0
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setProducts(state, action) {
      // This updates the products state in Redux with the payload (mockData)
      state.products = action.payload;
    },
    addToCart(state,action){
      let newItem = action.payload
      let itemIndex = state.products.find((item)=> item.id === newItem.id)
      if (itemIndex){
        itemIndex.qty++;
        itemIndex.totalPrice += newItem.price ;
      }else{
        state.products.push({
          id:newItem.id,
          name:newItem.name,
          price:newItem.price,
          qty:1,
          totalPrice:newItem.price,
          Image:newItem.image
        })
      }
      state.totalPrice += newItem.price;
      state.total_qty++; 
    }
  },
});
export const { addToCart } = cartSlice.actions;
export const { setProducts } = cartSlice.actions;
export default cartSlice.reducer;
