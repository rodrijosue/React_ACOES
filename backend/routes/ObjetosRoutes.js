import  express  from "express";
import { getAllObjetos, getObjeto,createObjeto, updateObjeto, deleteObjeto } from "../controllers/ObjetosController.js";

const routerObjetos = express.Router()

//Router de tabla permisos
routerObjetos.get('/', getAllObjetos)
routerObjetos.get('/:ID_OBJETOS', getObjeto)
routerObjetos.post('/', createObjeto)
routerObjetos.put('/:ID_OBJETOS', updateObjeto)
routerObjetos.delete('/:ID_OBJETOS', deleteObjeto)

export default routerObjetos