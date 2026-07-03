const jwt = require("jsonwebtoken");
const encomendaService = require("../services/encomendaService");

function validateUser(req, res, next) {
  const authHeader = req.headers["authorization"] || "";
  const token = authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({ error: "Token não disponibilizado" });
  }

  jwt.verify(token, process.env.JWT_KEY, async (err, decoded) => {
    if (err) {
      return res.status(403).json({ error: "token invalido" });
    }

    try {
      const encomenda = await encomendaService.getById(req.params.id);

      if (encomenda.host !== decoded.id) {
        return res
          .status(403)
          .json({ error: "Provided user has no permission" });
      }
    } catch (error) {
      return res.status(404).json({ error: "Encomenda not found" });
    }

    next();
  });
}

function validateToken(req, res, next) {
  const authHeader = req.headers["authorization"] || "";

  const token = authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({ error: "Token não disponibilizado" });
  }

  jwt.verify(token, process.env.JWT_KEY, (err, decoded) => {
    if (err) {
      return res.status(403).json({ error: "token invalido" });
    }

    req.userId = decoded.id;
    next();
  });
}

module.exports = { validateToken, validateUser };
