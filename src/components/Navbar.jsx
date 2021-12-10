import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "./AuthMethods";
// importando estilos
import "./styles/nav.css"

const Navbar = () => {
    
    const {logOut} = useAuth();
    const red = useNavigate();

    const exit = async () => {
        try
        {
            await logOut();
            red("/")
        }
        catch(e)
        {
            console.error(e)
        }
    }
    
    return(
        <div className="nav">
            <span> infoBlog </span>
            <section>
                <Link to="/">Inicio</Link>
                <Link to="/createpost">Nuevo Post</Link>
                <Link to="/allPost">Ver Post</Link>
                <Link to="/credentials">Credenciales!</Link>
                <button onClick={exit}>Salir!</button>
            </section>
        </div>
    )
}

export default Navbar;