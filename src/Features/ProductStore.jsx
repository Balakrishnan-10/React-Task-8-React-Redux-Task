import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from "./ProductSlice";

const ProductStore = configureStore({
  reducer: {
    Products: ProductReducer,
  },
});

export default ProductStore;
