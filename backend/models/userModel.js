const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    unique: false,
  },
  progress: {
    level: { type: String, default: "A1" },
    part: { type: Number, default: 1 },
  },
});

//mongoose.model.Users zaten model varsa çalışır model yoksa Users adında UserSchema modeli oluşturulr-ur.
   module.exports = mongoose.models.Users || mongoose.model("Users", UserSchema);
