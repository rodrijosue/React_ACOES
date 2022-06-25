import React from "react";

import LoginForm from "./components/LoginForm";
import Aside from "./components/Aside";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Roles from '../src/components/roles/Roles';
import Bitacora from "./components/bitacora/Bitacora";
import Preguntas from "./components/preguntas/Preguntas";

import ModalRoles from "./components/roles/ModalRoles";
import ModalRolesU from "./components/roles/ModalRolesU";




function App() {
  return (

    <BrowserRouter>
    <Routes>

      <Route path='/' element={<LoginForm/>}/>

    

    </Routes>
  </BrowserRouter>
  )
}

export default App;
