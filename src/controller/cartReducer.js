
const cartReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            let { product, quantity } = action.payload;
            console.log(product);
            return {
                ...state,
                cart: [...state.cart, action.payload]
            }
        case "REMOVE_ITEM":
            return {
                ...state,
                cart: state.cart.filter((item) => item.id !== action.payload)
            }
        default:
            return state;
    }
}

export default cartReducer;