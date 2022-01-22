import { CartActionTypes } from "./CartType";

const {TOGGLE_CART_HIDDEN} = CartActionTypes

export const toggleCartHidden = () => ({
    type: TOGGLE_CART_HIDDEN
})