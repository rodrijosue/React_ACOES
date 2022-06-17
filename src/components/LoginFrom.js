import React from "react"
import logo from "../logo.jpg"
import { useState } from "react"

const LoginForm = () => {
  document.title = "ACOES - Inicio de sesión"

  const [body, setBody] = useState({usuario: '', contrasena: ''})
  const inputChange = ({target})=>{
    const {name, value} = target
    setBody({
      ...body,
      [name]: value
    })
  }

  //enviar los datos
  const onSubmit = () =>{
    console.log(body)
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

            <div className="input-group mb-3">
              <input type="email" className="form-control" placeholder="Email" value={body.usuario} onChange={inputChange} name="usuario" required />
              <div className="input-group-append">
                <div className="input-group-text">
                  <span className="fas fa-envelope"></span>
                </div>
              </div>
            </div>

            <div className="input-group mb-3">
              <input type="password" className="form-control" placeholder="Password" value={body.contrasena} onChange={inputChange} name="contrasena" />
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