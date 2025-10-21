import React from "react";

function Checkout({cart}){
    let total = 0;

    for(let i=0; i<cart.length; i++){
        total += cart[i].price * cart[i].qty;
    }

    return(
        <div>
            <h2>Invoice</h2>
            <table border={1} cellPadding={8} style={{margin: "auto"}}>
                <thead>
                    <tr>
                        <th>Book Title</th>
                        <th>Quantity</th>
                        <th>Price ($)</th>
                        <th>Total ($)</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map((item)=>(
                        <tr>
                            <td>{item.title}</td>
                            <td>{item.qty}</td>
                            <td>{item.price}</td>
                            <td>{item.price * item.qty}</td>
                        </tr>
                    ))}
                    <tr>
                        <td colSpan="3" style={{ textAlign: "right", fontWeight: "bold" }}>
                          Grand Total
                        </td>
                        <td>${total}</td>
                    </tr>
                </tbody>
            </table>
            <button onClick={()=>window.print()}>Print Invoice</button>
        </div>
    );
}

export default Checkout;