import React from "react";
import Aside from "./components/Aside";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Roles from '../src/components/roles/Roles';


function App() {
  return (
    <>
      
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Roles/>}/>
        </Routes>
      </BrowserRouter>
    </>
    
  );
}

export default App;
