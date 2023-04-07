import { useContext, useReducer, createContext } from "react";
import CartReducer from "./cartReducer";

const CartContext = createContext();

const initialState = {
    cart: [],
    total_item: "",
    total_amount: "",
    total_price: "",
  }

export const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(CartReducer, initialState);

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