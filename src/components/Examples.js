import React, { Component } from "react";
import { dataExamples } from "../config";
import "./Examples.css";

class Examples extends Component {
    render() {
        return (
            <>
           <div className="examples conteiner">
               {dataExamples.map((item, index) => (
                <div className="example" key={index}>
                    <div className="inner">
                        <h2>{item.title}</h2>
                        <i><a href={item.link} target="_blank" rel="noreferrer">{item.link}</a></i>
                        <hr></hr>
                        <p>{item.about}</p>
                    </div>
                    <div className="inner grid">
                        {item.image.map((i, index) => (
                            <img src={i} alt={i} key={index} />
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