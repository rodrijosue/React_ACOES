import React from "react";
<<<<<<< HEAD
import LoginForm from "./components/LoginFrom";
=======
import Aside from "./components/Aside";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Roles from '../src/components/roles/Roles';
import Bitacora from "./components/bitacora/Bitacora";
import Preguntas from "./components/preguntas/Preguntas";
>>>>>>> ce633960de275f3237d8157398ecd291635f8c7b




function App() {
  return (
<<<<<<< HEAD
    <div>
      <LoginForm/>
    </div>
  )
=======
    <>
      
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Preguntas/>}/>
        
        </Routes>
      </BrowserRouter>
    </>
    
  );
>>>>>>> ce633960de275f3237d8157398ecd291635f8c7b
}

export default App;
