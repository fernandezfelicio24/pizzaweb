import React from "react";
import MultiplePizzas from "../assets/multiplePizzas.jpeg";
import '../styles/About.css';

    function About() {
    return (
        <div className="about">
        <div
            className="aboutTop"
            style={{ backgroundImage: `url(${MultiplePizzas})` }}
        ></div>
        <div className="aboutBottom">
            <h1> ABOUT US</h1>
            <p>
            Ami Nia Pizza Lokaliza iha Atsabe, Distrito Ermera nebe identiku ho
            klima nebe Malirin ho Kafe nia morin, Ami fiar katak ami nia konsumidor 
            sira bele enjoy ami nia pizza. Come and See !
            </p>
        </div>
        </div>
    );
    }

    export default About;