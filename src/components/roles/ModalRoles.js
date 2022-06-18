import React, { useEffect } from 'react'
import '../../css/Modal.css'
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'



//Importacion del servidor
const URL_R = "http://localhost:8000/tbl_ms_roles/";
const URL_P = "http://localhost:8000/TBL_MS_PERMISOS/";
const URL_O = "http://localhost:8000/objetos/";

const ModalRoles = () => {
    const [ROL, setROL] = useState('')
    const [DESCRIPCION, setDESCRIPCION] = useState('')
    const [PERMISO_INSERCION, setPERMISO_INSERCION] = useState('')
    const [PERMISO_ELIMINACION, setPERMISO_ELIMINACION] = useState('')
    const [PERMISO_ACTUALIZACION, setPERMISO_ACTUALIZACION] = useState('')
    const [PERMISO_CONSULTAR, setPERMISO_CONSULTAR] = useState('')
    const [ID_OBJETO, setID_OBJETO] = useState('')
    const navigate = useNavigate()
    const [Objetos, setObjetos] = useState([]);

    const store = async (e) => {
        e.preventDefault()
        await axios.post(URL_R, {ROL: ROL, DESCRIPCION: DESCRIPCION})       
        await axios.post(URL_P, {PERMISO_INSERCION: PERMISO_INSERCION, PERMISO_ELIMINACION: PERMISO_ELIMINACION, PERMISO_ACTUALIZACION:PERMISO_ACTUALIZACION, PERMISO_CONSULTAR:PERMISO_CONSULTAR})
        navigate('/')
    }
    useEffect(() => {
        getObjetos();
      }, []);
    const getObjetos = async () => {
        const res = await axios.get(URL_O);
        setObjetos(res.data);
      };
    //handlecheckbox para medir el estado del checkbox
    
    
    return (

        <div className="container-custom">
            <div>
            
                <form  onSubmit={store}>
                    <div>
                        <div className="modal-header">
                        <h5 className="modal-title">Nuevo Rol</h5>
                        </div>
                        <div className="">
                        <form>
                            <div className="form-group row">
                                <label htmlFor="colFormLabelSm" className="col-lg-2 col-form-label col-form-label-sm">Rol</label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control form-control-sm mb-3" id="colFormLabelSm" placeholder="Nombre del rol" 
                                        value={ROL}
                                        onChange={ (e)=> setROL(e.target.value)}
                                    />
                                </div>
                                </div>
                                <div className="form-group row">
                                <label htmlFor="colFormLabelSm" className="col-sm-2 col-form-label col-form-label-sm">Descripción</label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control form-control-sm mb-3" id="colFormLabelSm" placeholder="Descripcion del rol" 
                                        value={DESCRIPCION}
                                        onChange={ (e)=> setDESCRIPCION(e.target.value)}
                                    />
                                </div>
                            </div>
                        </form>
                        <hr />
                        <form>
                            <div className="modal-header">
                            <h5 className="modal-title">Acciones que puede realizar en el modulo</h5>
                            </div>
                            <table className="table table-striped table-bordered ">
                                <thead>
                                    <tr>
                                        <th>Objeto</th>
                                        <th>Insertar</th>
                                        <th>Eliminar</th>
                                        <th>Actualizar</th>
                                        <th>Consultar</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {Objetos.map((objeto) => (
                                    <tr key={objeto.ID_OBJETOS}>
                                        <td> {objeto.OBJETO}</td>
                                        <td>
                                            <div className="form-check">
                                            <input  className="form-check-input" type="checkbox"  id="flexCheckDefault" 
                                                
                                                onChange={ (e)=> setPERMISO_INSERCION(e.target.checked)}
                                            />
                                            </div>
                                        </td>
                                        <td>
                                            <div className="form-check">
                                            <input className="form-check-input" type="checkbox"  id="flexCheckChecked" 
                                                
                                                onChange={ (e)=> setPERMISO_ELIMINACION(e.target.checked)}
                                            />
                                            </div>
                                        </td>
                                        <td>
                                            <div className="form-check">
                                            <input className="form-check-input" type="checkbox"  id="flexCheckDefault" 
                                                
                                                onChange={ (e)=> setPERMISO_ACTUALIZACION(e.target.checked)}
                                            />
                                            </div>
                                        </td>
                                        <td>
                                            <div className="form-check">
                                            <input className="form-check-input" type="checkbox"  id="flexCheckChecked" 
                                                
                                                onChange={ (e)=> setPERMISO_CONSULTAR(e.target.checked)}
                                            />
                                            
                                            </div>
                                        </td>
                                    </tr>
                                    ))}
                                </tbody>
                            </table>
                        </form>
                        </div>
                        <div className="modal-footer">
                        
                        <button type="submit" className="btn btn-success" >Agregar Rol</button>
                        </div>
                    </div>
                </form>
        </div>
        </div>
    )
}

export default ModalRoles