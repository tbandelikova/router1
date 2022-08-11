import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import {logoURL} from "../config.js";
import "./Header.css";

export function Header() {
    const [matches, setMatches] = useState(
        window.matchMedia("(min-width: 320px) and (max-width: 768px)").matches
      );
    const [isOpen, setIsOpen] = useState(false);  

    useEffect(() => {
    window
    .matchMedia("(min-width: 320px) and (max-width: 768px)")
    .addEventListener('change', e => setMatches( e.matches ));
    }, []);

       
    const menuToggle = () => {
        setIsOpen(!isOpen);
        document.body.classList.toggle('no-scroll');
    }

    return (
        <div className="navbar">
            <div className="navbar-logo"
                onClick={matches && menuToggle} >
                <img src={logoURL} alt="logo" />
            </div>
            {!matches && 
                    <div className="navbar-menu">
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/contacts">Contacts</Link></li>
                            <li><Link to="/examples">Examples</Link></li>
                        </ul>
                    </div>
            }  
            {isOpen && 
                    <div className="navbar-menu-mobile">
                        <ul onClick={menuToggle}>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/contacts">Contacts</Link></li>
                            <li><Link to="/examples">Examples</Link></li>
                        </ul>
                    </div>
            } 
  
        </div>
    )
}