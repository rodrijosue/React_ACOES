import sequelize from "sequelize";

const db = new sequelize('acoes', 'root', '', {
    host:'localhost',
    dialect: 'mysql'
})

export default db