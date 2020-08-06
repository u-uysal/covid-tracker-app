import React from "react";

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-sm bg-light justify-content-center">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="#home">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#select">
              Select Country
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#precautions">
              Precautions
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <br></br>
    </div>
  );
}

export default Navbar;
