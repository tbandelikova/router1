import React, { Component } from "react";
import { Header } from "./Header";
import "./Contacts.css";

class Contacts extends Component {
    render() {
        return (
            <>
            <Header />
           <div className="contacts conteiner">
            <h2>Contacts</h2>
               <ul>
                   <li>phone +375 (44) 5970340</li>
                   <li>e-mail:  tat.bandelikova@gmail.com</li>
                   <li>https://www.linkedin.com/in/tatsiana-bandelikova/</li>
                   <li>https://github.com/tbandelikova</li>
                </ul>
           </div>
           </> 
        );
    }
}

export default Contacts;