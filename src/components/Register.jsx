import React, { useRef, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "./AuthMethods"

const Register = ( {data} ) => {

    const [register, setRegister] = useState({})
    const { signUp } = useAuth();
    const email = useRef()
    const verifyAndRed = useNavigate();
 
    const handleChange = (e) => {
        const value = e.target.value
        const property = e.target.name;
        setRegister({ ...register, [property]: value})
        console.log(register)
    }

    const sendDataRegister = async (e) => {
        e.preventDefault();
        try
        {
            await signUp(register.user, email.current.value, register.contra);
            verifyAndRed("/credentials")
        }
        catch(e)
        {
            console.error(e)
        }
    }

    return(
        <section className="credentials register" style={(data) ? {"transform": "rotateY(0deg)"} : {"transform": "rotateY(90deg)"}}>
            <form onSubmit={sendDataRegister}>
                <label>
                    Nombre de usuario
                    <input type="text" name="user" placeholder="Usuario" onChange={handleChange} />
                </label>
                <label>
                    Correo Electrónico
                    <input type="email" name="correo" placeholder="Correo" ref={email}/>
                </label>
                <label>
                    Contraseña
                    <input type="password" name="contra" placeholder="Contraseña" onChange={handleChange}/>
                </label>
                <label>
                    Confirmar Contraseña
                    <input type="password" placeholder="Confirme la Contraseña" />
                </label>
                <button> Registrarse! </button>
            </form>
        </section>
    );
}

export default Register;