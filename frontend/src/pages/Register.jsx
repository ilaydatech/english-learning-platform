import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

// Kullanıcının email ve şifresini saklayan form bileşeni
function Register() {
  const navigate = useNavigate();

  // Başlangıç değerleri belirli olmalı
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const registerUser = async (e) => {
    e.preventDefault();
    const { email, password } = data;

    try {
      const { data } = await axios.post(
        "/register",
        { email, password },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );

      if (data.error) {
        toast.error(data.error);
      } else {
        setData({ email: "", password: "" }); // Burada boş bir obje yerine boş string atandı
        toast.success("User registered successfully!");
        navigate("/chooselevel");
      }
    }catch (error) {
      toast.error(error.response?.data?.message || "Kayıt sırasında bir hata oluştu!");
    }
  };

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={registerUser}>
        <input
          type="text"
          placeholder="Email"
          value={data.email || ""} // Eğer undefined olursa boş string kullan
          onChange={(e) => setData({ ...data, email: e.target.value })}
        />

        <input
          type="password"
          placeholder="Password"
          value={data.password || ""} // Eğer undefined olursa boş string kullan
          onChange={(e) => setData({ ...data, password: e.target.value })}
        />

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
