const jwt = require("jsonwebtoken");
const Cliente = require("../model/clienteModel");

const authController = {
  async login(req, res) {
    try {
      const { email, password } = req.body;

      const cliente = await Cliente.findOne({ where: { email, password } });
      if (!cliente) {
        return res.status(401).json({ error: "E-mail ou senha inválidos." });
      }
      const payload = {
        id: cliente.id,
        name: cliente.nome,
        email: cliente.email,
      };

      const token = jwt.sign(payload, process.env.JWT_KEY, {
        expiresIn: "120m",
      });

      return res.status(200).json({
        auth: true,
        token: token,
        user: { name: cliente.name, email: cliente.email },
      });
    } catch (err) {
      return res.status(500).json({ error: err });
    }
  },
};

module.exports = authController;
