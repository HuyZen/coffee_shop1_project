import { useContext, useReducer, createContext } from "react";
import cartReducer from "./cartReducer";

const CartContext = createContext();

const initialState = {
    cart: [],
    total_item: "",
    total_amount: "",
    total_price: "",
  }

const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, initialState);

    const addToCart = (product, quantity) => {
        dispatch({ type: "ADD_TO_CART", payload: {product, quantity} });
    }
    const removeItem = (id) => {
        dispatch({ type: "REMOVE_ITEM", payload: id });
    }
    return (
        <CartContext.Provider value={{ ...state, addToCart, removeItem }}>
            {children}
        </CartContext.Provider>
    )
}

export const useCartContext = () => {
    return useContext(CartContext);
}

export default CartProvider;