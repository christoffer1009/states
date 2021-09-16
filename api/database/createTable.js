const States = require("../models/states");

States.sync()
  .then(() => console.log("Tabela criada com sucesso"))
  .catch(console.log());
