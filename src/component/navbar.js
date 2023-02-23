import React from 'react';
import '../App.css'
import 'bulma/css/bulma.css'; // Import the Bulma CSS file

function Navbar() {
  const navbarStyle = {
    borderRadius: '5px',
    background: 'rgba(31, 72, 255, 0.712)',
    margin: '1em',
  };

  const brandStyle = {
    margin: '4px',
    color: 'white',
    backgroundColor: 'rgba(255, 228, 196, 0)',
    fontSize: '2em',
  };

  const menuStyle = {
    backgroundColor: 'rgba(209, 117, 117, 0.164)',
  };

  return (
    <nav className="navbar" id="sticky" role="navigation" aria-label="main navigation" style={navbarStyle}>
      <div className="navbar-brand">
        <p className="navbar-item" style={brandStyle}>ANEASER</p>
        <button className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </button>
      </div>
      <div id="navbarBasicExample" className="navbar-menu" style={menuStyle}>
        <div className="navbar-end">
          <a className="navbar-item" href="#aboutme">
            ABOUT ME
          </a>
          <a className="navbar-item" href="#techstack">
            TECH STACK
          </a>  
          <a className="navbar-item" href="#contact">
            CONTACT ME
          </a>
          <a className="navbar-item" href="#samples">
            PROJECTS
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;