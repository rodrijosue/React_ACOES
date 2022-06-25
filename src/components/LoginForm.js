import React, { useEffect } from "react"
import logo from "../logo.jpg"
import { useState } from "react"
import AlertError from "./AlertError"
import axios from "../config/axios"

const LoginForm = ({setisLogged}) => {
  document.title = "ACOES - Inicio de sesión"

  const [errorMessage, setErrorMessage] = useState("")
  const [body, setBody] = useState({USER: '', PASSWORD: ''})

  //useState
  const inputChange = ({target})=>{
    const {name, value} = target
    setBody({
      ...body,
      [name]: value
    })
  }

  //enviar los datos
  const onSubmit = e => {
    //console.log(body)
    e.preventDefault()

    //validación de formulario
    const {USER, PASSWORD} = body
    if(USER ==="" || PASSWORD ===""){
      setErrorMessage("Introduce un correo y una contraseña")
      setTimeout(() => {
        setErrorMessage("")
      }, 3000);
      return;
    }

    //peticion de inicio de sesion
      axios.post("/login", body)
       .then(res =>{
        const {token} = res.data
        window.localStorage.setItem('UserSession', token)
        setisLogged(true)
       })
       .catch(err =>{
       })

    // loginService(body)
    //   .then(data => {
    //     //local storage
    //     login(data)
    //   })
    //   .catch(err =>{
    //     const {message} = err.response.data
    //     setErrorMessage(message)
    //     document.querySelector('#PASSWORD').value =""
    //     setTimeout(() => {
    //       setErrorMessage("")
    //     }, 3000)
    //   })


  }

  return (
    <div className="container mt-5 shadow p-3 bg-body rounded">
      <div className="row align-items-stretch">
        <div className="col-md-6">
          <img src={logo} className="img-fluid rounded-start" />
        </div>
        <div className="col-md-6">
          <h3 className="fw-bold text-center">Iniciar Sesión</h3>
          <hr />

          <form method="post">

            {errorMessage ? <AlertError message={errorMessage}/> : null}
            <div className="input-group mb-3">
              <input type="email" className="form-control" placeholder="Email" value={body.USER} onChange={inputChange} name="USER" required />
              <div className="input-group-append">
                <div className="input-group-text">
                  <span className="fas fa-envelope"></span>
                </div>
              </div>
            </div>

            <div className="input-group mb-3">
              <input type="password" className="form-control" placeholder="Password" value={body.PASSWORD} onChange={inputChange} name="PASSWORD" />
              <div className="input-group-append">
                <div className="input-group-text">
                  <span className="fas fa-lock" />
                </div>
              </div>

            </div>
            <div className="col-12 mb-2">
              <a className="btn btn-primary" onClick={onSubmit} >
                Iniciar Sesión
              </a>
            </div>
            <div>
              <p>
                <a href="">¿Olvidaste tu contraseña?</a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>


  );
}

export default LoginForm;