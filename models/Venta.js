const mongoose = require("mongoose");

const VentaSchema = new mongoose.Schema({
  precio: { type: Number, required: true },
  producto: { type: String, required: true },
  nombre: { type: String, required: true },
  cedula: { type: String, required: true },
  telefono: { type: String, required: true },
  tarjeta: { type: String, required: true }, // En producción, mejor encriptar estos datos
  fechaCompra: { type: Date, default: Date.now },
  estado: { type: String, enum: ["Aceptado", "Declinado"], default: "Pendiente" },
});

module.exports = mongoose.model("Venta", VentaSchema);

