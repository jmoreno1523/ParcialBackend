const Venta = require("../models/Venta");

const actualizarAdminEstado = async (req, res) => {
    const { id } = req.params;  // Asegurar que se obtiene el ID de req.params
    const { estado } = req.body;

    try {
        const ventaActualizada = await Venta.findByIdAndUpdate(
            id,
            { estado },
            { new: true }
        );

        if (!ventaActualizada) {
            return res.status(404).json({ message: "Venta no encontrada" });
        }

        res.status(200).json({ message: "Estado actualizado con éxito", venta: ventaActualizada });
    } catch (error) {
        res.status(500).json({ message: "Error en el servidor", error });
    }
};

module.exports = actualizarAdminEstado;
