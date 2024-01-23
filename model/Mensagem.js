const { DataTypes } = require("sequelize");
const db = require("../database/db");

const Mensagem = db.define("msg", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    nome: {
        type: DataTypes.STRING
    },

    email: {
        type: DataTypes.STRING
    },

    mensagem: {
        type: DataTypes.TEXT
    }, 
},{
  timestamps: false
});

Mensagem.sync({ force: false });

module.exports = Mensagem;