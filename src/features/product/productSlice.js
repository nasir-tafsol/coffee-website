import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  items: [],
  totalAmount: 0,
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { id, title, description, image, price, slug, badge } =
        action.payload;
      const isPrice = Number(price);
      const product = {
        id,
        title,
        description,
        image,
        price: isPrice,
        slug,
        badge,
        quantity: 1,
      };

      let existingProduct = state.items.find((item) => item.id === id);

      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.items.push(product);
      }

      state.totalAmount =
        state.items.reduce((total, item) => total + item.price, 0) + 5;
    },
    removeItem: (state, action) => {
      const id = action.payload;
      const findingItem = state.items.find((item) => item.id === id);

      if (findingItem) {
        state.items = state.items.filter((item) => item.id !== id);
        if (state.items.length > 0) {
          state.totalAmount =
            state.items.reduce((total, item) => total + (item.price * item.quantity), 0) + 5;
        } else {
          state.totalAmount = 0;
        }
      }
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.items.find((item) => item.id === id);

      if (item) {
        item.quantity = quantity;
      }
      state.totalAmount =
        state.items.reduce(
          (total, item) => total + item.price * item.quantity,
          0
        ) + (state.items.length > 0 ? 5 : 0);
    },
  },
});

export const { addToCart, updateQuantity, removeItem } = productSlice.actions;
export default productSlice.reducer;
