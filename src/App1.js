import React from "react";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Home from "./components/Home";
import Product from "./components/Product";
import About from "./components/About";
import Contact from "./components/Contact";

function App1(){
    return(
        <Router>
            <div>
                <Link to="/">Home</Link>
                <Link to="/product">Product</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
            </div>

            <div>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/product" element={<Product/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                </Routes>
            </div>
        </Router>
    );
}

export default App1;