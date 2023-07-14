import React, { useEffect } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const history = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem('token');
    history('/login');
  };

  let location = useLocation();
  useEffect(() => {
    // console.log(location)
  }, [location]);

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            iNotebook
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent" // Updated the data-bs-target attribute
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    `nav-link ${isActive ? 'active-class' : 'nav-link'}`
                  }
                  aria-current="page"
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    `nav-link ${isActive ? 'active-class' : 'nav-link'}`
                  }
                  to="/about"
                >
                  About
                </NavLink>
              </li>
            </ul>
            {!localStorage.getItem('token') ? (
              <form className="d-flex" role="search">
                <NavLink
                  className="btn btn-primary mx-2"
                  to="/login"
                  role="button"
                >
                  Login
                </NavLink>
                <NavLink
                  className="btn btn-primary"
                  to="/signup"
                  role="button"
                >
                  SignUp
                </NavLink>
              </form>
            ) : (
              <button className="btn btn-primary" onClick={handleLogout}>
                Logout
              </button>
            )}
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
