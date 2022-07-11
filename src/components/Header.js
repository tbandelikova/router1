import { Link } from "react-router-dom";
import {logoURL} from "../config.js";
import "./Header.css";

export function Header() {
    return (
        <div className="navbar">
            <div className="navbar-logo">
                <Link to="/">
                    <img src={logoURL} alt="logo" />
                </Link>
            </div>
        <div className="navbar-menu">
        <ul>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contacts">Contacts</Link></li>
            <li><Link to="/examples">Examples</Link></li>
        </ul>
        </div>  
        </div>
    )
}