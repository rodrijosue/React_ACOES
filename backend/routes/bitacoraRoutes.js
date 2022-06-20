import  express  from "express";
import { getAllBitacora } from "../controllers/BitacoraController.js";


const bitacoraRoutes = express.Router()

//Router de tabla Roles
bitacoraRoutes.get('/', getAllBitacora)

export default bitacoraRoutes;