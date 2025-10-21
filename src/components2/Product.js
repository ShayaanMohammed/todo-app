import React from "react";
import { useParams } from "react-router-dom";

function Product({books, addToCart}){
    const {id} = useParams();
    const book = books.find((b) => b.id === parseInt(id));

    if(!book) return <h2>Book not found!</h2>

    return(
        <div>
            <h2>{book.title}</h2>
            <p>Author: {book.author}</p>
            <p>Price: {book.price}</p>
            <button onClick={() => addToCart(book)}>Add to Cart</button>
        </div>
    );
}

export default Product;