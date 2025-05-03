const express = require("express");
const router = express.Router();
const login = require("../controllers/loginController");

// Ruta para autenticar usuarios
router.post("/", login);

module.exports = router;
