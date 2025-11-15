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
      title: '제품 정보',
      items: ['기능', '사양', '사용법']
    },
    {
      title: '헬스케어',
      items: ['건강 모니터링', '질병 감지', '활동 추적']
    },
    {
      title: '갤러리',
      link: 'gallery'
    },
    {
      title: '문의하기',
      link: 'contact'
    }
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="nav-logo" onClick={() => scrollToSection('home')}>
          <span className="logo-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48" height="48">
              <defs>
                <linearGradient id="tempGradientNav" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" style={{stopColor: '#00D9C0', stopOpacity: 1}} />
                  <stop offset="100%" style={{stopColor: '#00B8A3', stopOpacity: 1}} />
                </linearGradient>
              </defs>
              {/* Thermometer body */}
              <rect x="18" y="8" width="12" height="22" rx="6" fill="none" stroke="url(#tempGradientNav)" strokeWidth="3"/>
              {/* Thermometer bulb */}
              <circle cx="24" cy="36" r="8" fill="url(#tempGradientNav)"/>
              {/* Mercury column */}
              <rect x="21" y="12" width="6" height="18" fill="url(#tempGradientNav)" rx="3"/>
              <circle cx="24" cy="36" r="5" fill="#00B8A3"/>
              {/* Temperature marks */}
              <line x1="30" y1="12" x2="34" y2="12" stroke="url(#tempGradientNav)" strokeWidth="2" strokeLinecap="round"/>
              <line x1="30" y1="17" x2="33" y2="17" stroke="url(#tempGradientNav)" strokeWidth="2" strokeLinecap="round"/>
              <line x1="30" y1="22" x2="34" y2="22" stroke="url(#tempGradientNav)" strokeWidth="2" strokeLinecap="round"/>
              <line x1="30" y1="27" x2="33" y2="27" stroke="url(#tempGradientNav)" strokeWidth="2" strokeLinecap="round"/>
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
          구매하기
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
