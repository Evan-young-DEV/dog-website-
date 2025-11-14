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
          <span className="logo-icon">🐾</span>
          <span className="logo-text">PetWear</span>
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
