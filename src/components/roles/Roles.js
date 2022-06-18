import "bootstrap/dist/css/bootstrap.min.css";
import "../../css/Roles.css"
import ModalRoles from "../../components/roles/ModalRoles";
import useModal from "../../hooks/useModal.js";
import ModalRolesU from "./ModalRolesU.js";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";



//Importacion del servidor
const URL_R = "http://localhost:8000/tbl_ms_roles/";

const Roles = () => {
  const [roles, setRoles] = useState([]);
  useEffect(() => {
    getRoles();
  }, []);

  //Procediemitno para mostrar todos los roles
  const getRoles = async () => {
    const res = await axios.get(URL_R);
    setRoles(res.data);
  };
  //Procedimiento para elimnar
  const deleteRol = async (ID_ROL) => {
    axios.delete(`${URL_R}${ID_ROL}`);
    getRoles();
  };
  
  

  
  return (
    <div>
      <h1>Roles</h1>
      <hr></hr>
      <h4>Lista de roles</h4>
      <Link to="/CrearRol" className="btn btn-success btn-add-rol" >
        Agregar Rol
      </Link>
      <div className="container">
        <table className="table table-striped table-bordered table-rol">
          <thead>
            <tr>
              <th>Id</th>
              <th>Rol</th>
              <th>Descripcion</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {roles.map((rol) => (
              <tr key={rol.ID_ROL}>
                <td>{rol.ID_ROL}</td>
                <td> {rol.ROL} </td>
                <td> {rol.DESCRIPCION} </td>
                <td>
                <Link to={`/EditarRol/${rol.ID_ROL}`} className='btn btn-warning' >Editar</Link>
                  <button
                    type="submit"
                    onClick={() => deleteRol(rol.ID_ROL)}
                    className="btn btn-danger"
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      
    </div>
  );
};

export default Roles;
