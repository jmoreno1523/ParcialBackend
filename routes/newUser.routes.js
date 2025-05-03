const express = require("express");
const router = express.Router();
const newUser = require("../controllers/newUserController");

// Ruta para registrar un nuevo usuario
router.post("/", newUser);

module.exports = router;
