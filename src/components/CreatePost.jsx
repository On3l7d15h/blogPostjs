import React, { useEffect, useState } from "react";
import firebase from "../Database/firebase.js"
// importando estilos
import "./styles/createpost.css"

const CreatePost = () => {
    
    const [Post, setPost] = useState({});
    
    const handleChange = (e) => {
        const value = e.target.value
        const property = e.target.name;
        setPost({ ...Post, [property]: value})
        console.log(Post)
    }

    const savePost = () => {

        const database = firebase.database();
        const postsRef = database.ref("/posts")
        fetch("https://console.firebase.google.com/u/0/project/blog-reactjs-70049/database/blog-reactjs-70049-default-rtdb/data/~2F?hl=es", 
        {
            method: "post",
            data: JSON.stringify(Post)
        })

        postsRef.push()
    }

    useEffect(() => {
        const database = firebase.database();
        const postsRef = database.ref("/posts")
    
        postsRef.on("value", snapshot => {
            console.log(snapshot.val())
        })  
      }, [])    
    
    return(
        <div className="createpost">
            <form onSubmit={savePost}>
                <h1> Nuevo Post! </h1>
                <label>
                    Titulo del Post!
                    <input type="text" name="title" placeholder="Título..." onChange={handleChange} />
                </label>
                <label>
                    Añadir Imágen al Post
                    <input type="text" name="img" placeholder="ruta de imágen!" onChange={handleChange}/>
                </label>
                <label>
                    Descripción del Post!
                    <textarea name="desc" placeholder="Aquí descripción" onChange={handleChange}>
                    </textarea>
                </label>
                <button>Subir Post!</button>
            </form>
        </div>
    )
}

export default CreatePost;