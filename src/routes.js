import { Navigate, Routes } from "react-router-dom"
import LoginForm from "./components/LoginForm"

const Pages = () => {
    //paginas


    return (
        <Routes>
            <Route path='/' element={userLogged ? (<Navigate to='/dashboard'/>) : (<LoginForm/>)}/>

        </Routes>
    )










}

export default Pages