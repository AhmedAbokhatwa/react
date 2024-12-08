
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [], // Assuming `mockData` is an array
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.items = action.payload;
    },
  },
});

export const { setProducts } = productSlice.actions;
export default productSlice.reducer;
