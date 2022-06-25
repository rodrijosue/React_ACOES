import React, { useEffect, useState } from "react";

import LoginForm from "./components/LoginForm";
import Aside from "./components/Aside";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Roles from '../src/components/roles/Roles';
import Bitacora from "./components/bitacora/Bitacora";
import Preguntas from "./components/preguntas/Preguntas";

import ModalRoles from "./components/roles/ModalRoles";
import ModalRolesU from "./components/roles/ModalRolesU";




function App() {
  const [isLogged, setisLogged] = useState(false)

  useEffect(()=>{
    const getToken = window.localStorage.getItem('UserSession')
    if(getToken){
      setisLogged(true)
    }
  },[])

  return (

    <BrowserRouter>
    <Routes>

      <Route path='/' element={isLogged ? (<Navigate to='/content'/>) : (<LoginForm setisLogged={setisLogged}/>)}/>
      <Route path='/content' element={isLogged ? ( <Content/>) : (<Navigate to='/'/>)}/>

    

    </Routes>
  </BrowserRouter>
  )
}



// import { UserContextProvider } from "./context/UserContext";
// import Pages from "./routes"

// const App = () => {
//   return(
//     <UserContextProvider>
//       <Pages/>
//     </UserContextProvider>
//   )
// }

export default App;
