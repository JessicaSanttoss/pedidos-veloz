const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Serviço de Estoque rodando 📦");
});

app.listen(3000, () => {
  console.log("Estoque rodando na porta 3000");
});
