require("dotenv").config();

const express = require("express");
const clienteRouter = require("./routes/clienteRouter");
const encomendaRouter = require("./routes/encomendaRouter");
const swaggerUi = require("swagger-ui-express");
const swaggerFile = require("./swagger/swagger-output.json");

const cors = require("cors");
const { SwaggerTheme, SwaggerThemeNameEnum } 
      = require("swagger-themes");
const authRouter = require("./routes/authRouter");

const app = express();
const PORT = process.env.PORT;

app.get('/', (req, res) => {
    res.send('thello teste')
})

app.listen(3000, () => {
    console.log('success')
})

app.use(
  cors({
    origin: `http://localhost:${PORT}`,
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  }),
);

app.use(express.json());
const theme = new SwaggerTheme();

swaggerOptions = {
  explorer: true,
  customCss: theme.getBuffer(SwaggerThemeNameEnum.DRACULA),
};

app.use("/docs", swaggerUi.serve, swaggerUi.setup
          (swaggerFile, swaggerOptions));
app.use("/api", clienteRouter);
app.use("/api", encomendaRouter);
app.use("/api", authRouter);

module.exports = app;



/*
const clientRouter = require("./routes/..");
const encomendaRouter = require("./routes/..");
const swaggerUi = require("swagger-ui-express");
const swaggerFile = require("./swagger/swagger-output.json");

const cors = require("cors");
const { SwaggerTheme, SwaggerThemeNameEnum } = require("swagger-themes");
const authRouter = require("./routes/authRouter");

const PORT = process.env.PORT;

app.use(
  cors({
    origin: `http://localhost:${PORT}`,
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  }),
);

app.use(express.json());

const theme = new SwaggerTheme();

swaggerOptions = {
  explorer: true,
  customCss: theme.getBuffer(SwaggerThemeNameEnum.DRACULA),
};

app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerFile, swaggerOptions));

app.use("/api", clientRouter);
app.use("/api", encomendaRouter);
app.use("/api", authRouter);

module.exports = app;
*/