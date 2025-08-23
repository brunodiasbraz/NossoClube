const express = require("express");
const app = express();
require("dotenv").config();
const mongoose = require("mongoose");
const routes = require("./routes");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const host = process.env.HOST || "localhost";
const port = process.env.PORT || 3000;
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASS;

const allowedOrigins = ["*"];

app.use(
  cors({
    origin: function (origin, callback) {
      if (allowedOrigins.includes(origin) || !origin) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
    allowedHeaders: "Origin, X-Requested-With, Content-Type, Accept, x-api-key",
  })
);

app.use(cookieParser());
app.use(express.json());
app.use(routes);

mongoose
  .connect(
    `mongodb+srv://${dbUser}:${dbPassword}@brzcluster.jlgguld.mongodb.net/?retryWrites=true&w=majority&appName=BrzCluster`
  )
  .then(() => {
    app.listen(port, () => {
      console.log(
        `Servidor rodando no host ${host} na porta ${port}. Conectou ao banco!`
      );
    });
  })
  .catch((err) => {
    console.error("Erro ao conectar ao banco de dados:", err);
  });
