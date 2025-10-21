import React, {useState} from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components2/Home";
import Product from "./components2/Product";
import Cart from "./components2/Cart";
import Checkout from "./components2/Checkout";

function App2(){
    const [cart, setCart] = useState([]);

    const books = [
      { id: 1, title: "Clean Code", price: 499, author: "Robert C. Martin" },
      { id: 2, title: "The Pragmatic Programmer", price: 599, author: "Andrew Hunt" },
      { id: 3, title: "JavaScript: The Good Parts", price: 399, author: "Douglas Crockford" },
    ];

    const addToCart = (book) => {
        setCart((prev) => {
            const existing = prev.find((item) => item.id === book.id);

            if(existing){
                return prev.map((item) => item.id === book.id ? {...item, qty: item.qty + 1} : item);
            } else {
                return [...prev, {...book, qty: 1}];
            }
        });
    };

    return(
        <Router>
            <div>
                <Link to={"/"}>Home</Link>
                <Link to={"/cart"}>Cart</Link>
                <Link to={"/checkout"}>Checkout</Link>
            </div>

            <div>
                <Routes>
                    <Route path="/" element={<Home books={books} addToCart={addToCart}/>}/>
                    <Route path="/product/:id" element={<Product books={books} addToCart={addToCart}/>}/>
                    <Route path="/cart" element={<Cart cart={cart}/>}/>
                    <Route path="/checkout" element={<Checkout cart={cart}/>}/>
                </Routes>
            </div>
        </Router>
    );
}

export default App2;