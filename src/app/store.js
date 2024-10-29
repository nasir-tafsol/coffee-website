import { configureStore } from "@reduxjs/toolkit";
import productReducers from "../features/product/productSlice";

export const store = configureStore({
  reducer: productReducers,
});
