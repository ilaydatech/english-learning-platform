const User = require("../models/userModel.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// Kullanıcı oluşturma fonksiyonu (zaten var)
const createUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Email ve şifre gereklidir" });
    }
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res
        .status(409)
        .json({ message: "Bu email adresi zaten kullanılıyor!" });
    }
    // Şifreyi hashle
    const hashedPassword = await bcrypt.hash(password, 10);

    // Kullanıcıyı oluştur
    const user = await User.create({
      email,
      password: hashedPassword, // Hashlenmiş şifreyi kaydet
    });

    res.status(201).json({
      succeeded: true,
      user,
    });
  } catch (error) {
    console.error("Kullanıcı oluşturma hatası:", error);
    res.status(500).json({
      succeeded: false,
      message: "Sunucu hatası",
      error: error.message, // Hata detayını gönder
    });
  }
};


// Kullanıcı giriş fonksiyonu (EKLENEN FONKSİYON)
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Kullanıcıyı e-posta ile bul
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "Geçersiz email veya şifre" });
    }

    // Şifreyi doğrula
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Geçersiz email veya şifre" });
    }

    // JWT oluştur
    const token = jwt.sign({ userId: user._id }, "GİZLİ_JWT_ANAHTARI", {
      expiresIn: "1h",
    });

    res.status(200).json({
      message: "Giriş başarılı",
      token,
    });
  } catch (error) {
    res.status(500).json({ message: "Sunucu hatası", error });
  }
};

module.exports = { createUser, loginUser };

// const bcrypt = require("bcryptjs/dist/bcrypt.js");
// const User = require("../models/userModel.js")

//   const createUser = async (req, res) => {
//     try{
//         const user = await User.create(req.body);
//         res.status(201).json({
//             succeeded: true,
//             user,
//         });
//     } catch (error) {
//         res.status(500).json({
//             succeeded: false,
//             error,
//         });
//     }
// };

//   const loginUser = async (req, res) => {
//    const { email, password} = req.body
//    const user = await User.findOne({email})
//     if (!user) {
//       return res.status(401).json({ message: "Email veya şifre hatalı"});
//     }
//    const comparedPassword = await bcrypt.compare(password, user.password);
//  //ilk password bizim gönderdiğimiz req.body.password ikincisi gerçek şifre.
//    console.log(comparedPassword);

//    if (!comparedPassword) {
//     throw new APIError("Email yada şifre hatalı", 401)
//    }

//     return res.json(req.body)
//   };

// module.exports = {
//   createUser,
//   loginUser,
// };
