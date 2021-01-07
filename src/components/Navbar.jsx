import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [show, setShow] = useState(false);
  const [scroll, setScroll] = useState(false);

  const handleScroll = () => {
    if (window.pageYOffset > 100) setScroll(true);
    else setScroll(false);
  };

  useEffect(() => {
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="sticky-container">
      <nav id="nav" className={scroll ? "scroll" : ""}>
        <div className="container">
          <div className="nav-brand">John Doe</div>
          <div className="nav-toggler" onClick={() => setShow(!show)}>
            <i className={"fas " + (show ? "fa-times" : "fa-bars")}></i>
          </div>
          <div className={"nav-collapse" + (show ? " show" : "")}>
            <ul className="navbar">
              <li className="nav-item">
                <Link className="nav-link" to="/home">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/projects">
                  Projects
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
            <div className="social-icons">
              <i className="fab fa-facebook"></i>
              <i className="fab fa-twitter"></i>
              <i className="fab fa-github"></i>
              <i className="fab fa-stackoverflow"></i>
              <i className="fab fa-linkedin"></i>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
