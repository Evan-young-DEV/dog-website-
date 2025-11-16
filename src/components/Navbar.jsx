import React, { useState, useEffect } from 'react';
import '../styles/Navbar.css';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setActiveDropdown(null);
  };

  const menuItems = [
    {
      title: 'Product Info',
      items: ['Features', 'Specifications', 'How to Use']
    },
    {
      title: 'Healthcare',
      items: ['Health Monitoring', 'Disease Detection', 'Activity Tracking']
    },
    {
      title: 'Gallery',
      link: 'gallery'
    },
    {
      title: 'Contact',
      link: 'contact'
    }
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="nav-logo" onClick={() => scrollToSection('home')}>
          <span className={`logo-icon ${scrolled ? 'scrolled' : ''}`}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -5 70 53" width="70" height="48">
              <defs>
                <linearGradient id="tempGradientNavWhite" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" style={{stopColor: '#ffffff', stopOpacity: 1}} />
                  <stop offset="100%" style={{stopColor: '#f0f0f0', stopOpacity: 1}} />
                </linearGradient>
                <linearGradient id="tempGradientNavColor" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" style={{stopColor: '#00D9C0', stopOpacity: 1}} />
                  <stop offset="100%" style={{stopColor: '#00B8A3', stopOpacity: 1}} />
                </linearGradient>
              </defs>
              {/* Thermometer body */}
              <rect x="10" y="8" width="12" height="22" rx="6" fill="none" stroke={scrolled ? "url(#tempGradientNavColor)" : "url(#tempGradientNavWhite)"} strokeWidth="3"/>
              {/* Thermometer bulb */}
              <circle cx="16" cy="36" r="8" fill={scrolled ? "url(#tempGradientNavColor)" : "url(#tempGradientNavWhite)"}/>
              {/* Mercury column */}
              <rect x="13" y="12" width="6" height="18" fill={scrolled ? "url(#tempGradientNavColor)" : "url(#tempGradientNavWhite)"} rx="3"/>
              <circle cx="16" cy="36" r="5" fill={scrolled ? "#00B8A3" : "#f0f0f0"}/>
              {/* Temperature marks */}
              <line x1="22" y1="12" x2="26" y2="12" stroke={scrolled ? "url(#tempGradientNavColor)" : "url(#tempGradientNavWhite)"} strokeWidth="2" strokeLinecap="round"/>
              <line x1="22" y1="17" x2="25" y2="17" stroke={scrolled ? "url(#tempGradientNavColor)" : "url(#tempGradientNavWhite)"} strokeWidth="2" strokeLinecap="round"/>
              <line x1="22" y1="22" x2="26" y2="22" stroke={scrolled ? "url(#tempGradientNavColor)" : "url(#tempGradientNavWhite)"} strokeWidth="2" strokeLinecap="round"/>
              <line x1="22" y1="27" x2="25" y2="27" stroke={scrolled ? "url(#tempGradientNavColor)" : "url(#tempGradientNavWhite)"} strokeWidth="2" strokeLinecap="round"/>
              {/* Temperature text */}
              <text x="16" y="6" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="11" fontWeight="800" fill={scrolled ? "#FF6B6B" : "#ffffff"}>38.0</text>
            </svg>
          </span>
          <span className="logo-text">Jellybeam</span>
        </div>

        <ul className="nav-menu">
          {menuItems.map((menu, index) => (
            <li
              key={index}
              className={`nav-item ${menu.items ? 'has-dropdown' : ''} ${activeDropdown === index ? 'active' : ''}`}
              onMouseEnter={() => menu.items && setActiveDropdown(index)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <span onClick={() => menu.link && scrollToSection(menu.link)}>
                {menu.title}
              </span>
              {menu.items && (
                <ul className="dropdown-menu">
                  {menu.items.map((item, idx) => (
                    <li key={idx} onClick={() => scrollToSection('features')}>
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        <button className="nav-btn" onClick={() => scrollToSection('contact')}>
          Shop Now
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
