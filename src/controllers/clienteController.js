const clienteService = require("../services/clienteService");

const clienteController = {
  async addCliente(req, res) {
    try {
      const { name, email, password, endereco } 
        = req.body;
      const newCliente = 
        await clienteService.createCliente(
        name,
        email,
        password,
        endereco,
      );
      return res.status(201).json(newCliente);
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  },

  async getTodosClientes(req, res) {
    try {
      const result = await clienteService.listAll();
      return res.status(200).json(result);
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  },

  async getClienteById(req, res) {
    try {
      const result = await clienteService.getById(req.params.id);
      return res.status(200).json(result);
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  },

  async updateCliente(req, res) {
    try {
      const result = await clienteService.updateCliente(req.params.id, req.body);
      return res.status(200).json(result);
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  },

  async deleteCliente(req, res) {
    try {
      const deleted = await clienteService.removeCliente(req.params.id);
      if (deleted === 0) {
        return res.status(404).json({ error: "cliente não encontrado" });
      }
      else{
        return res.status(404).json({ error: "cliente removido" });
    }

      return res.status(204).send();
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  },
};

module.exports = clienteController;
