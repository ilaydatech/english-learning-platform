import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
//loginpage
function Login() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const loginUser = async (e) => {
    e.preventDefault();
    const { email, password } = data;
    try {
      const { data } = await axios.post(
        "/login", // Çevresel değişken kullanımı önerilir
        { email, password }
      );
      if (data.error) {
        toast.error(data.error);
      } else {
        setData({});
        navigate("/");
        toast.success("User logined successfully!");
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Giriş sırasında bir hata oluştu!");
    }

  }
  return (
    <div >
      <h1>Login</h1>
      <form onSubmit={loginUser}>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          value={data.email}
          onChange={(e) => setData({ ...data, email: e.target.value })}
          required
        />
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          value={data.password}
          onChange={(e) => setData({ ...data, password: e.target.value })}
          required
        />
        <button type="submit">Login</button>
        <button>g</button>
      </form>
    </div>
  );
}

export default Login;
