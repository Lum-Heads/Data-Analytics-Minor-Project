import React from "react";

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-dark bg-dark p-3">
        <div className="container-fluid">
          <a href="/" className="navbar-brand">
            Freshify
          </a>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
