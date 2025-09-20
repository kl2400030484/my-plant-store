import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [], // {id, name, price, qty, img}
  },
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const exists = state.items.find((p) => p.id === item.id);
      if (!exists) {
        state.items.push({ ...item, qty: 1 });
      }
    },
    increase: (state, action) => {
      const product = state.items.find((p) => p.id === action.payload);
      if (product) product.qty += 1;
    },
    decrease: (state, action) => {
      const product = state.items.find((p) => p.id === action.payload);
      if (product && product.qty > 1) {
        product.qty -= 1;
      }
    },
    deleteItem: (state, action) => {
      state.items = state.items.filter((p) => p.id !== action.payload);
    }
  }
});

export const { addToCart, increase, decrease, deleteItem } = cartSlice.actions;
export default cartSlice.reducer;
