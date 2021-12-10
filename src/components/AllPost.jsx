import React from "react";
import { useAuth } from "./AuthMethods";

// importando estilos
import "./styles/all-post.css";

const AllPost = () => {

    const {bloggers, logOut} = useAuth(); 

    return(
        <div className="all-post">
            <h1> Todos Los Post!, {bloggers.email} </h1>
            <br />
            <h3> Aquí podrás ver todos los post hechos por los usuarios, puedes verlos pero no podrás postear sino
                tienes una cuenta o estás autenticado! </h3>
            <div className="post">
            </div>
        </div>
    ); 
}

export default AllPost;