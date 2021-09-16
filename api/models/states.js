const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../database/db");

const States = sequelize.define(
  "States",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    regiao: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    capital: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    populacao: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    area: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
    tableName: "states",
  }
);

module.exports = States;
