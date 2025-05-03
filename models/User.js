const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true, unique: true },
  rol: { type: String, enum: ["usuario", "admin"], required: true },
});

module.exports = mongoose.model("User", UserSchema);


