// https://swagger-autogen.github.io/docs/endpoints/

const swaggerAutogen = require("swagger-autogen")
({ openapi: "3.0.0" });

const doc = {
  info: {
    version: "1.0.0",
    title: "jair-encomenda-api",
    description:
      "API para armazenamento de incomendas realziadas por clientes de uma entregadora como amazon, Trabalho da (disciplina de Serviços Web)",
  },
  servers: [
    {
      url: `http://localhost:${process.env.PORT || 3000}`,
      // description: "Local development server",
    },
  ],
};

const outputFile = "./swagger-output.json";
const endpointsFiles = [
  "../routes/clienteRouter.js",
  "../routes/encomendaRouter.js",
  "../routes/authRouter.js",
];

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
  require("../index");
});
