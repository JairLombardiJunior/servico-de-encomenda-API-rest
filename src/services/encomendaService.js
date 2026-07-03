const Encomenda = require("../model/encomendaModel");
const crypto = require("crypto");

class encomendaService {
  generateToken() {
    return crypto
      .randomBytes(Math.ceil(8 / 2))
      .toString("hex")
      .slice(0, 8);
  }

  async createEncomenda(host) {
    const encomenda = await Encomenda.create({
      token: this.generateToken(),
      host,
    });

    return encomenda;
  }

  async listAll() {
    return await Encomenda.findAll();
  }

  async getById(id) {
    const encomenda = await Encomenda.findByPk(id);

    if (!encomenda) throw new Error("Sessão não encontrada");

    return encomenda;
  }

  async refreshToken(id) {
    const encomenda = await Encomenda.findByPk(id);

    if (!encomenda) throw new Error("Sessão não encontrada");

    encomenda.token = this.generateToken();

    await encomenda.save();

    return encomenda;
  }

  async closeEncomenda(id) {
    const encomenda = await Encomenda.findByPk(id);

    if (!encomenda) throw new Error("Sessão não encontrada");

    encomenda.expires = new Date();

    await encomenda.save();

    return encomenda;
  }

  async removeEncomenda(id) {
    const deleted = await Encomenda.destroy({
      where: { id },
    });

    if (!deleted) throw new Error("Sessão não encontrada");

    return deleted;
  }
}

module.exports = new encomendaService();
