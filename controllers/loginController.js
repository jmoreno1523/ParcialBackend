const User = require("../models/User");

const login = async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await User.findOne({ username });

        if (!user) {
            return res.status(401).json({ message: "Credenciales incorrectas" });
        }

        // Verificar si es admin o usuario
        const role = user.rol === "admin" ? "admin" : "user";

        return res.status(200).json({ role, message: "Inicio de sesión exitoso" });
    } catch (error) {
        return res.status(500).json({ message: "Error en el servidor", error });
    }
};

module.exports = login;

