import React from "react";
import { Link } from "react-router-dom";

function Home({books, addToCart}){
    return(
        <div>
            <h2>Bookstore</h2>
            <div>
                {books.map((book) => (
                    <div>
                        <h3>{book.title}</h3>
                        <p>By {book.author}</p>
                        <p>${book.price}</p>
                        <Link to={`/product/${book.id}`}>View Details</Link>
                        <button onClick={() => addToCart(book)}>Add to Cart</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Home;