import React from "react";
import { Link } from "react-router-dom";

// importando estilos
import "./styles/home.css";
import bg from "./styles/images/background3.jpeg"
import bg2 from "./styles/images/background4.jpeg"

const Home = () => {
    return(
        <div className="home">
            <section className="imgs">
                <div className="img1">
                    <img src={bg} alt="preview"/>
                </div>
                <div className="img2">
                    <img src={bg2} alt="preview"/>
                </div>
            </section>
            <section className="info">
                <h1> Bienvenido a InfoBlog! </h1>
                <h3> Enterate de algunas informaciones interesantes y repliquea temas de interés!, este blog fue desarrollado para hablar de cualquier tema
                    de interés, solo debes registrarte para poder replicar temas!</h3>
                    <br />
                <Link to="/allpost">Ver Posts!</Link>
            </section>
        </div>
    );
}

export default Home;