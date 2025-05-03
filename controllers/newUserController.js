const User = require("../models/User");


const newUser = async (req, res) => {
    const { username, password, rol } = req.body;

    if (!username || !password) {
        return res.status(400).json({ message: "Todos los campos son obligatorios" });
    }

    try {
        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.status(400).json({ message: "El usuario ya existe" });
        }

        const newUser = new User({ username, password, rol });
        await newUser.save();

        res.status(201).json({ message: "Usuario registrado con éxito" });
    } catch (error) {
        res.status(500).json({ message: "Error en el servidor", error });
    }
};

module.exports = newUser;
