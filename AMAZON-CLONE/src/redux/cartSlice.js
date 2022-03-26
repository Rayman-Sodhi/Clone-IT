import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    taxPercent: 15,
  },
  reducers: {
    addItem: {
      reducer(state, action) {
        const existItemIndex = state.cart.findIndex(
          (item) => item.productId === action.payload.productId
            );
            
        //could use (JSON.stringify(existItem, null, 2)) to console.log result of state.cart.find
            
        if (existItemIndex >= 0) {
           state.cart[existItemIndex] = {...action.payload, quantity: state.cart[existItemIndex].quantity + 1}
        } else {
          state.cart.push(action.payload);
        }
      },
      prepare(item) {
        return { payload: { ...item, quantity: 1 } };
      },
    },
    updateItemQuantity: (state, action) => {

      const itemIndex = state.cart.findIndex((item) => item.productId === action.payload.productId)
      if (action.payload.quantity > 0) {
                
        if (itemIndex >= 0) {
          state.cart[itemIndex] = {...state.cart[itemIndex], quantity: action.payload.quantity}
        } 
      }
      
    },
    removeItem: (state, action) => {
      state.cart = state.cart.filter((item) => item.productId !== action.payload);
    },
    emptyCart: (state) => {
      state.cart=[]
    }
  },
});

export const { addItem, removeItem , updateItemQuantity, emptyCart} = cartSlice.actions;

export default cartSlice.reducer;
