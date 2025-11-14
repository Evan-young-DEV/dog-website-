import React from 'react';
import '../styles/Navbar.css';

function Navbar() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <h1 className="nav-logo">🐾 DOG WORLD</h1>
        <ul className="nav-menu">
          <li onClick={() => scrollToSection('home')}>홈</li>
          <li onClick={() => scrollToSection('dogs')}>강아지 소개</li>
          <li onClick={() => scrollToSection('gallery')}>갤러리</li>
          <li onClick={() => scrollToSection('contact')}>문의하기</li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
