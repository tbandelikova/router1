import React, { Component } from "react";
import "./Mainpage.css";
import { Header } from "../components/Header";
import Pic from "../img/img.png";
import {skills} from "../config";

class Mainpage extends Component {

    render() {

        return (
            <>
                <Header />
                <div className="main conteiner">
                    <div className="main-portreit">
                        <img className="portreit" src={Pic} alt="profile pic" />
                    </div>
                    <div className="main-text">
                        <h1>Tatiana Bandelikova</h1>
                        <p>I'm taking my first steps in <b>Front-End</b>, willing to learn new skills and not afraid to work
                            hard.</p>
                        <p>During my studies in <b>Algoritmika Bootcamp Course</b> I worked with
                                HTML, CSS, JavaScript. Have some experience with React (Redux,
                                Bootstrap), Node.js. (Express), MySQL. Can work with GitHub,
                                VSCode, CodeSandbox, Postman.</p>
                        <p>I will be glad to gain experience in commercial development under the guidance of experienced colleagues. Relocation or remote work is
                            possible.</p>
                        <p>English lvl - B1</p>    
                        <hr></hr>
                        <p>За время обучения в Algoritmika выполняла проекты связанные с вёрсткой HTML, CSS.
                            Работала с React, Node.js., MySQL.
                            Хочу развиваться как фронтенд-разработчик под руководством опытных коллег. Могу работать удалённо, возможен переезд к
                            месту работы.
                            Уровень английского - средний (B1)</p>
                    </div>
                    <div className="main-skills">
                        <h2>Skills</h2>
                        <ul>
                            {skills.map((item) => (
                                <li>{item}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </>
        )
    }
}

export default Mainpage;