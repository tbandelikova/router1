import React, { Component } from "react";
import { Header } from "./Header";
import { dataExamples } from "../config";
import "./Examples.css";

class Examples extends Component {
    render() {
        return (
            <>
            <Header />
           <div className="examples conteiner">
               {dataExamples.map((item) => (
                <div className="example">
                    <div className="inner">
                        <h2>{item.title}</h2>
                        <i><a href={item.link} target="_blank" rel="noreferrer">{item.link}</a></i>
                        <hr></hr>
                        <p>{item.about}</p>
                    </div>
                    <div className="inner grid">
                        {item.image.map((i) => (
                            <img src={i} alt={i} />
                            ))
                            }
                    </div>
                </div>
               )
              )}
           </div>
           </> 
        );
    }
}

export default Examples;