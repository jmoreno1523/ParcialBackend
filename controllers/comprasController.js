const Venta = require("../models/Venta");

// 📌 Obtener historial de compras desde MongoDB
const obtenerHistorial = async (req, res) => {
  try {
    const compras = await Venta.find(); // Trae todas las compras de la base de datos
    res.json(compras);
  } catch (error) {
    res.status(500).json({ message: "Error obteniendo el historial de compras", error });
  }
};

module.exports = {obtenerHistorial};

  