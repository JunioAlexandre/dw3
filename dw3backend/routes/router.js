//-- routes/routes.js $`
const express = require("express");
const routerApp = express.Router();

// const appLogin = require("../apps/login/controller/ctlLogin");

const appAlunos = require("../apps/alunos/controller/ctlAlunos");
const appCursos = require("../apps/cursos/controller/ctlCursos");
const appLogin = require("../apps/login/controller/ctlLogin");

// middleware that is specific to this router
routerApp.use((req, res, next) => {
    next();
});
routerApp.get("/", (req, res) => {
    res.send("Olá mundo!");
});

// helper to safely register routes only when handlers are functions
function safeRegister(method, path, ...handlers) {
    const valid = handlers.filter(h => typeof h === 'function');
    if (valid.length !== handlers.length) {
        console.warn(`Route not registered: ${method.toUpperCase()} ${path} — missing handler`);
        return;
    }
    routerApp[method](path, ...valid);
}

//@ Rotas de Alunos
safeRegister('get', '/getAllAlunos', appAlunos.GetAllAlunos);
safeRegister('get', '/getAlunoByID/:alunoid', appLogin.AutenticaJWT, appAlunos.GetAlunoByID);
safeRegister('post', '/insertAluno', appLogin.AutenticaJWT, appAlunos.InsertAluno);
safeRegister('put', '/updateAluno/:alunoid', appLogin.AutenticaJWT, appAlunos.UpdateAluno);
safeRegister('delete', '/deleteAluno/:alunoid', appLogin.AutenticaJWT, appAlunos.DeleteAluno);

//@ Rotas de Cursos
safeRegister('get', '/getAllCursos', appCursos.GetAllCursos);
safeRegister('get', '/getCursoByID/:cursoid', appCursos.GetCursoByID);
safeRegister('post', '/insertCurso', appCursos.InsertCurso);
safeRegister('put', '/updateCurso/:cursoid', appCursos.UpdateCurso);
safeRegister('delete', '/deleteCurso/:cursoid', appCursos.DeleteCurso);

// Rota Login
routerApp.post("/Login", appLogin.Login);
routerApp.post("/Logout", appLogin.Logout);

module.exports = routerApp;