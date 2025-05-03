const express = require("express");
const router = express.Router();
const actualizarAdmin = require("../controllers/actualizarAdminController");

// Ruta para que el admin modifique compras
router.get("/", actualizarAdmin);

module.exports = router;
        