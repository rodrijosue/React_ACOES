import React, { useEffect } from 'react'
import '../../css/Modal.css'
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

//Importacion del servidor
const URI = `http://localhost:8000/tbl_ms_roles/`;

const ModalRolesU = ({ isOpen, closeModal, id}) => {
    const [ROL, setROL] = useState('')
    const [DESCRIPCION, setDESCRIPCION] = useState('')
    const navigate = useNavigate()
    
    const handleModalDialogClick = (e) => {
        e.stopPropagation();
    }

    const update = async (e) => {
        e.preventDefault()
        await axios.put(URI+id, {ROL: ROL, DESCRIPCION: DESCRIPCION})
        navigate('/')
    }

    //hook para actualizar
    useEffect( ()=>{
        getRolById()
    },[])

    //definicion de getRolById para hacer referencia al id del rol a modificar
    const getRolById = async () =>{
        const res = await axios.get(URI+id)
        setROL(res.data.ROL)
        setDESCRIPCION(res.data.DESCRIPCION)
    }
    return (
        
        <div className={`modal ${isOpen && 'modal-open'}`} onClick={closeModal}>
            <div className="modal-dialog modal-lg"  onClick={handleModalDialogClick}>
            
                <form onSubmit={update}>
                    <div className="modal-content dimen-modal">
                        <div className="modal-header">
                        <h5 className="modal-title">Editar Rol</h5>
                        </div>
                        <div className="modal-body">
                        <form>
                            <div className="form-group row">
                            <label htmlFor="colFormLabelSm" className="col-lg-2 col-form-label col-form-label-sm">Id Rol</label>
                            <div className="col-sm-10">
                                <input type="id" className="form-control form-control-sm mb-3" id="colFormLabelSm" 
                                />
                            </div>
                            </div>
                            <div className="form-group row">
                            <label htmlFor="colFormLabelSm" className="col-lg-2 col-form-label col-form-label-sm">Rol</label>
                            <div className="col-sm-10">
                                <input type="rol" className="form-control form-control-sm mb-3" id="colFormLabelSm" placeholder="Nombre del rol" 
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
                            <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" />
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                Insertar Informacion
                            </label>
                            </div>
                            <div className="form-check">
                            <input className="form-check-input" type="checkbox" defaultValue id="flexCheckChecked" />
                            <label className="form-check-label" htmlFor="flexCheckChecked">
                                Eliminar Informacion
                            </label>
                            </div>
                            <div className="form-check">
                            <input className="form-check-input" type="checkbox" defaultValue id="flexCheckChecked" />
                            <label className="form-check-label" htmlFor="flexCheckChecked">
                                Actualizar Informacion
                            </label>
                            </div>
                            <div className="form-check">
                            <input className="form-check-input" type="checkbox" defaultValue id="flexCheckChecked" />
                            <label className="form-check-label" htmlFor="flexCheckChecked">
                                Consultar Informacion
                            </label>
                            </div>
                            <button type="button" className="btn btn-success col-4">Guardar</button>
                        </form>
                        </div>
                        <div className="modal-footer">
                        
                        <button type="submit" className="btn btn-warning" >Editar Rol</button>
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

export default ModalRolesU