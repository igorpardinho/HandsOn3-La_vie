const express = require("express");
const  { route }  = require("express/lib/application");
const routes = express.Router();

const homeController = require("../controllers/home");
const AtendimentosController = require("../controllers/atendimentos")
const ControllerPsicologos = require("../controllers/psicologos");
const ControllerPacientes = require("../controllers/pacientes");
const AuthController = require("../controllers/auth");



const loginValidacao = require("../validators/auth/Login/signin");
const CreatePsicologo = require("../validators/auth/Criar-psicologo/StorePsy");



routes.post("/login", loginValidacao, AuthController.signin);

routes.get("/", homeController.home );

routes.get("/psicologos", ControllerPsicologos.index);
routes.post("/psicologos", CreatePsicologo, ControllerPsicologos.store);
routes.get("/psicologos/:id", ControllerPsicologos.show);
routes.put("/psicologos/:id", ControllerPsicologos.update);
routes.delete("/psicologos/:id", ControllerPsicologos.destroy);


routes.get("/pacientes", ControllerPacientes.index);
routes.post("/pacientes", ControllerPacientes.store);
routes.get("/pacientes/:id", ControllerPacientes.show);
routes.put("/pacientes/:id", ControllerPacientes.update);
routes.delete("/pacientes/:id", ControllerPacientes.destroy);


routes.get("/atendimentos", AtendimentosController.index);
routes.post("/atendimentos", AtendimentosController.store);
routes.get("/atendimentos/:id", AtendimentosController.show);

module.exports = routes;