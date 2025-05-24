import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      {" "}
      {/* ➜ Tam genişlik, beyaz  */}
      <div className="navbar-inner">
        {" "}
        {/* ➜ İç container         */}
        <Link to="/">
          <span className="logo">FluentGo</span>
        </Link>
        <div className="nav-links">
          <Link to="/login">Log in</Link>
          <Link to="/register" className="signup-btn">
            Sign up
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

// // import React from "react";
// import { Link } from "react-router-dom";

// function Navbar() {
//   return (
//     <nav className="navbar">
//       <span className="logo">FluentGo</span>

//       {/* Sağ taraftaki bağlantılar */}
//       <div className="nav-links">
//         <Link to="/login">Log in</Link>
//         <Link to="/register" className="signup-btn">
//           Sign up
//         </Link>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;
