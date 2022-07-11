import React, { Component } from "react";
import { Header } from "./Header";
import "./About.css";

class About extends Component {
    render() {
        return (
            <>
                <Header />
                <div className="selfInfo conteiner">
                    <h2>Experience</h2>
                    <table>
                        <tr>
                            <td>October 2021 - May 2022 (8 months)</td>
                            <td><b>Algoritmika Coding Bootcamp</b>
                            <p>Junior Frontend Developer</p>
                            <p>The technologies used in educational projects were: HTML, CSS, JS, React,
                                Redux, NodeJS, Express. Created a database in MySQL. Used VSCode,
                                GitHub, Postman, CodeSandbox, Figma</p></td>
                        </tr>
                        <tr><b>In my recent employment history I work as an accountant.</b></tr>
                        <tr>
                            <td>April 2016 – June 2022</td>
                            <td><b>OOO “MEDVEDEV I K”</b>
                            <p>Chief Accountant</p></td>
                        </tr>
                        <tr>
                            <td>December 2012 – June 2022</td>
                            <td><b>OOO “Massive 21 Vek”</b>
                            <p>Chief Accountant</p></td>
                        </tr>
                        <tr>
                            <td>August 2011 – March 2016</td>
                            <td><b>OOO “MEDVEDEV I K”</b>
                            <p>Accountant</p></td>
                        </tr>
                    </table>
                    <hr></hr>
                    <h2>Education</h2>
                    <table>
                        <tr>
                            <td>(2003 - 2008)</td>
                            <td><b>Belarusian State Economic University</b></td>
                        </tr>
                    </table>
                </div>
            </>
        );
    }
}

export default About;