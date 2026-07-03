const express = require("express");
const encomendaRouter = express.Router();
const encomendaController =
        require("../controllers/encomendaController");

const {
  validateToken,
  validateUser,
} = require("../middlewareAuth/authMiddleware");

encomendaRouter.get(
  //#swagger.tags = ['Encomendas']
  //#swagger.summary = 'getTodasEncomendas'
  "/encomenda",
  encomendaController.getTodasEncomendas,
);
encomendaRouter.get(
  //#swagger.tags = ['Encomendas']
  //#swagger.summary = 'getEncomendaById'
  "/encomenda/:id",
  encomendaController.getEncomendaById,
);
encomendaRouter.put(
  //#swagger.tags = ['Encomendas']
  //#swagger.summary = 'refreshToken'
  "/encomenda/refresh/:id",
  validateUser,
  encomendaController.refreshToken,
);
encomendaRouter.put(
  //#swagger.tags = ['Encomendas']
  //#swagger.summary = 'closeEncomenda'
  "/encomenda/close/:id",
  validateUser,
  encomendaController.closeEncomenda,
);
encomendaRouter.post(
  //#swagger.tags = ['Encomendas']
  //#swagger.summary = 'addEncomenda'
  "/encomenda",
  validateToken,
  encomendaController.addEncomenda,
);
encomendaRouter.delete(
  //#swagger.tags = ['Encomendas']
  //#swagger.summary = 'deleteEncomenda'
  "/encomenda/:id",
  validateUser,
  encomendaController.deleteEncomenda,
);

module.exports = encomendaRouter;
