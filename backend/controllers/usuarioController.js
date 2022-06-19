import UsersModel from "../models/UsersModel.js"
import bcrypt from "bcrypt"
//Metodos para el CRUD


//Mostrar todos los registreos
export const getAllUser = async (req, res) =>{
    try{
        const users = await UsersModel.findAll()
        res.json(users)
    } catch (error){
        res.status(400).json( {message: error.message})
    }
}
//mosatrar un registro
export const getUser = async (req,res) => {
    try {
        const user = await UsersModel.findAll({
           where:{ ID_USUARIO:req.params.ID_USUARIO } 
        })
        res.json(user[0])
    } catch (error) {
        res.json( {message: error.message})
    }
}
//create user
    // export const createUser = async(req,res) =>{
    //    try {
    //         await UsersModel.create(req.body)
    //         res.json({
    //             "message":"Registro creado"
    //         })
    //    } catch (error) {
    //         res.json( {message: error.message})
    //    } 
    // } 

    export const createUser = async(req,res) =>{
        try {
            const {
                ID_USUARIO,
                USUARIO,
                NOMBRE_USUARIO,
                ESTADO_USUARIO,
                CONTRASENA,
                ID_ROL,
                FECHA_ULTIMA_CONEXION,
                PREGUNTAS_CONTESTADAS,
                PRIMER_INGRESO,
                FECHA_VENCIMIENTO,
                CORREO_ELECTRONICO,
                CREADO_POR,
                MODIFICADO_POR            
            } = req.body
            const passwordHash = await bcrypt.hash(CONTRASENA, 10)
                        
            await UsersModel.create({
                ID_USUARIO,
                USUARIO,
                NOMBRE_USUARIO,
                ESTADO_USUARIO,
                CONTRASENA: passwordHash,
                ID_ROL,
                FECHA_ULTIMA_CONEXION,
                PREGUNTAS_CONTESTADAS,
                PRIMER_INGRESO,
                FECHA_VENCIMIENTO,
                CORREO_ELECTRONICO,
                CREADO_POR,
                MODIFICADO_POR
            })
            res.json({
                "message":"Registro creado"
            })
       } catch (error) {
            res.json( {message: error.message})
       } 
    }     
    