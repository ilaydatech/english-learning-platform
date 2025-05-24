import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate, Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // 👈 yalnızca ikon

export default function Register() {
  const navigate = useNavigate();

  const [data, setData] = useState({ email: "", password: "" });
  const [showPass, setShowPass] = useState(false);

  const registerUser = async (e) => {
    e.preventDefault();
    const { email, password } = data;

    try {
      const res = await axios.post(
        "/register",
        { email, password },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );

      if (res.data.error) {
        toast.error(res.data.error);
      } else {
        setData({ email: "", password: "" });
        toast.success("User registered successfully!");
        navigate("/chooselevel");
      }
    } catch (err) {
      toast.error(
        err.response?.data?.message || "Kayıt sırasında bir hata oluştu!"
      );
    }
  };

  /* ——— UI ——— */
  return (
    <div className="auth-page">
      {/* LEFT */}
      <section className="auth-left">
        <h1 className="title">Sign up</h1>
        <p className="subtitle">Create your new FluentGo account</p>

        <form onSubmit={registerUser} className="auth-form">
          {/* EMAIL */}
          <label className="field">
            <span>Email</span>
            <input
              type="email"
              placeholder="john.doe@gmail.com"
              value={data.email}
              onChange={(e) => setData({ ...data, email: e.target.value })}
              required
            />
          </label>

          {/* PASSWORD */}
          <label className="field">
            <span>Password</span>
            <div className="password-wrapper">
              <input
                type={showPass ? "text" : "password"}
                placeholder="••••••••••••"
                value={data.password}
                onChange={(e) => setData({ ...data, password: e.target.value })}
                required
              />
              <button
                type="button"
                className="eye"
                onClick={() => setShowPass(!showPass)}
                aria-label={showPass ? "Hide password" : "Show password"}
              >
                {showPass ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </label>

          <button type="submit" className="btn-primary">
            Register
          </button>

          <p className="signup-text">
            Already have an account? <Link to="/login">Log&nbsp;in</Link>
          </p>
        </form>
      </section>

    </div>
  );
}

// import React, { useState } from "react";
// import axios from "axios";
// import { toast } from "react-hot-toast";
// import { useNavigate } from "react-router-dom";

// // Kullanıcının email ve şifresini saklayan form bileşeni
// function Register() {
//   const navigate = useNavigate();

//   // Başlangıç değerleri belirli olmalı
//   const [data, setData] = useState({
//     email: "",
//     password: "",
//   });

//   const registerUser = async (e) => {
//     e.preventDefault();
//     const { email, password } = data;

//     try {
//       const { data } = await axios.post(
//         "/register",
//         { email, password },
//         {
//           headers: { "Content-Type": "application/json" },
//           withCredentials: true,
//         }
//       );

//       if (data.error) {
//         toast.error(data.error);
//       } else {
//         setData({ email: "", password: "" }); // Burada boş bir obje yerine boş string atandı
//         toast.success("User registered successfully!");
//         navigate("/chooselevel");
//       }
//     }catch (error) {
//       toast.error(error.response?.data?.message || "Kayıt sırasında bir hata oluştu!");
//     }
//   };

//   return (
//     <div>
//       <h1>Register</h1>
//       <form onSubmit={registerUser}>
//         <input
//           type="text"
//           placeholder="Email"
//           value={data.email || ""} // Eğer undefined olursa boş string kullan
//           onChange={(e) => setData({ ...data, email: e.target.value })}
//         />

//         <input
//           type="password"
//           placeholder="Password"
//           value={data.password || ""} // Eğer undefined olursa boş string kullan
//           onChange={(e) => setData({ ...data, password: e.target.value })}
//         />

//         <button type="submit">Register</button>
//       </form>

//     </div>
//   );
// }

// export default Register;
