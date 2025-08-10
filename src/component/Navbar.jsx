import React, { useState } from "react";
import Logo from '../img/logos/web-logo.png';

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState("home"); // default home aktif

  // fungsi handle klik untuk set menu aktif
  const handleClick = (menu) => {
    setActiveMenu(menu);
  };

  return (
    <nav className="navbar navbar-light navbar-expand-md sticky-top navbar-shrink py-3 background-nav" id="mainNav">
      <div className="container">
        <a className="navbar-brand d-flex align-items-center" href="/">
          <img className="img-logo" src={Logo} alt="Logo" />
        </a>
        <button data-bs-toggle="collapse" className="navbar-toggler" data-bs-target="#navcol-1">
          <span className="visually-hidden">Toggle navigation</span>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navcol-1">
          <ul className="navbar-nav mx-auto text-navbar">
            <li className="nav-item">
              <a 
                className={"nav-link " + (activeMenu === "home" ? "fw-bold" : "")} 
                href="home" 
                onClick={() => handleClick("home")}
              >
                BERANDA
              </a>
            </li>
            <li className="nav-item">
              <a 
                className={"nav-link " + (activeMenu === "panduan" ? "fw-bold" : "")} 
                href="panduan" 
                onClick={() => handleClick("panduan")}
              >
                PANDUAN
              </a>
            </li>
            <li className="nav-item">
              <a 
                className={"nav-link " + (activeMenu === "data" ? "fw-bold" : "")} 
                href="data" 
                onClick={() => handleClick("data")}
              >
                DATA
              </a>
            </li>
            <li className="nav-item">
              <a 
                className={"nav-link " + (activeMenu === "kadidat" ? "fw-bold" : "")} 
                href="kadidat" 
                onClick={() => handleClick("kadidat")}
              >
                KANDIDAT
              </a>
            </li>
            <li className="nav-item">
              <a 
                className={"nav-link " + (activeMenu === "aboutus" ? "fw-bold" : "")} 
                href="aboutus" 
                onClick={() => handleClick("aboutus")}
              >
                ABOUT US
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
