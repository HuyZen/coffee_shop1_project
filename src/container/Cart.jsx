import React from 'react';
import { EmptyCart } from '../components/Cart/EmptyCart';
import { CartList } from '../components/Cart/CartList';
import { useCartContext } from '../controller/cartContext';
const Cart = () => {
    const { cart } = useCartContext()
    
    return (
        <div>
            {
                cart.length === 0 && <EmptyCart />
            }
            {
                cart.length !== 0 && <CartList />
            }
        </div>
    );
}

export default Cart;
