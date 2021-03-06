//Importacion de la conexion de la base de datos
import db from "../database/db.js"

import { DataTypes } from "sequelize";
const tabla = 'tbl_ms_roles';

const RolModel = db.define(tabla,{
    ID_ROL: {type: DataTypes.INTEGER,
    primaryKey: true},
    ROL: {type: DataTypes.STRING},
    DESCRIPCION: {type: DataTypes.STRING},
    CREADO_POR: {type: DataTypes.STRING},
    MODIFICADO_POR: {type: DataTypes.STRING}
})

export default RolModel