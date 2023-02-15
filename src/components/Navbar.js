import React from "react";
import CartWidget from "./CartWidget";
import '../components-stylesheets/Navbar.css';
import { Link } from "react-router-dom";

const Navbar = () =>{
    return (
        <nav>
            <p className="brand">Mundo Otaku</p>
            <ul>
                <Link></Link>
            </ul>
            <CartWidget />
        </nav>
    )
}

export default Navbar;