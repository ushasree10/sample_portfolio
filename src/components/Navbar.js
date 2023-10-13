import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleNavToggle = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div>
      <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <div className="container-xxl">
          <button
            className="navbar-toggler"
            type="button"
            onClick={handleNavToggle}
            aria-expanded={isNavOpen ? 'true' : 'false'}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''}`} id="main-nav">
            <ul className="navbar-nav ms-auto"> {/* Use ms-auto class here */}
              <li className="nav-item">
                <Link to="/" className="nav-link" onClick={handleNavToggle}>
                  <i className="bi bi-house-door-fill d-none d-md-inline"></i> Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link" onClick={handleNavToggle}>
                  <i className="bi bi-file-earmark-person d-none d-md-inline"></i> About
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/projects" className="nav-link" onClick={handleNavToggle}>
                  <i className="bi bi-cast d-none d-md-inline"></i> Projects
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link" onClick={handleNavToggle}>
                  <i className="bi bi-telephone-inbound-fill d-none d-md-inline"></i> Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
