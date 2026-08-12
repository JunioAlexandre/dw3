//arquivo: routes/routes.js

//@ Importa as bibliotecas e arquivos
const express = require("express");
const routerApp = express.Router();
const appHello = require("../controller/calculadora");

//@ Configura as rotas
routerApp.get("/", appHello.hello);

routerApp.get("/helloUserGet", appHello.helloUserGet);
routerApp.get("/helloUserGet/:nome", appHello.helloUserGet);
routerApp.post("/helloUserPost", appHello.helloUserPost);
routerApp.post("/somar", appHello.somar);
routerApp.post("/subtrair", appHello.subtrair);
routerApp.post("/multiplicar", appHello.multiplicar);
routerApp.post("/dividir", appHello.dividir);

//@ Exporta a variável com as rotas
module.exports = routerApp;