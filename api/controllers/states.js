const State = require("../models/states");
const db = require("../database/db");

const getAll = async (req, res) => {
  try {
    const states = await State.findAll();
    res.status(200).json(states);
  } catch (err) {
    res.json(err);
  }
};

const getByid = async (req, res) => {
  try {
    const id = req.params.id;
    const state = await State.findOne({ where: { id: id } });

    if (!state) {
      res.status(404).json({ erro: "Não encontrado" });
    } else {
      res.status(200).json(state);
    }
  } catch (err) {
    if (err) {
      res.send({ error });
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
    console.log(err);
    res.status(400).json(err);
  }
};

const updateState = async (req, res) => {
  try {
    const data = req.body;
    const id = req.params.id;
    const state = await State.findOne({ where: { id: id } });
    console.log(state);
    console.log(data);
    if (state) {
      //existe
      if (Object.keys(data).length != 0) {
        await State.update(data, { where: { id } });
        res.status(200).json({ msg: "Estado atualizado com sucesso." });
      } else {
        res.json({ msg: "Sem dados para atualizar." });
      }
    } else {
      res.json({ msg: "Estado não encontrado" });
    }
  } catch (err) {
    res.json(err);
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
      res.json({ msg: "Não encontrado." });
    }
  } catch (err) {
    res.json(err);
  }
};

module.exports = {
  getAll,
  getByid,
  createState,
  updateState,
  deleteState,
};
