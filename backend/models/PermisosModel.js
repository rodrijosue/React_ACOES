//Importacion de la conexion de la base de datos
import db from "../database/db.js"

import { DataTypes } from "sequelize";



const PermisosModel = db.define('TBL_MS_PERMISOS',{
    ID_ROL: {type: DataTypes.INTEGER, primaryKey: true},
    ID_OBJETO: {type: DataTypes.STRING},
    PERMISO_INSERCION: {type: DataTypes.BOOLEAN},
    PERMISO_ELIMINACION: {type: DataTypes.BOOLEAN},
    PERMISO_ACTUALIZACION: {type: DataTypes.BOOLEAN},
    PERMISO_CONSULTAR: {type: DataTypes.BOOLEAN},
    CREADO_POR: {type: DataTypes.STRING},
    MODIFICADO_POR: {type: DataTypes.STRING}
})

export default PermisosModel