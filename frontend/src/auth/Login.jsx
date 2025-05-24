import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate, Link } from "react-router-dom";
import {
  FaEye,
  FaEyeSlash,
  FaFacebookF,
  FaGoogle,
  FaApple,
} from "react-icons/fa";

export default function Login() {
  const navigate = useNavigate();

  const [data, setData] = useState({ email: "", password: "" });
  const [showPass, setShowPass] = useState(false);

  const loginUser = async (e) => {
    e.preventDefault();
    const { email, password } = data;

    try {
      const res = await axios.post("/login", { email, password });
      if (res.data.error) {
        toast.error(res.data.error);
      } else {
        setData({ email: "", password: "" });
        toast.success("User logged-in successfully!");
        navigate("/chooselevel");
      }
    } catch (err) {
      toast.error(err.response?.data?.message || "Login error");
    }
  };

  return (
    <div className="login-page">
      {/* ——— LEFT ——— */}
      <section className="login-left">
        <h1 className="title">Login</h1>
        <p className="subtitle">Login to access your FluentGo account</p>

        <form onSubmit={loginUser} className="login-form">
          {/* EMAIL */}
          <label htmlFor="email" className="field">
            <span>Email</span>
            <input
              type="email"
              id="email"
              placeholder="john.doe@gmail.com"
              value={data.email}
              onChange={(e) => setData({ ...data, email: e.target.value })}
              required
            />
          </label>

          {/* PASSWORD */}
          <label htmlFor="password" className="field">
            <span>Password</span>
            <div className="password-wrapper">
              <input
                type={showPass ? "text" : "password"}
                id="password"
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

          {/* OPTIONS */}
          <div className="options">
            <label className="remember">
              <input type="checkbox" /> Remember
            </label>
            <Link to="/forgot-password" className="forgot">
              Forgot Password
            </Link>
          </div>

          {/* SUBMIT */}
          <button type="submit" className="btn-primary">
            Login
          </button>

          <p className="signup-text">
            Don’t have an account? <Link to="/register">Sign up</Link>
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

// //loginpage
// function Login() {
//   const navigate = useNavigate();
//   const [data, setData] = useState({
//     email: "",
//     password: "",
//   });

//   const loginUser = async (e) => {
//     e.preventDefault();
//     const { email, password } = data;
//     try {
//       const { data } = await axios.post(
//         "/login", // Çevresel değişken kullanımı önerilir
//         { email, password }
//       );
//       if (data.error) {
//         toast.error(data.error);
//       } else {
//         setData({});
//         navigate("/");
//         toast.success("User logined successfully!");
//       }
//     } catch (error) {
//       toast.error(error.response?.data?.message || "Giriş sırasında bir hata oluştu!");
//     }

//   }
//   return (
//     <div>
//       <h1>Login</h1>
//       <form onSubmit={loginUser}>
//         <input
//           type="email"
//           id="email"
//           name="email"
//           placeholder="Email"
//           value={data.email}
//           onChange={(e) => setData({ ...data, email: e.target.value })}
//           required
//         />
//         <input
//           type="password"
//           id="password"
//           name="password"
//           placeholder="Password"
//           value={data.password}
//           onChange={(e) => setData({ ...data, password: e.target.value })}
//           required
//         />
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// }

// export default Login;
