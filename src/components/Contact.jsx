import React, { useState } from 'react';
import '../styles/Contact.css';

function Contact() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('뉴스레터 구독이 완료되었습니다!');
    setEmail('');
  };

  return (
    <>
      {/* 뉴스레터 섹션 */}
      <section id="contact" className="newsletter-section">
        <div className="newsletter-container">
          <h2>최신 소식을 받아보세요</h2>
          <p>신제품 출시, 특별 할인, 건강 정보를 가장 먼저 받아보세요</p>
          <form className="newsletter-form" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="이메일 주소를 입력하세요"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit">구독하기</button>
          </form>
        </div>
      </section>

      {/* 푸터 */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-grid">
            {/* 회사 정보 */}
            <div className="footer-column">
              <h3 className="footer-logo">
                <span className="footer-logo-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -5 70 53" width="52.5" height="45">
                    <defs>
                      <linearGradient id="tempGradientFooterWhite" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" style={{stopColor: '#ffffff', stopOpacity: 1}} />
                        <stop offset="100%" style={{stopColor: '#f0f0f0', stopOpacity: 1}} />
                      </linearGradient>
                    </defs>
                    {/* Thermometer body */}
                    <rect x="10" y="8" width="12" height="22" rx="6" fill="none" stroke="url(#tempGradientFooterWhite)" strokeWidth="3"/>
                    {/* Thermometer bulb */}
                    <circle cx="16" cy="36" r="8" fill="url(#tempGradientFooterWhite)"/>
                    {/* Mercury column */}
                    <rect x="13" y="12" width="6" height="18" fill="url(#tempGradientFooterWhite)" rx="3"/>
                    <circle cx="16" cy="36" r="5" fill="#f0f0f0"/>
                    {/* Temperature marks */}
                    <line x1="22" y1="12" x2="26" y2="12" stroke="url(#tempGradientFooterWhite)" strokeWidth="2" strokeLinecap="round"/>
                    <line x1="22" y1="17" x2="25" y2="17" stroke="url(#tempGradientFooterWhite)" strokeWidth="2" strokeLinecap="round"/>
                    <line x1="22" y1="22" x2="26" y2="22" stroke="url(#tempGradientFooterWhite)" strokeWidth="2" strokeLinecap="round"/>
                    <line x1="22" y1="27" x2="25" y2="27" stroke="url(#tempGradientFooterWhite)" strokeWidth="2" strokeLinecap="round"/>
                    {/* Temperature text inside bulb */}
                    <text x="16" y="39" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="9" fontWeight="700" fill="#000000">38</text>
                  </svg>
                </span>
                <span className="footer-logo-text">Jellybeam</span>
              </h3>
              <p className="footer-description">
                AI 기반 펫 웨어러블로<br />
                반려동물의 건강한 삶을 지원합니다
              </p>
              <div className="social-links">
                <a href="#" aria-label="Facebook">Facebook</a>
                <a href="#" aria-label="Instagram">Instagram</a>
                <a href="#" aria-label="Twitter">Twitter</a>
                <a href="#" aria-label="YouTube">YouTube</a>
              </div>
            </div>

            {/* 제품 */}
            <div className="footer-column">
              <h4>제품</h4>
              <ul>
                <li><a href="#features">기능</a></li>
                <li><a href="#features">사양</a></li>
                <li><a href="#features">가격</a></li>
                <li><a href="#gallery">갤러리</a></li>
              </ul>
            </div>

            {/* 지원 */}
            <div className="footer-column">
              <h4>지원</h4>
              <ul>
                <li><a href="#">FAQ</a></li>
                <li><a href="#">사용자 가이드</a></li>
                <li><a href="#">고객 지원</a></li>
                <li><a href="#">보증 정책</a></li>
              </ul>
            </div>

            {/* 회사 */}
            <div className="footer-column">
              <h4>회사</h4>
              <ul>
                <li><a href="#">회사 소개</a></li>
                <li><a href="#">채용</a></li>
                <li><a href="#">파트너십</a></li>
                <li><a href="#">연락처</a></li>
              </ul>
            </div>

            {/* 연락처 */}
            <div className="footer-column">
              <h4>연락처</h4>
              <ul className="contact-info">
                <li>📞 1588-1234</li>
                <li>📧 support@jellybeam.com</li>
                <li>📍 서울시 강남구 테헤란로 123</li>
                <li>⏰ 평일 09:00-18:00</li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <p>&copy; 2024 Jellybeam. All rights reserved.</p>
            <div className="footer-links">
              <a href="#">개인정보처리방침</a>
              <a href="#">이용약관</a>
              <a href="#">쿠키 정책</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Contact;
