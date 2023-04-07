
const CartReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            let { product, quantity } = action.payload;
            console.log({ product, quantity });
            let cartProduct = {
                id: product.id,
                name: product.name,
                price: product.priceSale * quantity,
                img: product.img,
                quantity: quantity,
            }
            return {
                ...state,
                cart: [...state.cart, cartProduct]
            }
        case "REMOVE_ITEM":
            let updateCart = state.cart.filter((item) => item.id !== action.payload)
            return {
                ...state,
                cart: updateCart
            }
        default:
            return state;
    }
}

export default CartReducer;