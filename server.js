const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config(); // Cargar variables de entorno

// Importar rutas
const newUserRoutes = require("./routes/newUser.routes");
const newAdminRoutes = require("./routes/newAdmin.routes");
const loginRoutes = require("./routes/login.routes");
const actualizarUserRoutes = require("./routes/actualizarUser.routes");
const actualizarAdminRoutes = require("./routes/actualizarAdmin.routes");
const actualizarAdminEstadoRoutes = require("./routes/actualizarAdminEstado.routes");
const nuevaVentaRoutes = require("./routes/nuevaVenta.routes");
const compraRoutes = require("./routes/compra.routes"); // 📌 Nueva ruta para compras

const app = express();

// 📌 Middleware
app.use(express.json());
app.use(cors());

// 📌 Conectar a MongoDB
const conectarDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      
    });
    console.log("🟢 Conectado a MongoDB");
  } catch (error) {
    console.error("🔴 Error al conectar a MongoDB:", error);
    process.exit(1); // Detiene la ejecución si la conexión falla
  }
};

conectarDB();

// 📌 Usar rutas con prefijo "/api"
app.use("/api/newuser", newUserRoutes);
app.use("/api/newAdmin", newAdminRoutes);
app.use("/api/login", loginRoutes);
app.use("/api/actualizarUser", actualizarUserRoutes);
app.use("/api/actualizarAdmin", actualizarAdminRoutes);
app.use("/api/actualizarEstado", actualizarAdminEstadoRoutes);
app.use("/api/nuevaVenta", nuevaVentaRoutes);
app.use("/api/compras", compraRoutes); // 📌 Nueva ruta de compras

// 📌 Puerto del servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});
