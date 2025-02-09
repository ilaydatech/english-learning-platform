const mongoose = require('mongoose');

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
    } 
    });

//mongoose.model.Users zaten model varsa çalışır model yoksa Users adında UserSchema modeli oluşturulr-ur.
   module.exports = mongoose.models.Users || mongoose.model("Users", UserSchema);
