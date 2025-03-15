import React from 'react'
import { Link } from "react-router-dom"

function Navbar() {
  return (
    <nav>
    <span>FluentGo</span>
      <Link to="/">Home </Link>
      <Link to='/nasilcalisir'>Nasıl Çalışır </Link>
      <Link to="/register">Register </Link>
      <Link to="/login">Login </Link>
      <Link to="/chooseenglishlevel">Choose English Level </Link>
      <Link to="/wordlist">WordList </Link>
      <Link to="yourprogress">Your Progress</Link>
    </nav>
  );
}

export default Navbar
