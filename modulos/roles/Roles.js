import "bootstrap/dist/css/bootstrap.min.css";
import "../css/Roles.css"
import ModalRoles from "./ModalRoles.js";
import useModal from "../../hooks/useModal.js";
import ModalRolesU from "./ModalRolesU";
import axios from "axios";
import { useState, useEffect } from "react";


//Importacion del servidor
const URI = "http://localhost:8000/tbl_ms_roles/";

const Roles = () => {
  const [roles, setRoles] = useState([]);
  useEffect(() => {
    getRoles();
  }, []);

  //Procediemitno para mostrar todos los roles
  const getRoles = async () => {
    const res = await axios.get(URI);
    setRoles(res.data);
  };
  //Procedimiento para elimnar
  const deleteRol = async (ID_ROL) => {
    axios.delete(`${URI}${ID_ROL}`);
    getRoles();
  };
  
  

  const [isOpenModalRoles, openModalRoles, closeModalRoles] = useModal(false);
  const [isOpenModalRolesU, openModalRolesU, closeModalRolesU] = useModal(false);
  
  return (
    <div>
      <h1>Roles</h1>
      <hr></hr>
      <h4>Lista de roles</h4>
      <button className="btn btn-success btn-add-rol" onClick={openModalRoles}>
        Agregar Rol
      </button>
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
                <button className='btn btn-warning' onClick={openModalRolesU}>Editar</button>
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

      <ModalRoles isOpen={isOpenModalRoles} closeModal={closeModalRoles} />
      <ModalRolesU isOpen={isOpenModalRolesU} closeModal={closeModalRolesU}/>
    </div>
  );
};

export default Roles;
