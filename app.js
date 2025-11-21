const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Rotas
const autorRoutes = require("./routes/autor");
const livroRoutes = require("./routes/livro");
const dvdRoutes = require("./routes/dvd");
const cdRoutes = require("./routes/cd");

app.use("/autores", autorRoutes);
app.use("/livros", livroRoutes);
app.use("/dvds", dvdRoutes);
app.use("/cds", cdRoutes);

// Conexão MongoDB – Você PRECISA trocar por um MongoDB Atlas
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB conectado"))
  .catch((err) => console.log("Erro MongoDB:", err));

// Exportar app para Vercel
module.exports = app;

