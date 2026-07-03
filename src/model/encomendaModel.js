const { DataTypes } = require("sequelize");
const sequelize = require("../database");

const Encomenda = sequelize.define(
  "tbl_encomendas",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    token: { type: DataTypes.STRING, unique: true, allowNull: false },
    host: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    descricao: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    created: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    expires: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: () => {
        let now = new Date();
        now.setMonth(now.getMonth() + 3);
        return now;
      },
    },
  },
  {
    timestamps: false,
  },
);

module.exports = Encomenda;