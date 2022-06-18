import UserModel from "../models/UsersModel.js"


export const login = async(req,res) =>{
    const {email, password} = req.body

    try {
       const user = await UserModel.findOne({where: {CORREO_ELECTRONICO: email, CONTRASENA: password}})
         console.log(user)

         if(user){

             res.json({
                 "message":"Inicio de sesión exitoso"
             })
         } else{
            res.status(400).json({
                "message":"Email o contraseña invalidos"
            })
         }
    } catch (error) {
         res.json( {message: error.message})
    } 
 } 
