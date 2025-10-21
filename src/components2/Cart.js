import React from "react";
import { Link } from "react-router-dom";

function Cart({cart}){
    let total = 0;

    for(let i=0; i<cart.length; i++){
        total += cart[i].price * cart[i].qty;
    }

    return(
        <div>
            <h2>Your Cart</h2>
            {cart.length === 0 ? (
                <p>No books in the cart</p>
            ) : (
                <ul>
                    {cart.map((item) => (
                        <li>
                            {item.title} - Qty: {item.qty} - ${item.price * item.qty}
                        </li>
                    ))}
                </ul>
            )}
            <h3>Total: ${total}</h3>
            <Link to="/checkout">
                <button>Proceed to Checkout</button>
            </Link>
        </div>
    );
}

export default Cart;