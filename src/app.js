"use strict";

const bodyParser = require("body-parser");
const express = require("express");
const app = express();

require('dotenv').config();

//Carrega as rotas
const index = require("./routes/index.js");
const product = require("./routes/product.js");

app.use(bodyParser.json()); //todo conteudo vai ser convertido para json
app.use(bodyParser.urlencoded({ extended: false })); //codifica as url

app.use("/", index);
app.use("/products", product);

//chamando a conexão do banco de dados
const connection = require('../database/connection.js');

module.exports = app;
