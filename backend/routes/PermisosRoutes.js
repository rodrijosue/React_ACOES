import  express  from "express";
import { getAllPermisos, getPermiso, createPermiso, updatePermiso, deletePermiso } from "../controllers/PermisosController.js";

const routerPermisos = express.Router()

//Router de tabla permisos
routerPermisos.get('/', getAllPermisos)
routerPermisos.get('/:ID_OBJETOS', getPermiso)
routerPermisos.post('/', createPermiso)
routerPermisos.put('/:ID_OBJETOS', updatePermiso)
routerPermisos.delete('/:ID_OBJETOS', deletePermiso)

export default routerPermisos