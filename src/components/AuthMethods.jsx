import React, { createContext, useContext, useState, useEffect } from 'react';
import { auth } from '../Database/firebase';

const Auth = createContext();

export const useAuth = () => useContext(Auth);

export const MethodAuth = (props) => {

    //estado de Bloggers!
    const [bloggers, setBloggers] = useState({});

    useEffect(() => {
        auth.onAuthStateChanged((blogger) => {
        setBloggers(blogger);
        })
    }, [])

    //funciones para crear, entrar y salir
    const signUp = (user, email, password) => {
        return auth.createUserWithEmailAndPassword(email, password);
    }

    const logIn = (email, password) => {
        return auth.signInWithEmailAndPassword(email, password);
    }

    const logOut = () => auth.signOut();

    const value = { bloggers, logIn, logOut, signUp }

    return (
        <Auth.Provider value={value}>
        {props.children }
        </Auth.Provider>
    )
}