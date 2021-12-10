import React, { useState } from "react";
import Login from "./Login";
import Register from "./Register";

// importando estilos
import "./styles/login-register.css"

const LogReg = () => {

    const [log, setLog] = useState(false);
    const [reg, setReg] = useState(true);

    function handleChange (){
        if (log === false) 
        {
            setLog(true);
            setReg(false);
        }
        else
        {
            setLog(false);
            setReg(true);
        }
        console.log(`${log} + ${reg}`) 
    }

    return(
        <div className="login-register">
            <h1>¡Registrate!</h1>
            <h3>Así podras interactuar con la comunidad!</h3>
            <div className="container">
                <Register data={reg}/>
                <Login data={log}/>
            </div>
            <button onClick={handleChange}>¡Cambiar!</button>
        </div>
    )
}

export default LogReg;