const Venta = require("../models/Venta");

const actualizarAdmin = async (req, res) => {
    try {
        // Obtener todas las ventas de la base de datos
        const ventas = await Venta.find();

        if (ventas.length === 0) {
            return res.status(404).json({ message: "No hay ventas registradas" });
        }

        res.status(200).json({ ventas });
    } catch (error) {
        res.status(500).json({ message: "Error en el servidor", error });
    }
};

module.exports = actualizarAdmin;

