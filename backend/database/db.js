import sequelize from "sequelize";

const db = new sequelize('acoes', 'root', 'root', {
    host:'localhost',
    dialect: 'mysql'
})

export default db