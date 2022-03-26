import { createSelector } from "@reduxjs/toolkit";

const selectCart = state => state.cart.cart
const selectTaxPercent = (state) => state.cart.taxPercent;

export const selectCartItems = createSelector(
    selectCart,
    items => {
        return items
    }
);

export const selectCartItemsCount = createSelector(
    selectCartItems,
    cartItems => {   
        if (cartItems)
        {
           return cartItems.reduce((acc, item) => acc + item.quantity, 0)
        }    
        return 0
    }
)

export const selectSubtotal = createSelector(
    selectCartItems,
    cartItems =>  cartItems.reduce((acc, item) => acc + item.quantity * item.price,0 )
)

export const selectTax = createSelector(
    selectSubtotal,
    selectTaxPercent,
    (subtotal, taxPercent) => subtotal * (taxPercent/100)
)

export const selectTotal = createSelector(
    selectSubtotal,
    selectTax,
    (subtotal, tax) => subtotal + tax
)

