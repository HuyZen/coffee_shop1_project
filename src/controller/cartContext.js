import { useContext, useReducer, createContext, useEffect } from "react";
import CartReducer from "./cartReducer";

const CartContext = createContext();

const getCartFromLocalStorage = () => {
    let newDataCart = localStorage.getItem("coffeeShopCart");
    if (newDataCart === [] || newDataCart === null) {
        return [];
    } else {
        return JSON.parse(newDataCart);
    }
}

const initialState = {
    cart: getCartFromLocalStorage(),
  }

export const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(CartReducer, initialState);

    const addToCart = (product, quantity) => {
        dispatch({ type: "ADD_TO_CART", payload: {product, quantity} });
    }

    const removeItem = (id) => {
        dispatch({ type: "REMOVE_ITEM", payload: id });
    }

    const clearALLItems = () => {
        dispatch({ type: "CLEAR_CART" });
    }

    //to add the data in the local storage
    useEffect(() => {
        localStorage.setItem("coffeeShopCart", JSON.stringify(state.cart))
    }, [state.cart]);
    
    return (
        <CartContext.Provider value={{ ...state, addToCart, removeItem, clearALLItems }}>
            {children}
        </CartContext.Provider>
    )
}

export const useCartContext = () => {
    return useContext(CartContext);
}