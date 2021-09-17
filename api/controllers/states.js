const State = require("../models/states");
const db = require("../database/db");
const ApiError = require("../errors/ApiError");
const { ValidationError } = require("sequelize");
const handle = require("../errors/handler");

const getAll = async (req, res) => {
  try {
    const states = await State.findAll();
    res.status(200).json(states);
  } catch (err) {
    res.status(500);
    console.error(err);
  }
};

const getByid = async (req, res) => {
  try {
    const id = req.params.id;
    const state = await State.findOne({ where: { id: id } });

    if (!state) {
      throw new ApiError("Não encontrado", 404);
    }
    res.status(200).json(state);
  } catch (err) {
    if (err instanceof ApiError) {
      res.status(err.statusCode).json({ err });
    } else {
      console.error(err);
    }
  }
};

const createState = async (req, res) => {
  try {
    const state = {
      nome: req.body.nome,
      regiao: req.body.regiao,
      capital: req.body.capital,
      populacao: req.body.populacao,
      area: req.body.area,
    };

    await State.create(state);
    res.status(201).json({ msg: "Estado criado com sucesso." });
  } catch (err) {
    if (err instanceof ValidationError) {
      messages = handle(err);
      res.json(messages);
    } else {
      res.json(err);
    }
  }
};

const updateState = async (req, res) => {
  try {
    const data = req.body;
    const id = req.params.id;
    const state = await State.findOne({ where: { id: id } });

    if (state) {
      if (Object.keys(data).length == 0) {
        throw new ApiError("Sem dados para atualizar", 400);
      } else {
        await State.update(data, { where: { id } });
        res.status(200).json({ msg: "Estado atualizado com sucesso." });
      }
    } else {
      throw new ApiError("Estado não encontrado", 404);
    }
  } catch (err) {
    if (err instanceof ApiError) {
      res.status(err.statusCode).json({ err });
    }

    if (err instanceof ValidationError) {
      messages = handle(err);
      res.json(messages);
    }

    console.error(err);
    res.status(500);
  }
};

const deleteState = async (req, res) => {
  try {
    const id = req.params.id;
    const state = await State.findOne({ where: { id: id } });

    if (state) {
      await State.destroy({ where: { id } });
      res.status(200).json({ msg: "Estado deletado com sucesso." });
    } else {
      throw new ApiError("Estado não encontrado", 404);
    }
  } catch (err) {
    if (err instanceof ApiError) {
      res.status(err.statusCode).json({ err });
    } else {
      console.error(err);
    }
  }
};

module.exports = {
  getAll,
  getByid,
  createState,
  updateState,
  deleteState,
};
