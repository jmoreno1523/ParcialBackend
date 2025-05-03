const express = require("express");
const router = express.Router();
const actualizarUser = require("../controllers/actualizarUserController");

// Ruta para actualizar datos de usuario
router.put("/", actualizarUser);

module.exports = router;
