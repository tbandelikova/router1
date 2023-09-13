import React, { Component } from 'react';
import { dataExamples } from '../../data';
import './Examples.css';

class Examples extends Component {
  handleClick = (e) => {
    e.target.classList.toggle('closer');
    e.target.style.cursor = e.target.classList.contains('closer')
      ? 'zoom-out'
      : 'zoom-in';
  };

  render() {
    return (
      <div className="container">
        <div className="examples">
          {dataExamples.map((item, index) => (
            <div className="example" key={index}>
              <div className="inner">
                <h2>{item.title}</h2>
                <i>
                  <a href={item.link} target="_blank" rel="noreferrer">
                    {item.link}
                  </a>
                </i>
                <hr></hr>
                <p>{item.about}</p>
              </div>
              <div className="inner grid">
                {item.image.map((i, index) => (
                  <img src={i} alt={i} key={index} onClick={this.handleClick} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Examples;
