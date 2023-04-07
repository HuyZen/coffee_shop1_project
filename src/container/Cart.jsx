import React from 'react';
import { EmptyCart } from '../components/Cart/EmptyCart';
import { CartList } from '../components/Cart/CartList';
const Cart = () => {
    // const cart = useSelector((state) => state.handleCart)
    
    
    return (
        <div>
            <CartList />
            {/* {
                cart.length === 0 && <EmptyCart />
            }
            {
                cart.length !== 0 && <CartList />
            } */}
        </div>
    );
}

export default Cart;
