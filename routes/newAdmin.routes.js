const express = require("express");
const router = express.Router();
const newAdmin = require("../controllers/newAdminController");

// Ruta para registrar un nuevo administrador
router.post("/", newAdmin);

module.exports = router;
