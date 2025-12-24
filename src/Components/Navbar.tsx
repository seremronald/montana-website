import React from 'react';
import { Link } from 'react-router-dom';
import logo from '/src/assets/SEREM FARM FEEDS.png';
import Collapse from 'bootstrap/js/dist/collapse'; // ✅ Import Collapse directly from Bootstrap

export default function Navbar() {
  const handleLinkClick = () => {
    const navbar = document.getElementById('navbarNav');
    if (navbar) {
      const bsCollapse = Collapse.getInstance(navbar) || new Collapse(navbar, { toggle: false });
      bsCollapse.hide();
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm sticky-top">
      <div className="container-fluid px-4">
        
        {/* ✅ Logo */}
        <Link className="navbar-brand d-flex align-items-center" to="/" onClick={handleLinkClick}>
          <img
            src={logo}
            alt="Montana Feeds Logo"
            width="100"
            height="100"
            className="me-2"
          />
        </Link>

        {/* ✅ Toggler */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* ✅ Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/" onClick={handleLinkClick}>Home</Link>
            </li>

            {/* Products Dropdown */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="productsDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Products
              </a>
              <ul className="dropdown-menu" aria-labelledby="productsDropdown">
                <li><Link className="dropdown-item" to="/products/dairy" onClick={handleLinkClick}>Dairy Feeds</Link></li>
                <li><Link className="dropdown-item" to="/products/layers" onClick={handleLinkClick}>Layers Mash</Link></li>
                <li><Link className="dropdown-item" to="/products/kienyeji" onClick={handleLinkClick}>Kienyeji Mash</Link></li>
                <li><Link className="dropdown-item" to="/products/sheep" onClick={handleLinkClick}>Sheep Feeds</Link></li>
                <li><Link className="dropdown-item" to="/products/dog" onClick={handleLinkClick}>Dog Meal</Link></li>
              </ul>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/about" onClick={handleLinkClick}>About Us</Link>
            </li>
          </ul>

          {/* ✅ Custom Red Contact Us Button */}
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link
                to="/contact"
                onClick={handleLinkClick}
                className="btn px-4 py-2 fw-semibold shadow-sm rounded-pill"
                style={{
                  backgroundColor: '#ed1C24',
                  color: 'white',
                  border: 'none',
                }}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
