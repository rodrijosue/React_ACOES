import db from "../database/db.js"

import { DataTypes } from "sequelize";

const tabla = 'tbl_ms_usuarios'

const UsersModel = db.define(tabla,{
    ID_USUARIO: {type: DataTypes.INTEGER, primaryKey: true},
    USUARIO: {type: DataTypes.STRING},
    NOMBRE_USUARIO: {type: DataTypes.STRING},
    ESTADO_USUARIO: {type: DataTypes.STRING}, 
    CONTRASENA: {type: DataTypes.STRING},
    ID_ROL: {type: DataTypes.INTEGER}, 						
    FECHA_ULTIMA_CONEXION: {type: DataTypes.DATE},
    PREGUNTAS_CONTESTADAS: {type: DataTypes.INTEGER},
    PRIMER_INGRESO: {type: DataTypes.INTEGER},	
    FECHA_VENCIMIENTO: {type: DataTypes.DATE},	
    CORREO_ELECTRONICO: {type: DataTypes.STRING},	
    CREADO_POR: {type: DataTypes.STRING},	
    MODIFICADO_POR: {type: DataTypes.STRING}	 	
})

export default UsersModel