//Importacion de la conexion de la base de datos
import db from "../database/db.js"

import { DataTypes } from "sequelize";



const PermisosModel = db.define('TBL_MS_PERMISOS',{
    ID_ROL: {type: DataTypes.INTEGER, primaryKey: true},
    ID_OBJETO: {type: DataTypes.STRING},
    PERMISO_INSERCION: {type: DataTypes.STRING},
    PERMISO_ELIMINACION: {type: DataTypes.STRING},
    PERMISO_ACTUALIZACION: {type: DataTypes.STRING},
    PERMISO_CONSULTAR: {type: DataTypes.STRING},
    CREADO_POR: {type: DataTypes.STRING},
    MODIFICADO_POR: {type: DataTypes.STRING},
})

export default PermisosModel