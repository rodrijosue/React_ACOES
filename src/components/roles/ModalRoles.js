import React from 'react'
import '../../css/Modal.css'
import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


//Importacion del servidor
const URL_R = "http://localhost:8000/tbl_ms_roles/";
const URL_P = "http://localhost:8000/TBL_MS_PERMISOS/"

const ModalRoles = ({ isOpen, closeModal}) => {
    const [ROL, setROL] = useState('')
    const [DESCRIPCION, setDESCRIPCION] = useState('')
    const [PERMISO_INSERCION, setPERMISO_INSERCION] = useState('')
    const [PERMISO_ELIMINACION, setPERMISO_ELIMINACION] = useState('')
    const [PERMISO_ACTUALIZACION, setPERMISO_ACTUALIZACION] = useState('')
    const [PERMISO_CONSULTAR, setPERMISO_CONSULTAR] = useState('')
    const navigate = useNavigate()
    const handleModalDialogClick = (e) => {
        e.stopPropagation();
    }

    const store = async (e) => {
        e.preventDefault()
        await axios.post(URL_R, {ROL: ROL, DESCRIPCION: DESCRIPCION})       
        await axios.post(URL_P, {PERMISO_INSERCION: PERMISO_INSERCION, PERMISO_ELIMINACION: PERMISO_ELIMINACION, PERMISO_ACTUALIZACION:PERMISO_ACTUALIZACION, PERMISO_CONSULTAR:PERMISO_CONSULTAR})
        navigate('/')
    }
    
    //handlecheckbox para medir el estado del checkbox
    
    
    return (

        <div className={`modal ${isOpen && 'modal-open'}`} onClick={closeModal}>
            <div className="modal-dialog modal-lg"  onClick={handleModalDialogClick}>
            
                <form  onSubmit={store}>
                    <div className="modal-content dimen-modal">
                        <div className="modal-header">
                        <h5 className="modal-title">Nuevo Rol</h5>
                        </div>
                        <div className="modal-body">
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
                            <h6>Pantalla</h6>
                            <select id="inputState" className="form-control">
                            <option selected />
                            <option>Personas</option>
                            <option>Planilla</option>
                            <option>Inventario</option>
                            <option>Compras</option>
                            <option>Seguimiento</option>
                            <option>Reportes</option>
                            <option>Seguridad</option>
                            </select>
                            <div className="form-check">
                            <input  className="form-check-input" type="checkbox" defaultValue="0" id="flexCheckDefault" 
                                value={PERMISO_INSERCION}
                                    onChange={ (e)=> setPERMISO_INSERCION(e.target.checked)}
                            />
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                Insertar Informacion
                            </label>
                            </div>
                            <div className="form-check">
                            <input className="form-check-input" type="checkbox" defaultValue="0" id="flexCheckChecked" 
                                value={PERMISO_ELIMINACION}
                                    onChange={ (e)=> setPERMISO_ELIMINACION(e.target.checked)}
                            />
                            <label className="form-check-label" htmlFor="flexCheckChecked">
                                Eliminar Informacion
                            </label>
                            </div>
                            <div className="form-check">
                            <input className="form-check-input" type="checkbox" defaultValue="0" id="flexCheckChecked" 
                                value={PERMISO_ACTUALIZACION}
                                    onChange={ (e)=> setPERMISO_ACTUALIZACION(e.target.checked)}
                            />
                            <label className="form-check-label" htmlFor="flexCheckChecked">
                                Actualizar Informacion
                            </label>
                            </div>
                            <div className="form-check">
                            <input className="form-check-input" type="checkbox" defaultValue="0" id="flexCheckChecked" 
                                value={PERMISO_CONSULTAR}
                                    onChange={ (e)=> setPERMISO_CONSULTAR(e.target.checked)}
                            />
                            <label className="form-check-label" htmlFor="flexCheckChecked">
                                Consultar Informacion
                            </label>
                            </div>
                            <button type="button" className="btn btn-success col-4">Guardar</button>
                        </form>
                        </div>
                        <div className="modal-footer">
                        
                        <button type="submit" className="btn btn-success" >Agregar Rol</button>
                        <button type="button" className="btn btn-danger" data-bs-dismiss="modal" onClick={closeModal}>
                        Cerrar
                        </button>
                        </div>
                    </div>
                </form>
        </div>
        </div>
    )
}

export default ModalRoles