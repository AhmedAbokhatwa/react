import { configureStore } from "@reduxjs/toolkit";
import productSlice from './productSlice';
import cartReducer from './cartSlice'; 
const store = configureStore({
    reducer :{
      cart:cartReducer,
      product:productSlice
    }
})
export default store;