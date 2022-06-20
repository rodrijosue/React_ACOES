import express from "express";
import cors from 'cors'
import bodyParser from 'body-parser'
//importer de conexion a bd
import db from "./database/db.js";

//importar las rutas
import rolRoutes from './routes/routes.js'
import usuario from './routes/usuario.js'
import login from './routes/login.js'
import routerObjetos from './routes/ObjetosRoutes.js'
import permisosRoutes from './routes/PermisosRoutes.js'
import bitacoraRoutes from './routes/bitacoraRoutes.js'

const app = express()
app.use(cors())
app.use(express.json())

app.use(bodyParser.json())
app.use(express.urlencoded({extended:true}))
//use con la tabla ms_roles (registrar las rutas)
app.use('/tbl_ms_roles', rolRoutes)
app.use('/usuario', usuario)
app.use('/login', login)
app.use('/TBL_MS_PERMISOS', permisosRoutes)
app.use('/objetos',routerObjetos)
app.use('/bitacora',bitacoraRoutes)
try {
   await db.authenticate()
   console.log('Conexion exitosa')
} catch (error) {
    console.log(`El error es: ${error}`)
}

app.listen(8000, ()=>{
    console.log('server UP running in http://localhost:8000/')
})