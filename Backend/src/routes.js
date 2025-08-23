require("dotenv").config();
const express = require("express");
const routes = express.Router();
const {
  authVerify,
  authRegister,
  authLogin,
  authLogout,
} = require("./controllers/authController");
const { getUser, checkTokenUser } = require("./controllers/userController");


// Open Route
routes.get("/", (req, res) => {
  res.status(200).json({ msg: "Bem vindo a API!" });
});

routes.post("/auth/verify", authVerify);
routes.post("/auth/register", authRegister);
routes.post("/auth/login", authLogin);
routes.post("/auth/logout", authLogout);

routes.get("/api/getUser", authenticateToken, getUser);
routes.get("/user/:id", checkToken, checkTokenUser);

module.exports = routes;
