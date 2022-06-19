import  express  from "express";
import { getAllUser, createUser, getUser} from "../controllers/usuarioController.js";

const router = express.Router()

router.get('/', getAllUser)
router.get('/:ID_USUARIO', getUser)
router.post('/', createUser)


export default router