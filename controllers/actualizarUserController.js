const fs = require("fs");
const path = require("path");

const usersFilePath = path.join(__dirname, "../data/users.json");

const actualizarUser = (req, res) => {
    const { username, newEmail, newPassword } = req.body;

    let users = JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));
    const userIndex = users.findIndex(user => user.username === username);

    if (userIndex === -1) {
        return res.status(404).json({ message: "Usuario no encontrado" });
    }

    if (newEmail) users[userIndex].email = newEmail;
    if (newPassword) users[userIndex].password = newPassword;

    fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2));
    res.status(200).json({ message: "Usuario actualizado con éxito" });
};

module.exports = actualizarUser;
