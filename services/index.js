const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Serviço de Pedidos rodando 🚀");
});

app.listen(3000, () => {
  console.log("Pedidos rodando na porta 3000");
});
