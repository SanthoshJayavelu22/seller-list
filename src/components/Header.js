import React from 'react';

const Header = ({ isLoggedIn, onLogout }) => {
  return (
    <header className="bg-dark text-light py-3">
      <div className="container d-flex justify-content-between align-items-center flex-wrap">
        <h1 className="h5">SPA App</h1>
        <nav>
          <ul className="nav">
            <li className="nav-item">
              <a href="#home" className="nav-link text-light">Home</a>
            </li>
            <li className="nav-item">
              <a href="#about" className="nav-link text-light">About</a>
            </li>
            <li className="nav-item">
              <a href="#contact" className="nav-link text-light">Contact</a>
            </li>
            {isLoggedIn && (
              <li className="nav-item">
                <button
                  className="btn btn-outline-light ms-3"
                  onClick={onLogout}
                >
                  Logout
                </button>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
