//Importacion de la conexion de la base de datos
import db from "../database/db.js"

import { DataTypes } from "sequelize";

const RolModel = db.define('tbl_ms_roles',{
    ID_ROL: {type: DataTypes.INTEGER,
    primaryKey: true},
    ROL: {type: DataTypes.STRING},
    DESCRIPCION: {type: DataTypes.STRING},
    CREADO_POR: {type: DataTypes.STRING},
    MODIFICADO_POR: {type: DataTypes.STRING}
})

export default RolModel