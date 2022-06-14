import express from "express";
import cors from 'cors'
//importer de conexion a bd
import db from "./database/db.js";

import rolRoutes from './routes/routes.js'

const app = express()
app.use(cors())
app.use(express.json())
//use con la tabla ms_roles
app.use('/tbl_ms_roles', rolRoutes)

try {
   await db.authenticate()
   console.log('Conexion exitosa')
} catch (error) {
    console.log(`El error es: ${error}`)
}

app.listen(8000, ()=>{
    console.log('server UP running in http://localhost:8000/')
})