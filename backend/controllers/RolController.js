import RolModel from "../models/RolModel.js"

//Metodos para el CRUD


//Mostrar todos los registreos
export const getAllRoles = async (req, res) =>{
    try{
        const roles = await RolModel.findAll()
        res.json(roles)
    } catch (error){
        res.json( {message: error.message})
    }
}
//mosatrar un registro
export const getRol = async (req,res) => {
    try {
        const rol = await RolModel.findAll({
           where:{ ID_ROL:req.params.ID_ROL } 
        })
        res.json(rol[0])
    } catch (error) {
        res.json( {message: error.message})
    }
}
//crear egistro
    export const createRol = async(req,res) =>{
       try {
            await RolModel.create(req.body)
            res.json({
                "message":"Registro creado"
            })
       } catch (error) {
            res.json( {message: error.message})
       } 
    } 
//actualziar un rtegistro
    export const updateRol = async(req,res) => {
        try {
            await RolModel.update(req.body, {
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
    export  const deleteRol = async (req,res) => {
        try {
            await RolModel.destroy({
                where: {ID_ROL: req.params.ID_ROL}
            })
            res.json({
                "message":"Registro eliminado"
            })
        } catch (error) {
            res.json( {message: error.message})
        }
    } 