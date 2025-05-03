const express = require("express");
const router = express.Router();
const actualizarAdminEstado = require("../controllers/actualizarAdminEstado");

// Ruta para que el admin modifique compras
router.patch("/:id", actualizarAdminEstado);

module.exports = router;
        