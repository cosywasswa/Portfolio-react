import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faChevronLeft } from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {
  const [isNavActive, setIsNavActive] = useState(false);
  const toggleMobileNav = () => {
    setIsNavActive(!isNavActive);
  };

  useEffect(() => {
    const handleSmoothScroll = (event, targetId) => {
      event.preventDefault();
      const target = document.getElementById(targetId);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    };

    const navLinks = document.querySelectorAll('.nav-list a, .nav-list-mob a');
    navLinks.forEach((link) => {
      const targetId = link.getAttribute('href').substring(2);
      link.addEventListener('click', (event) => {
        handleSmoothScroll(event, targetId);
      });
    });
  }, []);

  return (
    <header className="head">
      <nav className="nav-head">
        <h3>Cosmas</h3>
        <ul className="nav-list">
          <li><NavLink to="#home" className="a1">Home</NavLink></li>
          <li><NavLink to="#about" className="a1"> About</NavLink></li>
          <li><NavLink to="#projects" className="a1">Projects</NavLink></li>
          <li><NavLink to="#contact">Contact</NavLink></li>
        </ul>
        <FontAwesomeIcon icon={faBars} className="bars" onClick={toggleMobileNav} />
      </nav>
      <ul className={`nav-list-mob ${isNavActive ? 'active' : ''}`}>
        <FontAwesomeIcon icon={faChevronLeft} className="arrow" onClick={toggleMobileNav} />
        <li><NavLink to="#home" className="a1" onClick={toggleMobileNav}>Home</NavLink></li>
        <li><NavLink to="#about" className="a1" onClick={toggleMobileNav}> About</NavLink></li>
        <li><NavLink to="#projects" className="a1" onClick={toggleMobileNav}>Projects</NavLink></li>
        <li><NavLink to="#contact" onClick={toggleMobileNav}>Contact</NavLink></li>
      </ul>
    </header>
  );
};
export default NavBar;
