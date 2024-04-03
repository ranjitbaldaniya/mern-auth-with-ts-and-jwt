// cartSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk } from "../store";
import axios from "axios";

interface CartItem {
  productId: string;
  quantity: number;
}

interface CartState {
  items: CartItem[];
  loading: boolean;
  error: string | null;
}

const initialState: CartState = {
  items: [],
  loading: false,
  error: null,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    getCartStart(state) {
      state.loading = true;
      state.error = null;
    },
    getCartSuccess(state, action: PayloadAction<CartItem[]>) {
      state.loading = false;
      state.items = action.payload;
    },
    getCartFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    addToCart(state, action: PayloadAction<CartItem>) {
      state.items.push(action.payload);
    },
    removeFromCart(state, action: PayloadAction<string>) {
      state.items = state.items.filter(item => item.productId !== action.payload);
    },
    clearCart(state) {
      state.items = [];
    },
  },
});

export const { getCartStart, getCartSuccess, getCartFailure, addToCart, removeFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;

// Async action creator to fetch cart data
export const fetchCartData = (userId: string): AppThunk => async dispatch => {
  dispatch(getCartStart());
  try {
    const response = await axios.get(`http://localhost:3001/cart/${userId}`);
    dispatch(getCartSuccess(response.data.items));
  } catch (error : any) {
    dispatch(getCartFailure(error.message));
  }
};

// Async action creator to add item to cart
export const addItemToCart = (item: CartItem): AppThunk => async dispatch => {
  try {
    // Make a POST request to add item to cart in the backend
    await axios.post(`http://localhost:3001/cart/add`, item);
    dispatch(addToCart(item));
  } catch (error) {
    console.error("Error adding item to cart:", error);
  }
};

// Async action creator to remove item from cart
export const removeItemFromCart = (productId: string): AppThunk => async dispatch => {
  try {
    // Make a DELETE request to remove item from cart in the backend
    await axios.delete(`http://localhost:3001/cart/remove/${productId}`);
    dispatch(removeFromCart(productId));
  } catch (error) {
    console.error("Error removing item from cart:", error);
  }
};
