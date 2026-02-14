const express = require("express");
const axios = require("axios");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API Gateway rodando 🚀");
});

app.get("/pedidos", async (req, res) => {
  const response = await axios.get("http://pedidos:3000");
  res.send(response.data);
});

app.get("/pagamentos", async (req, res) => {
  const response = await axios.get("http://pagamentos:3000");
  res.send(response.data);
});

app.get("/estoque", async (req, res) => {
  const response = await axios.get("http://estoque:3000");
  res.send(response.data);
});

app.listen(3000, () => {
  console.log("API Gateway rodando na porta 3000");
});
