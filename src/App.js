// importando componentes
import React, {useEffect} from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { MethodAuth } from "./components/AuthMethods";
import AllPost from "./components/AllPost";
import CreatePost from './components/CreatePost';
import Home from "./components/Home"
import Navbar from "./components/Navbar";
import LogReg from "./components/LogReg";

import firebase from "./Database/firebase.js"

// importando estilos
import './components/styles/general.css';

// función principal
function App() {

  useEffect(() => {
    const database = firebase.database();
    const postsRef = database.ref("/posts")

    postsRef.on("value", snapshot => {
        console.log(snapshot.val())
    })  
  }, [])

  return (
    <MethodAuth>
      <Router>
         <Navbar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/createpost" element={<CreatePost />}/>
          <Route path="/allpost" element={<AllPost />}/>
          <Route path="/credentials" element={<LogReg />}/>
        </Routes>
      </Router>
    </MethodAuth>
  );
}

export default App;