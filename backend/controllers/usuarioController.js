import UsersModel from "../models/UsersModel.js"

//Metodos para el CRUD


//Mostrar todos los registreos
export const getAllUser = async (req, res) =>{
    try{
        const roles = await UsersModel.findAll()
        res.json(roles)
    } catch (error){
        res.status(400).json( {message: error.message})
    }
}
//mosatrar un registro
export const getUser = async (req,res) => {
    try {
        const rol = await UsersModel.findAll({
           where:{ ID_ROL:req.params.ID_ROL } 
        })
        res.json(rol[0])
    } catch (error) {
        res.json( {message: error.message})
    }
}
//crear egistro
    export const createUser = async(req,res) =>{
       try {
            await UsersModel.create(req.body)
            res.json({
                "message":"Registro creado"
            })
       } catch (error) {
            res.json( {message: error.message})
       } 
    } 
