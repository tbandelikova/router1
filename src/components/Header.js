import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { logoURL } from '../data';
import './Header.css';

const Header = () => {
  const [matches, setMatches] = useState(
    window.matchMedia('(min-width: 320px) and (max-width: 768px)').matches
  );
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    window
      .matchMedia('(min-width: 320px) and (max-width: 768px)')
      .addEventListener('change', (e) => setMatches(e.matches));
  }, []);

  const menuToggle = () => {
    setIsOpen(!isOpen);
    document.body.classList.toggle('no-scroll');

    const menuMobile = document.getElementById('menu-mobile');
    menuMobile.classList.toggle('show-menu');
  };

  return (
    <div className="navbar">
      <div className="navbar-logo" onClick={matches ? menuToggle : undefined}>
        <img src={logoURL} alt="logo" />
      </div>
      <div
        className={!matches ? 'navbar-menu' : 'navbar-menu-mobile'}
        id="menu-mobile"
      >
        <ul onClick={matches ? menuToggle : undefined}>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/contacts">Contacts</NavLink>
          </li>
          <li>
            <NavLink to="/examples">Examples</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
