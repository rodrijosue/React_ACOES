import React, { useEffect } from 'react'
import '../../css/Modal.css'
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

//Importacion del servidor
//URL Roles
const URL_R = `http://localhost:8000/tbl_ms_roles/`;
//URL Permisos
const URL_P = "http://localhost:8000/TBL_MS_PERMISOS/";

const ModalRolesU = () => {
    const [ROL, setROL] = useState('')
    const [DESCRIPCION, setDESCRIPCION] = useState('')
    const [ID_ROL, setID_ROL] = useState('')
    const [PERMISO_INSERCION, setPERMISO_INSERCION] = useState('')
    const [PERMISO_ELIMINACION, setPERMISO_ELIMINACION] = useState('')
    const [PERMISO_ACTUALIZACION, setPERMISO_ACTUALIZACION] = useState('')
    const [PERMISO_CONSULTAR, setPERMISO_CONSULTAR] = useState('')
    const navigate = useNavigate()
    const {id} = useParams()
    

    const update = async (e) => {
        e.preventDefault()
        await axios.put(URL_R+id, {ROL: ROL, DESCRIPCION: DESCRIPCION})
        await axios.put(URL_P+id, {PERMISO_INSERCION: PERMISO_INSERCION, PERMISO_ELIMINACION: PERMISO_ELIMINACION, PERMISO_ACTUALIZACION:PERMISO_ACTUALIZACION, PERMISO_CONSULTAR:PERMISO_CONSULTAR})
        navigate(`/`)
    }
    
    //hook para actualizar
    useEffect( ()=>{
        getRolById()
    },[])

    //definicion de getRolById para hacer referencia al id del rol a modificar
    const getRolById = async () =>{
        const resR = await axios.get(URL_R+id)
        setID_ROL(resR.data.ID_ROL)
        setROL(resR.data.ROL)
        setDESCRIPCION(resR.data.DESCRIPCION)
        const resP = await axios.get(URL_P+id)
        setID_ROL(resP.data.ID_ROL)
        setPERMISO_INSERCION(resP.data.PERMISO_INSERCION)
        setPERMISO_ELIMINACION(resP.data.PERMISO_ELIMINACION)
        setPERMISO_ACTUALIZACION(resP.data.PERMISO_ACTUALIZACION)
        setPERMISO_CONSULTAR(resP.data.PERMISO_CONSULTAR)  
    }
    
    

    return (

        <div className="container-custom">
            <div>
            
                <form  onSubmit={update}>
                    <div>
                        <div className="modal-header">
                        <h5 className="modal-title">Editar Rol</h5>
                        </div>
                        <div className="">
                        <form>
                        <div className="form-group row">
                            <label htmlFor="colFormLabelSm" className="col-lg-2 col-form-label col-form-label-sm">ID Rol</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control form-control-sm mb-3" id="colFormLabelSm" disabled
                                    value={ID_ROL}
                                />
                            </div>
                            </div>
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
                                    <tr>
                                        <td></td>
                                        <td>
                                            <div className="form-check">
                                            <input  className="form-check-input" type="checkbox"  id="flexCheckDefault" 
                                                checked={PERMISO_INSERCION}
                                                onChange={ (e)=> setPERMISO_INSERCION(e.target.checked)}
                                            />
                                            </div>
                                        </td>
                                        <td>
                                            <div className="form-check">
                                            <input className="form-check-input" type="checkbox"  id="flexCheckChecked" 
                                                checked={PERMISO_ELIMINACION}
                                                onChange={ (e)=> setPERMISO_ELIMINACION(e.target.checked)}
                                            />
                                            </div>
                                        </td>
                                        <td>
                                            <div className="form-check">
                                            <input className="form-check-input" type="checkbox"  id="flexCheckDefault" 
                                                checked={PERMISO_ACTUALIZACION}
                                                onChange={ (e)=> setPERMISO_ACTUALIZACION(e.target.checked)}
                                            />
                                            </div>
                                        </td>
                                        <td>
                                            <div className="form-check">
                                            <input className="form-check-input" type="checkbox"  id="flexCheckChecked" 
                                                checked={PERMISO_CONSULTAR}
                                                onChange={ (e)=> setPERMISO_CONSULTAR(e.target.checked)}
                                            />
                                            
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </form>
                        </div>
                        <div className="modal-footer">
                        
                        <button type="submit" className="btn btn-warning" >Editar Rol</button>
                        </div>
                    </div>
                </form>
        </div>
        </div>
    )
}

export default ModalRolesU