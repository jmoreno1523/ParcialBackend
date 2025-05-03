const express = require("express");
const router = express.Router();
const nuevaVenta = require("../controllers/nuevaVentaController");

// Ruta para registrar una nueva compra
router.post("/", nuevaVenta);

module.exports = router;
