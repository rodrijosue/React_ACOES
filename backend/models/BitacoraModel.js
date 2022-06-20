import db from "../database/db.js"

import { DataTypes } from "sequelize";
const tabla = 'tbl_ms_bitacora';

const BitacoraModel = db.define(tabla,{
    ID_BITACORA: {type: DataTypes.INTEGER,
    primaryKey: true},
    createdAt: {type: DataTypes.DATE},
    ID_USUARIO: {type: DataTypes.STRING},
    ID_OBJETO: {type: DataTypes.INTEGER},
    ACCION: {type: DataTypes.STRING},
    DESCRIPCION: {type: DataTypes.STRING},
})

export default BitacoraModel