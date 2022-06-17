import  express  from "express";
import { getAllRoles, getRol, createRol, updateRol, deleteRol} from "../controllers/RolController.js";

<<<<<<< HEAD
=======


>>>>>>> ce633960de275f3237d8157398ecd291635f8c7b
const router = express.Router()

//Router de tabla Roles
router.get('/', getAllRoles)
router.get('/:ID_ROL', getRol)
router.post('/', createRol)
router.put('/:ID_ROL', updateRol)
router.delete('/:ID_ROL', deleteRol)


<<<<<<< HEAD
=======

>>>>>>> ce633960de275f3237d8157398ecd291635f8c7b
export default router