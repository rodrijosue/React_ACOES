import bcrypt, { compare } from "bcrypt"
import UsersModel from "../models/UsersModel.js"


export const login = async(req,res) =>{
    try {
        const {email, password} = req.body

       const user = await UsersModel.findOne({where: {CORREO_ELECTRONICO: email}})
        console.log(user)
       
       if(!user){
           res.status(404)
           res.send({error: 'User not found'})
        }

        const checkPassword = await bcrypt.compare(password, )

    //     if(checkPassword){
    //         res.send({
    //             data: user
    //         })
    //         return
    //     }
         
        //  else{
        //     res.status(400).json({
        //         "message":"Email o contraseña invalidos"
        //     })
        //  }
    } catch (error) {
         res.json( {message: error.message})
    } 
 }
