import React from "react";

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark"
      style={{
        background: "linear-gradient(to right, #111827, #1f2937)",
        boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
      }}
    >
      <div className="container">
        <a
          className="navbar-brand fw-bold fs-3"
          href="/"
          style={{ letterSpacing: "1px" }}
        >
          🚗 Car-App
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto">

            <a className="nav-link nav-item-custom" href="/add">
              Add Car
            </a>

            <a className="nav-link nav-item-custom" href="/search">
              Search
            </a>

            <a className="nav-link nav-item-custom" href="/delete">
              Delete
            </a>

            <a className="nav-link nav-item-custom" href="/view">
              View All
            </a>

          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;