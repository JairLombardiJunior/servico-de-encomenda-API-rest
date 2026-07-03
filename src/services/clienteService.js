const Cliente = require("../model/clienteModel");


class ClienteService {
  async createCliente(name, email, password, endereco) {
    return await Cliente.create(
        { name, email, password, endereco });
  }

  async listAll() {
    return await Cliente.findAll({
      attributes: { exclude: ["password"] },
    });
  }

  async getById(id) {
    const cliente = await Cliente.findByPk(id, {
      attributes: { exclude: ["password"] },
    });
    if (!cliente) throw new Error("Cliente não encontrada");
    return cliente;
  }

  async updateCliente(id, data) {
    const cliente = await Cliente.findByPk(id);

    if (!cliente) throw new Error("Cliente não encontrada");

    await cliente.update(data);

    return cliente;
  }

  async removeCliente(id) {
    return await Cliente.destroy({ where: { id } });
  }
}

module.exports = new ClienteService();
