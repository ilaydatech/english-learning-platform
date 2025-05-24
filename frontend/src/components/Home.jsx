import React from "react";
import "../App.css";
import fluentgo from "../assets/fluentgo.png"; // 👈 yeni satır

export default function Home() {
  return (
    <div className="home">
      <div className="home-right">
        <h1>Online Language Development </h1>
        <p>
          Welcome to our English learning page, sign up and complete daily
          tasks. Learn how to pronounce words, <span className="home-span">their contexts</span>, and with mini
          tests, you will progress by learning instead of memorizing.
        </p>
        <button>Start Learning Now</button>
      </div>
      <div className="home-left">
        <img src={fluentgo} alt="FluentGo logo" style={{ width: 500 }} />
      </div>
    </div>
  );
}
