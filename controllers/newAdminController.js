const Admin = require("../models/User");


const newAdmin = async (req, res) => {
    const { usuario, password, rol } = req.body;

    if (!usuario || !password || !rol) {
        return res.status(400).json({ message: "Todos los campos son obligatorios" });
    }

    try {
        const existingAdmin = await Admin.findOne({ username: usuario });

        if (existingAdmin) {
            return res.status(400).json({ message: "El administrador ya existe" });
        }

        const newAdmin = new Admin({
            username: usuario,
            password,
            rol,
        });

        await newAdmin.save();

        res.status(201).json({ message: "Administrador registrado con éxito" });
    } catch (error) {
        res.status(500).json({ message: "Error en el servidor", error });
    }
};

module.exports = newAdmin;
