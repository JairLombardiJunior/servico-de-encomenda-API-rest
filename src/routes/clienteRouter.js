const express = require("express");
const clienteRouter = express.Router();
const clienteController = require("../controllers/clienteController");

clienteRouter.get(
  /*
    #swagger.tags = ['clientes']
    #swagger.summary = 'getTodosClientes'
  */
  "/cliente",
  clienteController.getTodosClientes,
);
clienteRouter.get(
  //#swagger.tags = ['clientes']
  //#swagger.summary = 'getClienteById'
  "/cliente/:id",
  clienteController.getClienteById,
);
clienteRouter.post(
  //#swagger.tags = ['clientes']
  //#swagger.summary = 'addCliente'
  "/cliente",
  clienteController.addCliente,
);
clienteRouter.put(
  //#swagger.tags = ['clientes']
  //#swagger.summary = 'updateCliente'
  "/cliente/:id",
  clienteController.updateCliente,
);
clienteRouter.delete(
  //#swagger.tags = ['clientes']
  //#swagger.summary = 'deleteCliente'
  "/cliente/:id",
  clienteController.deleteCliente,
);

module.exports = clienteRouter;
