const express = require("express");
const sequelize = require("./database/db");
const router = require("./routes/states");

require("dotenv/config");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/api", router);

app.get("/", (req, res) => {
  res.json({ message: "HOME" });
});

try {
  sequelize.authenticate();
  console.log("Conexão estabelecida com sucesso.");
  app.listen(PORT, () => {
    console.log(`API rodando em http://localhost:${PORT}`);
  });
} catch (error) {
  console.error("Não foi possível conectar com o banco de dados", error);
}
