// redux/cartSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],  // The initial state is an empty array
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setProducts(state, action) {
      // This updates the products state in Redux with the payload (mockData)
      state.products = action.payload;
    },
  },
});

export const { setProducts } = cartSlice.actions;
export default cartSlice.reducer;
