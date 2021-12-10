// importando componentes
import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "./AuthMethods";

const Login = ( { data } ) => {

    const [log, setLog] = useState();


    const verifyAndRed = useNavigate();
    const { logIn } = useAuth();

    const handleChange = (e) => {
        const value = e.target.value
        const property = e.target.name;
        setLog({ ...log, [property]: value})
    }


    const sendDataLogin = async (e) => {
        e.preventDefault();
        try
        {
            await logIn(log.correo, log.contra);
            verifyAndRed("/allpost")
        }
        catch(e)
        {
            console.error(e)
        }
    }

    return(
        <section className="credentials login" style={(data) ? {"transform": "rotateY(0deg)"} : {"transform": "rotateY(90deg)"}}>
            <form onSubmit={sendDataLogin}>
                <label>
                    Nombre de usuario
                    <input type="email" name="correo" placeholder="Correo" onChange={handleChange}/>
                </label>
                <label>
                    Contraseña
                    <input type="password" name="contra" placeholder="Contraseña" onChange={handleChange}/>
                </label>
                <button> Entrar! </button>
            </form>
        </section>
    );
}

export default Login;