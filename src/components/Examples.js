import React, { Component } from "react";
import { Header } from "./Header";

class Examples extends Component {
    render() {
        return (
            <>
            <Header />
           <div className="examples conteiner">
               <ul>
                   <li>1</li>
                   <li>2</li>
                   <li>3</li>
               </ul>
           </div>
           </> 
        );
    }
}

export default Examples;