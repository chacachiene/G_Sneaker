import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  cartTotal: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCart:(state, action) =>{
      state.cart = action.payload;
    },
    addItem: (state, action) => {
      state.cart.push(action.payload);
    },
    removeItem: (state, action) => {
      state.cart = state.cart.filter((item) => item._id !== action.payload);
      return state;
    },
    updateItem: (state, action) => {
      const index = state.cart.findIndex(
        (item) => item._id === action.payload._id
      );
      if (index >= 0) {
        state.cart[index] = action.payload;
        
      }
    },
    setCartTotal: (state, action) => {
      state.cartTotal = action.payload;
    },
  },
});

export const {setCart, addItem, removeItem, updateItem, setCartTotal } =
  cartSlice.actions;
export default cartSlice.reducer;
