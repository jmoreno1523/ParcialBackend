const Venta = require("../models/Venta");

const nuevaVenta = async (req, res) => {
    const { nombre, producto, precio, estado, cedula, telefono, tarjeta } = req.body;

    if (!nombre || !producto || !precio || !estado || !cedula || !telefono || !tarjeta) {
        return res.status(400).json({ message: "Todos los campos son obligatorios" });
    }

    try {
        const nuevaVenta = new Venta({
            nombre,
            producto,
            precio,
            estado,
            cedula,
            telefono,
            tarjeta,
            fechaCompra: new Date()
        });

        await nuevaVenta.save();
        res.status(201).json({ message: "Venta registrada con éxito" });
    } catch (error) {
        res.status(500).json({ message: "Error en el servidor", error });
    }
};

module.exports = nuevaVenta;
