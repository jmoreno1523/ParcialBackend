// routes/compras.routes.js
const express = require("express");
const { obtenerHistorial, actualizarEstado } = require("../controllers/comprasController");

const router = express.Router();

// 📌 Ruta para obtener el historial de compras
router.get("/historial", obtenerHistorial);


module.exports = router;
