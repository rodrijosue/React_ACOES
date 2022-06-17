import  express  from "express";
import { getAllRoles, getRol, createRol, updateRol, deleteRol} from "../controllers/RolController.js";

const router = express.Router()

router.get('/', getAllRoles)
router.get('/:ID_ROL', getRol)
router.post('/', createRol)
router.put('/:ID_ROL', updateRol)
router.delete('/:ID_ROL', deleteRol)


export default router