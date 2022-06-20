import BitacoraModel from "../models/BitacoraModel.js"

//Metodos para el CRUD


//Mostrar todos los registreos
export const getAllBitacora = async (req, res) =>{
    try{
        const Bitacora = await BitacoraModel.findAll()
        res.json(Bitacora)
    } catch (error){
        res.json( {message: error.message})
    }
}