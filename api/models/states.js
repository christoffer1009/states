const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../database/db");

const States = sequelize.define(
  "States",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      unique: true,
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { is: /^[a-zA-Z\s]*$/, not: /^\s*$/ },
    },
    regiao: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { is: /^[a-zA-Z\s]*$/, not: /^\s*$/ },
    },
    capital: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { is: /^[a-zA-Z\s]*$/, not: /^\s*$/ },
    },
    populacao: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: { isInt: true },
    },
    area: {
      type: DataTypes.FLOAT,
      allowNull: false,
      validate: { isFloat: true },
    },
  },
  {
    freezeTableName: true,
    tableName: "states",
  }
);

module.exports = States;
