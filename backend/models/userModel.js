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
    } 
    });

UserSchema.pre("save", function (next) {
const user = this;
bcrypt.hash(user.password, 10, (err, hash) => {
     user.password = hash;
     next();
  })
})

//mongoose.model.Users zaten model varsa çalışır model yoksa Users adında UserSchema modeli oluşturulr-ur.
   module.exports = mongoose.models.Users || mongoose.model("Users", UserSchema);
