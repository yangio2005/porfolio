import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">My Portfolio</div>
      <nav>
        <ul>
          <li><NavLink to="/" end>Home</NavLink></li>
          <li><NavLink to="/projects">Projects</NavLink></li>
          <li><NavLink to="/skills">Skills</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
          <li><NavLink to="/socials">Socials</NavLink></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;