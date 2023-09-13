import React, { Component } from 'react';
import './About.css';

class About extends Component {
  render() {
    return (
      <div className="container">
        <div className="selfInfo">
          <h2>Experience</h2>
          <table>
            <tbody>
              <tr>
                <td>October 2021 - May 2022 (8 months)</td>
                <td>
                  <span>Algoritmika Coding Bootcamp</span>
                  <p>Junior Frontend Developer</p>
                  <p>
                    The technologies used in educational projects were: HTML,
                    CSS, JS, React, Redux, NodeJS, Express. Created a database
                    in MySQL. Used VSCode, GitHub, Postman, CodeSandbox, Figma
                  </p>
                </td>
              </tr>
              <tr>
                <td>
                  <span>
                    In my recent employment history I work as an accountant.
                  </span>
                </td>
              </tr>
              <tr>
                <td>April 2016 – June 2022</td>
                <td>
                  <span>OOO “MEDVEDEV I K”</span>
                  <p>Chief Accountant</p>
                </td>
              </tr>
              <tr>
                <td>December 2012 – June 2022</td>
                <td>
                  <span>OOO “Massive 21 Vek”</span>
                  <p>Chief Accountant</p>
                </td>
              </tr>
              <tr>
                <td>August 2011 – March 2016</td>
                <td>
                  <span>OOO “MEDVEDEV I K”</span>
                  <p>Accountant</p>
                </td>
              </tr>
            </tbody>
          </table>
          <hr></hr>
          <h2>Education</h2>
          <table>
            <tbody>
              <tr>
                <td>(2003 - 2008)</td>
                <td>
                  <span>Belarusian State Economic University</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default About;
