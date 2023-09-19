/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {
  useEffect(() => {
    const handleSmoothScroll = (event, targetId) => {
      event.preventDefault();
      const target = document.getElementById(targetId);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    };

    const navLinks = document.querySelectorAll('.nav-list a');
    navLinks.forEach((link) => {
      const targetId = link.getAttribute('href').substring(2);
      link.addEventListener('click', (event) => {
        handleSmoothScroll(event, targetId);
      });
    });
  }, []);

  return (
    <header className="head">
      <h3>Logo</h3>
      <ul className="nav-list">
        <li><NavLink to="/" className="a1">Home</NavLink></li>
        <li><NavLink to="#about" className="a1"> About</NavLink></li>
        <li><NavLink to="#projects" className="a1">Projects</NavLink></li>
        <li><NavLink to="#contact">Contact</NavLink></li>
      </ul>
      <FontAwesomeIcon icon={faBars} className="bars" />
    </header>
  );
};
export default NavBar;
