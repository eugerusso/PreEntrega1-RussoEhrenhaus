import React from "react";
import CartWidget from "./CartWidget";
import '../components-stylesheets/Navbar.css';

const Navbar = () =>{
    return (
        <nav>
            <p className="brand">Mundo Otaku</p>
            <ul>
                <a href="#" >Manga</a>
                <a href="#" >Figuras</a>
                <a href="#" >Merchandising</a>
            </ul>
            <CartWidget />
        </nav>
    )
}

export default Navbar;