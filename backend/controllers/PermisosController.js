import PermisosModel from "../models/PermisosModel.js"

//Metodos para el CRUD


//Mostrar todos los registreos
export const getAllPermisos = async (req, res) =>{
    try{
        const permisos = await PermisosModel.findAll()
        res.json(permisos)
    } catch (error){
        res.json( {message: error.message})
    }
}
//mosatrar un registro
export const getPermiso = async (req,res) => {
    try {
        const rol = await PermisosModel.findAll({
           where:{ ID_ROL:req.params.ID_ROL } 
        })
        res.json(rol[0])
    } catch (error) {
        res.json( {message: error.message})
    }
}
//crear egistro
    export const createPermiso = async(req,res) =>{
       try {
            await PermisosModel.create(req.body)
            res.json({
                "message":"Registro creado"
            })
       } catch (error) {
            res.json( {message: error.message})
       } 
    } 
//actualziar un rtegistro
    export const updatePermiso = async(req,res) => {
        try {
            await PermisosModel.update(req.body, {
                where: {ID_ROL: req.params.ID_ROL}
            })
            res.json({
                "message":"Registro actualizado"
            })
        } catch (error) {
            res.json( {message: error.message})
        }
    }
//eliminar registros
    export  const deletePermiso = async (req,res) => {
        try {
            await PermisosModel.destroy({
                where: {ID_ROL: req.params.ID_ROL}
            })
            res.json({
                "message":"Registro eliminado"
            })
        } catch (error) {
            res.json( {message: error.message})
        }
    } 