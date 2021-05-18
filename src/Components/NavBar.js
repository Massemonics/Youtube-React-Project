import './NavBar.css'
import React from "react";
import { Link } from 'react-router-dom';


const NavBar = () => {
    return(
        <div className="navbar">
        <nav>
            <p>Youtube</p>  
                {/* I've deleted the {" "}, because has no effect when using CSS, 
                and it's a better practice (I know because I learned from Colin's Code review) */}
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
        </nav>
        </div>
    );
};
export default NavBar;
