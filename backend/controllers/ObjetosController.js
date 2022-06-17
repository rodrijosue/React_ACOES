import ObjetosModel from "../models/ObjetosModels"

//Metodos para el CRUD


//Mostrar todos los registreos
export const getAllObjetos = async (req, res) =>{
    try{
        const objetos = await ObjetosModel.findAll()
        res.json(objetos)
    } catch (error){
        res.json( {message: error.message})
    }
}
//mosatrar un registro
export const getObjeto = async (req,res) => {
    try {
        const objeto = await ObjetosModel.findAll({
           where:{ ID_OBJETOS:req.params.ID_OBJETOS } 
        })
        res.json(objeto[0])
    } catch (error) {
        res.json( {message: error.message})
    }
}
//crear egistro
    export const createObjeto = async(req,res) =>{
       try {
            await ObjetosModel.create(req.body)
            res.json({
                "message":"Registro creado"
            })
       } catch (error) {
            res.json( {message: error.message})
       } 
    } 
//actualziar un rtegistro
    export const updateObjeto = async(req,res) => {
        try {
            await ObjetosModel.update(req.body, {
                where: {ID_OBJETOS: req.params.ID_OBJETOS}
            })
            res.json({
                "message":"Registro actualizado"
            })
        } catch (error) {
            res.json( {message: error.message})
        }
    }
//eliminar registros
    export  const deleteObjeto = async (req,res) => {
        try {
            await ObjetosModel.destroy({
                where: {ID_OBJETOS: req.params.ID_OBJETOS}
            })
            res.json({
                "message":"Registro eliminado"
            })
        } catch (error) {
            res.json( {message: error.message})
        }
    } 