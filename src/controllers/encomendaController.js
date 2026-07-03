const encomendaService = require("../services/encomendaService");

const EncomendaController = {
  async addEncomenda(req, res) {
    try {
      const { host } = req.body;

      const newEncomenda = 
      await encomendaService.createEncomenda(host);

      return res.status(201).json(newEncomenda);
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  },

  async getTodasEncomendas(req, res) {
    try {
      const result = await encomendaService.listAll();

      return res.status(200).json(result);
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  },

  async getEncomendaById(req, res) {
    try {
      const result = await encomendaService.getById(req.params.id);

      return res.status(200).json(result);
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  },

  async refreshToken(req, res) {
    try {
      const result = await encomendaService.refreshToken(req.params.id);

      return res.status(200).json(result);
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  },

  async closeEncomenda(req, res) {
    try {
      const result = await encomendaService.closeEncomenda(req.params.id);

      return res.status(200).json(result);
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  },

  async deleteEncomenda(req, res) {
    try {
      const deleted = await encomendaService.removeEncomenda(req.params.id);

      if (deleted === 0) {
        return res.status(404).json({ error: "Encomenda não encontrada" });
      }

      return res.status(204).send();
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  },
};

module.exports = EncomendaController;
