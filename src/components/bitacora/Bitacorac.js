import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";


const URL_R = "http://localhost:8000/bitacora/";

const Bitacorac = () => {
  const [bitacora, setBitacora] = useState([]);
  useEffect(() => {
    getBitacora();
  }, []);

  //Procediemitno para mostrar todos los roles
  const getBitacora = async () => {
    const res = await axios.get(URL_R);
    setBitacora(res.data);
  };
  


  return (
    <div className="content-wrapper">
  {/* Content Header (Page header) */}
  <section className="content-header">
    <div className="container-fluid">
      <div className="row mb-2">
        <div className="col-sm-6">
          <h1>Bitacora</h1>
        </div>
        
      </div>
    </div>{/* /.container-fluid */}
  </section>
  {/* Main content */}
  <section className="content">
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-body">
              <table id="example1" className="table table-bordered table-striped">
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Fecha</th>
                    <th>Id Usuario</th>
                    <th>Id Objeto</th>
                    <th>Accion</th>
                    <th>Descripcion</th>
                  </tr>
                </thead>
                <tbody>
                {bitacora.map((bitacora) => (
              <tr key={bitacora.ID_BITACORA}>
                <td>{bitacora.ID_BITACORA}</td>
                <td>{bitacora.createdAt}</td>
                <td> {bitacora.ID_USUARIO} </td>
                <td> {bitacora.ID_OBJETO} </td>
                <td> {bitacora.ACCION} </td>
                <td> {bitacora.DESCRIPCION} </td>
               
              </tr>
            ))}
                </tbody>
                <tfoot>
                  <tr>
                  <th>Id</th>
                    <th>Fecha</th>
                    <th>Id Usuario</th>
                    <th>Id Objeto</th>
                    <th>Accion</th>
                    <th>Descripcion</th>
                  </tr>
                </tfoot>
              </table>
            </div>
            {/* /.card-body */}
          </div>
          {/* /.card */}
        </div>
        {/* /.col */}
      </div>
      {/* /.row */}
    </div>
    {/* /.container-fluid */}
  </section>
  {/* /.content */}
</div>

  )
}
export default Bitacorac