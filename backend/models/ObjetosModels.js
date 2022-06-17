//Importacion de la conexion de la base de datos
import db from "../database/db.js"

import { DataTypes } from "sequelize";



const ObjetosModel = db.define('TBL_MS_OBJETOS',{
    ID_OBJETOS: {type: DataTypes.INTEGER, primaryKey: true},
    OBJETO: {type: DataTypes.STRING},
    DESCRIPCION: {type: DataTypes.STRING},
    TIPO_OBJETO: {type: DataTypes.STRING},
    CREADO_POR: {type: DataTypes.STRING},
    MODIFICADO_POR: {type: DataTypes.STRING}
})

export default ObjetosModel