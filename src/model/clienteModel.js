const { DataTypes } = require("sequelize");
const sequelize = require("../database");

const Cliente = sequelize.define(
  "tbl_clientes",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING, allowNull: false
    },
    email: {
      type: DataTypes.STRING, allowNull: false
    },
    password: {
      type: DataTypes.STRING, allowNull: false
    },
    endereco: {
      type: DataTypes.STRING, allowNull: false
    }
  },
  {
    timestamps: false
  }
);

module.exports = Cliente;
